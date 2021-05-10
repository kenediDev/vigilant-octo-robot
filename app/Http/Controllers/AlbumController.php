<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AlbumController extends Controller
{
    public function list()
    {
        return response()->json(Album::all(), 200);
    }

    public function create(Request $request)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'title' => 'max:225',
            'caption' => 'required',
            'photo' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $photo = null;
        if ($request->hasFile("photo")) {
            $photo = Storage::disk('upload_public')->put('image/album', $request->file('photo'));
        } else {
            $photo = $request->photo;
        }
        $create = Album::create([
            'title' => $request->title,
            'caption' => $request->caption,
            'photo' => $photo,
            'user_id' => auth()->user()->id
        ]);
        $create->save();
        return response()->json(['message' => 'Album telah dibuat', 'album' => $create], 201);
    }

    public function destroy(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Album::find($id);
        if (!$check) {
            return response()->json(['message' => 'Album tidak ditemukan'], 404);
        }
        $check->delete();
        return response()->json(['message' => 'Album telah dihapus'], 200);
    }

    public function put(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Album::find($id);
        if (!$check) {
            return response()->json(['message' => 'Album tidak ditemukan'], 404);
        }
        $check->title = $request->title;
        $check->caption = $request->caption;
        if ($request->hasFile("photo")) {
            $check->photo = Storage::disk("upload_public")->put("image/album", $request->file("photo"));
        }
        $check->save();
        return response()->json(['message' => 'Album telah diperbarui', 'album' => $check], 200);
    }
}

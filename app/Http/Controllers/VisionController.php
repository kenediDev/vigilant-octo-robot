<?php

namespace App\Http\Controllers;

use App\Models\Vision;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class VisionController extends Controller
{
    public function create(Request $request)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make(
            $request->all(),
            [
                'title' => 'required',
                'image' => 'required',
                'caption' => 'required'
            ]
        );
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $photo = null;
        if ($request->hasFile('image')) {
            $photo = Storage::disk("upload_public")->put("image/vision", $request->file('image'));
        } else {
            $photo = $request->image;
        }
        $create = Vision::create([
            'title' => $request->title,
            'caption' => $request->caption,
            'image' => $photo,
            'user_id' => auth()->user()->id
        ]);
        $create->save();
        return response()->json(['message' => 'Visi telah dibuat', 'vision' => $create], 201);
    }
    public function list(Request $request)
    {
        return response()->json(Vision::all(), 200);
    }
    public function destroy(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Vision::find($id);
        if (!$check) {
            return response()->json(['message' => 'Visi tidak ditemuakn'], 404);
        }
        $check->delete();
        return response()->json(['message' => 'Visi telah dihapus'], 200);
    }
    public function put(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'caption' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $check = Vision::find($id);
        $check->title = $request->title;
        $check->caption = $request->caption;
        if ($request->hasFile("image")) {
            $check->image = Storage::disk("upload_public")->put("image/vision", $request->file("image"));
        };
        $check->save();
        return response()->json(['message' => 'Visi telah diperbarui', 'vision' => $check], 200);
    }
}

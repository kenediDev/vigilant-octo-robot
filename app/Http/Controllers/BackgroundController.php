<?php

namespace App\Http\Controllers;

use App\Http\Resources\BackgroundResource;
use App\Models\Background;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BackgroundController extends Controller
{
    public function create(Request $request)
    {
        $check = auth()->user();
        if (!$check) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'background' => 'required',
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        };
        if (!$check->accounts) {
            return response()->json(false, 401);
        }
        $create = Background::create([
            'background' => Storage::disk("upload_public")->put("image/background", $request->file("background")),
            'accounts_id' => $check->accounts->id
        ]);
        $create->save();
        return response()->json(['message' => 'Background telah dibuat'], 201);
    }
    public function destroy(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Background::find($id);
        if (!$check) {
            return response()->json(['message' => 'Background tidak ditemukan'], 404);
        }
        $check->delete();
        return response()->json(['message' => 'Background telah dihapus'], 200);
    }
    public function put(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Background::find($id);
        if (!$check) {
            return response()->json(['message' => 'Background tidak ditemukan'], 404);
        }
        if ($request->hasFile("background")) {
            $check->background = Storage::disk("upload_public")->put('image/background', $request->file("background"));
        }
        $check->save();
        return response()->json(['message' => 'Background telah diperbarui', 'background' => $check], 200);
    }
    public function list(Request $request)
    {
        return response()->json(BackgroundResource::collection(Background::all()));
    }
}

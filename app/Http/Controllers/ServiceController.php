<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    public function create(Request $request)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $create = Service::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => Storage::disk("upload_public")->put("image/service", $request->file("image")),
            'user_id' => auth()->user()->id
        ]);
        $create->save();
        return response()->json(['message' => 'Service telah dibuat', 'service' => $create], 201);
    }

    public function list(Request $request)
    {
        return response()->json(Service::all(), 200);
    }

    public function put(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $check = Service::find($id);
        if ($request->hasFile("image")) {
            $check->image = Storage::disk("upload_public")->put("image/service", $request->file("image"));
        }
        $check->name = $request->name;
        $check->description = $request->description;
        $check->save();
        return response()->json(['message' => "Service telah diperbarui", 'service' => $check], 200);
    }

    public function destroy(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Service::find($id);
        if (!$check) {
            return response()->json(['message' => 'Service tidak ditemuakn'], 404);
        }
        $check->delete();
        return response()->json(['message' => 'Service telah dihapus'], 200);
    }
}

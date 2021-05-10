<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TestimonialsController extends Controller
{
    public function list(Request $request)
    {
        return response()->json(Testimonials::all(), 200);
    }
    public function create(Request $request)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'avatar' => 'required',
            'name' => 'required',
            'comment' => 'required',
            'from' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $photo = null;
        if ($request->hasFile("avatar")) {
            $photo = Storage::disk('upload_public')->put("image/testimonials", $request->file('avatar'));
        } else {
            $photo = $request->avatar;
        }
        $create = Testimonials::create([
            'avatar' => $photo,
            'name' => $request->name,
            'comment' => $request->comment,
            'from' => $request->from,
            'user_id' => auth()->user()->id
        ]);
        $create->save();
        return response()->json(['message' => 'Testimoni telah dibuat', 'testimoni' => $create], 201);
    }
    public function put(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $val = Validator::make($request->all(), [
            'name' => 'required',
            'comment' => 'required',
            'from' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        }
        $check = Testimonials::find($id);
        $check->name = $request->name;
        $check->comment = $request->comment;
        $check->from = $request->from;
        if ($request->hasFile('avatar')) {
            $check->avatar = Storage::disk("upload_public")->put("image/testimonials", $request->file("avatar"));
        }
        return response()->json(['message' => 'Testimoni telah diperbarui', 'testimoni' => $check], 200);
    }
    public function destroy(Request $request, $id)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        }
        $check = Testimonials::find($id);
        if (!$check) {
            return response()->json(['message' => 'Testimoni tidak ditemukan'], 404);
        }
        $check->delete();
        return response()->json(['message' => 'Testimoni telah dihapus'], 200);
    }
}

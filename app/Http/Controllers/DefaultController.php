<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function listImage(Request $request)
    {
        $array = array();
        $dir = base_path() . '/public/image/attribute';
        $scan = scandir($dir);;
        foreach($scan as $dir => $value) {
            if(!in_array($value, array('..', '.'))) {
                $url = 'http://' . $request->getHttpHost() . '/image/attribute/' . $value;
                array_push($array, $url);
            };
        }
        return response()->json($array);
    }

    public function listProduct(Request $request)
    {
        $array = array();
        $dir = base_path() . '/public/image/product';
        $scan = scandir($dir);;
        foreach($scan as $dir => $value) {
            if(!in_array($value, array('..', '.'))) {
                $url = 'http://' . $request->getHttpHost() . '/image/product/' . $value;
                array_push($array, $url);
            };
        }
        return response()->json($array);
    }

    public function listCar(Request $request)
    {
        $array = array();
        $dir = base_path() . '/public/image/service-car';
        $scan = scandir($dir);;
        foreach($scan as $dir => $value) {
            if(!in_array($value, array('..', '.'))) {
                $url = 'http://' . $request->getHttpHost() . '/image/service-car/' . $value;
                array_push($array, $url);
            };
        }
        return response()->json($array);
    }
}

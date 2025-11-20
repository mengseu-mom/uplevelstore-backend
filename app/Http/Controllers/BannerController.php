<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{

public function index()
    {
        $banners = Banner::paginate(10);

        // Convert image paths to full URLs
        $banners->getCollection()->transform(function ($banner) {
            foreach (range(1, 5) as $i) {
                $key = "image{$i}";
                if ($banner->$key) {
                    $banner->$key = asset('storage/' . $banner->$key);
                }
            }
            return $banner;
        });

        return response()->json($banners);
    }


    public function store(Request $request)
    {
        $data = [];
        foreach (range(1, 5) as $i) {
            $field = "image{$i}";
            if ($request->hasFile($field)) {
                $data[$field] = $request->file($field)->store('banners', 'public');
            }
        }
        $banner = Banner::create($data);
        return response()->json($banner, 201);
    }


   public function update(Request $request, $id)
    {
        $banner = Banner::findOrFail($id);
        foreach (range(1, 5) as $i) {
            $field = "image{$i}";
            if ($request->hasFile($field)) {
                if ($banner->$field) {
                    Storage::disk('public')->delete($banner->$field);
                }
                $banner->$field = $request->file($field)->store('banners', 'public');
            }
        }
        $banner->save();
        return response()->json($banner);
    }


}

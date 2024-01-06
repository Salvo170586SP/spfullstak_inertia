<?php

namespace App\Http\Controllers;

use App\Models\File;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        /* $search = $request->input('search');

        $files = File::where(function ($query) use ($search) {
            $query->where('title_file', 'like', "%$search%");
        })->orderBy('id', 'ASC')->get(); */

        $files = File::all();

        return Inertia::render('Files/Index', compact('files'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $file = new File();
        $file->title_file = $request->title_file;
        $file->user_id = Auth::id();

        if (array_key_exists('url_file', $request->all())) {
            $url_file = Storage::put('/file_imgs', $request['url_file']);
            $file->url_file = $url_file;
        }

        $file->save();

        return back()->with('message', 'Contenuto aggiunto');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(File $file)
    {
        return Inertia::render('Files/Edit', compact('file'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, File $file)
    {
        if ($request->hasfile('url_file')) {
            Storage::delete($file->url_file);

            $url_img = Storage::put('/file_imgs', $request->file('url_file'));
            $file->url_file = $url_img;
        }

        $file->update([
            'title_file' => $request->title_file
        ]);
        
        return to_route('files.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file)
    {
        if ($file->url_file) {
            Storage::delete($file->url_file);
        }

        $file->delete();


        return back()->with('message', 'Contenuto eliminato');
    }

     public function downloadFile(File $file)
    {
       /*  dd('qui'); */
        $filePath = public_path('storage/' . $file->url_file);

        $ext = pathinfo($filePath, PATHINFO_EXTENSION);
       /*  $fileName = $file->title_file . '.jpg'; */
        $fileName = $file->title_file . '.' . $ext;

        return response()->download($filePath, $fileName);
     }
}

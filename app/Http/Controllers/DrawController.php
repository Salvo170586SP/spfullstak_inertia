<?php

namespace App\Http\Controllers;

use App\Models\Draw;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DrawController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /* $search = $request->input('search'); */
        //ricerca solo del titolo
        /*  $projects = Project::where('title', 'like', "%$search%")->orderBy('position', 'ASC')->get(); */

        //ricerca del titolo e dell'url
        /*   $draws = Draw::where(function ($query) use ($search) {
            $query->where('title', 'like', "%$search%")
                ->orWhere('url', 'like', "%$search%");
        })->orderBy('id', 'ASC')->get(); */

        $draws = Draw::paginate(5);


        return Inertia::render('Draws/Index', ['draws' => $draws, 'draws' => $draws->items(), 'pagination' => $draws->toArray()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'draw_title' => 'required',
        ], [
            'draw_title.required' => 'Il titolo è obbligatorio',
        ]);

        try {
            $draw = new Draw();
            $draw->user_id = Auth::id();
            $draw->draw_title = $request->draw_title;
            $draw->draw_url = $request->draw_url;

            if (array_key_exists('draw_img', $request->all())) {
                $url_file = Storage::put('/draw_imgs', $request['draw_img']);
                $draw->draw_img = $url_file;
            }

            $draw->save();

            return back()->with('message', 'Contenuto aggiunto');
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Draw $draw)
    {
        if ($draw->user_id == Auth::id()) {
            return Inertia::render('Draws/Edit', compact('draw'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Draw $draw)
    {
        $request->validate([
            'draw_title' => 'required',
        ], [
            'draw_title.required' => 'Il titolo è obbligatorio',
        ]);

        try {

            if ($draw->user_id == Auth::id()) {

                if ($request->hasfile('draw_img')) {
                    Storage::delete($draw->draw_img);

                    $url_file = Storage::put('/draw_imgs', $request->file('draw_img'));
                    $draw->draw_img = $url_file;
                }
                $draw->update([
                    'draw_title' => $request->draw_title,
                    'draw_url' => $request->draw_url
                ]);

                return to_route('draws.index')->with('message', 'Contenuto aggiornato');
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Draw $draw)
    {
        try {

            if ($draw->user_id == Auth::id()) {

                if ($draw->draw_img) {
                    Storage::delete($draw->draw_img);
                }

                $draw->delete();

                return back()->with('message', 'Contenuto eliminato');
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }
}

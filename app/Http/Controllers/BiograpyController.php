<?php

namespace App\Http\Controllers;

use App\Models\Biograpy;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class BiograpyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $biograpies = Biograpy::all();
        return Inertia::render('Biograpies/Index', compact('biograpies'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            
            $biograpy = new Biograpy();
            $biograpy->description = $request->description;
            $biograpy->user_id =  Auth::id();
            $biograpy->save();

            return back()->with('message', 'Contenuto aggiunto');
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Biograpy $biograpy)
    {
        if ($biograpy->user_id == Auth::id()) {
            return Inertia::render('Biograpies/Edit', compact('biograpy'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Biograpy $biograpy)
    {
        try {
            if ($biograpy->user_id == Auth::id()) {

                if ($biograpy->user_id == Auth::id()) {
                    $biograpy->update([
                        'description' => $request->description,
                    ]);

                    return to_route('biograpies.index')->with('message', 'Contenuto aggiornato');
                    /* return Redirect::to('/biograpies')->with('message', 'Contenuto aggiornato'); */

                 } else {
                    return abort(404);
                }
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Biograpy $biograpy)
    {
        try {
            if ($biograpy->user_id == Auth::id()) {

                $biograpy->delete();
                return back()->with('message', 'Contenuto eliminato');
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }
}

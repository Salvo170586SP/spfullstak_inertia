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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $biograpy = new Biograpy();
        $biograpy->description = $request->description;
        $biograpy->user_id =  Auth::id();
        $biograpy->save();

        return back()->with('message', 'Contenuto aggiunto');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Biograpy $biograpy)
    {
        return Inertia::render('Biograpies/Edit', compact('biograpy'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Biograpy $biograpy)
    {
        try {

            if ($biograpy->user_id == Auth::id()) {
                $biograpy->update([
                    'description' => $request->description,
                ]);

                return to_route('biograpies.index');

             } else {
                return abort(404);
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
        $biograpy->delete();

        return back()->with('message', 'Contenuto eliminato');
    }
}

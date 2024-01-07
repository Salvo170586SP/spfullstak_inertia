<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::paginate(5);
        return Inertia::render('Projects/Index', ['projects' => $projects, 'projects' => $projects->items(), 'pagination' => $projects->toArray()]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'project_title' => 'required',
        ], [
            'project_title.required' => 'Il titolo è obbligatorio',
        ]);

        try {
            $project = new Project();
            $project->user_id = Auth::id();
            $project->project_title = $request->project_title;
            $project->project_url = $request->project_url;

            if (array_key_exists('project_img', $request->all())) {
                $url_file = Storage::put('/project_imgs', $request['project_img']);
                $project->project_img = $url_file;
            }

            $project->save();

            return back()->with('message', 'Contenuto aggiunto');
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        if ($project->user_id == Auth::id()) {
            return Inertia::render('Projects/Edit', compact('project'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'project_title' => 'required',
        ], [
            'project_title.required' => 'Il titolo è obbligatorio',
        ]);
        
        try {
            if ($project->user_id == Auth::id()) {

                if ($request->hasfile('project_img')) {
                    Storage::delete($project->project_img);

                    $url_file = Storage::put('/project_imgs', $request->file('project_img'));
                    $project->project_img = $url_file;
                }
                $project->update([
                    'project_title' => $request->project_title,
                    'project_url' => $request->project_url
                ]);

                return to_route('projects.index')->with('message', 'Contenuto aggiornato');
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        try {

            if ($project->user_id == Auth::id()) {

                if ($project->project_img) {
                    Storage::delete($project->project_img);
                }

                $project->delete();

                return back()->with('message', 'Contenuto eliminato');
            }
        } catch (Exception $e) {
            return back()->with('message', 'Qualcosa è andato storto');
        }
    }
}

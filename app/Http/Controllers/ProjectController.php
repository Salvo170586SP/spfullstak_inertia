<?php

namespace App\Http\Controllers;

use App\Models\Project;
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
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        if ($request->hasfile('project_img')) {
            Storage::delete($project->project_img);

            $url_file = Storage::put('/project_imgs', $request->file('project_img'));
            $project->project_img = $url_file;
        }
        $project->update([
            'project_title' => $request->project_title,
            'project_url' => $request->project_url
        ]);

        return to_route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        
        if ($project->project_img) {
            Storage::delete($project->project_img);
        }

        $project->delete();

        return back()->with('message', 'Contenuto eliminato');
    }
}

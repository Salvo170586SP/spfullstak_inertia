<?php

use App\Http\Controllers\BiograpyController;
use App\Http\Controllers\DrawController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Models\Biograpy;
use App\Models\Draw;
use App\Models\File;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* GUEST */
/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */


Route::get('/', function () {
    return Inertia::render('Guest/Home');
});
Route::get('/about-page', function () {
    $biograpy = Biograpy::all();
    return Inertia::render('Guest/About', compact('biograpy'));
});
Route::get('/projects-page', function () {
    $projects = Project::all();
    return Inertia::render('Guest/Projects', compact('projects'));
});
Route::get('/draws-page', function () {
    $draws = Draw::all();
    return Inertia::render('Guest/Draws', compact('draws'));
});

Route::get('/cv-page', function () {
    $files = File::all();
    return Inertia::render('Guest/Cv', compact('files'));
})->name('guest.cv');

/* Route::get('/cv-page/download/{file}',[ FileController::class, 'downloadFile']); */

Route::get(
    '/cv-page/download/{file}',
    function ($id) {
        /*  dd('qui'); */
        $file = File::findOrFail($id);
        $filePath = public_path('storage/' . $file->url_file);

        $ext = pathinfo($filePath, PATHINFO_EXTENSION);
        $fileName = $file->title_file . '.' . $ext;

        return response()->download($filePath, $fileName); 

    }
);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



/* ADMIN */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/biograpies', [BiograpyController::class, 'index'])->name('biograpies.index');
    Route::post('/biograpies/', [BiograpyController::class, 'store'])->name('biograpies.store');
    Route::get('/biograpies/edit/{biograpy}', [BiograpyController::class, 'edit'])->name('biograpies.edit');
    Route::put('/biograpies/{biograpy}', [BiograpyController::class, 'update'])->name('biograpies.update');
    Route::delete('/biograpies/{biograpy}', [BiograpyController::class, 'destroy'])->name('biograpies.destroy');

    Route::get('/draws', [DrawController::class, 'index'])->name('draws.index');
    Route::post('/draws', [DrawController::class, 'store'])->name('draws.store');
    Route::get('/draws/edit/{draw}', [DrawController::class, 'edit'])->name('draws.edit');
    Route::post('/draws/{draw}', [DrawController::class, 'update'])->name('draws.update');
    Route::delete('/draws/{draw}', [DrawController::class, 'destroy'])->name('draws.destroy');

    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/edit/{project}', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::post('/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');

    Route::get('/files', [FileController::class, 'index'])->name('files.index');
    Route::post('/files', [FileController::class, 'store'])->name('files.store');
    Route::get('/files/edit/{file}', [FileController::class, 'edit'])->name('files.edit');
    Route::post('/files/{file}', [FileController::class, 'update'])->name('files.update');
    Route::delete('/files/{file}', [FileController::class, 'destroy'])->name('files.destroy');
});




require __DIR__ . '/auth.php';

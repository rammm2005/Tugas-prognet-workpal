<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SkillLevelController extends Controller
{
    public function index()
    {
        $skills = Skill::all();
        $deletedskills = Skill::onlyTrashed()->get();
        return Inertia::render('Admin/Level/Index', [
            'skills' => $skills,
            'deletedskills' => $deletedskills
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'level' => 'required|string|in:beginner,intermediate,expert',
            'icon' => 'nullable|string',
        ]);

        $skill = Skill::create($request->all());

        Session::flash('success', 'Skill berhasil ditambahkan.');

        return redirect()->route('skill.index')->with('success', 'Skill berhasil ditambahkan.');
    }

    public function update(Request $request, Skill $skill)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'level' => 'required|string|in:beginner,intermediate,expert',
            'icon' => 'nullable|string',
        ]);

        $skill->update($request->all());

        Session::flash('success', 'Skill berhasil diupdate.');

        return redirect()->route('skill.index')->with('success', 'Skill berhasil diupdate.');
    }


    public function destroy(Skill $skill)
    {
        $skill->delete();

        Session::flash('success', 'Skill berhasil dihapus.');

        return redirect()->route('skill.index');
    }

    public function restore($id)
    {
        $category = Skill::withTrashed()->find($id);
        $category->restore();
        Session::flash('success', 'Skill berhasil di Pulihkan.');
        return redirect()->route('skill.index');
    }
}

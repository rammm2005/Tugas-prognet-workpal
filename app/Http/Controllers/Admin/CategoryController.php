<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Category/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'slug' => 'nullable|string|unique:categories,slug',
            'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'parent_id' => 'nullable|integer',
            'order' => 'nullable|integer',
            'status' => 'boolean',
        ]);

        $slug = Str::slug($request->name);

        $data = $request->all();
        $data['name'] = strip_tags($data['name']);
        $data['description'] = strip_tags($data['description']);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('images/categories', 'public');
            $data['image_url'] = $imagePath;
        }

        Category::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'slug' => $slug,
            'parent_id' => $data['parent_id'],
            'order' => $data['order'],
            'status' => $data['status'],
            'image_url' => $data['image_url'],
        ]);

        Session::flash('success', 'Category berhasil ditambahkan');
        return to_route('categories.index');
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'slug' => 'required|string|unique:categories,slug,' . $category->id,
            'parent_id' => 'nullable|integer',
            'order' => 'nullable|integer',
            'status' => 'boolean',
        ]);

        $category->update($request->all());
        return redirect()->route('categories.index')->with('success', 'Category updated successfully.');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        Session::flash('success', 'Kategori berhasil di hapus.');
        return redirect()->route('categories.index');
    }

    public function restore($id)
    {
        $category = Category::withTrashed()->find($id);
        $category->restore();
        Session::flash('success', 'Kategori berhasil di Pulihkan.');
        return redirect()->route('categories.index');
    }
}

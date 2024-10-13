<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FreelanceController extends Controller
{
    public function Index()
    {
        return Inertia::render('Freelance/Dashboard', [

        ]);
    }
}

<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserSharedResource;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'csrf' => csrf_token(),
            'auth.user' => fn() => $request->user()
                ? new UserSharedResource($request->user())
                : null,
            'flash' => [
                'message' => fn() => $request->session()->get('message'),
                'success' => fn() => $request->session()->get('success'),
                'notif' => fn() => $request->session()->get('notif'),
                'redirect' => fn() => $request->session()->get('redirect'),
                'errorFE' => fn() => $request->session()->get('errorFE')
            ],
        ];
    }   
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSharedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'created_at' => $this->created_at,
            'profile_picture' => $this->profile_picture,
            'last_login' => $this->last_login,
            'updated_at' => $this->updated_at,
            'status' => $this->status,
            'roles' => $this->getRoleNames(),
            'permissions' => $this->getPermissionNames(),
        ];
    }
}

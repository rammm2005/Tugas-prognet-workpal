<?php

namespace App\Http\Requests\Auth\User;

use Illuminate\Foundation\Http\FormRequest;

class VerifyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'verification_code' => 'required|string|size:6',
        ];
    }

    public function messages()
    {
        return [
            'verification_code.required' => 'The verification code field is required.',
            'verification_code.size' => 'The verification code must be exactly 6 characters.',
        ];
    }
}

<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VerificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $verificationCode;
    public $userEmail;
    public $userName;
    public $verificationUrlCode;

    /**
     * Create a new message instance.
     */
    public function __construct($verificationCode, $userEmail, $userName, $verificationUrlCode)
    {
        $this->verificationCode = $verificationCode;
        $this->userEmail = $userEmail;
        $this->userName = $userName;
        $this->verificationUrlCode = $verificationUrlCode;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Verification Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.verification',
            with: [
                'verificationCode' => $this->verificationCode,
                'userEmail' => $this->userEmail,
                'userName' => $this->userName,
                'verificationUrlCode' => $this->verificationUrlCode,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}

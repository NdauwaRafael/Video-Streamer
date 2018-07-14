<?php

namespace App\General\Authorize\Exceptions;

class AuthorizationFailedException extends \Exception
{
    /**
     * Construct the exception
     */
    public function __construct($message)
    {
        $message = "Access Denied: You cannot ". strtolower($message);

        parent::__construct($message);
    }
}
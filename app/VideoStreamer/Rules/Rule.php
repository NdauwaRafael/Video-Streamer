<?php

namespace App\VideoStreamer\Rules;

use Illuminate\Support\Facades\Validator;

/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 16/07/2018
 * Time: 16:22
 */
trait Rule
{
    public function verdict($request, $rules, $messages = [])
    {
        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return $validator;
        }
    }
}
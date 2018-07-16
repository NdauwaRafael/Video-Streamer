<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 16/07/2018
 * Time: 16:21
 */

namespace App\VideoStreamer\Video;


use App\VideoStreamer\Rules\Rule;

class VideoRules
{
    use Rule;

    public function validateVideo($request)
    {
        $rules = [
            'attachment' => 'required',
        ];

        return $this->verdict($request, $rules);

    }
}
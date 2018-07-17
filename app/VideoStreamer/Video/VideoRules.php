<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 17/07/2018
 * Time: 11:07
 */

namespace App\VideoStreamer\Video;


use App\VideoStreamer\Rules\Rule;

trait VideoRules
{
    use Rule;

    public function validateVideo($request)
    {
        $rules = [
            'attachment' =>'mimes:mpeg,ogg,mp4,webm,3gp,mov,flv,avi,wmv,ts|max:100040|required|size:5000'
        ];

        return $this->verdict($request, $rules);

    }

}
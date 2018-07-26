<?php

namespace App\VideoStreamer;
use Webpatser\Uuid\Uuid;

/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 16/07/2018
 * Time: 16:28
 */
class VideoManager
{
    public function uploadAttachments($file)
    {
        $uuidUrl = Uuid::generate()->string . '.' . $file->getClientOriginalExtension();

        $file->move(storage_path('/app/documents'), $uuidUrl);

        return $uuidUrl;
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 17/07/2018
 * Time: 07:24
 */

namespace App\VideoStreamer\Comments;


use App\VideoStreamer\Video\Video;

class CommentRepository
{
    public function getCommentById($id)
    {
        return Video::findOrFail($id);
    }
    public function save($request)
    {
        return Comment::create($request->all());
    }

    public function getVideoDetails($id)
    {
        $videoDetails = $this->getCommentById($id);

        return [
            'fetched' => true,
            'data' => [
                'id' => $videoDetails->id,
                'comment' => $videoDetails->name,
                'video' => $videoDetails->name,
                'category' => $videoDetails->category,
            ],
        ];
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 17/07/2018
 * Time: 07:24
 */

namespace App\VideoStreamer\Comments;


class CommentRepository
{
    public function getCommentById($id)
    {

    }
    public function save($request)
    {
        return Comment::create($request->all());
    }
}
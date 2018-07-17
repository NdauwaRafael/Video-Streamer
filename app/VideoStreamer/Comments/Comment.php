<?php

namespace App\VideoStreamer\Comments;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    protected $guarded = array('id','created_at','updated_at');

    protected $fillable =[
        'comment','video_id'
    ];
}

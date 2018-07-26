<?php

namespace App\VideoStreamer\Video;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $table = 'videos';

    protected $guarded = array('id','created_at','updated_at');

    protected $fillable =['name','category','attachment','description'];
}

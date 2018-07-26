<?php

namespace App\VideoStreamer\Permissions;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $table = 'permissions';

    protected $guarded = array('id','created_at','updated_at');

    protected $fillable =[
        'name',
    ];
}

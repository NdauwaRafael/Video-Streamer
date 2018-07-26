<?php

namespace App\VideoStreamer\Role;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $table = 'roles';

    protected $guarded = array('id','created_at','updated_at');

    protected $fillable =[
        'name',
    ];
}

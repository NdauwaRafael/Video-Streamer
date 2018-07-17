<?php

namespace App\VideoStreamer\RolePermissions;

use App\VideoStreamer\Role\Role;
use Illuminate\Database\Eloquent\Model;

class RolePermission extends Model
{
    protected $table = 'role_permissions';

    protected $guarded = array('id','created_at','updated_at');

    protected $fillable =[
        'role_id',
        'permission_id'
    ];

    public function roles()
    {
        return $this->hasMany(Role::class, 'role_id');
    }

    public function permissions()
    {
        return $this->hasMany(RolePermission::class, 'permission_id');
    }
}

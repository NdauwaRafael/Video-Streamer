<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 14/07/2018
 * Time: 17:06
 */

namespace App\VideoStreamer\Role;


use App\Http\Controllers\VueTablePagination;
use App\VideoStreamer\Permissions\Permission;

class RoleRepository
{
    use VueTablePagination;

    public function getRoleById($id)
    {
        return Role::findorFail($id);
    }

    public function getRoleDetails($id)
    {
        $role = $this->getRoleById($id);

        $response = [

            'fetched' => true,

            'data' => [
                'id' => $role->id,
                'name' => $role->name,
            ]
        ];

        return response()->json($response);
    }
    public function save($request)
    {
        return Role::create($request->all());
    }

    public function getAllRoles()
    {
        return $this->tablePaginate(new Role(), [], $this->universalTransformer());
    }

    public function getAllPermissions()
    {
        $permissions = Permission::all();

        return $permissions->map(function ($permission){
            return [
                'value' => $permission->id,
                'label' => $permission->name,
            ];
        });
    }

}
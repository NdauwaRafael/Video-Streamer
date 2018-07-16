<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 14/07/2018
 * Time: 17:06
 */

namespace App\VideoStreamer\Role;


use App\Http\Controllers\VueTablePagination;

class RoleRepository
{
    use VueTablePagination;

    public function save($request)
    {
        return Role::create($request->all());
    }

    public function getAllRoles()
    {
        return $this->tablePaginate(new Role(), [], $this->universalTransformer());
    }

}
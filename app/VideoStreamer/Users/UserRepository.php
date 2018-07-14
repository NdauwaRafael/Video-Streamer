<?php

namespace App\VideoStreamer\Users;

use App\Http\Controllers\VueTablePagination;
use App\User;

/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 14/07/2018
 * Time: 17:38
 */

class UserRepository
{
    use  VueTablePagination;

    public function getUsers()
    {
        return $this->tablePaginate(new  User(), [], function ($user){
            return  [
                'name' => $user->name,
                'email' => $user->email,
                'id' => $user->id
            ];
        });
    }

}
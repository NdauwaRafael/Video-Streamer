<?php

namespace App\Http\Controllers\VideoStreamer;

use App\VideoStreamer\Role\RoleRepository;
use App\VideoStreamer\RolePermissions\RolePermission;
use App\VideoStreamer\RolePermissions\RolePermissionRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RolePermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

//        $saveRolePermission =[
//           'permission_id' => $request->permissions ,
//           'role_id' => $request->role_id
//        ];
//
//        $permissions = $request->all();
//
//        foreach ( $permissions as $permission)
//        {
//            $permission = new RolePermission();
//
//            'permission_id' = $permission->permissions,
//        }
//
////        return $saveRolePermission;
//
//        $rolePermission = RolePermission::create($saveRolePermission);

        return response()->json([
            'success' => true,
            'message' => 'Created successfully.',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

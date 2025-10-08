import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import userApi from "../../services/userService";

export default function UserManagementPage(){
  const columns=[
    { key:"id", label:"ID" },
    { key:"username", label:"Username" },
    { key:"role", label:"Role" },
    { key:"status", label:"Status" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Users</h1>
        <Button onClick={()=>alert("Create User")}>New User</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}


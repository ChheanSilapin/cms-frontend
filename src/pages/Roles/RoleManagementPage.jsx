import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";

export default function RoleManagementPage(){
  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"description", label:"Description" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Roles</h1>
        <Button onClick={()=>alert("Create Role")}>New Role</Button>
      </div>
      <Table columns={columns}/>
    </div>
  );
}


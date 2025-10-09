import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";

export default function PermissionManagementPage(){

  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold">Permissions</h1>
      <Table columns={columns}/>
    </div>
  );
}


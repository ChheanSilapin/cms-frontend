import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import teamApi from "../../services/teamService";

export default function TeamManagementPage(){
  const [rows,setRows]=useState([]);

  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"active", label:"Active" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
      <Button variant="secondary" onClick={()=>alert(`Edit ${r.id}`)}>Edit</Button>
    </div>}
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Teams</h1>
        <Button onClick={()=>alert("Create Team")}>New Team</Button>
      </div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}


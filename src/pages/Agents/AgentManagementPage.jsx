import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import agentApi from "../../services/agentService";

export default function AgentManagementPage(){

  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"team_id", label:"Team" },
    { key:"status", label:"Status" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
      <Button variant="secondary" onClick={()=>alert(`View ${r.id}`)}>View</Button>
      <Button variant="danger">Delete</Button>
    </div>}
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Agents</h1>
        <Button onClick={()=>alert("Create Agent")}>New Agent</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}


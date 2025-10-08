import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import customerApi from "../../services/customerService";

export default function CustomerManagementPage(){

  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"phone", label:"Phone" },
    { key:"creditType", label:"Credit Type" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
      <Button variant="secondary" onClick={()=>alert(`Edit ${r.id}`)}>Edit</Button>
      <Button variant="danger" onClick={()=>customerApi.remove(r.id)}>Delete</Button>
    </div>}
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Customers</h1>
        <Button onClick={()=>alert("Create Customer")}>New Customer</Button>
      </div>
      <Table columns={columns}/>
    </div>
  );
}


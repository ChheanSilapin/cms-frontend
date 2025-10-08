import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import bankApi from "../../services/bankService";

export default function BankManagementPage(){
  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"currency", label:"Currency" },
    { key:"amount", label:"Amount" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
      <Button variant="secondary" onClick={()=>alert(`Edit ${r.id}`)}>Edit</Button>
    </div>}
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Banks</h1>
        <Button onClick={()=>alert("Create Bank")}>New Bank</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}


import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import promotionApi from "../../services/promotionService";

export default function PromotionManagementPage(){
  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"percentage", label:"%" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
      <Button variant="secondary" onClick={()=>alert(`Edit ${r.id}`)}>Edit</Button>
    </div>}
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Promotions</h1>
        <Button onClick={()=>alert("Create Promotion")}>New Promotion</Button>
      </div>
      <Table columns={columns}/>
    </div>
  );
}


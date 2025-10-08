import { useEffect, useState } from "react";
import Table from "../../components/organisms/Table";
import Button from "../../components/atoms/Button";
import FilterBar from "../../components/organisms/FilterBar";
import productApi from "../../services/productService";

export default function ProductManagementPage(){
 

  const columns=[
    { key:"id", label:"ID" },
    { key:"name", label:"Name" },
    { key:"team_id", label:"Team" },
    { key:"active", label:"Active" },
    { key:"actions", label:"", render:(r)=> <div className="flex gap-2 justify-end">
        <Button onClick={()=>alert(`Edit ${r.id}`)} variant="secondary">Edit</Button>
        <Button onClick={()=>productApi.remove(r.id).then(load)} variant="danger">Delete</Button>
      </div> }
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Products</h1>
        <Button onClick={()=>alert("Open product form modal")}>
          New Product
        </Button>
      </div>
      <FilterBar>
        <input className="input" placeholder="Search" />
        <Button>Filter</Button>
      </FilterBar>
      <Table columns={columns} />
      
    </div>
  );
}


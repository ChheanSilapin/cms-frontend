import { useState } from "react";
import FilterBar from "../../components/organisms/FilterBar";
import Table from "../../components/organisms/Table";

export default function ReportPage(){
  const [rows,setRows]=useState([]);
  const [filters,setFilters]=useState({ from:"", to:"", agent_id:"" });

  const columns=[
    { key:"id", label:"ID" },
    { key:"customer", label:"Customer" },
    { key:"agent", label:"Agent" },
    { key:"amount", label:"Amount" },
    { key:"datetime", label:"Date/Time" },
  ];

  const run=()=>{
    // TODO: call reporting service
    setRows([]);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-3">Reports</h1>
      <FilterBar onReset={()=>{setFilters({from:"",to:"",agent_id:""}); setRows([]);}}>
        <input className="input" type="date" value={filters.from} onChange={e=>setFilters({...filters, from:e.target.value})}/>
        <input className="input" type="date" value={filters.to} onChange={e=>setFilters({...filters, to:e.target.value})}/>
        <input className="input" placeholder="Agent ID" value={filters.agent_id} onChange={e=>setFilters({...filters, agent_id:e.target.value})}/>
        <button className="btn" onClick={run}>Run</button>
      </FilterBar>
      <Table columns={columns} rows={rows} />
    </div>
  );
}


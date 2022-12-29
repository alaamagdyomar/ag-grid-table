import './App.css';
import {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function App() {
  const gridRef = useRef();
  // Rows
  const [rowData, setRowData] = useState([
    {id:'1',name:'Alaa',last_name:'Magdy',status:'single',actions:'add action'},
    {id:'2',name:'Amgad',last_name:'Magd',status:'single',actions:'add action'},
    {id:'3',name:'Basem',last_name:'omar',status:'single',actions:'add action'},
    {id:'4',name:'Hakan',last_name:'ali',status:'single',actions:'add action'},
    {id:'5',name:'Dina',last_name:'Mohamed',status:'single',actions:'add action'},
    {id:'6',name:'Sarah',last_name:'saif',status:'single',actions:'add action'},
    {id:'7',name:'Tarek',last_name:'sayd',status:'single',actions:'add action'}
  ]);
// columns 
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'id',
      headerCheckboxSelection: true,
      checkboxSelection: (params) => {
        return params.data;
    }},    
    {field: 'name'},
    {field: 'last_name'},
    {field: 'status'},
    {field: 'actions'}
  ]);

  const defaultColDef = useMemo( ()=> (
    {
      sortable: true, 
      filter: true
    }
  ));

  return (
    <div>
      <div className="ag-theme-alpine" style={{width: 1200, height: 500}}>
        <AgGridReact 
            ref={gridRef}
            rowData={rowData} 
            columnDefs={columnDefs}
            animateRows={true} 
            rowSelection='multiple'
            defaultColDef={defaultColDef}/>
      </div>
    </div>
  );
}

export default App;
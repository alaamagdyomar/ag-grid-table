import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRef ,useCallback} from 'react';
import './comp.css'

const RenderIcons = (props)=>{
    function createDataItem(
        id,
        name,
        last_name,
        status,
      ) {
        return {
          id: id,
          name: name,
          last_name:last_name,
          status:status
        };
      }

    const onBtDuplicate = useCallback(() => {
        var api = props.gridRef.current.api;
        // get the first child of the
        var selectedRows = api.getSelectedRows();
        console.log('selected rows =',selectedRows)
        if (!selectedRows || selectedRows.length === 0) {
          console.log('No rows selected!');
          return;
        }
        var newItems = [];
        selectedRows.forEach(function (selectedRow) {
          var newItem = createDataItem(
            selectedRow.id,
            selectedRow.name,
            selectedRow.last_name,
            selectedRow.status,
          );
          newItems.push(newItem);
        });
      }, []);

      const removeSelected = useCallback(()=>{
        var selectedRows = props.gridRef.current.api.getSelectedRows();
        props.gridRef.current.api.applyTransaction({remove:selectedRows})
       },[])

    return (
        <>
        <div className="iconsDiv">
                <button onClick={removeSelected}>
                    <DeleteIcon/>
                </button>
                <button onClick={onBtDuplicate}>
                    <ContentCopyIcon/>
                </button>
        </div>
        </>
    )
}

export default RenderIcons;
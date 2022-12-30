import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRef ,useCallback} from 'react';
import './comp.css'

const RenderIcons = (props)=>{
    const onBtDuplicate = useCallback(() => {
        var selectedRows = props.gridRef.current.api.getSelectedRows();
        props.gridRef.current.api.applyTransaction({add:selectedRows})
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
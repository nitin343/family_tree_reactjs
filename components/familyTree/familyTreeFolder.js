import React, { useState } from 'react';
import styles from '../../styles/family.module.css';
import Popover from '@mui/material/Popover';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFileDetail, fetchFolderDetail } from '../../Redux/folderSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function FamilyTreeFolder({explorerdata , handleDeleteNode,  handleInsertNode}) {

  const dispatch = useDispatch()

  const [expand , setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addIcons , setAddIcon] = useState(false);
  const [showInput , setShowInput] = useState({
    isVisible: false,
    isFolder: null
  })

  const handleClick = (event , id , item) => {
    console.log(event);
    if (event.which === 3 || event.button === 2)
    { 
      event.preventDefault();
      console.log(id , item , 'id , item');
      // let insertNode =  handleDeleteNode(id , item , true)
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (e , id , item) => {
    e.preventDefault();
    console.log(explorerdata , 'expppp');
     let deletefunction = handleDeleteNode( explorerdata , id , item , true)
     console.log(deletefunction);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlerNewFolder = (e , isfolder) => {
      e.stopPropagation();
      setExpand(true)
      setShowInput({
        isVisible: true,
        isFolder: isfolder
      })
   }

   const handleExpand =() => {
    setExpand(!expand);
    if(explorerdata){
        dispatch(fetchFolderDetail(explorerdata))
        dispatch(fetchFileDetail({}))
    }
    console.log("dispatch(fetchFolderDetail(explorerdata)) " , explorerdata);
   }

   const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
       let insertNode =  handleInsertNode(explorerdata.id , e.target.value , showInput.isFolder)
        setShowInput({...showInput , isVisible: false})
        // console.log('familytree Folder insertnode',insertNode);
    }
   }
   


   return(
      <>
     {
        explorerdata.isFolder ? 
               (
                <div className={`${styles.folderContainer}`} style={{marginTop: 5 , marginLeft:10,cursor:"pointer"}}>
                <div className={`${styles.folder}`}
                 onClick={handleExpand}
                 onMouseEnter={() => { setAddIcon(true); }}
                 onMouseLeave={() => { setAddIcon(false) }}
                >
                <span className={`${styles.folderName}`} onContextMenu={(event) => handleClick(event ,explorerdata.id, explorerdata.name)} title={explorerdata.name}>📁 {explorerdata.name}</span>
                <span className={`${styles.addICons}`} style={{display: addIcons ? "block" : "none"}}>
                    <span  onClick={(e) => handlerNewFolder(e , true)}>📁</span>
                    <span  onClick={(e) => handlerNewFolder(e , false)}>📄</span>
                </span>
                <div>
                   <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        onClick={(event) => handleDelete(event, explorerdata.id, explorerdata.name)}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <div  className={`${styles.popoverStyle}`}> ❌ Delete </div>
                    </Popover>
                </div>
                </div>
                <div style={{display: expand ? "block" : "none", paddingLeft:25}}>

                  {
                    showInput.isVisible && (
                        <div className={`${styles.inputContainer}`}> 
                         <span>{showInput.isFolder ? "📁" : "📄"}</span>
                         <input 
                            type='text'
                            onKeyDown={onAddFolder}
                            onBlur={() => setShowInput({...showInput , isVisible: false})}
                            className={`${styles.inputContainer_input}`} 
                            autoFocus />
                        </div>
                    )
                  }

                  {explorerdata.items.map((exp) => {
                    return(
                      <FamilyTreeFolder handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode} explorerdata={exp} key={exp.id} />
                    )
                  })}
                </div>
             </div>
              ) :
              ( <div onClick={() => dispatch(fetchFileDetail(explorerdata))} >📄 {explorerdata.name}</div>)
           }  
      </>
   )
}

export default FamilyTreeFolder;
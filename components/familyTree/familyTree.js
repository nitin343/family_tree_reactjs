import React, { useState } from 'react';
import styles from '../../styles/family.module.css';
import explorer from '../folderData';
import FamilyTreeFolder from './familyTreeFolder';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function FamilyTree({explorerdata , handleInsertNode , handleDeleteNode}) {


    return (
        <div className={`${styles.familyTreeContainer}`}>
          <div className={`${styles.treeName}`}>Family Tree</div>
          <div className={`${styles.familyTreeFolder}`}>
            <FamilyTreeFolder handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode} explorerdata={explorerdata} />
          </div>
          {/* <div className={`${styles.familyTreebuttonBox}`}>
            buttons
          </div> */}
        </div>
    );
}

export default FamilyTree;
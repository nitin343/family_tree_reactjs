import Head from 'next/head'
import Image from 'next/image'
import FamilyDetails from '../components/familyDetails/familyDetails'
import FamilyTree from '../components/familyTree/familyTree'
import styles from '../styles/Home.module.css'
import familyStyles from '../styles/family.module.css'
import explorer from '../components/folderData';
import { useState } from 'react'
import useTraverseTree from '../components/hooks/user-traverse-tree'
import { useDispatch } from 'react-redux'


export default function Home() {
  const dispatch = useDispatch()

  const [explorerData , setExplorerData] = useState(explorer)
  const {insertNode , deleteNode } = useTraverseTree();

  const  handleInsertNode = (folderId , item , isFolder) =>{
    const finaltree = insertNode(explorerData , folderId , item , isFolder)
    console.log("final final final " , finaltree); 
    // dispatch(fetchFolderDetail(explorerdata))
  }

  const  handleDeleteNode = (data , folderId , item , isFolder) => {
    let  deletetree = deleteNode(data , folderId , item , isFolder)
    console.log("final final final " , folderId , item , isFolder); 
    // dispatch(fetchFolderDetail(explorerdata))
  }



  return (
    <div className={styles.container}>
      <div className={familyStyles.parentContainer}>
        <div className={familyStyles.familyTree}>
        <FamilyTree handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode}  explorerdata={explorerData} />
        </div>
        <div className={familyStyles.familyDetails} >
        <FamilyDetails />
        </div>
      </div>
    </div>
  )
}

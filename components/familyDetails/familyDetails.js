import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/family.module.css'


function FamilyDetails(props) {



    const fetchFileDetail = useSelector((state) => state.familyTree.fileDetail)
    const fetchFolderDetail = useSelector((state) => state.familyTree.folderDetail)
  
    console.log('fetchFolderDetail' , fetchFolderDetail);
    console.log('fetchFileDetail' , fetchFileDetail);
  

    return (
        <div className={`${styles.familyDetailsContainer}`}>
          {fetchFolderDetail.name ? (
            <div className={`${styles.mainContainer}`}> 
            <div className={`${styles.parentDetail}`}>Parent's Details</div>
            <div className={`${styles.mainCard}`}>

                <div className={`${styles.profileCard}`}>{fetchFolderDetail.name !== undefined ? fetchFolderDetail.name[0] : ""}</div>
                <div className={`${styles.profileDetail}`}>
                    <div style={{margin: 7}}>
                     <span className={`${styles.profileName}`}>Name : </span> <span className={`${styles.profileNameAns}`}> {fetchFolderDetail.name}</span>
                    </div>
                    <div style={{margin: 7}}>
                     <span className={`${styles.profileName}`}>Id : </span> <span className={`${styles.profileNameAns}`}> {fetchFolderDetail.id}</span>
                    </div>
                    <div style={{margin: 7}}>
                        <span className={`${styles.profileName}`}>Children's</span> 
                        {(fetchFolderDetail.items  && fetchFolderDetail.items.length > 0)? (
                        fetchFolderDetail.items.map((obj) => {
                         return   (
                               <li style={{marginLeft: 30}} className={`${styles.profileNameAns}`}>{obj.name}</li> 
                            )
                        })
                    ): (
                    <></>
                        )
                    }
                    </div>
                   
                </div>
            </div>
            </div>
          ) : <></>}

          {
            fetchFileDetail.id ? (
                <div className={`${styles.mainContainer}`}> 
                <div className={`${styles.parentDetail}`}>Child Details</div>
                <div className={`${styles.mainCard}`}>
                    <div className={`${styles.profileCard}`}>{fetchFileDetail.name !== undefined ? fetchFileDetail.name[0] : ""}</div>
                    <div className={`${styles.profileDetail}`}>
                    {(fetchFolderDetail.items  && fetchFolderDetail.items.length > 0)? (
                        fetchFolderDetail.items.map((obj) => {
                           if(obj.name == fetchFileDetail.name){
                            return (
                                <>
                                 <div style={{margin: 7}}>
                                    <span className={`${styles.profileName}`}>Name : </span> <span className={`${styles.profileNameAns}`}> {fetchFileDetail.name}</span>
                                    </div>
                                    <div style={{margin: 7}}>
                                    <span className={`${styles.profileName}`}>Id : </span> <span className={`${styles.profileNameAns}`}> {fetchFileDetail.id}</span>
                                 </div>
                                </>
                            )
                           }
                        })
                    ): (
                    <></>
                        )
                    }

                        {/* <div>  {fetchFileDetail.id} </div>
                        <div>  {fetchFileDetail.name} </div>
                         */}
                    </div>
                </div>
                </div>
            ) :
            <></>
          }
        </div>
    );
}

export default FamilyDetails;
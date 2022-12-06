// import  { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     familyTreeDetail: [] 
// }

// export const familyTreeSlice = createSlice({
//     name: "familtTree",
//     initialState,
//     reducers: {
//         fetchFamilyDetails : (state , action) => {
//              state.familyTreeDetail = [action.payload]
//         } 
//     }
// })

// export const {fetchFamilyDetails} = familyTreeSlice.actions

// export default familyTreeSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  folderDetail: [],
  fileDetail: []
}

export const familySlice = createSlice({
  name: 'familyTree',
  initialState,
  reducers: {
    fetchFolderDetail: (state , action) => {
      state.folderDetail = action.payload
    },
    fetchFileDetail: (state , action) => {
      state.fileDetail = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchFolderDetail, fetchFileDetail} = familySlice.actions

export default familySlice.reducer
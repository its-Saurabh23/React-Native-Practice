import {createSlice } from'@reduxjs/toolkit'

const foodSlice = createSlice({
name:'food',
initialState:{
  foodList:[],  
},

reducers:{

  addFodd:(state,action)=>{
  state.foodList.push(action.payload);
  
  }
}
})

export const{addFodd} = foodSlice.actions;
export default foodSlice.reducer;
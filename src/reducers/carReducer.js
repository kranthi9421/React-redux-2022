
const initialState = {
    numCars : 10,
   
}


const carReducer = (state=initialState,action)=>{
  switch(action.type){
      case 'BUY_CARS' : return {...state, numCars : state.numCars + action.payload, loading:false}
      case 'BUY_MIN' : return {...state, numCars : state.numCars - action.payload}
      case 'LOADING' : return {...state, loading: true}
      default : return state
    }
}

export default carReducer
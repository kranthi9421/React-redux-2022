import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'

import {buyCar,buyMin} from '../actions';


function App() {

const userCars = useSelector(state => state.cars)

const dispatch = useDispatch()


  return (
    <div>
       <h1>Cakes : {userCars.numCars}</h1>
       <button onClick={()=> dispatch(buyCar())}>Inc</button>
       <button onClick={()=> dispatch(buyMin())}>Dec</button>
       {userCars.loading && <BarLoader loading/> }
    </div>
  )
}

export default App
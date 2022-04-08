
export const buyMin = ()=>{
    return {
        type : 'BUY_MIN',
        payload : 1
    }
}


export const loading  = ()=>{
    return {
        type : 'LOADING'
    }
}



export const buyCarAsyn = ()=>{
       return {
           type : 'BUY_CARS',
           payload : 10 
       }
}

export const buyCar = ()=>{
    return (dispatch)=>{
        dispatch(loading())
       setTimeout(()=>{
           dispatch(buyCarAsyn())
       },5000)
    }
}
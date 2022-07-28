import types from "./actionTypes"

const initState  = {
    isLoading  : false
}


const reducer = (state = initState , action)=>{

    let {type, payload} = action;

    return state
}

export {reducer}
const defaultState = {
  list:[]
}
const reducer = (state=defaultState,action)=>{
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {

  
    default:
      break;
  }

  return newState
}
export default reducer

const mapList = (arr,id)=>
  arr.map(item=>{
    if(item.dimensionvalue === id){
      item.checked = !item.checked
    }
    if(item.childdimensions.length >0){
      item.childdimensions = mapList(item.childdimensions,id)
    }
    return item
  })
const reducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case "INIT":
      return {
        list: action.value
      };
      case 'OPEN':
        return {
          list:mapList(state.list,action.value)
        }
    default:
      break;
  }
  return state;
};
export default reducer;

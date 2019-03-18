
export function setIsLoading(bool_value) {
  if(bool_value){
  return {
      type:'SET_LOADING_TRUE',
    }

}
else {
  return{
    type:'SET_LOADING_FALSE',
  }
}
}

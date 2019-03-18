const initialState = {
  isLoading:false,
}

const isLoadingReducer = (state=initialState,action) => {
  switch(action.type){
    case 'SET_LOADING_TRUE':
        {
          return {...state, isLoading: true}
        }
        break;
    case 'SET_LOADING_FALSE':
    {
      return {...state, isLoading: false}
    }
    break;
    default:
      return state
  }
}

export default isLoadingReducer

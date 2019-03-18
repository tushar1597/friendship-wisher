const initialState = {
  themeNumber:null,
  userName:null,
  userDpURL:null,
}

const ThemeReducer = (state=initialState,action) => {
  switch(action.type){
    case 'SET_THEME':
        {
          return {...state, themeNumber: action.payload.themeNumber, userName:action.payload.userName, userDpURL:action.payload.userDpURL}
        }
        break;

    default:
      return state
  }
}

export default ThemeReducer

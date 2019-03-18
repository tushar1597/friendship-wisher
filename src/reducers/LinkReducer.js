const initialState = {
  generatedLink:null,
  shouldRedirectToLinkPage:false,
}

const LinkReducer = (state=initialState,action) => {
  switch(action.type){
    case 'SET_GENERATED_LINK':
        {
          return {...state,
            generatedLink:action.payload.generatedLink,
            shouldRedirectToLinkPage:action.payload.shouldRedirectToLinkPage
          }
        }
        break;

    default:
      return state
  }
}

export default LinkReducer

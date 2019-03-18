export const setGeneratedLink = (generatedLink,shouldRedirectToLinkPage) => ({
  type: 'SET_GENERATED_LINK',
  payload:{
    generatedLink,
    shouldRedirectToLinkPage,
  }
})

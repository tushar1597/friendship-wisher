export const setTheme = (themeNumber,userName,userDpURL) => ({
  type: 'SET_THEME',
  payload:{
    themeNumber,
    userName,
    userDpURL,
  }
})

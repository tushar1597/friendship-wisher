import { connect } from 'react-redux';
import  FinalDesign  from '../components/FinalDesign';
import { setIsLoading } from '../actions/isLoadingAction';
import { setTheme } from '../actions/themeAction';

const mapStateToProps = (state) => (
  {
    isLoading: state.isLoadingReducer.isLoading,
    themeNumber: state.ThemeReducer.themeNumber,
    userName: state.ThemeReducer.userName,
    userDpURL: state.ThemeReducer.userDpURL,

  })

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (bool_value) => dispatch(setIsLoading(bool_value)),
  setThemeNumber: (themeNumber,userName,userDpURL) => dispatch(setTheme(themeNumber,userName,userDpURL)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinalDesign);

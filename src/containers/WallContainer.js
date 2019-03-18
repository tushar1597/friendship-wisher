import { connect } from 'react-redux';
import  Wall  from '../components/Wall';
import { setGeneratedLink } from '../actions/linkAction';
import { setIsLoading } from '../actions/isLoadingAction';

const mapStateToProps = (state) => (
  {
    generatedLink: state.LinkReducer.generatedLink,
    shouldRedirectToLinkPage: state.LinkReducer.shouldRedirectToLinkPage,
    isLoading: state.isLoadingReducer.isLoading,
  })

const mapDispatchToProps = (dispatch) => ({
  setGeneratedLink: (generatedLink,shouldRedirectToLinkPage) => dispatch(setGeneratedLink(generatedLink,shouldRedirectToLinkPage)),
  setIsLoading: (bool_value) => dispatch(setIsLoading(bool_value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wall);

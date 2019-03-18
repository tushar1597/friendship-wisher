import { connect } from 'react-redux';
import  LinkPage  from '../components/LinkPage';
import { setGeneratedLink } from '../actions/linkAction';

const mapStateToProps = (state) => (
  {
    generatedLink: state.LinkReducer.generatedLink,

  })

const mapDispatchToProps = (dispatch) => ({
  setGeneratedLink: (generatedLink,shouldRedirectToLinkPage) => dispatch(setGeneratedLink(generatedLink,shouldRedirectToLinkPage)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkPage);

import { connect } from 'react-redux';
import { actions } from '../modules/Signup';
import { bindActionCreators } from 'redux';
import SignupView from '../components/SignupView';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    Signup: state.Signup,
    selectState: state.selectState
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupView);
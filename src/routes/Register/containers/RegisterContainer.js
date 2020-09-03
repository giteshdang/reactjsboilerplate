import { connect } from 'react-redux';
import { actions } from '../modules/Register';
import { bindActionCreators } from 'redux';
import RegisterView from '../components/RegisterView';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    auth: state.auth,
    selectState: state.selectState
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
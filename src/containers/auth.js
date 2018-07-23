import { connect } from 'react-redux'
import * as authAction from '../redux/actions/auth'
import Login from '../components/login'

function mapStateToProps(state) {
  const { user, isFetched, error } = state.page
  return {
    user,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
    loginUser: authAction.loginUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

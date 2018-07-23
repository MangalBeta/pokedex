import { connect } from 'react-redux'
import Layout1 from '../common/Layout/Layout1'
import * as authAction from '../redux/actions/auth'

function mapStateToProps(state) {
  const { user, isFetched, error } = state.auth
  return {
    user,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  logOutUser: authAction.logOutUser,

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout1)

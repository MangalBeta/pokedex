import { connect } from 'react-redux'
import * as authAction from '../redux/actions/auth'
import Profile from '../components/profile'

function mapStateToProps(state) {
  const { user, isFetched, error } = state.auth
  return {
    user,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

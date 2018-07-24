import { connect } from 'react-redux'
// import * as authAction from '../redux/actions/auth'
import * as pageActions from '../redux/actions/page'

import Profile from '../components/profile'

function mapStateToProps(state) {
  const { user, isFetched } = state.auth
  const { featuredList,success,error } = state.page

  return {
    user,
    isFetched,
    error,
    success,
    featuredList
  }
}

const mapDispatchToProps = {
  removeToFevorite:pageActions.removeToFevorite,
  clearMessage : pageActions.clearMessage

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

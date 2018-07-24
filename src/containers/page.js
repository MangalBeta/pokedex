import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'

function mapStateToProps(state) {
  const { displayedPokemons, isFetched, success,error,featuredList } = state.page

  return {
    displayedPokemons,
    isFetched,
    error,
    success,
    featuredList
  }
}

const mapDispatchToProps = {
  getPokemons: pageActions.getPokemons,
  filterPokemons: pageActions.filterPokemons,
  addToFevorite:pageActions.addToFevorite,
  removeToFevorite:pageActions.removeToFevorite,
  clearMessage : pageActions.clearMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

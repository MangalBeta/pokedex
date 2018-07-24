import React, { Component } from 'react'
import { Col, Row, Clearfix } from 'react-bootstrap/lib/';

import Pokemon from '../components/pokemon'
import Search from '../components/search'
import SelectItemsPerPageButtons from '../common/SelectPerPageButton'
import PaginationContainer from '../common/PaginationContainer'
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0,
      selectedPokemon: null,
      next: null,
      previous: null
    };
  }
  componentDidMount() {
    let { limit, offset } = this.state
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    this.getPokemons(url)
  }

  getPokemons = (url) => {
    this.props.getPokemons(url).then((res) => {
      let pages = Math.round(res.count / this.state.limit);
      this.setState({
        pokemon: res.results,
        totalPages: pages,
        count: res.count,
        next: res.next,
        previous: res.previous
      });

    }).catch((err) => {
      console.log("getting error issue")
    })
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  handleLimitChange = (event) => {
    this.setState({
      limit: +event.target.innerHTML || this.state.count,
      activePage: 1,
    }, () => {
      let { limit } = this.state
      let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${0}`
      this.getPokemons(url)
    })
  }
  handlePaginationSelect = (selectedPage) => {
    let url;
    if (selectedPage.target.textContent === "Previous")
      url = this.state.previous
    else
      url = this.state.next
    // let offset = this.state.limit * selectedPage;
    this.getPokemons(url)
    this.setState({
      activePage: selectedPage
    });
  }
renderPokemonList(){
  let { displayedPokemons ,featuredList,clearMessage,removeToFevorite,addToFevorite} = this.props
  
  let featuredId = featuredList.map(pok => pok.id)
  return (
     displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon
             pokemon={pokemon} 
             featuredId={featuredId}
             clearMessage={clearMessage}
             removeToFevorite={removeToFevorite}
             addToFevorite={addToFevorite}
          />
        </li>
      )
    })
  )
}

  render() {
    let { displayedPokemons, isFetched,success } = this.props

    return (
      <div className="page">

        <div className="page__search">
          <Row>
            <Col sm={1} />
            <Col sm={4}>
              <Search onChange={this.handleSearch.bind(this)} />

            </Col>
            <Col sm={3} >
             {(success) && <div className="page__error">{success}</div> }
             
        </Col>
            <Col sm={4}>
              <SelectItemsPerPageButtons
                options={[10, 50, 100, 200]}
                selectedValue={this.state.limit}
                allValue={this.state.count}
                onOptionSelected={this.handleLimitChange} />
            </Col>
            <Clearfix />
          </Row>
        </div>

        {isFetched ? (
          <p className='loading'>Loading...</p>
        ) : (
            <div>
              <ul className="pokemons">{this.renderPokemonList()}</ul>
              {displayedPokemons.length ?
                <div className="pagination">
                  <PaginationContainer
                    btnSize={'small'}
                    next={this.state.next}
                    previos={this.state.previous}
                    totalPages={this.state.totalPages}
                    activePage={this.state.activePage}
                    onSelect={this.handlePaginationSelect} />
                </div> : null}

            </div>
          )}
        {!isFetched && !displayedPokemons.length ?
          <p className='loading'>No Record Found </p> : null}
      </div>
    )
  }
}

export default Page

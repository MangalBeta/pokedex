import React, { PureComponent } from 'react'

class Profile extends PureComponent {
  

  removeToFevorite(movie) {
    this.props.removeToFevorite(movie)
    setTimeout(() => {
      this.props.clearMessage()
     },1000)
  }
  renderFevoritePokemonList() {
    if(this.props.featuredList.length > 0 ){
      return (
        this.props.featuredList.map((pokemon) => {
          return (
            <li className="pokemons__item" key={pokemon.id}>
              <div className="pokemon">
                <button
                  type="button"
                  className="pokemon__sprite"
                  style={{
                      backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemon.id
                      }.png`})`
                  }}
                />
                <p className="pokemon__name">{pokemon.name}</p>
                <button
                  onClick={this.removeToFevorite.bind(this, pokemon.id)}
                  type="button"
                  className="addto">Remove  Fevorite</button>
              </div>
            </li>
          )
        })
      )
    }else{
      return ( <div className="text-center">No fevorite pokemon found</div>)
    }
    
  }
  render() {
let {success} = this.props
    return (
      <div className="container">
        <div className="row" style={{ paddingTop: '20px', }} >
          <div className="col-md-12" style={{ 'background-color': 'white' }}>
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                  <div className="col-md-12 lead text-center">
                  {(success) && <div className="page__error text-center">{success}</div> }

                    <img className="img-circle avatar avatar-original"
                      style={{
                        "-webkit-user-select": "none",
                        "display": "block", "margin": "auto"
                      }}
                      alt="demo"
                      src="http://robohash.org/sitsequiquia.png?size=100x100" />
                    <h4 style={{ paddingTop: '10px' }}> {this.props.user ? this.props.user.email: 'nouser@gmail.com'}</h4>
                    <hr />
                  </div>
                </div>
                <div className="row" >
                
                  {/* <div className="row">
                    <div className="col-md-8">
                      <span className="text-muted">
                        {this.props.user ? this.props.user.email : ''}
                      </span>
                    </div>

                  </div> */}
                </div>
                <div className="row" style={{ margin: 0 }}>
                  <div className="col-md-12">
                    <h4 className="text-left">
                      Fevorite Pokemon
                       </h4>
                    <br />
                    <div>
                      <ul className="pokemons">{this.renderFevoritePokemonList()}</ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

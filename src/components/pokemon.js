import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  addToFevorite(pokemon) {
    this.props.addToFevorite(pokemon)
    setTimeout(() => {
      this.props.clearMessage()
     },1000)
  }
  removeToFevorite(pokemon) {
    this.props.removeToFevorite(pokemon)
    setTimeout(() => {
      this.props.clearMessage()
     },1000)

  }
  render() {
    const { pokemon, featuredId } = this.props
    return (
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
        {featuredId.indexOf(pokemon.id) > -1 ?
          <button
            type="button"
            className="addto"
            onClick={this.removeToFevorite.bind(this, pokemon.id)}
            style={{ backgroundColor: 'red' }}
          >Remove  Fevorite</button> :
          <button
            type="button"
            className="addto"
            onClick={() => this.addToFevorite(pokemon)}
          >Add To Fevorite</button>
        }

      </div>
    )
  }
}

export default Pokemon

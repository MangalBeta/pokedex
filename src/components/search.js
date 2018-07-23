import React from 'react'

const Search = ({ onChange }) => (
  <input type="text" className="form-control"onChange={onChange} placeholder="Enter pokemon name..." />
)

export default Search

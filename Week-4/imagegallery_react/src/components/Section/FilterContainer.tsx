import React from 'react'
import './FilterContainer.css'
const FilterContainer = () => {
  return (
        <section id="filter-card">

            <select name="" id="filter-switch">
                <option value="" selected disabled>Select Filter</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </section>
    )
}

export default FilterContainer
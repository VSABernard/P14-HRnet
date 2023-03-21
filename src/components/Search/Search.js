import React from 'react'
import { useAsyncDebounce } from 'react-table'

import '../Search/Search.css'

/**
 * Component React that define a default UI for filtering
 * @param {globalFilter} 
 * @param {setGlobalFilter}
 * @returns A default UI for filtering the current employees datas
 */

function Search ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <div className='searchSection'>
        <form className='inputClass'>
            <label className='searchLabel'>Search:</label>
            <input className='searchInput' aria-label='Search' value={value || ""}
                onChange={e => { setValue(e.target.value);
                                onChange(e.target.value);}} 
                placeholder={``}
            style={{ fontSize: '1.1rem'}}
            />
        </form>
      </div>
    )
  }

  export default Search
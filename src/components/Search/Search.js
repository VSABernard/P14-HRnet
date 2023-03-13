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
        <div className='searchText'>Search:{' '}</div>
        <div className='inputClass'>
            <input className='searchInput' value={value || ""}
                onChange={e => { setValue(e.target.value);
                                onChange(e.target.value);}} 
                placeholder={``}
            style={{ fontSize: '1.1rem'}}
            />
        </div>
      </div>
    )
  }

  export default Search
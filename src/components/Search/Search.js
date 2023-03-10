import React from 'react'
import { useAsyncDebounce } from 'react-table'

import '../Search/Search.css'

/**
 * Component React that define a default UI for filtering
 */

function Search ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <div className='searchSection'>
        <div className='searchText'>Search:{' '}</div>
        <div className='input'>
            <input className='searchInput' value={value || ""}
                onChange={e => { setValue(e.target.value);
                                onChange(e.target.value);}} 
                placeholder={``}
            style={{ fontSize: '1.1rem', border: '0'}}
            />
        </div>
      </div>
    )
  }

  export default Search
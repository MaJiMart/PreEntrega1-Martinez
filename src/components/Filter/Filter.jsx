import { useState } from "react"

export const Filter = ({children}) => {
    const [filterState, setFilterState] = useState('')

    const filterChange = (evt) =>{
        setFilterState(evt.target.value)
    }
    return children( {filterState, filterChange} )
}

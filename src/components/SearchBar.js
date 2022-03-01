import { InputBase } from '@mui/material';
import { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [query, setQuery] = useState("");
    console.log(query)
    return (
        <div>
            <InputBase 
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search ' }}
                onChange={event => setQuery(event.target.value)}
            />
        </div>
    );
}
export default SearchBar;
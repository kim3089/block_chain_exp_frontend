import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <div>
            <p>Blockchain Explorer</p>
            <InputBase 
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search ' }}
            />
        </div>
    );
}
export default SearchBar;
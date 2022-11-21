import { Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return ( 
    <Paper
    sx={{
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      border: '1px solid #fff',
      mr: {sm: 5} ,
      width: {xs: 400},
      pl: 1,
    }}
    >
      <input
      type='text'
      style={{
         border: 'none',
         width:'100%'
      }}
      />
      <SearchIcon sx={{
        color:'blue',
        ml: 2,
        mr: 2,
      }} />
    </Paper>
   );
}
 
export default SearchBar;
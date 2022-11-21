import { Stack } from '@mui/system'
import SearchBar from './SearchBar'
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems='center' p={2} sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        height: {md: 60, sm: 30, },
        zIndex:999,

      }}>
        <HomeIcon sx={{
          color: 'blue',
        }}/>
        <SearchBar />
      </Stack>
    </>
  )
}

export default Header

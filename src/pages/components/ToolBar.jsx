import { Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToolBar = () => {
  return ( 
    <Stack
    sx={{
      position: {xs: 'fixed', md: 'fixed',  },
      flexDirection: {xs: 'row', md:'column',},
      alignItems: 'center',
      justifyContent: 'space-between',
      bottom: 0,
      right: 0,
      mt: 600,
      zIndex:999,
      height:{xs: '80px', md: 'calc( 100% - 60px)',},
      width: {xs: '100vw', md: 80,},
      backgroundColor: '#000',
    }}
    >
      <HomeIcon sx={{
        height:{xs: '100%', md: 80,},
        width: {xs: 'auto', md: '100%', },
        padding: '10px',
        color: 'white',
        
      }} />
      <AccountCircleIcon sx={{
        height:{xs: '100%', md: 80,},
        width: {xs: 'auto', md: '100%', },
        padding: '10px',
        color: 'white',
      }} />
      <SettingsIcon sx={{
        height:{xs: '100%', md: 80,},
        width: {xs: 'auto', md: '100%', },
        padding: '10px',
        color: 'white',
      }} />
      <DarkModeIcon sx={{
        height:{xs: '100%', md: 80,},
        width: {xs: 'auto', md: '100%', },
        padding: '10px',
        color: 'white',
      }} />
    </Stack>
   );
}
 
export default ToolBar;
import {
 
  Stack,

} from '@mui/material'
import Videos from './videos'


const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:{sm:'normal', md:'normal', sx:'normal'},
        backgroundColor: '#020202',
        width: '100vw',
        height: 'auto',
        ml: {xs: 0, md: '162px',},
        gap: 2,
        flexWrap:'wrap',
        position: 'relative',
        zIndex:1,
      }}
    >
        <Videos />
    </Stack>
  )
}

export default Feed

import Header from '../components/Header'
import Feed from '../components/feed/index'
import Sidebar from '../components/sidebar/index'
import { Stack } from '@mui/system'
import ToolBar from '../components/ToolBar'


const Home = () => {
  return (
    <>
      <Header />
      <Stack sx={{
        flexDirection: {sm: 'column', md: 'row', },
        backgroundColor: '#000',
      }}>
        <Sidebar />
        <Feed />
      <ToolBar />
      </Stack>
    </>
  )
}

export default Home

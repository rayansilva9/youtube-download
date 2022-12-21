import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Chip } from '@mui/material'

export default function ButtonOpenSideBar({ handleFile }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <Box
      sx={{
        minHeight: '100%',
        width: 250,
        p: '10px 0',
        background: 'black'
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button
        component="label"
        variant="outlined"
        sx={{
          width: '95%',
          borderTopRightRadius: '13px',
          borderBottomRightRadius: '13px',
          borderBottomLeftRadius: '0px',
          borderTopLeftRadius: '0px'
        }}
      >
        Carregar Arquivo
        <input hidden onChange={handleFile} accept="audio/*" type="file" />
      </Button>
    </Box>
  )

  return (
    <Box>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ height: '100%', fontSize: '30px' }}
            onClick={toggleDrawer(anchor, true)}
          >
            <GiHamburgerMenu />
          </Button>{' '}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  )
}

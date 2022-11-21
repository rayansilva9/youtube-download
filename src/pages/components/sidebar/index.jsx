import { Stack } from '@mui/system'
import { category } from '../../../utils/category'

import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
  import fetch   from '../../../utils/fecthFROMapi'

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('home')

  useEffect(() => {
    
  }, [])

  return (
    <Stack
      sx={{
        position: {md: 'fixed', xs:'unset'},
        zIndex: {xs: 0, md: 999,},
        overflowX: 'scroll',
        height: { md: '100vh' },
        width: { xs: '100vw', md: '126px' },
        flexDirection: { md: 'column', xs: 'row' },
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#101010',
        pt: { md: 2, sm: 0, sx: 0 },
        pb: { md: 2, sm: 0, sx: 0 },
        pr: 2,
        pl: 2
      }}
    >
      {category.map(category => (
        <button className='btn-category'
          style={{
            backgroundColor:
              category.name === selectedCategory ? 'blue' : '#101010',
            color: '#fff',
            border: 'none',
            height: '40px',
            width:'auto',
            lineHeight: '0',
            padding: '5px 20px ', 
            borderRadius: 10,
            transition: '0.2s ease-in-out',
          }}
          key={category.name}
          onClick={() => {setSelectedCategory(category.name)
          }}
        >
          <img></img>
          <p>{category.name}</p>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar

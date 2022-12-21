import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { TfiDownload } from 'react-icons/tfi'
import { FaPlay } from 'react-icons/fa'
import { useRef } from 'react'

const MusicCard = ({
  thumbnail,
  name,
  duration,
  downloadAction,
  playAction,
  isPlaying
}) => {
  const tumbRef = useRef(null)
  return (
    <>
      <Box
        sx={{
          m: '10px 0'
        }}
      >
        <Paper
          sx={{
            bgcolor: isPlaying === true ? '#616161' : '',
            position: 'relative',
            display: 'flex'
          }}
          elevation={0}
        >
          <Box
            sx={{
              pl: '2px',
              pt: '2px',
              pb: '2px',
              height: '122px',
              width: ' 122px'
            }}
          >
            <img
              onError={() => {
                tumbRef.current.src =
                  'https://static.thenounproject.com/png/504708-200.png'
              }}
              ref={tumbRef}
              height="100%"
              width="100%"
              src={thumbnail}
              alt="thumbnail art"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              ml: '10px'
            }}
          >
            <Typography
              sx={{ color: isPlaying === true ? '#ffffff' : '' }}
              fontWeight="500"
            >
              {name}{' '}
            </Typography>
            <Typography
              sx={{ color: isPlaying === true ? '#ffffff83' : '' }}
              fontWeight="400"
            >
              Duração: {duration}{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              bottom: '5px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <Button
              aria-label="play"
              onClick={playAction}
              sx={{
                height: '30px',
                width: ' 50px',
                minWidth: '0',
                p: 0,
                fontSize: '20px',
                bgcolor: 'transparent',
                color: 'black',
                border: 'none',
                display: isPlaying === true ? 'none' : 'inline',
                transition: 'all 0.3s linear'
              }}
            >
              {' '}
            </Button>
            <Typography fontWeight="300" sx={{ transition: 'all 0.3s linear' }}>
              {isPlaying === true ? 'Tocando agora' : <FaPlay />}
            </Typography>
            <Button
              aria-label="download"
              onClick={downloadAction}
              sx={{
                height: '30px',
                width: ' 50px',
                minWidth: '0',
                p: 0,
                fontSize: '20px',
                bgcolor: 'transparent',
                color: 'black',
                border: 'none',
                '&::hover': { border: 'none ' }
              }}
            >
              <TfiDownload />
            </Button>
          </Box>
        </Paper>
        <Box sx={{ width: '100%', p: '0 10px' }}></Box>
      </Box>
    </>
  )
}

export default MusicCard

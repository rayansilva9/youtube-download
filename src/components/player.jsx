import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import { HiPlay } from 'react-icons/hi'
import { HiPause } from 'react-icons/hi'
import { AiOutlineForward } from 'react-icons/ai'
import { AiFillFastBackward } from 'react-icons/ai'
import { secondsToTime } from './services'

const Player = ({ name, audioUrl, audioRef, duration }) => {
  const [playing, setplaying] = useState(false)
  const [width, setWidth] = useState('0%')
  const [currenTime, setCurrenTime] = useState('00:00:00')
  const toBeFillRef = useRef()
  const FillRef = useRef()

  const styleBtn = {
    height: '40px',
    width: '40px',
    fontSize: '35px',
    borderRadius: '50%',
    background: 'transparent',
    color: 'white',
    boxShadow: ' -21px 21px 42px #a8a8a8, 21px -21px 42px #ffffff,'
  }

  function timeUpdate() {
    setCurrenTime(secondsToTime(Math.floor(audioRef.current.currentTime)))
  }

  audioUrl && setInterval(timeUpdate, 1000)

  const forward = () => {
    audioRef.current.currentTime = audioRef && audioRef.current.currentTime + 5
  }
  const backward = () => {
    audioRef.current.currentTime = audioRef && audioRef.current.currentTime - 5
  }

  return (
    <>
      <audio
        onTimeUpdate={() => {
          console.log(duration)
          setWidth(
            Math.floor((audioRef.current.currentTime * 100) / audioRef.current.duration) +
              '%'
          )
        }}
        onPlaying={() => {
          setplaying(true)
          timeUpdate()
        }}
        onPause={() => {
          setplaying(false)
        }}
        ref={audioRef}
        autoPlay
        preload="auto"
        src={audioUrl}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          m: '0 auto',
          width: '100vw',
          height: '110px',
          bgcolor: '#0000005f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          background: ' rgba( 0, 0, 0, 0.8 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          p: '5px 3px',
          backdropFilter: 'blur(3px)'
        }}
      >
        {name ? (
          <p style={{ color: 'white' }}>{name}</p>
        ) : (
          <p style={{ color: 'white' }}>Nome da Musica</p>
        )}
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {/* <button
            onClick={() => {
              setRepeateOn(!repeateOn)
            }}
            style={{
              height: '40px',
              width: '40px',
              fontSize: '35px',
              borderRadius: '50%',
              background: 'transparent',
              color: repeateOn ? 'blue' : ' white',
              boxShadow: ' -21px 21px 42px #a8a8a8, 21px -21px 42px #ffffff,'
            }}
            aria-label="repeat mode"
          >
            {<RiRepeat2Fill />}
          </button> */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => {
                backward()
              }}
              aria-label="Backward"
              style={styleBtn}
            >
              {<AiFillFastBackward />}
            </button>
            {playing != true ? (
              <button
                aria-label="play"
                style={styleBtn}
                onClick={() => {
                  audioRef.current.play()
                }}
              >
                {<HiPlay />}
              </button>
            ) : (
              <button
                aria-label="pause"
                style={styleBtn}
                onClick={() => {
                  audioRef.current.pause()
                }}
              >
                {<HiPause />}
              </button>
            )}

            <button
              onClick={() => {
                forward()
              }}
              aria-label="Forward"
              style={styleBtn}
            >
              {<AiOutlineForward />}
            </button>
          </div>
        </Box>
        <div>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'white',
              width: '100%',
              p: '0 5px',
              mb: '5px'
            }}
          >
            <p>{audioUrl ? currenTime : '00:00:00'}</p>

            <p>
              {name
                ? duration
                  ? secondsToTime(duration)
                  : secondsToTime(Math.floor(audioRef.current.duration))
                : '00:00:00'}
            </p>
          </Box>
          <div
            onClick={e => {
              audioRef.current.currentTime =
                (e.nativeEvent.offsetX / toBeFillRef.current.offsetWidth) * duration
            }}
            ref={toBeFillRef}
            className="to_be_Fill"
          >
            <div ref={FillRef} className="fill" style={{ width: width }}></div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Player

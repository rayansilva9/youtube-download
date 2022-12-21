import { Box, Paper, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import MusicCard from './components/musicCard'
import { data } from './utils/array'
import { BsSearch } from 'react-icons/bs'
import Player from './components/player'
import { secondsToTime } from './components/services'
import { initArray } from './utils/initArray'
// import SideBar from './components/sideBar'
import ButtonOpenSideBar from './components/btnSidebar'

function App() {
  const musicRef = useRef(null)

  const inputRef = useRef(null)
  const [qValue, setqValue] = useState('')
  const [urlPlay, setUrlPlay] = useState('')
  const [result, setResult] = useState(initArray)
  const [nameSong, setNameSong] = useState('')
  const [idSong, setIdSong] = useState('')
  const [durationSong, setDurationSong] = useState('')
  const [sidebar, setSidebar] = useState(false)

  const handleFile = e => {
    const reader = new FileReader()

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = readerEvent => {
      setUrlPlay(readerEvent.target.result)
    }
    reader.onloadend = () => {
      setDurationSong('')
      setNameSong('')
      setIdSong('')
    }
  }

  // console.log(musicRef.current.duration)
  useEffect(() => {
    document.title = nameSong
  }, [nameSong])

  const {
    result: { songs }
  } = result

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5027057ad2msh83cdf171b3c93ddp155066jsn439801785460',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  }

  async function query(e) {
    e.preventDefault()

    await fetch(
      `https://youtube-music1.p.rapidapi.com/v2/search?query=${qValue}`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setResult(data)
      })
      .catch(err => console.error(err))
  }

  function download(e) {
    fetch(
      `https://youtube-music1.p.rapidapi.com/get_download_url?id=${e}&ext=mp3`,
      options
    )
      .then(response => response.json())
      .then(response => {
        function download() {
          var el = document.createElement('a')
          el.download = nameSong //Define o nome
          // console.log(el, el.download)
          el.href = response.result.download_url //Define a url
          // el.target = '_blank' //Força abrir em uma nova janela
          el.className = 'hide-link' //Adiciona uma classe css pra ocultar))
          document.body.appendChild(el)
          if (el.fireEvent) {
            el.fireEvent('onclick') //Simula o click pra navegadores com suporte ao fireEvent
          } else {
            //Simula o click
            var evObj

            evObj = document.createEvent('MouseEvents')
            evObj.initEvent('click', true, false)
            el.dispatchEvent(evObj)
          }

          //Remove o link da página
          setTimeout(function () {
            document.body.removeChild(el)
          }, 100)
        }
        download()
      })
      // .then(response => window.location.replace(response.result.download_url))
      .catch(err => console.error(err))
  }

  async function playMusic(e) {
    setUrlPlay('')
    await fetch(
      `https://youtube-music1.p.rapidapi.com/get_download_url?id=${e}&ext=mp3`,
      options
    )
      .then(response => response.json())
      .then(response => setUrlPlay(response.result.download_url))
      .catch(err => console.error(err))
  }

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          width: '100vw',
          bgcolor: 'black'
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: '100%',
            display: 'flex',
            flex: 1,
            bgcolor: 'black',
            position: 'fixed',
            top: '0',
            zIndex: 10,
            borderRadius: 0
          }}
          onSubmit={query}
          component="form"
        >
          <ButtonOpenSideBar handleFile={handleFile} />

          <input
            className="input"
            id="outlined-basic"
            placeholder="Pesquise sua Musica"
            variant="outlined"
            onChange={e => {
              setqValue(e.target.value)
            }}
            type="text"
            ref={inputRef}
          />
          <button className="btn-submit" type="submit">
            <BsSearch style={{ color: 'white' }} />
          </button>
        </Paper>
        <Box
          sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            background: 'black',
            pt: '50px',
            pb: '110px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* <Typography sx={{ m: '0 auto' }}>
          {songs.length === 0 ? '' : 'musicas'}
        </Typography> */}
          {songs.length === 0 ? (
            <Typography sx={{ m: '0 auto', color: 'white' }}>
              Pesquise sua Musica
            </Typography>
          ) : (
            songs.map(e => (
              <MusicCard
                key={e.id}
                downloadAction={() => download(e.id)}
                thumbnail={e.thumbnail}
                name={e.name}
                duration={secondsToTime(e.duration)}
                isPlaying={nameSong === e.name && idSong === e.id ? true : false}
                playAction={() => {
                  playMusic(e.id),
                    setNameSong(e.name),
                    setIdSong(e.id),
                    setDurationSong(e.duration)
                }}
              />
            ))
          )}
        </Box>
        <Player
          name={nameSong}
          duration={durationSong}
          audioRef={musicRef}
          audioUrl={urlPlay}
        />
      </Box>
    </>
  )
}

export default App

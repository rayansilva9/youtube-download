import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import {videosInfo} from '../../../utils/videos'

const Videos = () => {

  return ( 
    videosInfo.map(videosInfo =>(
      <Link to="/">
      <Card  sx={{  maxHeight: 350,
       width:{ xs:'100vw', sm: 400, },
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={videosInfo.thumb}
            alt="green iguana"
          />
          <CardContent
          
          sx={{
            height: 100,
          }}>
            <Typography gutterBottom variant="h5" component="div">
              {videosInfo.name}
            </Typography>
            <Typography
            variant="body2" color="text.secondary">
              {videosInfo.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>
    </Link>
    ))

   
   );
}
 
export default Videos;
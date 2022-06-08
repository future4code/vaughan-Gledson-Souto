import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import {  IMG_URL } from '../../constants/urls';
import { ContainerCardMovie } from './styled';
import Box from '@mui/material/Box';
import { goToDescription } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const CardMovie = (data) => {
  const navigate = useNavigate()


  const movieId = (id) => {
    goToDescription(navigate, id)
  }
  
  const listMovie = data.data.results && data.data.results
  .map((movie) => {
    return (
      <Box display="flex" flexDirection="column"
        sx={{ maxWidth: 176 }}
        key={movie.id}
      >
      <Card sx={{ maxWidth: 176 }} key={movie.id}>
        <CardActionArea>

          <CardMedia onClick={()=> movieId(movie.id)} component="img"
            image={IMG_URL + movie.poster_path} alt={movie.title}
          />
        </CardActionArea>
      </Card>

      <Typography variant="p" fontWeight="bold" margin="10px 0px 0px">
        {movie.title}
      </Typography>

      <Typography variant="overline" fontWeight="bold" color="#808080">
        {movie.release_date.split('-').reverse().join('/')}
      </Typography>
      
      </Box>
    )
  })

  return (
    <ContainerCardMovie>
      {listMovie}
    </ContainerCardMovie>
  )
}

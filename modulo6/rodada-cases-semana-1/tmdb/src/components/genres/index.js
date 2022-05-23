import React, { useContext } from 'react';
import { BoxGenres, BoxSlogan, ContainerGenres } from './styled';
import Button from '@mui/material/Button';
import { mainColor } from '../../constants/colors';
import useRequestData from '../../hooks/useRequestData';
import GlobalStateContext from '../../global/GlobalStateContext';
import { API_KEY } from '../../constants/urls';

export const Genres = () => {
  const [data] = useRequestData([], `/genre/movie/list?${API_KEY}&language=pt-BR`)
  const {setId} = useContext(GlobalStateContext)

  const getMovieId = (id) => {
    setId(id)
  }
  
  const mapGenres = data.genres && data?.genres.map((genre) => {
    return (
      <Button key={genre.id} sx={{
        backgroundColor: `${mainColor}`,
        margin: '10px 5px 0px',
        '&:hover': {
          backgroundColor: `${mainColor}`,
        },
        '&:focus': {
          backgroundColor: '#D18000',
          color: `${mainColor}`
        }
      }} onClick={()=> getMovieId(genre.id)}>
        {genre.name}
      </Button>
    )
  });

  return (
    <ContainerGenres>

      <BoxSlogan>
        <div>
          <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        </div>
      </BoxSlogan>

      <BoxGenres
        sx={{
          width: '100%',
          marginBottom: "70px"
        }}
      >
        <p>FILTRE POR:</p>
        <div>
          {mapGenres}
        </div>
      </BoxGenres>

    </ContainerGenres>
  )
}

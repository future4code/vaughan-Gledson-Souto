import React from "react";
import { useParams } from 'react-router-dom';
import useRequestData from '../../../hooks/useRequestData';
import { API_KEY, IMG_URL } from '../../../constants/urls';
import { CarouselActors, ContainerCarousel, CardMedia, CardCast } from "./styled";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

export const CastCarousel = () => {
    const params = useParams()
    const [data] = useRequestData([], `/movie/${params.id}/credits?${API_KEY}&language=pt-BR`);


    const corouselActor = data?.cast?.map((cast) => {
        return (
            <CardCast key={cast.id}>
                <CardMedia>
                    <img
                        src={IMG_URL + cast.profile_path} alt={cast.name}
                    />
                </CardMedia>
                <Box sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                <Typography 
                variant="p" fontWeight="bold" 
                margin="10px 0px 0px" display="block" 
               
                >
                    {cast.original_name}
                </Typography>

                <Typography variant="p"  margin="0px 0px 0px" >
                    {cast.character}
                </Typography>
                </Box>
            </CardCast>
        )
    })
    return (
        <ContainerCarousel>
            <Typography variant="h5" fontWeight="bold" margin="0px 0px 20px 20px" letterSpacing="-0.005em">
                Elenco original
            </Typography>
            <CarouselActors>
                {corouselActor}
            </CarouselActors>
        </ContainerCarousel>
    );
}

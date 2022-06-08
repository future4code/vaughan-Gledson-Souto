import React from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, IMG_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { Header } from '../../components/header/index';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import { BoxInfos, ContainerCarousel, ContainerDescription, ContainerDetail, ContainerPoster } from './styled';
import { Card, Typography } from '@mui/material';
import { CastCarousel } from './castCarousel';
import { DetailMovie } from './detailMovie';
import { Loading } from '../../components/loading';
import CircularStatic from './circularProgress';


const Description = () => {
    const params = useParams();
    const [data, loading] = useRequestData([], `/movie/${params.id}?${API_KEY}&language=pt-BR`);
    const [detail] = useRequestData([], `/movie/${params.id}/release_dates?${API_KEY}&language=pt-BR`);
    const [credits] = useRequestData([], `/movie/${params.id}/credits?${API_KEY}&language=pt-BR`);


    let all = data.runtime;
    let minutes = all % 60;
    let hours = (all - minutes) / 60;

    let number = data.vote_average
    let percentage = number / 10 * 100


    const year = data.release_date?.split('-');

    const listDetailMovie = detail.results && detail.results.filter((movie) => {
        return movie.iso_3166_1 === "BR"
    });

    const genres = data?.genres && data?.genres.map((genre) => {
        return (`${genre.name}. `)
    });

    const searchProduction = credits?.crew && credits?.crew?.filter((credit) => {
        return credit.job === "Editor" || credit.department === "Art"
    });
    const searchDirector = credits?.crew && credits?.crew?.filter((credit) => {
        return credit.job === "Director"
    });
    const searchScreenPlay = credits?.crew && credits?.crew?.filter((credit) => {
        return credit.job === "Screenplay" || credit.department === "Production"
    });

    return (
        <ContainerDescription>
            <Header />

            <ContainerPoster>
                <div>
                    <Card sx={{ maxWidth: 350, margin: "70px 0px 0px 160px" }} className="cardImg">
                        <CardMedia component="img"
                            image={IMG_URL + data.poster_path} alt={data.title}
                        />
                    </Card>
                </div>
                <BoxInfos display="flex" flexDirection="column" color="#fff" >

                    <Typography variant="h5" fontWeight="bold" className="infos">
                        {data.title} ({year?.[0]})
                    </Typography>

                    <Typography color="#DDDDDD" className="infos">
                        {listDetailMovie?.[0]?.release_dates?.[0]?.certification} anos • {data?.release_date?.split('-').reverse().join('/')} ({listDetailMovie?.[0]?.iso_3166_1})
                        • {genres} • {`${hours}h${minutes}m`}
                    </Typography>

                    <Box sx={{ display: 'flex',alignItems: 'center', gap: '10px', width: '200px'}}>
                        <CircularStatic percentage={percentage}/>
                        <Typography color="#fff" className="infos" variant="p">
                            Avaliação dos usuarios
                        </Typography>
                    </Box>

                    <Typography variant="h6" className="infos">
                        Sinopse
                    </Typography>

                    <Typography variant="p" color="#DDDDDD" className="infos p">
                        {data.overview}
                    </Typography>

                    <Box sx={{
                        display: "grid",
                        justifyContent: "space-between",
                        gridTemplateColumns: "repeat(3, 1fr)"
                    }}>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {searchProduction?.[0]?.name}
                            </Typography>
                            <Typography variant="body2" color="#DDDDDD">
                                {searchProduction?.[0]?.job}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {searchProduction?.[1]?.name}
                            </Typography>
                            <Typography variant="body2" color="#DDDDDD">
                                {searchProduction?.[1]?.job}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {searchDirector?.[0]?.name}
                            </Typography>
                            <Typography variant="body2" color="#DDDDDD">
                                {searchDirector?.[0]?.job}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {searchScreenPlay?.[0]?.name}
                            </Typography>
                            <Typography variant="body2" color="#DDDDDD">
                                {searchScreenPlay?.[0]?.job}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {searchScreenPlay?.[1]?.name}
                            </Typography>
                            <Typography variant="body2" color="#DDDDDD">
                                {searchScreenPlay?.[1]?.job}
                            </Typography>
                        </Box>

                    </Box>
                </BoxInfos>
            </ContainerPoster>
            {loading ? <Loading /> :
                <>
                    <ContainerCarousel>
                        <CastCarousel />
                    </ContainerCarousel>

                    <ContainerDetail>
                        <DetailMovie />
                    </ContainerDetail>
                </>
            }
        </ContainerDescription>
    );
}

export default Description;
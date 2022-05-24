import { CardActionArea, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { API_KEY, IMG_URL, YT_URL } from "../../../constants/urls"
import useRequestData from "../../../hooks/useRequestData"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ContainerDetail, ContainerRecommendation, IframeVideo } from "./styled";
import Box from '@mui/material/Box';
import { goToDescription } from "../../../routes/coordinator";


export const DetailMovie = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [trailer] = useRequestData([], `/movie/${params.id}/videos?${API_KEY}&language=pt-BR`);
    const [recommendations] = useRequestData([], `/movie/${params.id}/recommendations?${API_KEY}&language=pt-BR`);

    const goToMovieRecommendations = (id) => {
        goToDescription(navigate, id);
    }
    const recommendationMovie = recommendations.results && recommendations.results.map((movie) => {
        return (
            <Box display="flex" flexDirection="column"
                sx={{ minWidth: 176 }}
                key={movie.id}>
                <Card sx={{ maxWidth: 176 }} key={movie.id} onClick={()=> goToMovieRecommendations(movie.id)} >
                    <CardActionArea>

                        <CardMedia component="img" id="back-to-top" 
                            image={IMG_URL + movie.poster_path} alt={movie.title}
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="p" fontWeight="bold" margin="10px 0px 0px" maxWidth={176}>
                    {movie.title}
                </Typography>

                <Typography variant="overline" fontWeight="bold" color="#808080">
                    {movie.release_date.split('-').reverse().join('/')}
                </Typography>
            </Box>
        )
    })
    return (
        <ContainerDetail>
            <div>
            <Typography variant="h5" fontWeight="bold" margin="0px 0px 20px 0px" letterSpacing="-0.005em">
                Trailer
            </Typography>

            <IframeVideo src={YT_URL + trailer?.results?.[0]?.key} className="cardVideo"
                title={YT_URL + trailer?.results?.[0]?.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </IframeVideo>
            </div>

            <div >
                <Typography variant="h5" fontWeight="bold" margin="40px 0px 20px 0px" letterSpacing="-0.005em">
                    Recomendações
                </Typography>
            <ContainerRecommendation>
                {recommendationMovie?.slice(0, 7)}
            </ContainerRecommendation>
            </div>
        </ContainerDetail>
    )
}
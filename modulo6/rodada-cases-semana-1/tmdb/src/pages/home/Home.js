import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react'
import { CardMovie } from '../../components/cardMovie';
import { Genres } from '../../components/genres';
import { Header } from '../../components/header/index';
import { Loading } from '../../components/loading';
import { API_KEY } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';

const Home = () => {
    const [page, setPage] = useState(1);
    const [data, loading] = useRequestData([], `/movie/popular?${API_KEY}&language=pt-BR&page=${page}`);

    const handleChange = (event, value) => {
        setPage(value)
    }

    var btn = document.querySelector("#back-to-top");
        btn?.addEventListener("click", function () {
            window.scrollTo(0, 0);
    });

    return (
        <div>
            <Header id="back-to-top"/>
            <Genres />

            {loading ? <Loading/>: <CardMovie data={data} />}

            <Stack
                spacing={2}
                alignItems="center"
                margin="20px 0px 50px" >
                <Pagination
                    count={10}
                    color="primary"
                    page={page}
                    onChange={handleChange}
                    onClick={btn}
                />
            </Stack>
        </div>
    )
}

export default Home;

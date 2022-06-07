import UseRequestData from 'hooks/UseRequestData';
import * as React from 'react';



const Home = () => {
    const [data] = UseRequestData([], "/loterias")

    console.log(data)
return(
    <div>
        oi
    </div>
)
}

export default Home;
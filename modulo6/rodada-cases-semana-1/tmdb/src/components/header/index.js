import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';
import { ContainerHeader } from './styled';

export const Header = () => {
  const navigate = useNavigate()

    const backToHome = () =>{
      goToHome(navigate);
    }
    return(
        <ContainerHeader>
          <div className="header">
            <p onClick={()=>backToHome()}>TMDB</p>
            <div onClick={()=>backToHome()}></div>
          </div>
        </ContainerHeader>
    )
}

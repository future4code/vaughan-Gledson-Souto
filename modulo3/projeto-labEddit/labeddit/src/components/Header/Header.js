import React from "react"
import { Dropdown, HeaderStyle, StyleInput } from "./style"
import { Exit, IoArrow, RedditIcon } from "../../Icons/icons"
import { useNavigate } from "react-router-dom"
import { goToFeed, goToLogin } from "../../routes/Coordinator"

const Header = () => {
    const navigate = useNavigate()
    const changePage = () => {
        goToLogin(navigate)
        localStorage.setItem("token", "")
    }
    return (
        <HeaderStyle>
            <div className="home">
            <RedditIcon onClick={()=>goToFeed(navigate)}/>
            <h2>labeddit</h2>
            </div>
          
       
            <Dropdown>
                <ul class="menu">
                    <li><a><IoArrow/></a>
                        <ul>
                            <li><a>Modo escuro</a></li>
                            <li><a onClick={()=> changePage()}>Logout <Exit/></a></li>
                        </ul>
                    </li>
                </ul>
            </Dropdown>
        </HeaderStyle >
    )
}
export default Header
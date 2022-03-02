import React from "react"
import { ShareIcon } from "../../Icons/icons"
import { ContainerShare, Dropdown } from "./style"

const Share = () => {

    return (
        <ContainerShare>
                <Dropdown>
                <ul class="menu">
                    <li><a><ShareIcon/></a>
                        <ul>
                            <li><a>Copiar link</a></li>
                        </ul>
                    </li>
                </ul>
            </Dropdown>
        </ContainerShare>
    )
}
export default Share
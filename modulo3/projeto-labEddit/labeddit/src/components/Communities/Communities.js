import { community } from "../../constants/communities"
import { CardCommunities, ContainerUsers } from "./style"


const Users = () => {


    return(
        <ContainerUsers>
            {community.map((comm)=>{
                return (
                 <CardCommunities>
                     <div>
                     <img src={comm.img}/>
                     <div className="infos">
                         <a href={comm.link} target="_blank">{comm.name}</a>
                         <p>{comm.quantify} Membros</p>
                    </div> 
                     <a href={comm.link} className="button" target="_blank">Unir-se</a>
                     </div>
                   
                 </CardCommunities>
                )
            })}
            <button className="btn">Ver tudo</button>
        </ContainerUsers>
    )
}
export default Users
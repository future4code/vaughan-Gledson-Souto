import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";


export const onSubmitLogin = (form, clearFields, navigate) => {
    
    const body = {
        email: form.email,
        password: form.password,
    }
    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        alert("logado")
        localStorage.setItem(`token`, res.data.token)
        goToFeed(navigate)
        clearFields()
        
    })  
    .catch((err)=>{
        alert(`Erro ao logar! ${err.response.data.message}`)
        
    })

}
export const signUp = (form, clearFields, navigate) => {
    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    }
    axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
      alert("usuário cadastrado")
      localStorage.setItem("token", res.data.token)
      clearFields()
      goToFeed(navigate)
    })
    .catch((err)=>{
      alert(`Erro ao cadastrar, tente novamente! ${err.response.data.message}`)
    })
  }

export const publishPost = (form, clearFields, getData) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        title: form.title,
        body: form.body
    }
    axios
    .post(`${BASE_URL}/posts`, body, auth)
    .then((res)=>{
        alert(`post criado`)
        getData()
        clearFields()
    })
    .catch((err)=>{
        alert(`erro ao criar post ${err.response.data.message}`)
    })
}

export const commentPost = (form, clearFields,getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        body: form.body
    }
    axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, auth)
    .then((res)=>{
        getData()
        clearFields()
    })
    .catch((err)=>{
        alert(`erro ao comentar ${err.response.data.message}`,)
    })

}

export const createPostVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        direction: + 1
    }
    axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{       
         alert(`erro ao votar post ${err.response.data.message}`,)
})
}
export const changePostVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        direction: - 1 
    }
    axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{       
         alert(`erro ao votar post ${err.response.data.message}`)
})
}

export const deletePostVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
  
    axios
    .delete(`${BASE_URL}/posts/${id}/votes`, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{       
         alert(`erro ao deletar voto  ${err.response.data.message}`)
 
})
}



export const createCommentVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        direction: + 1 
    }
    axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{
        alert(`erro ao votar comentario ${err.response.data.message}`, )
    })
}

export const changeCommentVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const body = {
        direction: - 1 
    }
    axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{       
         alert(`erro ao votar comentario ${err.response.data.message}`, )
})
}

export const deleteCommentVote = (getData, id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
  
    axios
    .delete(`${BASE_URL}/comments/${id}/votes`, auth)
    .then((res)=>{
        getData()
    })
    .catch((err)=>{       
         alert(`erro ao deletar voto ${err.response.data.message}`)
       
})
}


export const goToLogin = (navigate) =>{
    navigate("/login")
}

export const goToSignUp = (navigate) =>{
    navigate("/SignUp")
}

export const goToFeed = (navigate) =>{
    navigate("/feed")
}

export const goToPost = (navigate, id) =>{
    navigate(`/feed/post/${id}`)
}
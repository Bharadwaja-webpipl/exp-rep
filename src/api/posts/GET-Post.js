export async function fetchPost(user, id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${user.accessToken}` },
        credentials: 'include',
        'Accept': 'application/json'
    }
    try {
        let responce = await fetch(import.meta.env.VITE_BACKEND_LINK + "/posts" + `/${id}`, requestOptions)
        let data = await responce.json()

        if (responce.status === 200) {
            return { result: true, post: data }
        } else {
            return { result: false, message: data.message }
        }

    } catch (e) {
        console.log(e)
    }
}
export const getPosts = async() => {
    const reponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    )


const data = await reponse.json();

return data;
}
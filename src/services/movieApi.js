export const getMovies = async () => {
    const response = await fetch(
       ' https://api.tvmaze.com/search/shows?q=movie'
    );
    const data = await response.json();
    return data;
}

export const searchMovies = async (query) => {
    const reponse = await fetch(
         `https://api.tvmaze.com/search/shows?q=${query}`
    );

    const data = await reponse.json();
    return data;
}

export const getMovieDetails = async (id) => {
    const reponse = await fetch(
        `https://api.tvmaze.com/shows/${id}`
    );
    const data = await reponse.json();
    return data;
}
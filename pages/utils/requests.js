const API_KEY="36b9cacd79bbe815c5d53d4499cba3f9";

export const request={
fetchTrending:{url:`/trending/all/week?api_key=${API_KEY}&language=US`,title:"trending"},
fetchNetflixOriginals:{title:"Originals", url:`/discover/tv?api_key=${API_KEY}&with_networks=213`},
fetchTopRated:{url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,title:"Top Rated"},
fetchActionMovies:{title:"Action" ,url:`/discover/movie?api_key=${API_KEY}&with_genres=28`},
fetchComedyMovies:{title:"Comedy",url:`/discover/movie?api_key=${API_KEY}&with_genres=35`},
fetchHorrorMovies:{title:"Horror",url:`/discover/movie?api_key=${API_KEY}&with_genres=27`},
fetchRomanceMovies:{title:"Romance",url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`},
fetchDocumentaries:{title:"Documentary",url:`/discover/movie?api_key=${API_KEY}&with_genres=99`}
,fetchAnime:{title:"Anime",url:`/discover/movie?api_key=${API_KEY}&with_genres=99`}
,fetchTvMovie:{title:"Tv Movies",url:`/discover/movie?api_key=${API_KEY}&with_genres=99`}
,fetchKids:{title:"Kids",url:`/discover/movie?api_key=${API_KEY}&with_genres=99`}
,fetchDocuments:{title:"Documentaries",url:`/discover/movie?api_key=${API_KEY}&with_genres=99`}
}



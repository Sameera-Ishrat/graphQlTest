import {gql,useQuery} from "@apollo/client";

const GET_FILMS = gql`
query {
  allFilms {
    films {
      title
      created
      director
      edited
      id
      openingCrawl
      producers
      releaseDate
    }
  }
}
`
function App() {
  const {loading,data,error} = useQuery(GET_FILMS);

  if(loading) return <p>Loading.....</p>
  if(error) return <p>Error:{error.message}</p>

  const films = data.allFilms.films;
  
  return (
    <div className="container">
      <ul>
        {films.map((film) => (     
          <li key={film.title}>
            <h2>{film.title}</h2>
          <p>{film.openingCrawl}</p>
          <p>Release Date : {film.releaseDate}</p>
          </li>       
        ))}
      </ul>
   </div>
  );
}

export default App;

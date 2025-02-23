import { useState } from "react";
import "./MovieList.css";

const movies = [
  { id: 1, title: "Baahubali: The Beginning", year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Baahubali_The_Beginning_poster.jpg", description: "An epic action film directed by S.S. Rajamouli." },
  { id: 2, title: "Baahubali: The Conclusion", year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_the_Conclusion.jpg", description: "The sequel that unveils the mystery behind Baahubali." },
  { id: 3, title: "RRR", year: 2022, image: "https://upload.wikimedia.org/wikipedia/en/d/d7RRR_Poster.jpg", description: "A fictional story of two Indian revolutionaries, directed by S.S. Rajamouli." },
  { id: 4, title: "Pushpa: The Rise", year: 2021, image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Pushpa_-_The_Rise_%282021_film%29.jpg", description: "A story about the rise of a red sandalwood smuggler." },
  { id: 5, title: "Eega", year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Eega_%28film%29.jpg", description: "A unique revenge story of a man reincarnated as a fly." },
  { id: 6, title: "Ala Vaikunthapurramuloo", year: 2020, image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Ala_Vaikunthapurramuloo_poster.jpg", description: "A heartwarming family drama starring Allu Arjun." },
  { id: 7, title: "Arjun Reddy", year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/5/53/Arjun_Reddy.jpg", description: "A bold romantic drama starring Vijay Deverakonda." },
  { id: 8, title: "Jersey", year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Jersey_poster.jpg", description: "A touching sports drama about a struggling cricketer." },
  { id: 9, title: "Mahanati", year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Mahanati_poster.jpeg", description: "A biographical film on legendary actress Savitri." },
  { id: 10, title: "Sye", year: 2004, image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sye_film_poster.jpg", description: "A college rugby team fights against a gangster." },
  { id: 11, title: "Magadheera", year: 2009, image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Magadheera_Poster.jpg", description: "A reincarnation-based fantasy action film." },
  { id: 12, title: "Vedam", year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/4/44/Vedam_poster.jpg", description: "A multi-narrative film showcasing different lives." },
  { id: 13, title: "Vikramarkudu", year: 2006, image: "https://upload.wikimedia.org/wikipedia/en/6/66/Vikramarkudu_poster.jpg", description: "An action-packed story about a fearless cop." },
  { id: 14, title: "Chatrapathi", year: 2005, image: "https://upload.wikimedia.org/wikipedia/en/3/30/Chatrapathi_film.jpg", description: "A powerful action film starring Prabhas." },
  { id: 15, title: "Khaidi No. 150", year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/3/37/Khaidi_No._150.jpg", description: "A social drama starring Chiranjeevi in a dual role." },
  { id: 16, title: "Temper", year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/4/42/Temper_Telugu_film.jpg", description: "An intense action drama about a corrupt cop's transformation." },
  { id: 17, title: "Srimanthudu", year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/1/16/Srimanthudu_poster.jpg", description: "A socially relevant film starring Mahesh Babu." },
  { id: 18, title: "Janatha Garage", year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Janatha_Garage.jpg", description: "A powerful drama about environmental activism." },
  { id: 19, title: "Athadu", year: 2005, image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Athadu_film_poster.jpg", description: "A gripping action thriller starring Mahesh Babu." },
  { id: 20, title: "Pokiri", year: 2006, image: "https://upload.wikimedia.org/wikipedia/en/5/51/Pokiri_movie_poster.jpg", description: "An intense action thriller that became a blockbuster." },
  { id: 21, title: "Gabbar Singh", year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Gabbar_Singh_poster.jpg", description: "A high-energy action film starring Pawan Kalyan." },
  { id: 22, title: "Businessman", year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/6/6c/Businessman_poster.jpg", description: "A story about a young man taking over the underworld." },
  { id: 23, title: "Kshanam", year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/2/21/Kshanam_poster.jpg", description: "A thrilling mystery involving a missing girl." },
  { id: 24, title: "Goodachari", year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Goodachari_poster.jpg", description: "A gripping spy thriller starring Adivi Sesh." }
];

export default function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Movie List</h1>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title} ({movie.year})</h2>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-movies">No movies found</p>
        )}
      </div>
    </div>
  );
}

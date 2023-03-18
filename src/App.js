// import logo from './logo.svg';
import './App.css';

import './style.css'

import MovieList from './Components/MovieList';
import GenreFilter from './Components/GenreFilter';

function App() {
  return (
    <div className="App">
      <GenreFilter />
      <MovieList />
    </div>
  );
}

export default App;

import './App.scss';

// import beers from "./data/beers";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";



const App = () => {

  // const [ beers, setBeers ] = useState([])

  fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
  .then(response => {
    return response.json()
  })
  .then(beersObj => {
    console.log(beersObj)
  })

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;


// The Plan

// Clean up files - add app.jsx and app.scss

// Add data file

// Plan components & props

// --> Components/props
//  1. Sidenav
//      -> Search Bar
//      -> Filter List
//        -> Filter Item
//  2. Main section (container component)
//      -> Card List
//      -> Beer Card


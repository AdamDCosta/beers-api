import './App.scss';

import beers from "./data/beers";

import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Body from './components/Body/Body';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
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


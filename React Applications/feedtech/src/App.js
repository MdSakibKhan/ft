import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import TopView from "./Components/TopView";
import FactoryIntro from './Components/FactoryIntro'
import ExploreMenu from "./Components/ExploreMenu"

function App() {
  return (
    <div className="App">
    <div className="grid-container">
    <TopView></TopView>
    <FactoryIntro></FactoryIntro>
    <div className="mt-4"></div>
    <ExploreMenu></ExploreMenu>
    </div>
    </div>
  );
}

export default App;

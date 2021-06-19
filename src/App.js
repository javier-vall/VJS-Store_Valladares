import React from "react";
import "./App.css";
//componente
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import UserPanel from "./components/UserPanel";
import ItemListContainer from "./components/ItemListContainer";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <UserPanel />
        <Header />
        <NavBar />
        <ItemListContainer subtitle={"Bienvenidos!!"} />
      </div>
    );
  }
}

export default App;

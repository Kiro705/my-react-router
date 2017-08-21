import React from "react";
import AnimalsList from "./AnimalsList";
import AnimalProfile from "./AnimalProfile";
import { catsData, dogsData } from "../../data";
import { Route, Switch, Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: catsData,
      dogs: dogsData
    };
  }

  render() {
    const allAnimals = [...this.state.cats, ...this.state.dogs];
    const dogs = this.state.dogs;
    const cats = this.state.cats;

    return (
      <div className="App">
        <div className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <h3>derpy pets</h3>
        </div>
        <div className="container cat-or-dog">
          <div className="row">
            <Link to="/cats" className="btn-flat btn-large col s5">
              I WANT A MEOWER
            </Link>
            <Link to="/dogs" className="btn-flat btn-large col s5 offset-s2">
              I WANT A BARKER
            </Link>
          </div>
        </div>

        <div className="App-content container-fluid">
          <Switch>
            <Route path="/dogs" render={() => <AnimalsList animals={dogs} view="Who let the dogs out" />} />
            <Route path="/cats" render={() => <AnimalsList animals={cats} view="Meow" />} />
            <Route path="/" exact={true} render={() => <AnimalsList animals={allAnimals} view="Everybody" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;

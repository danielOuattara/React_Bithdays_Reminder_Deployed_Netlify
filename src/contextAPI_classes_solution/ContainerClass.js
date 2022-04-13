import React, { Component } from "react";
import ListContextAPI from "./ListContextAPI";
import { FriendsContext } from "./context/FriendsContext";

class ContainerClass extends Component {
  static contextType = FriendsContext;

  render() {
    const { people, handleRefresh, handleRemoveAllPeople } = this.context;
    return (
      <main>
        <section className="container">
        {people.length === 1 ? <h3> {people.length} birthday today</h3> : <h3> {people.length} birthdays today</h3> }
          <span>class component: contextAPI</span>
          <ListContextAPI />
          {people.length !== 0 && (
            <button
              onClick={() => handleRemoveAllPeople()}
              style={{ marginTop: "50px" }}
            >
              {" "}
              Clear all
            </button>
          )}
          {people.length === 0 && (
            <button onClick={handleRefresh} style={{ marginTop: "50px" }}>
              {" "}
              Refresh
            </button>
          )}
        </section>
      </main>
    );
  }
}

export default ContainerClass;

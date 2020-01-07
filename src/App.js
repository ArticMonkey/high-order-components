import React from "react";

import "./App.scss";
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile name="RionWork" email="rionwork@gmail.com"  dataSource="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default App;

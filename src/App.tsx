import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Profile from "./Pages/Profile";


function App() {

  const [profile, setProfile] = useState({})

  return (
    <div className="App">
      {Object.keys(profile).length !== 0 ? 
          <Profile profile={profile}/>
          : 
          <SearchBar setProfile={setProfile}/>
      }
    </div>
  );
}

export default App;

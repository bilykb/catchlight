import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import FriendRecommendations from "./FriendRecommendations";
import WatchList from "./WatchList";
import Watched from "./Watched";
import SearchBox from "../SearchBox";

export default function Home() {

  const [refresh, setRefresh] = useState(false);

  return (
    <React.Fragment>
        <SearchBox 
          refresh={refresh}
          setRefresh={setRefresh}
        />

      <FriendRecommendations
        refresh={refresh}
        setRefresh={setRefresh}

      >Friend's Recommendation</FriendRecommendations>
      <WatchList
        refresh={refresh}
        setRefresh={setRefresh}
      >Watch List</WatchList>
      <Watched
        refresh={refresh}
        setRefresh={setRefresh}
      >Watched</Watched>
    </React.Fragment>
  );
}

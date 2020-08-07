import React , {useEffect} from "react";
import Addurl from "./../components/Addurl";
import Header from "./../components/Header";
import RecentUrls from "./../components/RecentUrls";
import "./home.css";
function Home() {
  useEffect(() => {
    
  }, [])
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <Addurl />
      <RecentUrls />
    </div>
  );
}

export default Home;

import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { API_URL } from "../utils/gen.utils";
import Addurl from "./../components/Addurl";
import Header from "./../components/Header";
import RecentUrls from "./../components/RecentUrls";
import "./home.css";
function Home() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    setLoader(true);
    Axios.get(`${API_URL}/getRecent`).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  }, [newData]);

  console.log(newData);
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <Addurl setNewData={setNewData} />

      {loader ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <RecentUrls data={data} />
      )}
    </div>
  );
}

export default Home;

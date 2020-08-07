import Axios from "axios";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/gen.utils";
const Redirect = () => {
  let { id } = useParams();
  useEffect(() => {
    Axios.post(`${API_URL}/get`, { id: id }).then((res) => {
      let originaUrl = res.data[0].OriginalUrl;
      window.location = originaUrl;
    });
  }, [id]);
  return (
    <div style={{ marginTop: 100 }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Redirect;

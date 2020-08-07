import React from "react";
import { Container, Table } from "react-bootstrap";
import { format } from "timeago.js";
import { SITE_URL } from "./../../utils/gen.utils";
const RecentUrls = (props) => {
  console.log(props.data);
  return (
    <Container style={{ padding: 0 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Short URL</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0 ? (
            props.data.slice(0, 5).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.OriginalUrl}</td>
                  <td>
                    {SITE_URL}
                    {data.ShortUrl}
                  </td>
                  <td>{format(data.createdAt)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No data found!</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};
export default RecentUrls;

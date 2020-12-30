import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";

import UserList from "./UserList";

import "./styles.css";

export default function App() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserDetails(json));
  }, []);

  const userData = userDetails.map((user) => {
    return (
      <UserList
        name={user.username}
        email={user.email}
        phone={user.phone}
        website={user.website}
      />
    );
  });

  return (
    <Container>
      <Row>{userData}</Row>
    </Container>
  );
}

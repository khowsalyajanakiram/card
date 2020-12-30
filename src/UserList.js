import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

import "./styles.css";

export default function UserList({ name, email, phone, website }) {
  return (
    <Col md={4} className="my-1">
      <Card className="bg-warning">
        <CardImg
          top
          width="100%"
          src={`https://robohash.org/${phone}`}
          alt="Card image cap"
        />
        <CardBody className="text-center">
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{email}</CardSubtitle>
          <CardText>{phone}</CardText>
          <CardText>{website}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

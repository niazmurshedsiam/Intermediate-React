import React from "react";
import { Button,Card } from "react-bootstrap";
const News = (props) => {
    const { author, title, description } = props.article;
  return (
    <div>
      <Card>
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add Button</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;

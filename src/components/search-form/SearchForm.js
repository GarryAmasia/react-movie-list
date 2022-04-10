import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

export const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(search);
    getMovie(search);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="Movie name" onChange={handleOnChange} />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

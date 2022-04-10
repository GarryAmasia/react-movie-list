import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ movieObj, func, btnDelete = false }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title>Title : {movieObj.Title}</Card.Title>
        <Card.Title>Rating : {movieObj.imdbRating}</Card.Title>

        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => {
                func(movieObj.imdbID);
              }}
            >
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Button onClick={() => func("happy")} variant="info">
              go happy
            </Button>
            <Button onClick={() => func("lazy")} variant="secondary">
              go Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

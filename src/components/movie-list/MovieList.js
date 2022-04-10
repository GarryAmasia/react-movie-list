import React from "react";
import { Row, Button, ButtonGroup, Col } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { useState } from "react";
import { CustomList } from "../card/CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [mood, setMood] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  //filter first then display
  const filterMovies = mood
    ? movieList.filter((movie) => movie.category === mood)
    : movieList;

  return (
    <div className="py-3">
      <Row>{mood.toUpperCase || "All"} is selected</Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() => {
                setMood("");
              }}
            >
              All
            </Button>
            <Button
              variant="info"
              onClick={() => {
                setMood("happy");
              }}
            >
              Happy
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setMood("lazy");
              }}
            >
              Lazy
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() => {
                setIsGrid(true);
              }}
            >
              Grid
            </Button>
            <Button
              variant="info"
              onClick={() => {
                setIsGrid(false);
              }}
            >
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap ">
          {filterMovies.map((movie, i) =>
            isGrid ? (
              <CustomCard
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            ) : (
              <CustomList
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./genre-view.scss";

export class GenreView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card className="genre-view">
        <Card.Title className="genre-name">
          <p>{genre.Name}</p>
        </Card.Title>
        <Card.Text className="genre-description">
          <span>Description: </span>{genre.Description}
        </Card.Text>
        <Button
          id="back-btn-2"
          onClick={() => {
            onBackClick();
          }}
        >
          Back
        </Button>
      </Card>
    );
  }
}

GenreView.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

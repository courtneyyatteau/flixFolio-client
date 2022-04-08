import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./director-view.scss";

export class DirectorView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card className="director-view">
        <Card.Img className="director-img" src={director.ImagePath} />
        <Card.Title className="director-name">
          <p>{director.Name}</p>
        </Card.Title>
        <Card.Text className="director-description">
          Bio: {director.Bio}
        </Card.Text>
        <Card.Text>Birthday: {director.Birth}</Card.Text>
        <Button
          id="back-btn"
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

DirectorView.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

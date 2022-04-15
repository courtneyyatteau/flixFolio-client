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
          <p className="director-name">{director.Name}</p>
        </Card.Title>
        <Card.Text className="director-description">
          <span>Bio: </span>
          {director.Bio}
        </Card.Text>
        <Card.Text className="director-description">
          <span>Birthday: </span>
          {director.Birth.substring(0, 10)}
        </Card.Text>
        <Button
          id="back-btn-1"
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

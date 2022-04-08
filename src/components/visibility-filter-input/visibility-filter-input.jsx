import React from "react";
import { connect } from "react-redux";
import "./visibility-filter-input.scss";

import { Form } from "react-bootstrap";

import { setFilter } from "../../actions/actions";

function VisibilityFilterInput(props) {
  return (
    <div>
      <Form.Control
        type="search"
        onChange={(e) => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
        placeholder="Search by title"
        className="search-bar"
        aria-label="Search"
      />
    </div>
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);

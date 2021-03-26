import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchData } from "../Redux/actions/fetchData";

function Lista_Personas(props) {
  props.fetchData();
  return (
    <div>
      <h1>LISTADO PERSONAS</h1>
    </div>
  );
}

const mapDispatchActions = {
  fetchData: fetchData,
};

export default connect(null, mapDispatchActions)(Lista_Personas);

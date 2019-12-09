import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = props => (
    <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
    </Spinner>
);

export default Loader;

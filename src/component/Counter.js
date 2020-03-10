import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { increment, decrement } from "../js/action";

function Counter(props) {
  return (
    <div className="box">
      <Button color="primary" onClick={() => props.increment(props.count)}>
        +
      </Button>

      {props.count}

      <Button color="danger" onClick={() => props.decrement(props.count)}>
        -
      </Button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state.counter
  };
};
export default connect(mapStateToProps, { increment, decrement })(Counter);

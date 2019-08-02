import React, { Component } from "react";
import { getDataAction,isOpenAction } from "./action";
import List from "../List";
import { connect } from "react-redux";



class Home extends Component {
  render() {
    const {list,isOpen} = this.props
    return (
      <div>
        <List isOpen={isOpen} data={list} />
      </div>
    );
  }
  componentDidMount(){
    this.props.getData()
  }
}
const mapState = state => ({
  ...state
});
const mapDispatch = dispatch => ({
  isOpen(value){
    dispatch(isOpenAction(value))
  },
  getData() {
    dispatch(getDataAction());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);

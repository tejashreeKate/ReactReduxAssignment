import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router"

// Home page component
class Home extends React.Component {
	constructor(props){
		super(props);
	}
	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.user.user.username==""){
	// 		browserHistory.push("/")
	// 	}
	// }
  // render
  render() {
  	let user = this.props.user.user;

    return (
      <div className="page-home">
        <h4>Hello world! {user.username}</h4>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store;
}

export default connect(mapStateToProps)(Home);
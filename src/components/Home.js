import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router"

// Home page component
class Home extends React.Component {
	constructor(props){
		super(props);
	}
  componentDidMount(){
    let user = this.props.user.user;
    if(user==undefined || user.username==""){
      browserHistory.push("/");
    }
  }  
  render() {
  	let user = this.props.user.user;
    return (
      <div className="page-home">
          <nav className="navbar navbar-expand-lg navbar-light bg-theme header">
            <a className="navbar-brand" href="/home">React-Redux App</a>
            <div className="logout-link">
              <a href="/">Logout</a>
            </div>
          </nav>
          <div className="card info-card rotateIn">
              <div className="card-body">
                  <h4>Welcome <span className="text-primary">{user!=undefined?user.username:''}</span></h4>
                  <p>You are now logged into the react redux app</p>
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user:state.user
  };
}

export default connect(mapStateToProps)(Home);

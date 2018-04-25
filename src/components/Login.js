import React from "react";
import { browserHistory } from "react-router";
import {validateUserInfo, setUserInfo} from "../actions/userAction"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux';


// Login page component
class Login extends React.Component {
  constructor(props){
  	super(props);

  	this.state = {
  		username:'',
  		password:'',
  		errorMsg:''
  	}
  }

  onInputChange(event){
  	this.setState({errorMsg:""});

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
  	this.setState({errorMsg:""});
  	let user = {
		username:this.state.username,
		password:this.state.password
	}
  	let validUser = validateUserInfo(user);
  	if(validUser){
  		this.props.setUserInfo(user);
  		browserHistory.push('/home');
  	}
  	else{
  		this.setState({errorMsg:"Please make sure you have entered correct values"})
  	}
  }

  // render
  render() {
    return (
      <div className="login-container">
      		<div className="row">
      			<div className="col-10 offset-1 offset-sm-0 offset-md-0 col-sm-5 col-md-5 left-section">
      				<h1 className="welcome-details">Welcome</h1>
      			</div>
      			<div className="col-10 offset-1 offset-sm-0 offset-md-0 col-sm-5 col-md-5 right-section">
      				<div className="user-details container-fluid">
      					<div className={this.state.errorMsg==''?'errorMsg hide':'errorMsg show'}>{this.state.errorMsg}</div>
	      				<div className="row">
	      					<input type="text" className="form-control" placeholder="User name" name="username" 
	      					autoFocus="autofocus" value={this.state.username} onChange={this.onInputChange.bind(this)}/>
	      				</div>
	      				<div className="row">
	      					<input type="password" className="form-control marginTop20" placeholder="Password" name="password" value={this.state.password} onChange={this.onInputChange.bind(this)}/>
	      				</div>
	      				<div className="row marginTop20">
	      					<button className="w-100 btn login-btn" onClick={this.handleSubmit.bind(this)}>Submit</button>
	      					<p>Forgot password? (Try test, test)</p>
	      				</div>
      				</div>
      			</div>
      		</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUserInfo},dispatch);
}

export default connect(null,mapDispatchToProps)(Login);

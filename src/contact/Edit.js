import React, { Component } from 'react';
import Request from 'react-http-request';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'


class Edit extends Component {
handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <h2>Contact</h2>
        </div>
        <p className="App-intro">
         <Request
            url={"http://localhost:8000/contact/" + this.props.params.id}
            method='get'
            accept='application/json'
            content-type='application/json'
          >{
              ({error, result, loading}) => {
                if (loading) {
                  return <div>loading...</div>;
                } else {
                  
                  return <div>{ JSON.stringify(result) }</div>;
                }
              }
          }</Request>
        </p>
      </div>
      
    );
  }
}

export default Edit;

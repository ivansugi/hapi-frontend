import React, { Component } from 'react';
import Request from 'react-http-request';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'


class Index extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <h2>Contact</h2>
        </div>
        <p className="App-intro">
         <Request
            url='http://localhost:8000/contact'
            method='get'
            accept='application/json'
            content-type='application/json'
          >{
              ({error, result, loading}) => {
                if (loading) {
                  return <div>loading...</div>;
                } else {
                  
                  return <div><ul className="ContactList">{ 
                    result.body.map (
                      function(contact){
                        return <li key={contact._id}><Link to={"edit/"+contact._id}>{contact.name.first} {contact.name.last}</Link></li>
                      }
                    )
                  }</ul></div>;
                }
              }
          }</Request>
        </p>
      </div>
      
    );
  }
}

export default Index;

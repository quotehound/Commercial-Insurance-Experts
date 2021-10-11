import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ConnectStreams extends React.Component {
    componentDidMount() {
    
       const renderScript = document.createElement("script");
       renderScript.innerHTML = "window.g3cm = window.g3cm || function () { (g3cm.q = g3cm.q || []).push(arguments) }; g3cm('loadjquery', 'true'); g3cm('phonenumber', '" + this.props.phoneNumber + "'); g3cm('send', 'init');";
       
       document.body.appendChild(renderScript);
    
       const script = document.createElement("script");
       script.src = "https://api.connectstreams.com/js/connectme-v3.min.js";
       script.async = true;
       document.body.appendChild(script);

     }

     
     
     render() {

       return (
   <div className="g3cm_holder" data-module={this.props.moduleId} data-showoninit="true" data-calloninit="false" data-conversionid="" data-destination="" data-destinationext="" data-followup=""></div>
       );
   
     }
     
   }
   
export default ConnectStreams
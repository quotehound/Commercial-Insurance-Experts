import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';

import Footer from '../Footer';



class BusinessType extends Component {


    structure = (value) => {

        value.preventDefault();
        
        let type = value.currentTarget.dataset.value;
    
        this.props.setBusinessType(value)

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const lp = urlParams.get('lp_request_id');
        const zip = urlParams.get('zip');
        const businessName = urlParams.get('legal_business_name');
        const coverageTypes = urlParams.get('coverage_type');

       
        
        this.props.history.push('/profession' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&egal_business_name=' + businessName + '&coverage_type=' + coverageTypes + '&business_structure=' + type);

    }


    render() {
        return (
            <div className="back bg-white"> 
            <div className="bg-blue-500 headerText justify-center align-middle text-center">
                         <h2>Get Your Free Commercial Insurance Quote</h2>
                     </div>
           <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
           <div className="px-4 py-8 sm:px-10">
     
     
               <div className="relative pt-1">
                 <div className="flex mb-2 items-center justify-between">
                   
                   <div className="text-right">
                     <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                       20%
                     </span>
                   </div>
                 </div>
                 <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
     
                   <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
     
                 </div>
               </div>
     
     
             <div className="test"> 
               <div className="mt-6">
             
     
                 <div> 
                 <div className="relative flex justify-center text-sm leading-5 con">
                   <span className="px-2 text-black-500 text-3xl bold header">
                   How is your business structured?
                   </span>
                 </div>
               </div>
               <form onSubmit={this.structure} >
               <div className="mt-6">
                 <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">
     
                   <div className="text-sm leading-5 buttonBlock">
                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Individual / Sole Proprietor" onClick={this.structure}>Individual / Sole Proprietor</button>

                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Joint Venture" onClick={this.structure}>Joint Venture</button>

                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="LLC" onClick={this.structure}>LLC</button>

                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Partnership" onClick={this.structure}>Partnership</button>

                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Trust" onClick={this.structure}>Trust</button>

                     <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Corporation/other" onClick={this.structure}>Corporation/other</button>

     
                     
                   </div>
                 </div>
               </div>
     
               </form>
     
               </div>
     
               </div>
             </div>
     
            
     
     
           </div>
          <Footer />
     
           </div>
            
     
        )
    }
}

export default withRouter(BusinessType)

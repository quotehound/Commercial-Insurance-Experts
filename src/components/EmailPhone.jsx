import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx'
import Axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NumberFormat from 'react-number-format';

class EmailPhone extends Component {


    constructor(props) {

        super(props);

        this.state = {email_address: ''}
        this.state = {phone_home: ''}

        this.onFinish = this.onFinish.bind(this);
    }




    state = {
        error: '',
        loading: false,
        response: ''
    }

    onFinish = (values) => {

        let email = document.getElementById('email_address').value;
        let phone = document.getElementById('phone_home').value;


        var realPhone = phone.replace(/[0-9]/g, '');

        document.getElementById('tele').value = phone;

        console.log('tele is ' + phone)


        if (email.length < 2) {

            toast.error("Please enter your email");

            values.preventDefault();

        }
        if (phone.length < 10) {
            toast.error("😬 Please enter your phone number");

            values.preventDefault();
        }
        if (email.length < 2 && phone.length < 10) {
            toast.error("😬 There is an error, check the fields!")
        }
        else {
            values.preventDefault();

            toast.dismiss();


        }

        let url = window.location.href;

       
        const urlSearch = window.location.search;
 
        const urlParams = new URLSearchParams(urlSearch);
    
        const lp = urlParams.get('lp_request_id');
        const zip = urlParams.get('zip_code');
        const businessName = urlParams.get('legal_business_name');
        const coverageTypes = urlParams.get('coverage_type');
        const structure = urlParams.get('business_structure');
        const profession = urlParams.get('business_profession');
        const year = urlParams.get('year_business_founded');
        const revenue = urlParams.get('annual_revenue_over_next_12_months');
        const employee = urlParams.get('number_of_employees');
        const address = urlParams.get('address');
        const firstName = urlParams.get('first_name');
        const lastName = urlParams.get('last_name');

        this.setState({
         loading: true 
       }, this.postBusinessData(this.props.postData));
     
       this.props.history.push('/thank-you' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&legal_business_name=' + businessName + '&coverage_type=' + coverageTypes + '&business_structure=' + structure + '&business_profession=' + profession + '&year_business_founded=' + year + '&annual_revenue_over_next_12_months=' + revenue + '&number_of_employees=' + employee + '&address=' + address + '&first_name=' + firstName + '&last_name=' + lastName + '&email=' + email + '&phone_home=' + phone); 
 

    };

    postURL = (values) => {
    

       let url = window.location.href;

       
       const urlSearch = window.location.search;

       const urlParams = new URLSearchParams(urlSearch);
   
       const lp = urlParams.get('lp_request_id');
       const zip = urlParams.get('zip_code');
       const businessName = urlParams.get('legal_business_name');
       const coverageTypes = urlParams.get('coverage_type');
       const structure = urlParams.get('business_structure');
       const profession = urlParams.get('business_profession');
       const year = urlParams.get('year_business_founded');
       const revenue = urlParams.get('annual_revenue_over_next_12_months');
       const employee = urlParams.get('number_of_employees');
       const address = urlParams.get('address');
       const firstName = urlParams.get('first_name');
       const lastName = urlParams.get('last_name');


       document.getElementById('url').value = url; 

    this.props.setURL(url)

    }

    postEmail = (values) => {

        let email = document.getElementById('email_address').value;

        this.props.setEmail(email);
    }

    postPhone = (values) => {
        
        let phone = document.getElementById('phone_home').value;

        var realPhone = phone.replace(/\D/g, "");

        console.log("updated phone is " + realPhone)

        this.props.setPhone(realPhone);
    }

    postBusinessData = (postData) => {
        console.log(postData);
        Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
          params: postData,
        })

        .then((res) => {
            console.log(res)
            if (res.status === 200) {
              this.setState({
                loading: false,
              },() => {
                this.props.nextStep();
    
              this.props.callMediaAlpha();
            
              });
            }
          })
          .catch((err) => {
            if (err) throw err;
          });

    }



    render() {
        const { response, loading } = this.state

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const firstName = urlParams.get('first_name');


        return (
            <div>
                <div className="back bg-white">
                    <div className="bg-blue-500 headerText justify-center align-middle text-center">
                        <h2>Get Your Free Business Insurance Quote</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                        <div className="px-4 py-8 sm:px-10">


                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">

                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                            99%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                    <div style={{ width: "99%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                                </div>
                            </div>


                            <div className="test">
                                <ToastContainer

                                    position="top-center"
                                    autoClose={5000}
                                    newestOnTop={true}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme={'colored'}
                                />
                                <div className="mt-6">

                                    <div>
                                        <div className="relative flex justify-center text-sm leading-5 con">
                                            <span className="px-2 text-black-500 text-3xl bold header">
                                                You're Almost There, {firstName}!
                                            </span>
                                        </div>
                                    </div>
                                    <form onSubmit={this.onFinish} >
                                        <div className="mt-6">
                                            <div className="w-full flex text-sm leading-5">

                                                <div className="text-sm leading-5 buttonBlockRow">

                                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0" data-container={1}>
                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={1}>

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="email" name="email_address" placeholder="Email" id="email_address" onChange={this.postEmail} />
                                                        </div>


                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={2}>
                                                            <NumberFormat format="(###) ###-####" mask="_" className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " id="phone_home" placeholder="Phone Number" name="phone_home"
                                                                onChange={this.postPhone} />

                                                        </div>
                                                    </div>





                                                </div>


                                            </div>


                                            <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 " type="submit" onClick={this.postURL}>Get My Free Quote!</button>

                                        </div>
                                        <p className="tcpa">   <input type="hidden" id="leadid_tcpa_disclosure" /> By hitting Next below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our <a href="https://www.quotehound.com/partners"> marketing </a> and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods, or services and that I may call 1-888-567-1448 to speak with someone about obtaining an insurance quote.  I acknowledge that I may revoke my consent by emailing “STOP” to <a href="mailto:optout@quotehound.com">optout@quotehound.com.</a> I affirm that I have read and agree to this website's <a href="https://www.quotehound.com/privacy-policy"> Privacy Policy </a> and  <a href="https://www.quotehound.com/terms-conditions">Terms of Use</a></p>
                                    </form>

                                </div>
                                

                            </div>
                        </div>




                    </div>


                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(EmailPhone)
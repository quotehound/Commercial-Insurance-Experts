import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar'
import LandingPage from './LandingPage';
import BusinessName from './components/BusinessName';
import CoverageType from './components/CoverageType';

class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/business-name',
      '/coverage-select',
      '/business-type',
      '/profession',
      '/founded',
      '/revenue',
      '/employees',
      '/address',
      '/name',
      '/email-phone',
      'thank-you'
    ],

    postData: {
      lp_campaign_id: '5fe10f48a0ba0',
      lp_campaign_key: 'vfB6nWKXFx9L3jPyZc7t',
      TCPA_Consent: 'Yes',
      TCPA_Language:
        'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      Landing_Page: 'business.quotehound.com',
      first_name: '',
      last_name: '',
      phone_home: '',
      email_address: '',
      legal_business_name: '',
      business_website: '',
      address: '',
      zip_code: '',
      business_structure: '',
      ein: '',
      EIN_Number: '',
      business_profession: '',
      year_business_founded: '',
      annual_revenue_over_next_12_months: '',
      number_of_employees: '',
      coverage_type: '',
    }
  }

  changeRoute = () => {
		this.setState({
			route: '',
		});
	};

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>

          <Route path='/' exact >
              <LandingPage

                setZipCode={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      zip_code: v,
                      lp_request_id: document.getElementById('lp').value,
                    },
                  });
                }}

              />
            </Route>

          <Route path='/business-name' exact>
                <BusinessName

                  setBusinessName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        legal_business_name: v,
                      },
                    });

                    console.log(this.props.postData)
                  }}
                />
          </Route>

          <Route path='/coverage-select' exact>
                  <CoverageType 

                  setCoverageType = {(v) => {
                    this.setState({
                      postData: {
                        coverage_type: v,
                      },
                    });
                    console.log(v)
                  }}


/>
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;

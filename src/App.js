import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar'
import LandingPage from './LandingPage';
import BusinessName from './components/BusinessName';
import CoverageType from './components/CoverageType';
import BusinessType from './components/BusinessType';
import Profession from './components/Profession';
import Founded from './components/Founded';
import Revenue from './components/Revenue';
import Employees from './components/Employees';
import Address from './components/Address';
import Name from './components/Name';
import EmailPhone from './components/EmailPhone';
import ThankYou from './components/ThankYou';
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
      lp_campaign_id: '615db3dcbc748',
      lp_campaign_key: 'TFWr3YVyjdHx9qcgnCbK',
      TCPA_Consent: 'Yes',
      TCPA_Language:
        'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      Landing_Page: 'commercialinsuranceexperts.com',
      first_name: '',
      last_name: '',
      phone_home: '',
      email_address: '',
      legal_business_name: '',
      business_website: '',
      address: '',
      zip_code: '',
      business_structure: '',
      ein: 'Yes',
      business_profession: '',
      year_business_founded: '',
      annual_revenue_over_next_12_months: '',
      number_of_employees: '',
      coverage_type: '',
      useragent: navigator.userAgent,
      lp_request_id: document.getElementById('lp').value,
      entrance_url: document.referrer,
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
                      jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                      zip_code: v,
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

                }}
              />
            </Route>

            <Route path='/coverage-select' exact>
              <CoverageType

                setCoverageType={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      coverage_type: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/business-type' exact>

              <BusinessType

                setBusinessType={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      business_structure: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/profession' exact>

              <Profession
                setBusinessProfession={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      business_profession: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/founded' exact>
              <Founded
                setYearFounded={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      year_business_founded: v
                    },
                  });
                }}

              />
            </Route>

            <Route path='/revenue' exact>
              <Revenue
                setRevenue={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      annual_revenue_over_next_12_months: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/employees' exact>

              <Employees

                setEmployees={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      number_of_employees: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/address' exact>
              <Address
                setAddress={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,

                      address: v
                    }
                  })
                }}
              />
            </Route>
            
            <Route path='/name' exact>
                <Name
                  setFName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,

                        first_name: v,
                      },
                    });
                  }}

                  setLName={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,

                        last_name: v,
                      },
                    });
                  }}
                />
            </Route>

            
            <Route path='/email-phone' exact>
              <EmailPhone
                 email_address={this.state.postData.email_address}
                 phone_home={this.state.postData.phone_home}
 
                 setEmail={(v) => {
                   this.setState({
                     postData: {
                       ...this.state.postData,
                       email_address: v,
                     },
                   });
                 }}
 
                 setPhone={(v) => {
                   this.setState({
                     postData: {
 
                       ...this.state.postData,
                       phone_home: v,
                     },
                   });
                 }}
 
                 setURL={(v) => {
                   this.setState({
                     postData: {
                       ...this.state.postData,
                      entrance_url: v,
                     }
                   })
                 }}
 
                 
 
                 postData={this.state.postData}

              />
            </Route>

            <Route path='/thank-you' exact>
              <ThankYou

    
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;

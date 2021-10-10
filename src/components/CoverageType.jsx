import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';

import Footer from '../Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class CoverageType extends Component {


    constructor() {
        super()

        this.state = {
            options: []
        }
    }
    onNext = (values) => {

        document.getElementById('next').hidden = true;


        const options = this.state.options;

        let index;


        if (values.target.checked) {
            options.push(values.target.value)

            
        }
        else {
            index = options.indexOf(values.target.value)
            options.splice(index, 1)

          
        }
        
        this.checkLength(options);

        this.setState({ options: options })

       

        this.props.setCoverageType(options);

        console.log(options)

    }

    checkLength(options){

        if (options.length ==  0) {
            console.log('no')
            toast.error('Please Select A Coverage Type!')

            document.getElementById('next').hidden = true;
        }

        else {
            toast.dismiss();
            document.getElementById('next').hidden = false;

        }
    }


    step = () => {
        this.props.history.push('/next')
    }

    render() {
        return (
            <div className="back bg-white">
                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Commercial Insurance Quote</h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">

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
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        8%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "8%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">


                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What kind of coverage are you looking for?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.onNext} >
                                    <div className="mt-6">
                                        <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlock">

                                                <label className="inline-flex items-center mt-3">
                                                    <input type="checkbox" className="checkbox form-checkbox rounded h-7 w-7 text-blue-600" data-value="commercial_auto" value={"commercial_auto"} defaultChecked onChange={this.onNext} /><span className="ml-2 text-lg text-black font-medium">General Liability</span>
                                                </label>

                                                <label className="inline-flex items-center mt-3">
                                                    <input type="checkbox" className="checkbox form-checkbox rounded h-7 w-7 text-blue-600" data-value="general_liability" value={"general_liability"} onChange={this.onNext} /><span className="ml-2 text-lg text-black font-medium">Professional Liability (E&O)</span>
                                                </label>

                                                <label className="inline-flex items-center mt-3">
                                                    <input type="checkbox" className="checkbox form-checkbox rounded h-7 w-7 text-blue-600" value={"professional_liability_e&o"} onChange={this.onNext} /><span className="ml-2 text-lg text-black font-medium">Property Insurance</span>
                                                </label>

                                                <label className="inline-flex items-center mt-3">
                                                    <input type="checkbox" className="checkbox form-checkbox rounded h-7 w-7 text-blue-600" value={"workers_compensation"} onChange={this.onNext} /><span className="ml-2 text-lg text-black font-medium">Worker Compenstation</span>
                                                </label>

                                                <label className="inline-flex items-center mt-3">
                                                    <input type="checkbox" className="checkbox form-checkbox rounded h-7 w-7 text-blue-600" value={"other"} onChange={this.onNext} /><span className="ml-2 text-lg text-black font-medium">Other</span>
                                                </label>

                                            </div>
                                        </div>

                                        <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" id='next' onClick={this.step} >Next</button>
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

export default withRouter(CoverageType)

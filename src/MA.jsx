import React, { Component } from 'react'

class MA extends Component {



    componentDidMount() {

        const renderScript = document.createElement("script");

         renderScript.innerHTML = "window.MediaAlphaExchange = {'data': { 'zip': document.getElementById('zipCode').value}, 'placement_id': '4yclnD1Pz-JicFFmiW0DhV7a86VXHw','sub_1': 'test sub id', 'type': 'ad_unit', 'version': 17}; window.MediaAlphaExchange__load('mediaalpha_placeholder'); ";

         document.body.appendChild(renderScript);

         const script = document.createElement("script");

         script.src = "//insurance.mediaalpha.com/js/serve.js";
         script.async = true;
         document.body.appendChild(script);
    }


    render() {
        return (



            <div id="mediaalpha_placeholder">
            </div>
            


   
        )
    }
}

export default MA;
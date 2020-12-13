import { render } from 'less';
import getProviders from './providerData';

class ProviderSingleView {

    constructor() {

        this.providerData = getProviders();
    
        //use this to see what's included in the objects, if needed
        //console.log(this.providerData);
        document.getElementById("provider-details").innerHTML = this.renderProvider(0);
    }

    //assuming index for provider is passed in based on what button is clicked. 
    //index is assigned in provider.js

    renderProvider(index) {
        let name = this.providerData[index].name;
        document.getElementById("provider-name").innerHTML = name; 
        
        let provider = this.providerData[index];
        let demographicHTML = this.renderOneProviderDemographics(provider);

        const html = `
        <section class="row align-items-center mb-5">
            <div class="col-12 col-lg-7 col-xl-6 mb-5 mb-lg-0">
                <h1 class="provider mb-4">${provider.name}</h1>
                <address class="street-address mb-0">
                    ${provider.streetAddress}<br />
                    ${provider.cityStateZip}
                </address>
                <p class="phone">${provider.phone}</p>
                <p class="website">${provider.url}</p>
                <div class="demographics my-4">
                    ${demographicHTML}
                </div>
                <a class="btn btn-sm btn-primary btn-block px-5 py-2" href="${provider.url}" target="_blank">Visit Provider</a>
            </div>
            <div class="col-9 col-md-7 col-lg-5 mx-auto d-none d-lg-block">
                <img src="./img/undraw_software_engineer_lvl5.svg" class="img-fluid" aria-hidden="true">
            </div>
        </section>
        
        <section class="mb-5 py-lg-5">
            <h2 class="program mb-4">Internet Assistance Program</h2>
            <p>${provider.description}</p>
            <p>
                To learn more about this program, please visit: <a href="#" target="_blank">${provider.url}</a>.
            </p>
        </section>
        `

        return html;
    }

    renderOneProviderDemographics(provider) {
        let html = ""; 
        //for every demographic included in a provider, create a demographic pill
        for(let i = 0; i < provider.demographics.length; i++) {
            html += `
            <span class="badge badge-pill badge-light px-3 py-2 my-1">${provider.demographics[i]}</span>
            `
        }
        return html;
    }

    
}

window.onload = () => { new ProviderSingleView() };


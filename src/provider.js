import getProviders from './providerData';

class Providers {

    constructor() {

        this.providerData = getProviders();
        this.renderProviderList = this.renderProviderList.bind(this);
        this.providerCardUI = document.getElementById("provider-list")
        this.renderProviderList();

        //use this to see what's included in the objects, if needed
        //console.log(this.providerData);

    }

    renderProviderList() { //renders the provider list UI by taking each provider and generating a provider card

        const itemsHTML = this.providerData.map((provider, index) => this.renderOneProvider(provider, index)).join('');
        this.providerCardUI.innerHTML = `<div class="row align-items-stretch" id="provider-list">${itemsHTML}</div>`;
    }

    renderOneProvider(provider, index) {
        let demographicHTML = this.renderOneProviderDemographics(provider); //takes a provider and returns the html for the demographic pills

        let providerDetails = `
        <div class="col-12 col-md-6 col-xl-4 mb-4">
            <div class="card" id="provider-card">
                <div class="card-body">
                    <h4 class="provider card-title">${provider.name}</h4>
                    <h5 class="program mb-4">${provider.program}</h5>
                    <div class="row align-items-center mb-4">
                        <div class="details col-7">
                            <address class="street-address mb-0">${provider.streetAddress} <br /> ${provider.cityStateZip}
                            </address>
                            <p class="phone">${provider.phone}</p>
                        </div>
                        <div class="col">
                        <a class="btn btn-primary btn-block text-white py-3" id=${index}>View more</a>
                        </div>
                    </div>
                    <div class="demographics">
                        ${demographicHTML} 
                    </div>
                </div>
            </div>
        </div>`;
        return providerDetails;
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

window.onload = () => { new Providers() };


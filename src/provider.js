import getProviders from './providerData';

class Providers {

    constructor() {

        this.providerData = getProviders();
        this.renderProviderList = this.renderProviderList.bind(this);
        this.providerCardUI = document.getElementById("provider-list")
        this.renderProviderList();

        console.log(this.providerData);

    }

    renderProviderList() { //renders the provider list UI by taking each provider and generating a provider card

        const itemsHTML = this.providerData.map((provider, index) => this.renderOneProvider(provider, index)).join('');
        this.providerCardUI.innerHTML = `<div class="row" id="provider-list">${itemsHTML}</div>`;
    }

    renderOneProvider(provider, index) {
        let demographicHTML = this.renderOneProviderDemographics(provider); //takes a provider and returns the html for the demographic pills

        let providerDetails = `
        <div class="col-12 col-md-6 col-xl-4 mb-4">
            <div class="card" id="provider-card">
                <div class="card-body">
                    <h4 class="provider card-title">${provider.name}</h4>
                    <h5 class="program mb-4">${provider.program}</h5>
                    <div class="row align-items-center">
                        <div class="details col-7">
                            <address class="street-address mb-0">${provider.streetAddress} <br /> ${provider.cityStateZip}
                            </address>
                            <p class="phone">${provider.phone}</p>
                        </div>
                        <div class="col">
                        <button class="btn btn-sm btn-primary btn-block py-3" id=${index}>View more</button>
                        </div>
                    </div>
                    <p class="email mb-0"></p>

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
        //for every demographic included in a provider, create demographic pills
        for(let i = 0; i < provider.demographics.length; i++) {
            html += `
            <span class="badge badge-pill badge-light px-3 py-2 my-1">${provider.demographics[i]}</span>
            `
        }
        return html;
    }
}

window.onload = () => { new Providers() };

//                    
//                    <p class="website">${provider.program}</p>

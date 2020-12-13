import getProviders from './providerData';

class Provider {

    constructor() {
        // import provider data
        this.providerData = getProviders();
        // instance variables
        this.providerCardUI = document.getElementById("provider-list"); // CONVERT TO MAIN
        this.header = document.querySelector('#header');
        // method bindings
        this.renderProviderList = this.renderProviderList.bind(this);
        this.renderProviderListItem = this.renderProviderListItem.bind(this);
        this.renderProviderDemographics = this.renderProviderDemographics.bind(this);
        this.addEventListeners = this.addEventListeners.bind(this);
        // begin app
        this.renderProviderList();
        this.addEventListeners();
        //use this to see what's included in the objects, if needed
        //console.log(this.providerData);

        // document.getElementById("provider-details").innerHTML = this.renderProvider(0);
    }

    addEventListeners() {
        // add listeners after list is rendered to DOM
        for (let i = 0; i < this.providerData.length; i++) {
            document.querySelector(`[data-index="${i}"]`).onclick = this.renderProviderDetails.bind(this, i);
        }
    }

    renderProviderList() { 
        //renders the provider list UI by taking each provider and generating a provider card
        const itemsHTML = this.providerData.map((provider, index) => this.renderProviderListItem(provider, index)).join('');
        this.providerCardUI.innerHTML = `
            <div class="row align-items-stretch" id="provider-list">
                ${itemsHTML}
            </div>
        `;
        this.header.innerHTML = `
            <div class="row align-items-center justify-content-between mx-xl-5 py-md-5">
                <div class="col-12 col-lg-7 col-xl-6 p-lg-5">
                    <h1 class="h2 mb-4">Find the provider that best meets your needs.</h1>
                        <p>
                            Browse our collection of service providers in Lane County with assistance programs for those 
                            in need of internet service within the home. Visit the provider’s website for more information 
                            on how to qualify and apply.
                        </p>
                </div>
                <div class="col-9 col-md-7 col-lg-5 mx-auto mb-5 mb-lg-0 order-first order-lg-last">
                    <img src="./img/undraw_best_place_r685.svg" class="img-fluid" aria-hidden="true">
                </div>
            </div>
        `;
    }

    renderProviderListItem(provider, index) {
        // takes a provider and returns the html for the demographic pills
        let demographicHTML = this.renderProviderDemographics(provider); 
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
                        <a class="btn btn-primary btn-block text-white py-2" data-index="${index}">View more</a>
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

    renderProviderDemographics(provider) {
        let html = ""; 
        // for every demographic included in a provider, create a demographic pill
        for(let i = 0; i < provider.demographics.length; i++) {
            html += `
                <span class="badge badge-pill badge-light px-3 py-2 my-1">${provider.demographics[i]}</span>
            `
        }
        return html;
    }

    //assuming index for provider is passed in based on what button is clicked. 
    //index is assigned in provider.js
    renderProviderDetails(index) {
        // var index = this.id;
        console.log(index);
        //let name = this.providerData[index].name;
        //document.getElementById("provider-name").innerHTML = name; 
        
        let provider = this.providerData[index];
        let demographicHTML = this.renderProviderDemographics(provider);

        const html = `
            <section class="row align-items-center mb-5">
                <div class="col-12 col-lg-7 col-xl-6 mb-5 mb-lg-0">
                    <h1 class="provider mb-4">${provider.name}</h1>
                    <address class="street-address mb-0">
                        ${provider.streetAddress}<br />
                        ${provider.cityStateZip}
                    </address>
                    <p class="phone">${provider.phone}</p>
                    <div class="demographics my-4">
                        ${demographicHTML}
                    </div>
                    <a class="btn btn-primary btn-block px-5 py-2" href="${provider.url}" target="_blank">Visit Provider</a>
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
        `;
        // return html;
        // document.getElementById("provider-details").innerHTML = html;
        this.providerCardUI.classList.remove('container-fluid');
        this.providerCardUI.classList.add('container');
        this.providerCardUI.innerHTML = html;
        this.header.innerHTML = `
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="./providers.html">Providers</a></li>
                    <li class="breadcrumb-item active" aria-current="page" id="provider-name">${provider.name}</li>
                </ol>
            </nav>
        `;
    }

}


window.onload = () => { new Provider() };


import { render } from 'less';
import getProviders from './providerData';

class ProviderSingleView {

    constructor() {

        this.providerData = getProviders();
    
        //use this to see what's included in the objects, if needed
        //console.log(this.providerData);
        this.renderProvider(0);
    }

    //assuming index for provider is passed in based on what button is clicked. 
    //index is assigned in provider.js

    renderProvider(index) {
        let name = this.providerData[index].name;
        document.getElementById("provider-name").innerHTML = name; 

        const html = `
        <section class="row align-items-center mb-5">
            <div class="col-12 col-lg-7 col-xl-6 mb-5 mb-lg-0">
                <h1 class="provider mb-4">Provider Name</h1>
                <address class="street-address mb-0">
                    1234 SW This Place St <br />
                    Eugene, OR 97403
                </address>
                <p class="phone">555-324-6548</p>
                <p class="email mb-0">support@providerdomain.com</p>
                <p class="website">www.providerdomain.com</p>
                <div class="demographics my-4">
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">low-income</span>
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">4J students</span>
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">forest fire</span>
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">underserved communities</span>
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">veterans</span>
                    <span class="badge badge-pill badge-light px-3 py-2 my-1">seniors</span>
                </div>
                <button class="btn btn-sm btn-primary btn-block px-5 py-2">View more</button>
            </div>
            <div class="col-9 col-md-7 col-lg-5 mx-auto d-none d-lg-block">
                <img src="./img/undraw_software_engineer_lvl5.svg" class="img-fluid" aria-hidden="true">
            </div>
        </section>
        
        <section class="mb-5 py-lg-5">
            <h2 class="program mb-4">Internet Assistance Program</h2>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the 
                leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
                To learn more about this program, please visit: <a href="#" target="_blank">http://loremipsumdolorsit.amet</a>.
            </p>
        </section>

        `
    }

    
}

window.onload = () => { new ProviderSingleView() };


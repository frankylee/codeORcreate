
let navBar = document.getElementById("navbar");
navBar.innerHTML = createNavBar();

// Creates a navbar for each page 
function createNavBar() {

  return `
  <div class="container-fluid py-4">
    <a class="navbar-brand" href="./index.html">Digital Equity Solutions for Lane County</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbar" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link mr-4 text-primary" href="./index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-4" href="./providers.html">Providers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about.html">Learn more</a>
        </li>
      </ul>
    </div>
  </div>
  `;
}

window.onload = createNavBar();

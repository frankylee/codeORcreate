
let navBar = document.getElementById("home");
navBar.innerHTML = createNavBar();

// Creates a navbar for each page 
function createNavBar() {

    return `
    <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="./index.html">Home</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      <li><a href="./providers.html">Providers</a></li>
      <li><a href="./provider.html">Provider</a></li>
      <li><a href="./about.html">About</a></li>        
      </ul>
    </div>
    <!--/.nav-collapse -->
  </div>`;
}

window.onload = createNavBar();




let navBar = document.getElementById("home");
navBar.innerHTML = createNavBar();

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
      <a class="navbar-brand" href="./index.html">Event Registration</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      <li class="active"><a href="./">Home</a></li>
      <li><a href="providers.html">All Providers</a></li>
      <li><a href="provider.html">All Provider Details</a></li>
      <li><a href="about.html">About</a></li>
      </ul>
    </div>
    <!--/.nav-collapse -->
  </div>`;
}



module.exports = createNavBar();
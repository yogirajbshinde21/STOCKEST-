import React from "react";


function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
    <div class="container-fluid">
    <a  href="/">
          <img
            src="./media/stockestlogo2.jpg "
            style={{ width: "75%" }}
            alt="Logo"
          />
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="/features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/blog">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/support">Support</a>
        </li>
        
      </ul>
      
    </div>
  </div>
  </nav>
  );
}

export default Navbar;

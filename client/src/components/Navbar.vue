<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background: #FEFCFB;">
      <div class="container">
        <a class="navbar-brand" href="#" style="
          font-family: 'Volkhov';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 0.006em;
          color: #222222;">Trabook</a>
        <img class="vector" src="../assets/navbar/Vector.png" alt="Vector" style="
          width: 15px;
          height: 15px;
          background: #fefcfb;">
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Destination</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Tour</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
          </ul>
        </div>
        <div class="navbar-nav ms-auto">
          <a class="nav-link me-4" href="#" style="color: #FD8D3A;">Login</a>
          <a class="btn btn-light btn-sm" href="#" style="
            width: 100px;
            height: 40px;
            background-color: #FA7436;
            border: none;">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
  <style scoped>
  /* Agrega estilos CSS si es necesario */
  </style>
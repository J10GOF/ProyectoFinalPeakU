<template>
    <section id="two">
      <div id="ThisYourNeed">
        <h1 id="Parte1Titulo">Things you need <span>to do</span></h1>
        <p id="Pprincipal">We ensure that you’ll embark on a perfectly planned, <br> safe vacation at a price you can afford.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="imgContenedor">
                <img src="../assets/things/Group1.png" class="card-img-top">
              </div>
              <div class="card-body">
                <h5 class="card-title">Sign Up</h5>
                <p class="card-text" id="Pcard">Completes all the work associated with planning and processing</p>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="card h-100">
              <div class="imgContenedor">
                <img src="../assets/things/Group2.png" class="card-img-top">
              </div>
              <div class="card-body">
                <h5 class="card-title">Worth of Money</h5>
                <p class="card-text" id="Pcard">After successful access then book from exclusive deals & pricing</p>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="card h-100">
              <div class="imgContenedor">
                <img src="../assets/things/Group3.png" class="card-img-top">
              </div>
              <div class="card-body">
                <h5 class="card-title">Exciting Travel</h5>
                <p class="card-text" id="Pcard">Start and explore a wide range of exciting travel experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Things'
  };
  </script>
  
  <style scoped>
  #two{
    background-color: #F7F8FC;
  }
    
  #ThisYourNeed {
    background-image: url("../assets/things/Element.png");
    background-repeat: no-repeat;
    background-size: auto 120px;
    background-position: calc(100% - 60px) 100px;
    width: 1000px;
    margin: 0 auto;
    padding: 100px 20px 80px;
    border-radius: 8px;
    background-color: #F7F8FC;
}

#ThisYourNeed h1 {
    font-family: "Volkhov", serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 20px;
    color: #222222;
}

#ThisYourNeed span {
    color: #FA7436;
}

#Pprincipal {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    text-align: center;
    color: #666666;
}

#Pcard {
    text-align: left;
    margin-top: 5px;
}

.card-title {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 5px;
    color: #333333;
}

.card-img-top {
    width: 30%;
}
  </style>
  
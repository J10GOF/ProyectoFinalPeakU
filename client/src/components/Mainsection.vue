<template>
    <section id="4">
      <div id="Princpal">
        <div id="header">
          <h1 id="Parte1Titulo">Best <span>vacation plan</span></h1>
          <p id="Pprincipal">Plan your perfect vacation with our travel agency. Choose <br> among hundreds of all-inclusive offers!</p>
        </div>
        <div id="Flechas">
          <img src="../assets/mainsection/BTN.png">
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100" id="cardV">
                <div class="imgContenedor">
						<img src="../assets/mainsection/Image3.png" class="img-cardV">
					</div>
					<div class="card-body">
						<div id="CardConten">
							<span class="TituloCard">Rome, Italty</span>
							<span class="Precio">$5,42k</span>
						</div>
						<div id="footerCard">
							<p class="dias"><img src="../assets/mainsection/Navigation.png"> 10 Days Trip</p>
							<p class="calificacion"><img src="../assets/mainsection/star 1.png"> 4.8</p>
						</div>
					</div>
				</div>
          </div>
          <div class="col">
				<div class="card h-100">
					<div class="imgContenedor">
						<img src="../assets/mainsection/Image2.png" class="img-cardV">
					</div>
					<div class="card-body">
						<div id="CardConten">
							<span class="TituloCard">London,UK</span>
							<span class="Precio">$2,42k</span>
						</div>
						<div id="footerCard">
							<p class="dias"><img src="../assets/mainsection/Navigation.png"> 07 Days Trip</p>
							<p class="calificacion"><img src="../assets/mainsection/star 1.png"> 4.7</p>
						</div>
					</div>
				</div>
		  </div>
          <div class="col">
				<div class="card h-100">
					<div class="imgContenedor">
						<img src="../assets/mainsection/Image1.png" class="img-cardV">
					</div>
					<div class="card-body">
						<div id="CardConten">
							<span class="TituloCard">Osaka,Japan</span>
							<span class="Precio">$5,42k</span>
						</div>
						<div id="footerCard">
							<p class="dias"><img src="../assets/mainsection/Navigation.png"> 10 Days Trip</p>
							<p class="calificacion"><img src="../assets/mainsection/star 1.png"> 4.8</p>
						</div>
					</div>
				</div>
			</div>
        </div>
        
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Mainsection'
  };
  </script>
  
  <style scoped>
.card-img-top {
    width: 41.11223220825195px;
    height: 48px;
    position: relative;
}

.imgContenedor {
    padding-left: 18px;
}

#Flechas {
    position: relative;
    padding-left: 840px;
}

#Flechas img {
    width: auto;
    height: 30px;
}

.card {
    width: 270px;
    height: 200px;
    margin: 10px;
    padding: 40px 20px 0;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#cardV {
    width: 270px;
    height: 200px;
    margin: 10px;
    padding: none;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.img-cardV {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}


.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

#footerCard, #CardConten {
    display: flex;
    justify-content: space-between;
}

#footerCard {
    padding: 0;
    margin-bottom: 1px;
}  

#Princpal {
    width: 1000px;
    margin: 0 auto;
    padding: 100px 20px 80px;
    border-radius: 8px rgba(254, 252, 251, 1);
    background-image: url("../assets/mainsection/Element.png");
    background-repeat: no-repeat;
    background-size: auto 90px; 
    background-position: calc(100% - 100px) 100px; 
}

#header span {
    color: #FA7436;
}
  </style>
  
<template>
    <section class="exclusive-deals mb-5" style="position: relative; background: #FEFCFB;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="font-weight-bold mt-5 mb-3" style="font-family: 'Volkhov', sans-serif; font-size: 48px; color: #222222;">Exclusive <span style="color: #FA7436;">deals & discounts</span></h2>
            <div class="col-md-12">
              <p class="font-weight-light mb-2" style="font-family: 'Poppins', sans-serif; font-size: 18px; color: #666666;">Discover our fantastic early booking discounts</p>
              <p class="font-weight-light mb-5" style="font-family: 'Poppins', sans-serif; font-size: 18px; color: #666666;">and start planning your journey.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 mb-4" v-for="deal in deals" :key="deal.id">
            <div class="card bg-light border-0">
              <img :src="deal.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ deal.title }}</h5>
                <div class="d-flex align-items-center justify-content-center">
                  <img src="../assets/deals/star.png" alt="Star" class="mr-1">
                  <span class="font-weight-bold text-muted">{{ deal.rating }}</span>
                </div>
                <div class="d-flex align-items-center justify-content-left">
                  <img src="../assets/deals/Vector(1).png" alt="vector-point" class="mr-3" style="margin-right: 5px; width: 10px;">
                  <p class="card-text text-muted mt-2">{{ deal.location }}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <del class="font-weight-light">{{ deal.originalPrice }}</del>
                  <span class="font-weight-bold" style="color: #FA7436; background-color: #FFE7DB;">{{ deal.discountedPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-12 text-center" style="margin-bottom: 200px;">
            <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; margin-right: 30px; background-color: #FEFCFB;">
              <span> <img src="../assets/deals/arrow-left.svg" style=" width: 20px;"> </span>
            </button>
            <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; background-color: #FA7436;">
              <span > <img src="../assets/deals/arrow-right.svg" style=" width: 20px; color: #FFFFFF;"> </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Deals',
    data() {
      return {
        deals: [
          {
            id: 1,
            image: '../assets/deals/Image(1).png',
            title: 'Madrid',
            rating: '4.8',
            location: 'Spain',
            originalPrice: '$950',
            discountedPrice: '$850'
          },
          {
            id: 2,
            image: '../assets/deals/Image(2).png',
            title: 'Firenze',
            rating: '4.5',
            location: 'Italy',
            originalPrice: '$850',
            discountedPrice: '$750'
          },
          {
            id: 3,
            image: '../assets/deals/Image(3).png',
            title: 'Paris',
            rating: '4.4',
            location: 'France',
            originalPrice: '$699',
            discountedPrice: '$599'
          },
          {
            id: 4,
            image: '../assets/deals/Image(4).png',
            title: 'London',
            rating: '4.8',
            location: 'UK',
            originalPrice: '$950',
            discountedPrice: '$850'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos CSS personalizados aquí si es necesario */
  </style>
  
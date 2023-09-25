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
          <div class="col-lg-12">
            <div class="card-container">
              <div class="col-lg-3 mb-4" v-for="(deal) in visibleDeals" :key="deal.id">
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
          </div>
        </div>
        <div class="row mt-3 mb-5">
        <div class="col-12 text-center" style="margin-bottom: 200px;">
          <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; margin-right: 30px; background-color: #FEFCFB;" @click="prevSlide">
            <span><img src="../assets/deals/arrow-left.svg" style="width: 20px;"></span>
          </button>
          <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; background-color: #FEFCFB;" @click="nextSlide">
            <span><img src="../assets/deals/arrow-right.svg" style="width: 20px; color: #FFFFFF;"></span>
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
      // Tu array de ofertas vacío inicialmente
      deals: [],
      currentPosition: 0,
      cardsToShow: 3,
    };
  },
  computed: {
    visibleDeals() {
      // Calcular las ofertas visibles en función de la posición actual y el número de cartas a mostrar
      const startIndex = this.currentPosition;
      const endIndex = startIndex + this.cardsToShow;
      return this.deals.slice(startIndex, endIndex);
    },
  },
  methods: {
    prevSlide() {
      if (this.currentPosition > 0) {
        this.currentPosition--;
      }
    },
    nextSlide() {
      const maxPosition = this.deals.length - this.cardsToShow;
      if (this.currentPosition < maxPosition) {
        this.currentPosition++;
      }
    },
    fetchData() {
      // Realizar la solicitud HTTP GET a tu backend
      fetch('http://localhost:3001/place')
        .then(response => response.json())
        .then(data => {
          // Asignar los datos recibidos a la variable 'deals'
          this.deals = data;
        })
        .catch(error => {
          console.error('Error al cargar los datos:', error);
        });
    },
  },
  mounted() {
    // Llamar a la función fetchData cuando se monta el componente
    this.fetchData();
  },
};
</script>
  
  <style scoped>
  .card-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  }
.card-container .col-lg-3 {
  margin-right: 10px; 
}

.card-container .col-lg-3:last-child {
  margin-right: 0; 
}


  </style>
  
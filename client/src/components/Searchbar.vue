<template>
  <section class="search-bar" style="position: relative; background: #FEFCFB; margin-top: none; padding: 30px 0;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="search-box" style="background: #FFFFFF; box-shadow: 0px 2px 80px 2px rgba(0, 0, 0, 0.06); border-radius: 10px; padding: 20px; display: flex; justify-content: space-between; align-items: center;">
            <div class="d-flex">
              <div class="text-left mb-3" style="margin-right: 50px;">
                <h3 style="font-family: 'Poppins'; font-weight: 500; font-size: 18px; color: #222222;">Location</h3>
                <p style="font-family: 'Poppins'; font-weight: 400; font-size: 12px; color: #666666;">Where are you going</p>
                <input type="text" v-model="selectedCountry" @input="filterResults" placeholder="Select a country">
              </div>
              <div class="text-left mb-3" style="margin-right: 50px;">
                <h3 style="font-family: 'Poppins'; font-weight: 500; font-size: 18px; color: #222222;">Discount</h3>
                <p style="font-family: 'Poppins'; font-weight: 400; font-size: 12px; color: #666666;">Filter by discount</p>
                <input type="number" v-model="selectedDiscount" @input="filterResults" placeholder="Enter discount">
              </div>
              <div class="text-left mb-3" style="margin-right: 30px;">
                <h3 style="font-family: 'Poppins'; font-weight: 500; font-size: 18px; color: #222222;">Price</h3>
                <p style="font-family: 'Poppins'; font-weight: 400; font-size: 12px; color: #666666;">Filter by price</p>
                <input type="number" v-model="selectedPrice" @input="filterResults" placeholder="Enter price">
              </div>
            </div>
            <div class="text-left">
              <a href="#" class="btn btn-light" @click="openModal" style="background-color: #FA7436; font-family: 'Poppins'; font-weight: 500; font-size: 18px; padding: 10px 30px; border: none;">Explore Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Filtered Results</h2>
        </div>
        <div class="modal-body">
          <div v-for="result in filteredResults" :key="result.id" class="card">
            <!-- Display filtered results here -->
            <!-- You can customize how the results are displayed -->
            <h3>{{ result.name }}</h3>
            <p>Country: {{ result.country }}</p>
            <p>Discount: {{ result.discount }}</p>
            <p>Price: {{ result.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Searchbar',
  data() {
    return {
      selectedCountry: '',
      selectedDiscount: null,
      selectedPrice: null,
      showModal: false,
      results: [], // Store API results here
      filteredResults: [] // Store filtered results here
    };
  },
  methods: {
    filterResults() {
      // Implement your filtering logic here
      // You can use this.selectedCountry, this.selectedDiscount, and this.selectedPrice to filter results
      // Update this.filteredResults with the filtered results
    },
    openModal() {
  // Realizar la solicitud GET a la URL http://localhost:3001/place
  fetch('http://localhost:3001/places')
    .then(response => {
      // Verificar si la respuesta es exitosa (código de estado 200)
      if (response.status === 200) {
        // Convertir la respuesta a JSON
        return response.json();
      } else {
        // Si la respuesta no es exitosa, mostrar un mensaje de error
        throw new Error('Failed to fetch data');
      }
    })
    .then(data => {
      // Actualizar this.results con los datos obtenidos de la respuesta
      this.results = data;
      // Abrir el modal
      this.showModal = true;
    })
    .catch(error => {
      console.error(error);
      // Manejar el error de la solicitud
    });
},
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
/* Agrega estilos CSS si es necesario */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5bc0de;
  color: white;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>

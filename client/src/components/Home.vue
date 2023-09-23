<template>
    <div>
      <Navbar />  
      <Hero />
      <Searchbar />
      <Things />
      <Deals />
      <Blog />
      <testimonial />
      <Footer />
      
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue'
  import Hero from './Hero.vue'
  import Searchbar from './Searchbar.vue'
  import Things from './Things.vue'
  import Deals from './Deals.vue'
  import Blog from './Blog.vue'
  import testimonial from './Testimonial.vue'
  import Footer from './Footer.vue'
  
  
  export default {
    name: 'Home',
    components: {
      Navbar,  
      Hero,
      Searchbar,
      Things,
      Deals,
      Blog,
      testimonial,
      Footer
    }
  };
  </script>
  
  <style scoped>
  /* Your styles for the Home component */
  </style>
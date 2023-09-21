
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
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Things from './components/Things.vue'
import Searchbar from './components/Searchbar.vue'
import Mainsection from './components/Mainsection.vue'
import Deals from './components/Deals.vue'
import Blog from './components/Blog.vue'
import Testimonial from './components/Testimonial.vue'


export default {
  name: 'App',
  components: {
    Navbar, 
    Footer,
    Hero,
    Things,
    Searchbar,
    Mainsection,
    Deals,
    Blog,
    Testimonial
  }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

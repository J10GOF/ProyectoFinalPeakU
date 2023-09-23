<template>
    <section id="6">
      <div class="container">
        <div id="inicio">
          <h1 id="TituloBlog">Get updated with the latest blog</h1>
        </div>
  
        <div class="row">
          <div class="col-md-3" v-for="blogPost in blogPosts" :key="blogPost.id">
            <div class="card">
              <img :src="blogPost.image" class="card-img-top" :alt="blogPost.title">
              <div class="card-body">
                <h6 class="card-title">{{ blogPost.title }}</h6>
              </div>
              <div id="final">
                <p>{{ blogPost.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <img src="../assets/blog/Slider.png" id="SliderSeccion">
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Blog',
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            image: '../assets/blog/Image4.png',
            title: 'The Amazing Difference a Year of Traveling',
            date: 'July 27, 2021'
          },
          {
            id: 2,
            image: '../assets/blog/Image3.png',
            title: 'Travel far enough, you meet yourself',
            date: 'July 27, 2021'
          },
          {
            id: 3,
            image: '../assets/blog/Image2.png',
            title: 'How to Save Money While Visiting Africa',
            date: 'July 27, 2021'
          },
          {
            id: 4,
            image: '../assets/blog/Image1.png',
            title: 'Reflections on 5 Months of Travel: Time to Hang',
            date: 'July 27, 2021'
          }
        ]
      };
    }
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


  </style>
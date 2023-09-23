<template>
    <section class="testimonial-section py-5" style="margin-bottom: 200px; margin-top: 300px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="font-weight-bold mb-4" style="font-family: 'Volkhov', sans-serif; font-size: 48px;">
              <span style="color: #222222;">What people say</span><br>
              <span style="color: #FA7436;"> about us</span>
            </h2>
            <p class="font-italic mb-4" style="font-family: 'Roboto', sans-serif; font-size: 16px; color: #666666;">
              "Our Clients send us bunch of smilies with our services and we love them."
            </p>
            <div class="d-flex">
              <div class="slider-buttons mr-2">
                <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; margin-right: 30px; background-color: #FEFCFB;">
                  <span> <img src="../assets/testimonial/arrow-left.svg" style="width: 20px;"> </span>
                </button>
              </div>
              <div class="slider-buttons">
                <button class="btn btn-dark rounded-circle" style="width: 40px; height: 40px; background-color: #FA7436;">
                  <span> <img src="../assets/testimonial/arrow-right.svg" style="width: 20px; color: #FFFFFF;"> </span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="testimonial-box bg-white border rounded-lg shadow-lg position-relative">
              <div class="rounded-image">
                <img src="../assets/testimonial/testimonial1.png" alt="Testimonial Image" class="rounded-circle" style="position: absolute; left: -39px; top: -28px; width: 60px; height: 60px;">
              </div>
              <div class="testimonial-client-1 p-4">
                <p class="font-weight-normal mb-4" style="font-family: 'Roboto', sans-serif; font-size: 16px; color: #666666;">
                  "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                </p>
                <p class="font-weight-bold mb-2" style="font-family: 'Poppins', sans-serif; font-size: 18px; color: #222222; font-weight: bold;">Mike Taylor</p>
                <p class="font-weight-normal mb-0" style="font-family: 'Poppins', sans-serif; font-size: 14px; color: #666666;">Lahore, Pakistan</p>
              </div>
              <div class="testimonial-client-2 p-4 position-absolute" style="background: rgba(255, 255, 255, 0.9); opacity: 0.5; margin-left: -854px; width: 602px; height: 232px; left: 927px;">
                <p class="font-weight-bold mb-2" style="font-family: 'Poppins', sans-serif; font-size: 18px; color: #222222;">Chris Thomas</p>
                <p class="font-weight-normal mb-0" style="font-family: 'Poppins', sans-serif; font-size: 14px; color: #666666;">CEO of Red Button</p>
              </div>
              <img src="../assets/testimonial/Element.png" alt="Element Image" style="position: absolute; width: 159px; height: 186px; right: -137px; top: -85px;">
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Testimonial",
  };
  </script>
  
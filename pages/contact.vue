<template>
  <div>
    <nav-header />
    <!-- breadcumb area -->
    <div class="breadcumb-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 txtc ccase text-center">
            <div class="brpt">
              <h2>Contact</h2>
            </div>
            <div class="breadcumb-inner">
              <ul>
                <li>You are currently here! <i class="fas fa-angle-right"></i> </li>
                <li><a href="#">Home</a></li>
                <li><i class="fas fa-angle-right"></i></li>
                <li><span class="current">Contact</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcumb area -->
    <!-- map area -->
    <div class="contact_map_area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 witr_all_pd0">
            <div class="map_inner_area contact_map_inner">
              <iframe
                src="https://uri.amap.com/marker?position=116.473195,39.993253&name=YourLocationName&src=mypage&coordinate=gaode&callnative=0"
                width="600"
                height="400"
                style="border: 0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- consit contact area -->
    <div class="consit_contact_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="apartment_text">
              <!-- title -->
              <h1>Get in Touch</h1>
              <h2>Make An Free Consultant </h2>
            </div>
            <div class="apartment_area">
              <div class="witr_apartment_form">
                <form action="mail.php" method="post" id="contact-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="twr_form_box">
                        <input type="text" name="name" placeholder="Name*" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="twr_form_box">
                        <input type="email" name="email" placeholder="Email*" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="twr_form_box">
                        <input type="number" name="number" placeholder="Phone*" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="twr_form_box">
                        <input type="text" name="subject" placeholder="Subject*" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="twr_form_box">
                        <textarea name="comment" placeholder="Text Message*"></textarea>
                      </div>
                      <button type="submit" name="ok" class="btn">Send Message</button>
                    </div>
                    <div class="col-lg-12 text-center">
                      <p class="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Contact',
  });
  // 初始化脚本
  onMounted(() => {
    loadScriptClient();
  });
</script>

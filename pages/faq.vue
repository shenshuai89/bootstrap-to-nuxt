<template>
  <div>
    <nav-header />
    <!-- breadcumb area -->
    <div class="breadcumb-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 txtc ccase text-center">
            <div class="brpt">
              <h2>Faq</h2>
            </div>
            <div class="breadcumb-inner">
              <ul>
                <li>You are currently here! <i class="fas fa-angle-right"></i> </li>
                <li><a href="#">Home</a></li>
                <li><i class="fas fa-angle-right"></i></li>
                <li><span class="current">Faq</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcumb area -->
    <!-- consit accordion area -->
    <div class="consit_accordion_area">
      <div class="witr_all_pd0 container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <!-- title left -->
            <div class="witr_section_title">
              <div class="witr_section_title_inner text-left">
                <h2>Our FAQ</h2>
                <h3>Frequently Asked Questions?</h3>
              </div>
            </div>
            <div class="accordion_area">
              <div class="faq-part">
                <div id="accordion">
                  <div class="card card-2">
                    <div class="card-header witr_ac_card">
                      <a
                        href="#"
                        class="card-link witr_ac_style"
                        data-toggle="collapse"
                        data-target="#collapse_0f9c115"
                        aria-expanded="true"
                      >
                        01. Do You Need A Business Service?</a
                      >
                    </div>
                    <div id="collapse_0f9c115" class="collapse" data-parent="#accordion">
                      <p
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis
                        nostrud exercitation.</p
                      >
                    </div>
                  </div>
                  <!-- card -->
                  <div class="card card-2">
                    <div class="card-header witr_ac_card">
                      <a
                        href="#"
                        class="card-link witr_ac_style"
                        data-toggle="collapse"
                        data-target="#collapse_3d384b2"
                        aria-expanded="true"
                      >
                        02. Business Service A Scam?</a
                      >
                    </div>
                    <div id="collapse_3d384b2" class="collapse" data-parent="#accordion">
                      <p
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis
                        nostrud exercitation.</p
                      >
                    </div>
                  </div>
                  <!-- card -->
                  <div class="card card-2">
                    <div class="card-header witr_ac_card">
                      <a
                        href="#"
                        class="card-link witr_ac_style"
                        data-toggle="collapse"
                        data-target="#collapse_7eafcbf"
                        aria-expanded="true"
                      >
                        03. Most Out Of Your Business Service?
                      </a>
                    </div>
                    <div id="collapse_7eafcbf" class="collapse" data-parent="#accordion">
                      <p
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis
                        nostrud exercitation.</p
                      >
                    </div>
                  </div>
                  <!-- card -->
                  <div class="card card-2">
                    <div class="card-header witr_ac_card">
                      <a
                        href="#"
                        class="card-link witr_ac_style"
                        data-toggle="collapse"
                        data-target="#collapse_00db257"
                        aria-expanded="true"
                      >
                        04. The Sound Of Business Service?
                      </a>
                    </div>
                    <div id="collapse_00db257" class="collapse" data-parent="#accordion">
                      <p
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis
                        nostrud exercitation.</p
                      >
                    </div>
                  </div>
                  <!-- card -->
                  <div class="card card-2">
                    <div class="card-header witr_ac_card">
                      <a
                        href="#"
                        class="card-link witr_ac_style"
                        data-toggle="collapse"
                        data-target="#collapse_475fbc5"
                        aria-expanded="true"
                      >
                        05. Out Of The Sound Of Business Service?
                      </a>
                    </div>
                    <div id="collapse_475fbc5" class="collapse" data-parent="#accordion">
                      <p
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis
                        nostrud exercitation.</p
                      >
                    </div>
                  </div>
                  <!-- card -->
                </div>
              </div>
              <!-- faq part -->
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="single_image_area">
              <div class="single_image">
                <!-- image -->
                <img src="/assets/images/faq-img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'FaqPage',
  });
  // 初始化脚本
  onMounted(() => {
    loadScriptClient();
  });
</script>

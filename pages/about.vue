<template>
  <div>
    <div class="em40_header_area_main">
      <div class="consit-header-top">
        <div class="container">
          <!-- STYLE 1 Right Side Icon = h_top_l1  -->
          <div class="row">
            <!-- TOP LEFT -->
            <div class="col-xs-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
              <div class="top-address text-left">
                <p>
                  <span><i class="icofont-home"></i>92 Bowery St., New York, NY 10013</span>
                  <a href="mailto:info@example.com"
                    ><i class="icofont-envelope"></i>demo@example.com</a
                  >
                </p>
              </div>
            </div>
            <!-- TOP RIGHT -->
            <div class="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
              <div class="top-right-menu">
                <ul class="social-icons text_m_center text-right">
                  <li
                    ><a href="#"><i class="fab fa-facebook-f"></i></a
                  ></li>
                  <li
                    ><a href="#"><i class="fab fa-twitter"></i></a
                  ></li>
                  <li
                    ><a href="#"><i class="fab fa-pinterest-p"></i></a
                  ></li>
                  <li
                    ><a href="#"><i class="fab fa-vimeo-v"></i></a
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END HEADER TOP AREA -->
      <div class="consit-main-menu one_page hidden-xs hidden-sm witr_h_h10">
        <div class="consit_nav_area scroll_fixed postfix">
          <div class="container">
            <div class="row logo-left">
              <div class="col-md-3 col-sm-3 col-xs-4">
                <div class="logo">
                  <nuxt-link class="main_sticky_main_l" to="/" title="consit">
                    <img src="/assets/images/logo1.png" alt="consit" />
                  </nuxt-link>
                  <nuxt-link class="main_sticky_l" to="/" title="consit">
                    <img src="/assets/images/logo2.png" alt="consit" />
                  </nuxt-link>
                </div>
              </div>
              <!-- MAIN MENU -->
              <div class="col-md-9 col-sm-9 col-xs-8">
                <div class="tx_mmenu_together">
                  <nav class="consit_menu">
                    <ul class="sub-menu">
                      <li class="menu-item-has-children">
                        <nuxt-link to="/">Home</nuxt-link>
                        <ul class="sub-menu">
                          <li><a href="index.html">Home Main Page</a></li>
                          <li><a href="home-video.html">Home Video Page</a></li>
                          <li><a href="landing-page.html">Landing Page</a></li>
                        </ul>
                      </li>
                      <li><nuxt-link to="about">About</nuxt-link></li>
                      <li><a href="service.html">Service</a></li>
                      <li class="menu-item-has-children">
                        <a href="#">Elements</a>
                        <ul class="sub-menu">
                          <li class="menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul class="sub-menu">
                              <li><a href="portfolio.html">Portfolio Grid</a></li>
                              <li><a href="portfolio-3column.html">Portfolio 3Column</a></li>
                              <li><a href="portfolio-4column.html">Portfolio 4Column</a></li>
                            </ul>
                          </li>
                          <li><a href="team.html">Team</a></li>
                          <li><a href="faq.html">Faq</a></li>
                          <li><a href="testimonial.html">Testimonial</a></li>
                          <li><a href="pricing-table.html">Pricing Table</a></li>
                          <li><a href="single-service.html">Single Service</a></li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul class="sub-menu">
                          <li><a href="blog.html">Blog Gird</a></li>
                          <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                          <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                  <div class="donate-btn-header">
                    <a class="dtbtn" href="#">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MOBILE MENU Logo AREA -->
    <div class="mobile_logo_area hidden-md hidden-lg">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="mobile_menu_logo text-center">
              <a href="index.html" title="consit">
                <img src="/assets/images/logo1.png" alt="consit" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MOBILE MENU AREA -->
    <div class="home-2 mbm hidden-md hidden-lg header_area main-menu-area">
      <div class="menu_area mobile-menu">
        <nav class="consit_menu">
          <ul class="sub-menu">
            <li class="menu-item-has-children">
              <a href="#">Home</a>
              <ul class="sub-menu">
                <li><a href="index.html">Home Main Page</a></li>
                <li><a href="home-video.html">Home Video Page</a></li>
                <li><a href="landing-page.html">Landing Page</a></li>
              </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="service.html">Service</a></li>
            <li class="menu-item-has-children">
              <a href="#">Elements</a>
              <ul class="sub-menu">
                <li class="menu-item-has-children">
                  <a href="#">Portfolio</a>
                  <ul class="sub-menu">
                    <li><a href="portfolio.html">Portfolio Grid</a></li>
                    <li><a href="portfolio-3column.html">Portfolio 3Column</a></li>
                    <li><a href="portfolio-4column.html">Portfolio 4Column</a></li>
                  </ul>
                </li>
                <li><a href="team.html">Team</a></li>
                <li><a href="faq.html">Faq</a></li>
                <li><a href="testimonial.html">Testimonial</a></li>
                <li><a href="pricing-table.html">Pricing Table</a></li>
                <li><a href="single-service.html">Single Service</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Blog</a>
              <ul class="sub-menu">
                <li><a href="blog.html">Blog Gird</a></li>
                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- END MOBILE MENU AREA  -->
    <!-- breadcumb area -->
    <div class="breadcumb-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 txtc ccase text-center">
            <div class="brpt">
              <h2>About</h2>
            </div>
            <div class="breadcumb-inner">
              <ul>
                <li>You are currently here! <i class="fas fa-angle-right"></i> </li>
                <li><a href="#">Home</a></li>
                <li><i class="fas fa-angle-right"></i></li>
                <li><span class="current">About</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcumb area -->
    <!-- about area  -->
    <div class="consit_about_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="single_image_area">
              <div class="single_image single_line_option">
                <!-- image -->
                <img src="/assets/images/about-img-1.jpg" alt="image" />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="about_right_inner">
              <!-- title left -->
              <div class="witr_section_title">
                <div class="witr_section_title_inner text-left">
                  <h2>About Our Company</h2>
                  <h3>Best IT-Solutions company near the world</h3>
                  <!-- content -->
                  <p
                    >Over 25 years working in IT services developing software applicatio and mobile
                    apps for clients all over the world.</p
                  >
                </div>
              </div>
              <!-- single iteam -->
              <div class="em-service2 sleft all_color_service">
                <div class="em_service_content">
                  <div class="em_single_service_text width_height_link_0">
                    <div class="service_top_image"> </div>
                    <div class="text_box witr_s_flex">
                      <div class="service_top_text all_icon_color">
                        <div class="em-service-icon">
                          <!-- icon -->
                          <i class="ti-pie-chart"></i>
                        </div>
                      </div>
                      <div class="em-service-inner">
                        <div class="em-service-title">
                          <!-- title -->
                          <h3><a href="#">Our Company History</a></h3>
                        </div>
                        <div class="em-service-desc">
                          <p
                            >IT services developing software applications and mobile apps for
                            clients all over the world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- single iteam -->
              <div class="em-service2 sleft all_color_service">
                <div class="em_service_content">
                  <div class="em_single_service_text width_height_link_0">
                    <div class="service_top_image"> </div>
                    <div class="text_box witr_s_flex">
                      <div class="service_top_text all_icon_color">
                        <div class="em-service-icon">
                          <!-- icon -->
                          <i class="ti-bell"></i>
                        </div>
                      </div>
                      <div class="em-service-inner">
                        <div class="em-service-title">
                          <!-- title -->
                          <h3><a href="#">Company Award</a></h3>
                        </div>
                        <div class="em-service-desc">
                          <p
                            >IT services developing software applications and mobile apps for
                            clients all over the world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="witr_button_area">
                <div class="witr_btn_style mr">
                  <div class="witr_btn_sinner">
                    <a href="#" class="witr_btn">About Us</a>
                  </div>
                </div>
              </div>
              <div class="about_right_bottom_inner">
                <div class="em-service2 sleft all_color_service">
                  <div class="em_service_content">
                    <div class="em_single_service_text width_height_link_0">
                      <div class="service_top_image"> </div>
                      <div class="text_box witr_s_flex">
                        <div class="service_top_text all_icon_color">
                          <div class="em-service-icon">
                            <!-- icon -->
                            <i aria-hidden="true" class="flaticon flaticon-phone-call"></i>
                          </div>
                        </div>
                        <div class="em-service-inner">
                          <div class="em-service-title">
                            <!-- title -->
                            <h3>Quick Support</h3>
                          </div>
                          <div class="em-service-desc">
                            <p>(+6984 5698 569) </p>
                          </div>
                          <!-- button -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- consit brand area -->
    <div class="consit_brand_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="carousel_imagess_area">
              <div class="brand_active">
                <!-- single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br1.jpg" alt="image" /></a>
                  </div>
                </div>
                <!-- 02 single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br3.jpg" alt="image" /></a>
                  </div>
                </div>
                <!-- 03 single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br4.jpg" alt="image" /></a>
                  </div>
                </div>
                <!-- 04 single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br3.jpg" alt="image" /></a>
                  </div>
                </div>
                <!-- 05 single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br2.jpg" alt="image" /></a>
                  </div>
                </div>
                <!-- 06 single brand -->
                <div class="col-lg-12">
                  <div class="slide_items">
                    <!-- image -->
                    <a href="#"><img src="/assets/images/br5.jpg" alt="image" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- em service area -->
    <div class="em_service_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- title center -->
            <div class="witr_section_title">
              <div class="witr_section_title_inner text-center">
                <!-- title top -->
                <h2>Our Service</h2>
                <h3>We run all kinds of service</h3>
                <h1>that your success</h1>
              </div>
            </div>
          </div>
          <!-- single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-headphone-alt"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Unlimited Support</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
          <!-- 2 single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-announcement"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Digital Services</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
          <!-- 3 single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-desktop"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Clean Design</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
          <!-- 4 single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-palette"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Product Design</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
          <!-- 5 single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-cloud-down"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Online Marketing</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
          <!-- 6 single service -->
          <div class="col-lg-4 col-md-6">
            <div class="em_single_service">
              <div class="service_icon">
                <i class="ti-camera"></i>
              </div>
              <div class="service_inner_content">
                <h3><a href="#">Photography</a></h3>
                <p
                  >You can rely on our 24/7 support is that will gladly solve any app issue you may
                  have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <!-- call to action area -->
    <div class="call_to_action_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <!-- title left -->
            <div class="witr_section_title">
              <div class="witr_section_title_inner text-left">
                <h3>Get Free Quote</h3>
                <!-- content -->
                <p>Get solution for your company. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6">
            <div class="call_action_inner">
              <form class="mc4wp-form mc4wp-form-5214" method="post">
                <div class="mc4wp-form-fields">
                  <input type="email" name="EMAIL" placeholder="Enter your email" required="" />
                  <button type="submit" value="Subscribe">
                    <span>Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- consit tab area -->
    <div class="consit_tab_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- title center -->
            <div class="witr_section_title">
              <div class="witr_section_title_inner text-center">
                <!-- title top -->
                <h2>Why Choose Us</h2>
                <!-- title middle -->
                <h3>We Try to Give All The Facilities</h3>
                <h1>to Our Clients</h1>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="witr_adv_tab_area witr_taba_style1 tab_all_colora">
              <!-- Nav tabs -->
              <div class="witr_adv_tab_menu">
                <ul class="nav nav-tabs">
                  <!-- menu 1 -->
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tx_tab_1">
                      <span class="witr_tab_icona">
                        <!-- icon -->
                        <i class="aprova aprova-website"></i>
                      </span>
                      <strong>Web Design</strong>
                    </a>
                  </li>
                  <!-- menu 2 -->
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tx_tab_2">
                      <span class="witr_tab_icona">
                        <!-- icon -->
                        <i class="aprova aprova-bitcoin-4"></i>
                      </span>
                      <strong>Development</strong>
                    </a>
                  </li>
                  <!-- menu 3 -->
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tx_tab_3">
                      <span class="witr_tab_icona">
                        <!-- icon -->
                        <i class="aprova aprova-digital-marketing"></i>
                      </span>
                      <strong>Digital App</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="witr_adv_tab_content">
                <div class="tab-content">
                  <!-- single tab  -->
                  <!-- tab content inner -->
                  <div class="tab_content_inner tab-pane fade active show" id="tx_tab_1">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="tab_left_content_inner">
                          <!-- title left -->
                          <div class="witr_section_title">
                            <div class="witr_section_title_inner text-left">
                              <!-- title middle -->
                              <h3>IT Solution Strategy Development For Your Business</h3>
                              <!-- content -->
                              <p
                                >Consectetur adipisicing elit, sed do eiusmod tempor cididunt ut
                                labore et dolore magna aliqua.<br />
                                <br />Over 25 years working in IT services developing software tions
                                and mobile apps for clients all over the world. From its dieval
                                origins to the digital learn everything there. enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris
                              </p>
                            </div>
                          </div>
                          <!-- tab list  -->
                          <ul class="icon-list-items">
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Support via E-mail and Phone</span>
                              </a>
                            </li>
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Multi-Language Support</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- tab right image -->
                      <div class="col-lg-6 col-md-6">
                        <div class="single_image_area">
                          <div class="single_image">
                            <!-- image -->
                            <img src="/assets/images/tab-img.jpg" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 02 single tab  -->
                  <!-- tab content inner -->
                  <div class="tab_content_inner tab-pane fade" id="tx_tab_2">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="tab_left_content_inner">
                          <!-- title left -->
                          <div class="witr_section_title">
                            <div class="witr_section_title_inner text-left">
                              <!-- title middle -->
                              <h3>IT Solution Strategy Development For Your Business</h3>
                              <!-- content -->
                              <p
                                >Consectetur adipisicing elit, sed do eiusmod tempor cididunt ut
                                labore et dolore magna aliqua.<br />
                                <br />Over 25 years working in IT services developing software tions
                                and mobile apps for clients all over the world. From its dieval
                                origins to the digital learn everything there. enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris
                              </p>
                            </div>
                          </div>
                          <!-- tab list  -->
                          <ul class="icon-list-items">
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Support via E-mail and Phone</span>
                              </a>
                            </li>
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Multi-Language Support</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- tab right image -->
                      <div class="col-lg-6 col-md-6">
                        <div class="single_image_area">
                          <div class="single_image">
                            <!-- image -->
                            <img src="/assets/images/tab-img2.jpg" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 03 single tab  -->
                  <!-- tab content inner -->
                  <div class="tab_content_inner tab-pane fade" id="tx_tab_3">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="tab_left_content_inner">
                          <!-- title left -->
                          <div class="witr_section_title">
                            <div class="witr_section_title_inner text-left">
                              <!-- title middle -->
                              <h3>IT Solution Strategy Development For Your Business</h3>
                              <!-- content -->
                              <p
                                >Consectetur adipisicing elit, sed do eiusmod tempor cididunt ut
                                labore et dolore magna aliqua.<br />
                                <br />Over 25 years working in IT services developing software tions
                                and mobile apps for clients all over the world. From its dieval
                                origins to the digital learn everything there. enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris
                              </p>
                            </div>
                          </div>
                          <!-- tab list  -->
                          <ul class="icon-list-items">
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Support via E-mail and Phone</span>
                              </a>
                            </li>
                            <li class="icon-list-item">
                              <a href="#">
                                <span class="icon-list-icon"
                                  ><i class="fas fa-check-circle"></i
                                ></span>
                                <span class="icon-list-text">Multi-Language Support</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- tab right image -->
                      <div class="col-lg-6 col-md-6">
                        <div class="single_image_area">
                          <div class="single_image">
                            <!-- image -->
                            <img src="/assets/images/tab-img3.jpg" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer area -->
    <div class="witrfm_area em_footer_area">
      <!-- FOOTER MIDDLE AREA -->
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="widget widget_twr_description_widget">
                <div class="consit-description-area">
                  <a href="#"
                    ><img src="/assets/images/logo1.png" alt="Footer logo" class="logo"
                  /></a>
                  <p
                    >Round whitefish flat loach potted killifish ronquil. Long-finned pike escolar
                    northern pike escolar nor thern squawfish eel.</p
                  >
                  <p class="phone"><a href="tel:"> </a></p>
                  <div class="social-icons">
                    <a href="#"><i class="icofont-facebook"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="icofont-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="widget widget_nav_menu">
                <h2 class="widget-title">Useful Links</h2>
                <div class="menu-useful-links-container">
                  <ul class="menu">
                    <li><a href="#">Software Development</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Community Meetups</a></li>
                    <li><a href="#">Cloud and DevOps</a></li>
                    <li><a href="#">Product Design</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="widget about_us">
                <h2 class="widget-title">Address Us</h2>
                <!-- About Widget -->
                <div class="about-footer">
                  <div class="footer-widget address">
                    <div class="footer-logo"> </div>
                    <div class="footer-address">
                      <div class="footer_s_inner">
                        <div class="footer-sociala-icon">
                          <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="footer-sociala-info">
                          <p>378 FA Tower, William SBl 2123, IL, US</p>
                        </div>
                      </div>
                      <div class="footer_s_inner">
                        <div class="footer-sociala-icon">
                          <i class="fa fa-phone"></i>
                        </div>
                        <div class="footer-sociala-info">
                          <p>(+990) 698 598 631</p>
                        </div>
                      </div>
                      <div class="footer_s_inner">
                        <div class="footer-sociala-icon">
                          <i class="fa fa-globe"></i>
                        </div>
                        <div class="footer-sociala-info">
                          <p>demo@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="widget widget_nav_menu">
                <h2 class="widget-title">Navigation</h2>
                <div class="menu-navigation-container">
                  <ul class="menu">
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">About Drone</a></li>
                    <li><a href="#">Community Meetups</a></li>
                    <li><a href="#">Why Buy With Us?</a></li>
                    <li><a href="#">Blog and News</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END FOOTER MIDDLE AREA -->
      <!-- FOOTER BOTTOM AREA -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <!-- FOOTER COPYRIGHT STYLE 1 -->
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="copy-right-text">
                <!-- FOOTER COPYRIGHT TEXT -->
                <p
                  >Copyright &copy; All rights reserved.
                  <a target="_blank" href="https://www.mobanwang.com/" title="网站模板"
                    >网站模板</a
                  ></p
                >
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="footer-menu">
                <!-- FOOTER COPYRIGHT MENU -->
                <ul class="text-right">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Service</a></li>
                </ul>
              </div>
            </div>
            <!-- FOOTER COPYRIGHT STYLE 3 -->
          </div>
        </div>
      </div>
      <!-- END FOOTER BOTTOM AREA -->
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  definePageMeta({
    name: 'About',
  });

  // 初始化脚本
  onMounted(() => {
    // 在这里初始化轮播图等组件
    loadScriptClient();
    // 加载js脚本
   //  const script1 = document.createElement('script');
   //  script1.src = '/js/vendor/modernizr-2.8.3.min.js';
   //  document.body.appendChild(script1);

   //  const script2 = document.createElement('script');
   //  script2.src = '/js/vendor/jquery-3.5.1.min.js';
   //  document.body.appendChild(script2);

   //  const script3 = document.createElement('script');
   //  script3.src = '/js/bootstrap.min.js';
   //  document.body.appendChild(script3);

   //  const script4 = document.createElement('script');
   //  script4.src = '/js/isotope.pkgd.min.js';
   //  document.body.appendChild(script4);

   //  const script5 = document.createElement('script');
   //  script5.src = '/js/owl.carousel.min.js';
   //  document.body.appendChild(script5);

   //  const script6 = document.createElement('script');
   //  script6.src = '/js/jquery.nivo.slider.pack.js';
   //  document.body.appendChild(script6);

   //  const script7 = document.createElement('script');
   //  script7.src = '/js/slick.min.js';
   //  document.body.appendChild(script7);

   //  const script18 = document.createElement('script');
   //  script18.src = '/venobox/venobox.min.js';
   //  document.body.appendChild(script18);

   //  const script8 = document.createElement('script');
   //  script8.src = '/js/imagesloaded.pkgd.min.js';
   //  document.body.appendChild(script8);

   //  const script9 = document.createElement('script');
   //  script9.src = '/js/jquery.appear.js';
   //  document.body.appendChild(script9);

   //  const script10 = document.createElement('script');
   //  script10.src = '/js/jquery.knob.js';
   //  document.body.appendChild(script10);

   //  const script11 = document.createElement('script');
   //  script11.src = '/js/BeerSlider.js';
   //  document.body.appendChild(script11);

   //  const script12 = document.createElement('script');
   //  script12.src = '/js/theme-pluginjs.js';
   //  document.body.appendChild(script12);

   //  const script13 = document.createElement('script');
   //  script13.src = '/js/jquery.meanmenu.js';
   //  document.body.appendChild(script13);

   //  const script14 = document.createElement('script');
   //  script14.src = '/js/ajax-mail.js';
   //  document.body.appendChild(script14);

   //  const script15 = document.createElement('script');
   //  script15.src = '/js/theme.js';
   //  document.body.appendChild(script15);
  });
</script>

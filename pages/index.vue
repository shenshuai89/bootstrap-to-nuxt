<template>
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
                    <!-- <li><a href="about">About</a></li> -->
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
  <div class="witr_swiper_area">
    <div class="swiper-container swiper_active">
      <div class="swiper-wrapper">
        <!-- single slider -->
          <!-- :style="{ backgroundImage: `url(${slider1})` }" -->
          <!-- style="background-image:	url(/assets/images/slider1.jpg)" -->
        <div
          class="swiper-slide d1 t1 m1 witr_swiper_height"
          :style="{ backgroundImage: `url(${slider1})` }"
        >
          <div class="witr_sw_text_area text-left">
            <div class="witr_swiper_content">
              <h1>Welcome To Business !</h1>
              <h2>High quality design</h2>
              <h3>digital product</h3>
              <!-- content -->
              <p
                >But in practice, as many differences exist within these is resolve similar problems
                in the future.</p
              >
              <!-- btn gradient style -->
              <div class="slider_btn">
                <div class="witr_btn_style">
                  <div class="witr_btn_sinner">
                    <!-- button -->
                    <a class="witr_btn" href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- single slider -->
        <div
          class="swiper-slide d1 t1 m1 witr_swiper_height"
          :style="{ backgroundImage: `url(${slider2})` }"
        >
          <div class="witr_sw_text_area text-left">
            <div class="witr_swiper_content">
              <h2>High quality digital</h2>
              <!-- title -->
              <h3>service product</h3>
              <!-- content -->
              <p
                >But in practice, as many differences exist within these is resolve similar problems
                in the future.</p
              >
              <!-- btn gradient style -->
              <div class="slider_btn">
                <div class="witr_btn_style">
                  <div class="witr_btn_sinner">
                    <!-- button -->
                    <a class="witr_btn" href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-scrollbar"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-buttonf-next"></div>
    <div class="swiper-buttonf-prev"></div>
  </div>
  <!-- end slider area -->
  <!-- swiper bottom area -->
  <div class="swiper_bottom_area">
    <div class="container">
      <div class="row">
        <!-- single iteam -->
        <div class="col-lg-4 col-md-6">
          <div class="service-item all_color_service width_height_link_0 text-center">
            <div class="service_top_image">
              <!-- image -->
            </div>
            <div class="text_box all_icon_color">
              <!-- icon -->
              <i class="ti-crown"></i>
              <h3><a href="#">Awesome Work Place</a></h3>
              <!-- content -->
              <p
                >You can rely on our 24/7 tech support that will gladly solve any app issue you may
                have.
              </p>
            </div>
          </div>
        </div>
        <!-- 02 single iteam -->
        <div class="col-lg-4 col-md-6">
          <div class="service-item all_color_service width_height_link_0 text-center">
            <div class="service_top_image">
              <!-- image -->
            </div>
            <div class="text_box all_icon_color">
              <!-- icon -->
              <i class="ti-fullscreen"></i>
              <h3><a href="#">Unlimited facility</a></h3>
              <!-- content -->
              <p
                >You can rely on our 24/7 tech support that will gladly solve any app issue you may
                have.
              </p>
            </div>
          </div>
        </div>
        <!-- 03 single iteam -->
        <div class="col-lg-4 col-md-6">
          <div class="service-item all_color_service width_height_link_0 text-center">
            <div class="service_top_image">
              <!-- image -->
            </div>
            <div class="text_box all_icon_color">
              <!-- icon -->
              <i class="ti-desktop"></i>
              <h3><a href="#">Responsive Design</a></h3>
              <!-- content -->
              <p
                >You can rely on our 24/7 tech support that will gladly solve any app issue you may
                have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                          >IT services developing software applications and mobile apps for clients
                          all over the world.
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
                          >IT services developing software applications and mobile apps for clients
                          all over the world.
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
  <!-- consit portfolio area -->
  <div class="consit_portfolio_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <!-- title center -->
          <div class="witr_section_title">
            <div class="witr_section_title_inner text-center">
              <h2>Our Portfolio</h2>
              <h3>Our Latest Case Study For</h3>
              <!-- title bottom -->
              <h1>Your Business</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="clearfix kicuakta">
            <div class="col-md-12">
              <div class="portfolio_nav wittr_pfilter_menu">
                <ul id="filter" class="filter_menu">
                  <li class="current_menu_item" data-filter="*">All Show</li>
                  <li data-filter=".branding">Branding</li>
                  <li data-filter=".ui-design">UI Design</li>
                  <li data-filter=".ux-research">UX Research</li>
                  <li data-filter=".web-design">Web Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="em_load pstyle_1 pstyle4">
            <div class="prot_wrap row portfolio_active">
              <!-- single portfolio -->
              <div
                class="col-xl-3 grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 branding ui-design"
              >
                <div class="single_protfolio">
                  <div class="prot_thumb">
                    <img src="/assets/images/b1.jpg" alt="image" />
                    <div class="prot_content">
                      <div class="prot_content_inner">
                        <div class="picon">
                          <a
                            class="portfolio-icon venobox vbox-item"
                            data-gall="myportfolio"
                            href="#"
                            ><i class="fas fa-arrows-alt"></i
                          ></a>
                          <a href="#"><i class="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="pprotfolio4 positi_3">
                      <div class="porttitle_inner4">
                        <h3><a href="#">Demo Media Title 1</a></h3>
                        <p>
                          <span class="category-item-p"> Branding </span>
                          <span class="category-item-p"> UI Design</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 02 single portfolio -->
              <div
                class="col-xl-3 grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 ux-research web-design"
              >
                <div class="single_protfolio">
                  <div class="prot_thumb">
                    <img src="/assets/images/b2.jpg" alt="image" />
                    <div class="prot_content">
                      <div class="prot_content_inner">
                        <div class="picon">
                          <a
                            class="portfolio-icon venobox vbox-item"
                            data-gall="myportfolio"
                            href="#"
                            ><i class="fas fa-arrows-alt"></i
                          ></a>
                          <a href="#"><i class="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="pprotfolio4 positi_3">
                      <div class="porttitle_inner4">
                        <h3><a href="#">Demo Media Title 2</a></h3>
                        <p>
                          <span class="category-item-p"> UX Research</span>
                          <span class="category-item-p"> Web Design </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 03 single portfolio -->
              <div
                class="col-xl-3 grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 branding ux-research"
              >
                <div class="single_protfolio">
                  <div class="prot_thumb">
                    <img src="/assets/images/b3.jpg" alt="image" />
                    <div class="prot_content">
                      <div class="prot_content_inner">
                        <div class="picon">
                          <a
                            class="portfolio-icon venobox vbox-item"
                            data-gall="myportfolio"
                            href="#"
                            ><i class="fas fa-arrows-alt"></i
                          ></a>
                          <a href="#"><i class="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="pprotfolio4 positi_3">
                      <div class="porttitle_inner4">
                        <h3><a href="#">Demo Media Title 3</a></h3>
                        <p>
                          <span class="category-item-p"> Branding </span>
                          <span class="category-item-p">UX Research</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 04 single portfolio -->
              <div
                class="col-xl-3 grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 ui-design web-design"
              >
                <div class="single_protfolio">
                  <div class="prot_thumb">
                    <img src="/assets/images/b4.jpg" alt="image" />
                    <div class="prot_content">
                      <div class="prot_content_inner">
                        <div class="picon">
                          <a
                            class="portfolio-icon venobox vbox-item"
                            data-gall="myportfolio"
                            href="#"
                            ><i class="fas fa-arrows-alt"></i
                          ></a>
                          <a href="#"><i class="fas fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="pprotfolio4 positi_3">
                      <div class="porttitle_inner4">
                        <h3><a href="#">Demo Media Title 4</a></h3>
                        <p>
                          <span class="category-item-p"> Branding </span>
                          <span class="category-item-p"> UI Design</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- portfolio btn -->
          <div class="portfolio_btn_inner text-center">
            <div class="witr_button_area">
              <div class="witr_btn_style mr text-center">
                <div class="witr_btn_sinner">
                  <a href="#" class="witr_gbtn">View All Portfolio</a>
                </div>
              </div>
            </div>
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
  <!-- counter up area2 -->
  <div class="counter_up_area">
    <div class="container">
      <div class="row counter_inner_area">
        <!-- single counter -->
        <div class="col-lg-3 col-md-6">
          <div class="witr_counter_single all_counter_color">
            <div class="witr_counter_number_inn">
              <!-- number -->
              <h3 class="counter">25</h3>
              <!-- symbol -->
              <span>K</span>
              <!-- content -->
              <h4>Happy Customer </h4>
            </div>
            <!-- counter part -->
          </div>
        </div>
        <!-- 02 single counter -->
        <div class="col-lg-3 col-md-6">
          <div class="witr_counter_single all_counter_color">
            <div class="witr_counter_number_inn">
              <!-- number -->
              <h3 class="counter">659</h3>
              <!-- symbol -->
              <span>+</span>
              <!-- content -->
              <h4>Employer Solutions </h4>
            </div>
            <!-- counter part -->
          </div>
        </div>
        <!-- 03 single counter -->
        <div class="col-lg-3 col-md-6">
          <div class="witr_counter_single all_counter_color">
            <div class="witr_counter_number_inn">
              <!-- number -->
              <h3 class="counter">487</h3>
              <!-- symbol -->
              <span>+</span>
              <!-- content -->
              <h4>Online Support </h4>
            </div>
            <!-- counter part -->
          </div>
        </div>
        <!-- 04 single counter -->
        <div class="col-lg-3 col-md-6">
          <div class="witr_counter_single all_counter_color">
            <div class="witr_counter_number_inn">
              <!-- number -->
              <h3 class="counter">346</h3>
              <!-- symbol -->
              <span>+</span>
              <!-- content -->
              <h4>Project Completed </h4>
            </div>
            <!-- counter part -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- consit skill area -->
  <div class="consit_skill_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 witr_all_pd0">
          <div class="single_image_area">
            <div class="single_image single_line_option">
              <!-- image -->
              <img src="/assets/images/skill-img.jpg" alt="image" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 witr_all_pd0">
          <div class="skill_inner_area">
            <!-- title left -->
            <div class="witr_section_title">
              <div class="witr_section_title_inner text-left">
                <!-- title top -->
                <h2>Skill Our Company</h2>
                <h3> IT-Solutions company in </h3>
                <!-- title bottom -->
                <h1>near the world</h1>
                <!-- content -->
                <p
                  >Over 25 years working in IT services developing software plications and mobile
                  apps for clients all over the world.
                </p>
              </div>
            </div>
            <!-- single progress -->
            <div class="witr_single_progress all_color_bar">
              <div class="witr_title2">
                <span class="witr_label">Digital Marketing</span>
              </div>
              <div class="progress witr_progress-style2">
                <div
                  class="progress-bar wow fadeInLeft animated animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  style="
                    width: 90%;
                    visibility: visible;
                    animation-duration: 1.5s;
                    animation-delay: 0.2s;
                    animation-name: fadeInLeft;
                  "
                >
                  <span class="witr_percent">90%</span>
                </div>
              </div>
            </div>
            <!-- single progress -->
            <div class="witr_single_progress all_color_bar">
              <div class="witr_title2">
                <span class="witr_label">Web Development</span>
              </div>
              <div class="progress witr_progress-style2">
                <div
                  class="progress-bar wow fadeInLeft animated animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  style="
                    width: 80%;
                    visibility: visible;
                    animation-duration: 1.5s;
                    animation-delay: 0.2s;
                    animation-name: fadeInLeft;
                  "
                >
                  <span class="witr_percent">80%</span>
                </div>
              </div>
            </div>
            <!-- single progress -->
            <div class="witr_single_progress all_color_bar">
              <div class="witr_title2">
                <span class="witr_label">Market Analysis</span>
              </div>
              <div class="progress witr_progress-style2">
                <div
                  class="progress-bar wow fadeInLeft animated animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  style="
                    width: 70%;
                    visibility: visible;
                    animation-duration: 1.5s;
                    animation-delay: 0.2s;
                    animation-name: fadeInLeft;
                  "
                >
                  <span class="witr_percent">70%</span>
                </div>
              </div>
            </div>
            <!-- single progress -->
            <div class="witr_single_progress all_color_bar">
              <div class="witr_title2">
                <span class="witr_label">UI&UX Designer</span>
              </div>
              <div class="progress witr_progress-style2">
                <div
                  class="progress-bar wow fadeInLeft animated animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  style="
                    width: 65%;
                    visibility: visible;
                    animation-duration: 1.5s;
                    animation-delay: 0.2s;
                    animation-name: fadeInLeft;
                  "
                >
                  <span class="witr_percent">65%</span>
                </div>
              </div>
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
  <!-- pricing plane area -->
  <div class="pricing_plane_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- title center -->
          <div class="witr_section_title">
            <div class="witr_section_title_inner text-center">
              <!-- title top -->
              <h2>Pricing Plan</h2>
              <h3>Small Pricing Plan For Your</h3>
              <!-- title bottom -->
              <h1>Creative Business</h1>
            </div>
          </div>
        </div>
        <!-- single priceing plane -->
        <div class="col-lg-4 col-md-6">
          <div class="pricing_area all_pricing_color">
            <div class="pricing-part pricing_style_5">
              <!-- ribon -->
              <div class="witr_ribon_text">
                <h3>Basice </h3>
              </div>
              <!-- icon -->
              <div class="witr_pricing_icon">
                <i class="aprova aprova-startup1"></i>
              </div>
              <!--  price content -->
              <div class="price_offer_line">
                <!-- price/currency/month -->
                <h5><sub>$</sub>39.99 <span>Monthly Package</span></h5>
              </div>
              <div class="witri_texti_list">
                <ul>
                  <li class="themex-item-b10c86d"><i class=""></i>Built-in HD Camera</li>
                  <li class="themex-item-c877561"><i class=""></i>Smartphone Control </li>
                  <li class="themex-item-1511aef"><i class=""></i>360 Degree Stunt Flip</li>
                  <li class="themex-item-c6abcc3"><i class=""></i>One Key Return </li>
                </ul>
              </div>
              <!-- button -->
              <div class="witr_btnp_color">
                <a class="btn" href="#">Buy Now</a>
              </div>
            </div>
            <!-- pricing part -->
          </div>
        </div>
        <!-- 02 single priceing plane -->
        <div class="col-lg-4 col-md-6">
          <div class="pricing_area all_pricing_color pricing_area2">
            <div class="pricing-part pricing_style_5">
              <!-- ribon -->
              <div class="witr_ribon_text">
                <h3>Standard </h3>
              </div>
              <!-- icon -->
              <div class="witr_pricing_icon">
                <i class="aprova aprova-bitcoin-7"></i>
              </div>
              <!--  price content -->
              <div class="price_offer_line">
                <!-- price/currency/month -->
                <h5><sub>$</sub>79.99<span>Yearly Package</span></h5>
              </div>
              <div class="witri_texti_list">
                <ul>
                  <li class="themex-item-b10c86d"><i class=""></i>Built-in HD Camera</li>
                  <li class="themex-item-c877561"><i class=""></i>Smartphone Control </li>
                  <li class="themex-item-1511aef"><i class=""></i>360 Degree Stunt Flip</li>
                  <li class="themex-item-c6abcc3"><i class=""></i>One Key Return </li>
                </ul>
              </div>
              <!-- button -->
              <div class="witr_btnp_color">
                <a class="btn" href="#">Buy Now</a>
              </div>
            </div>
            <!-- pricing part -->
          </div>
        </div>
        <!-- 03 single priceing plane -->
        <div class="col-lg-4 col-md-6">
          <div class="pricing_area all_pricing_color">
            <div class="pricing-part pricing_style_5">
              <!-- ribon -->
              <div class="witr_ribon_text">
                <h3>Extended </h3>
              </div>
              <!-- icon -->
              <div class="witr_pricing_icon">
                <i class="aprova aprova-lightbulb"></i>
              </div>
              <!--  price content -->
              <div class="price_offer_line">
                <!-- price/currency/month -->
                <h5><sub>$</sub>99.99<span> Lifetime Package</span></h5>
              </div>
              <div class="witri_texti_list">
                <ul>
                  <li class="themex-item-b10c86d"><i class=""></i>Built-in HD Camera</li>
                  <li class="themex-item-c877561"><i class=""></i>Smartphone Control </li>
                  <li class="themex-item-1511aef"><i class=""></i>360 Degree Stunt Flip</li>
                  <li class="themex-item-c6abcc3"><i class=""></i>One Key Return </li>
                </ul>
              </div>
              <!-- button -->
              <div class="witr_btnp_color">
                <a class="btn" href="#">Buy Now</a>
              </div>
            </div>
            <!-- pricing part -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- consit team area -->
  <div class="consit_team_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- title center -->
          <div class="witr_section_title">
            <div class="witr_section_title_inner text-center">
              <!-- title top -->
              <h2>Our Team</h2>
              <!-- title middle -->
              <h3>Our Beautifully Creative</h3>
              <!-- title bottom -->
              <h1>Team Member</h1>
            </div>
          </div>
        </div>
        <!-- single team -->
        <div class="col-lg-3 col-md-6">
          <div class="team-part all_color_team">
            <div class="witr_team_section">
              <!-- image -->
              <img src="/assets/images/team1.png" alt="image" />
              <div class="team_overlay_icon all_team_icon_o_color">
                <!-- icon -->
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </div>
            </div>
            <!-- team sec -->
            <div class="witr_team_content all_content_bg_color text-center">
              <!-- title -->
              <h5><a href="#">Amalia Edinson</a></h5>
              <!-- subtitle -->
              <span>Marketing Manager </span>
            </div>
            <!-- team conten -->
          </div>
        </div>
        <!-- 02 single team -->
        <div class="col-lg-3 col-md-6">
          <div class="team-part all_color_team">
            <div class="witr_team_section">
              <!-- image -->
              <img src="/assets/images/team2.png" alt="image" />
              <div class="team_overlay_icon all_team_icon_o_color">
                <!-- icon -->
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </div>
            </div>
            <!-- team sec -->
            <div class="witr_team_content all_content_bg_color text-center">
              <!-- title -->
              <h5><a href="#">Marisa Frontier</a></h5>
              <!-- subtitle -->
              <span>IT Devlopment</span>
            </div>
            <!-- team conten -->
          </div>
        </div>
        <!-- 03 single team -->
        <div class="col-lg-3 col-md-6">
          <div class="team-part all_color_team">
            <div class="witr_team_section">
              <!-- image -->
              <img src="/assets/images/team3.png" alt="image" />
              <div class="team_overlay_icon all_team_icon_o_color">
                <!-- icon -->
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </div>
            </div>
            <!-- team sec -->
            <div class="witr_team_content all_content_bg_color text-center">
              <!-- title -->
              <h5><a href="#">Maria Andaloro</a></h5>
              <!-- subtitle -->
              <span>Support Manager</span>
            </div>
            <!-- team conten -->
          </div>
        </div>
        <!-- 04 single team -->
        <div class="col-lg-3 col-md-6">
          <div class="team-part all_color_team">
            <div class="witr_team_section">
              <!-- image -->
              <img src="/assets/images/team4.png" alt="image" />
              <div class="team_overlay_icon all_team_icon_o_color">
                <!-- icon -->
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </div>
            </div>
            <!-- team sec -->
            <div class="witr_team_content all_content_bg_color text-center">
              <!-- title -->
              <h5><a href="#">Avan Smith</a></h5>
              <!-- subtitle -->
              <span>CO-Funder </span>
            </div>
            <!-- team conten -->
          </div>
        </div>
        <div class="team_bottom_contact text-center">
          <h2 class="elementor-heading-title elementor-size-default"
            >Call this number to talk to us directly : +965 695 4589 694</h2
          >
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
  <!-- testimonial area -->
  <div class="testimonial_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- title center -->
          <div class="witr_section_title">
            <div class="witr_section_title_inner text-center">
              <!-- title top -->
              <h2>Testimonial</h2>
              <h3>What Happy Clients Say?</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row testimonial_active">
        <!-- single testimonial -->
        <div class="col-lg-12">
          <div class="item guttergs">
            <div class="single_creativeItem post_t6">
              <div class="box-size">
                <div class="testiCreCon">
                  <i class="fa fa-quote-right"></i>
                  <!-- content -->
                  <p
                    >Following best practices and pro edures provided by lead izations in the
                    industry, our cles disinfecting long establi that</p
                  >
                </div>
                <div class="em_test_thumb">
                  <img src="/assets/images/test4.png" alt="" />
                </div>
                <div class="testAuthor">
                  <h6>Malina Alex</h6>
                  <span> Designer </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 02 single testimonial -->
        <div class="col-lg-12">
          <div class="item guttergs">
            <div class="single_creativeItem post_t6">
              <div class="box-size">
                <div class="testiCreCon">
                  <i class="fa fa-quote-right"></i>
                  <!-- content -->
                  <p
                    >Following best practices and pro edures provided by lead izations in the
                    industry, our cles disinfecting long establi that</p
                  >
                </div>
                <div class="em_test_thumb">
                  <img src="/assets/images/test2.png" alt="" />
                </div>
                <div class="testAuthor">
                  <h6>Martha Alex</h6>
                  <span> Manager </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 03 single testimonial -->
        <div class="col-lg-12">
          <div class="item guttergs">
            <div class="single_creativeItem post_t6">
              <div class="box-size">
                <div class="testiCreCon">
                  <i class="fa fa-quote-right"></i>
                  <!-- content -->
                  <p
                    >Following best practices and pro edures provided by lead izations in the
                    industry, our cles disinfecting long establi that</p
                  >
                </div>
                <div class="em_test_thumb">
                  <img src="/assets/images/test1.png" alt="" />
                </div>
                <div class="testAuthor">
                  <h6>David Markers</h6>
                  <span> Co- Of Officer </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 04 single testimonial -->
        <div class="col-lg-12">
          <div class="item guttergs">
            <div class="single_creativeItem post_t6">
              <div class="box-size">
                <div class="testiCreCon">
                  <i class="fa fa-quote-right"></i>
                  <!-- content -->
                  <p
                    >Following best practices and pro edures provided by lead izations in the
                    industry, our cles disinfecting long establi that</p
                  >
                </div>
                <div class="em_test_thumb">
                  <img src="/assets/images/test3.png" alt="" />
                </div>
                <div class="testAuthor">
                  <h6>Chicana males</h6>
                  <span> Marketing </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- consit blog area -->
  <div class="consit_blog_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- title center -->
          <div class="witr_section_title">
            <div class="witr_section_title_inner text-center">
              <!-- title top -->
              <h2>Recent Article</h2>
              <!-- title middle -->
              <h3>See Our Latest Blog Posts</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <!-- Blog Section -->
          <div class="witr_blog_area12">
            <div class="blog_active">
              <!-- single blog -->
              <div class="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                <div class="busi_singleBlog">
                  <!-- image -->
                  <div class="witr_sb_thumb">
                    <a href="#"> <img src="/assets/images/b1.jpg" alt="image" /> </a>
                    <div class="witr_top_category">
                      <!-- category -->
                      <ul class="post-categories">
                        <li><a href="#">Developer</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="all_blog_color">
                    <div class="witr_blog_con bs5">
                      <!--  post meta -->
                      <span
                        ><a href="#"><i class="icofont-user-alt-3"></i> Consit </a></span
                      >
                      <span
                        ><a href="#"><i class="icofont-ui-clock"></i></a> 24 Aug 2023</span
                      >
                      <!-- title -->
                      <h2
                        ><a href="single-blog.html"
                          >I Will Tell You The Truth About Nonprofit</a
                        ></h2
                      >
                      <!-- content -->
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                      <div class="em-blog-content-area_adn">
                        <div class="learn_more_adn">
                          <a class="learn_btn adnbtn2" href="#">Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 02 single blog -->
              <div class="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                <div class="busi_singleBlog">
                  <!-- image -->
                  <div class="witr_sb_thumb">
                    <a href="#"> <img src="/assets/images/b2.jpg" alt="image" /> </a>
                    <div class="witr_top_category">
                      <!-- category -->
                      <ul class="post-categories">
                        <li><a href="#">Support</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="all_blog_color">
                    <div class="witr_blog_con bs5">
                      <!--  post meta -->
                      <span
                        ><a href="#"><i class="icofont-user-alt-3"></i> Consit </a></span
                      >
                      <span
                        ><a href="#"><i class="icofont-ui-clock"></i></a> 29 Aug 2023</span
                      >
                      <!-- title -->
                      <h2
                        ><a href="single-blog.html"
                          >5 About Nonprofit That You Can’t Learn From</a
                        ></h2
                      >
                      <!-- content -->
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                      <div class="em-blog-content-area_adn">
                        <div class="learn_more_adn">
                          <a class="learn_btn adnbtn2" href="#">Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 03 single blog -->
              <div class="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                <div class="busi_singleBlog">
                  <!-- image -->
                  <div class="witr_sb_thumb">
                    <a href="#"> <img src="/assets/images/b3.jpg" alt="image" /> </a>
                    <div class="witr_top_category">
                      <!-- category -->
                      <ul class="post-categories">
                        <li><a href="#">It Service</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="all_blog_color">
                    <div class="witr_blog_con bs5">
                      <!--  post meta -->
                      <span
                        ><a href="#"><i class="icofont-user-alt-3"></i> Consit </a></span
                      >
                      <span
                        ><a href="#"><i class="icofont-ui-clock"></i></a>24 Jun 2023</span
                      >
                      <!-- title -->
                      <h2
                        ><a href="single-blog.html">What Will Nonprofit Be Like In The Next</a></h2
                      >
                      <!-- content -->
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                      <div class="em-blog-content-area_adn">
                        <div class="learn_more_adn">
                          <a class="learn_btn adnbtn2" href="#">Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 04 single blog -->
              <div class="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                <div class="busi_singleBlog">
                  <!-- image -->
                  <div class="witr_sb_thumb">
                    <a href="#"> <img src="/assets/images/b4.jpg" alt="image" /> </a>
                    <div class="witr_top_category">
                      <!-- category -->
                      <ul class="post-categories">
                        <li><a href="#">Management</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="all_blog_color">
                    <div class="witr_blog_con bs5">
                      <!--  post meta -->
                      <span
                        ><a href="#"><i class="icofont-user-alt-3"></i> Consit </a></span
                      >
                      <span
                        ><a href="#"><i class="icofont-ui-clock"></i></a> 24 Aug 2023</span
                      >
                      <!-- title -->
                      <h2
                        ><a href="single-blog.html"
                          >7 Secrets About Nonprofit That Has Never Been</a
                        ></h2
                      >
                      <!-- content -->
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                      <div class="em-blog-content-area_adn">
                        <div class="learn_more_adn">
                          <a class="learn_btn adnbtn2" href="#">Read More </a>
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
</template>

<script setup>
  import { onMounted } from 'vue';
  import { loadScriptClient } from '~/composables/loadScript';
  // vue script内引入assets图片的方法
  const slider1 = new URL('~/public/assets/images/slider1.jpg', import.meta.url).href;
  const slider2 = new URL('~/public/assets/images/slider2.jpg', import.meta.url).href;
  defineOptions({
    name: 'IndexPage',
  });
  // Nuxt 3 使用 useHead 设置页面元信息
  useHead({
    title: 'Consit – Business Consulting Responsive Website Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Business Consulting Responsive Website Template' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'x-ua-compatible', content: 'ie=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  });

  // 初始化脚本
  onMounted(() => {
    loadScriptClient();
    // 在这里初始化轮播图等组件
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

<style>
  /* 引入全局样式 */
  /* 自定义样式 */
</style>

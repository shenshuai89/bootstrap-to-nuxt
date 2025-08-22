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
                  <NuxtLink class="main_sticky_main_l" to="/" title="consit">
                    <img src="/assets/images/logo1.png" alt="consit" />
                  </NuxtLink>
                  <NuxtLink class="main_sticky_l" to="/" title="consit">
                    <img src="/assets/images/logo2.png" alt="consit" />
                  </NuxtLink>
                </div>
              </div>
              <!-- MAIN MENU -->
              <div class="col-md-9 col-sm-9 col-xs-8">
                <div class="tx_mmenu_together">
                  <nav class="consit_menu">
                    <ul class="sub-menu">
                      <li class="menu-item-has-children">
                        <NuxtLink to="/">Home</NuxtLink>
                        <ul class="sub-menu">
                          <li><NuxtLink to="/">Home Main Page</NuxtLink></li>
                          <li><NuxtLink to="/homeVideo">Home Video Page</NuxtLink></li>
                          <li><NuxtLink to="/landingPage">Landing Page</NuxtLink></li>
                        </ul>
                      </li>
                      <li><NuxtLink to="/about">About</NuxtLink></li>
                      <!-- <li><a href="about">About</a></li> -->
                      <li><NuxtLink to="/service">Service</NuxtLink></li>
                      <li class="menu-item-has-children">
                        <a href="#">Elements</a>
                        <ul class="sub-menu">
                          <li class="menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul class="sub-menu">
                              <li><NuxtLink to="/portfolio">Portfolio Grid</NuxtLink></li>
                              <li><NuxtLink to="/portfolio3column">Portfolio 3Column</NuxtLink></li>
                              <li><NuxtLink to="/portfolio4column">Portfolio 4Column</NuxtLink></li>
                            </ul>
                          </li>
                          <li><NuxtLink to="/team">Team</NuxtLink></li>
                          <li><NuxtLink to="/faq">Faq</NuxtLink></li>
                          <li><NuxtLink to="/testimonial">Testimonial</NuxtLink></li>
                          <li><NuxtLink to="/pricingTable">Pricing Table</NuxtLink></li>
                          <li><NuxtLink to="/singleService">Single Service</NuxtLink></li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <NuxtLink to="/blog">Blog</NuxtLink>
                        <ul class="sub-menu">
                          <li><NuxtLink to="/blog">Blog Gird</NuxtLink></li>
                          <li><NuxtLink to="/blogLeft">Blog Left Sidebar</NuxtLink></li>
                          <li><NuxtLink to="/blogRight">Blog Right Sidebar</NuxtLink></li>
                        </ul>
                      </li>
                      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
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
              <NuxtLink to="/" title="consit">
                <img src="/assets/images/logo1.png" alt="consit" />
              </NuxtLink>
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
              <NuxtLink to="/">Home</NuxtLink>
              <ul class="sub-menu">
                <li><NuxtLink to="/">Home Main Page</NuxtLink></li>
                <li><NuxtLink to="/homeVideo">Home Video Page</NuxtLink></li>
                <li><NuxtLink to="/landingPage">Landing Page</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/service">Service</NuxtLink></li>
            <li class="menu-item-has-children">
              <a href="#">Elements</a>
              <ul class="sub-menu">
                <li class="menu-item-has-children">
                  <a href="#">Portfolio</a>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/portfolio">Portfolio Grid</NuxtLink></li>
                    <li><NuxtLink to="/portfolio3column">Portfolio 3Column</NuxtLink></li>
                    <li><NuxtLink to="/portfolio4column">Portfolio 4Column</NuxtLink></li>
                  </ul>
                </li>
                <li><NuxtLink to="/team">Team</NuxtLink></li>
                <li><NuxtLink to="/faq">Faq</NuxtLink></li>
                <li><NuxtLink to="/testimonial">Testimonial</NuxtLink></li>
                <li><NuxtLink to="/pricingTable">Pricing Table</NuxtLink></li>
                <li><NuxtLink to="/singleService">Single Service</NuxtLink></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <NuxtLink to="/blog">Blog</NuxtLink>
              <ul class="sub-menu">
                <li><NuxtLink to="/blog">Blog Gird</NuxtLink></li>
                <li><NuxtLink to="/blogLeft">Blog Left Sidebar</NuxtLink></li>
                <li><NuxtLink to="/blogRight">Blog Right Sidebar</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- END MOBILE MENU AREA  -->
  </div>
</template>

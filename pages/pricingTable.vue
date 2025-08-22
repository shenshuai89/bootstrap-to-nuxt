<template>
  <div>
    <nav-header />
    <!-- breadcumb area -->
    <div class="breadcumb-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 txtc ccase text-center">
            <div class="brpt">
              <h2>Pricing Table</h2>
            </div>
            <div class="breadcumb-inner">
              <ul>
                <li>You are currently here! <i class="fas fa-angle-right"></i> </li>
                <li><a href="#">Home</a></li>
                <li><i class="fas fa-angle-right"></i></li>
                <li><span class="current">Pricing Table</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcumb area -->
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
    <nav-footer />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'PricingTable',
  });
  // 初始化脚本
  onMounted(() => {
    loadScriptClient();
  });
</script>
<style lang="scss" scoped></style>

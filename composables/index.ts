// 缓存已加载的脚本
const loadedScripts = new Set<string>();

const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    if (loadedScripts.has(src)) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;

    script.onload = () => {
      loadedScripts.add(src);
      resolve(true);
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};
export const loadScriptClient = async () => {
  const script1 = document.createElement('script');
  script1.src = '/js/vendor/modernizr-2.8.3.min.js';
  script1.async = false;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = '/js/vendor/jquery-3.5.1.min.js';
  script2.async = false;
  document.body.appendChild(script2);

  const script3 = document.createElement('script');
  script3.src = '/js/bootstrap.min.js';
  script3.async = false;
  document.body.appendChild(script3);

  const script4 = document.createElement('script');
  script4.src = '/js/isotope.pkgd.min.js';
  script4.async = false;
  document.body.appendChild(script4);

  const script5 = document.createElement('script');
  script5.src = '/js/owl.carousel.min.js';
  script5.async = false;
  document.body.appendChild(script5);

  const script6 = document.createElement('script');
  script6.src = '/js/jquery.nivo.slider.pack.js';
  script6.async = false;
  document.body.appendChild(script6);

  const script7 = document.createElement('script');
  script7.src = '/js/slick.min.js';
  script7.async = false;
  document.body.appendChild(script7);

  const script18 = document.createElement('script');
  script18.src = '/venobox/venobox.min.js';
  script18.async = false;
  document.body.appendChild(script18);

  const script8 = document.createElement('script');
  script8.src = '/js/imagesloaded.pkgd.min.js';
  script8.async = false;
  document.body.appendChild(script8);

  const script9 = document.createElement('script');
  script9.src = '/js/jquery.appear.js';
  script9.async = false;
  document.body.appendChild(script9);

  const script16 = document.createElement('script');
  script16.src = '/js/swiper-bundle.min.js';
  script16.async = false;
  document.body.appendChild(script16);

  const script17 = document.createElement('script');
  script17.src = '/js/wow.min.js';
  script17.async = false;
  document.body.appendChild(script17);

  const script10 = document.createElement('script');
  script10.src = '/js/jquery.knob.js';
  document.body.appendChild(script10);

  const script11 = document.createElement('script');
  script11.src = '/js/BeerSlider.js';
  document.body.appendChild(script11);

  const script12 = document.createElement('script');
  script12.src = '/js/theme-pluginjs.js';
  document.body.appendChild(script12);

  const script13 = document.createElement('script');
  script13.src = '/js/jquery.meanmenu.js';
  document.body.appendChild(script13);

  const script14 = document.createElement('script');
  script14.src = '/js/ajax-mail.js';
  document.body.appendChild(script14);

  const script15 = document.createElement('script');
  script15.src = '/js/theme.js';
  document.body.appendChild(script15);

  

  // 加载脚本、埋点、初始化第三方库等
  // const scripts = [
  //   '/js/vendor/modernizr-2.8.3.min.js',
  //   '/js/vendor/jquery-3.5.1.min.js',
  //   '/js/bootstrap.min.js',
  //   '/js/isotope.pkgd.min.js',
  //   '/js/owl.carousel.min.js',
  //   '/js/jquery.nivo.slider.pack.js',
  //   '/js/slick.min.js',
  //   '/venobox/venobox.min.js',
  //   '/js/imagesloaded.pkgd.min.js',
  //   '/js/jquery.appear.js',
  //   '/js/jquery.knob.js',
  //   '/js/BeerSlider.js',
  //   '/js/theme-pluginjs.js',
  //   '/js/jquery.meanmenu.js',
  //   '/js/ajax-mail.js',
  //   '/js/theme.js',
  // ];

  // for (const src of scripts) {
  //   try {
  //     await loadScript(src);
  //     console.log('脚本加载成功:', src);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
};

// plugins/load-script.client.ts
import { defineNuxtPlugin } from '#app';

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
    script.async = true;

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

export default defineNuxtPlugin((nuxtApp) => {
  // 只有在客户端加载脚本，并且只在APP加载完成后加载一次
  // nuxtApp.hook('app:mounted', async () => {
  //   const scripts = [
  //     '/js/vendor/modernizr-2.8.3.min.js',
  //     '/js/vendor/jquery-3.5.1.min.js',
  //     '/js/bootstrap.min.js',
  //     '/js/isotope.pkgd.min.js',
  //     '/js/owl.carousel.min.js',
  //     '/js/jquery.nivo.slider.pack.js',
  //     '/js/slick.min.js',
  //     '/venobox/venobox.min.js',
  //     '/js/imagesloaded.pkgd.min.js',
  //     '/js/jquery.appear.js',
  //     '/js/jquery.knob.js',
  //     '/js/BeerSlider.js',
  //     '/js/theme-pluginjs.js',
  //     '/js/jquery.meanmenu.js',
  //     '/js/ajax-mail.js',
  //     '/js/theme.js',
  //   ];

  //   for (const src of scripts) {
  //     try {
  //       await loadScript(src);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // });

  if (process.client) {
    const router = useRouter();

    // 监听路由变化，模拟每个页面的 mounted
    router.afterEach(async (to, from) => {
      // console.log('页面 mounted 模拟:', to.path);
      // 在这里执行你的逻辑
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
    });
  }

  // nuxtApp.vueApp.mixin({
  //   setup() {
  //     onMounted(async () => {
  //       // ✅ 每个页面 mounted 都会执行
  //       console.log('Page mounted:++++++++++++', useRoute().path);
  //       // 加载脚本、埋点、初始化第三方库等
  //       const scripts = [
  //         '/js/vendor/modernizr-2.8.3.min.js',
  //         '/js/vendor/jquery-3.5.1.min.js',
  //         '/js/bootstrap.min.js',
  //         '/js/isotope.pkgd.min.js',
  //         '/js/owl.carousel.min.js',
  //         '/js/jquery.nivo.slider.pack.js',
  //         '/js/slick.min.js',
  //         '/venobox/venobox.min.js',
  //         '/js/imagesloaded.pkgd.min.js',
  //         '/js/jquery.appear.js',
  //         '/js/jquery.knob.js',
  //         '/js/BeerSlider.js',
  //         '/js/theme-pluginjs.js',
  //         '/js/jquery.meanmenu.js',
  //         '/js/ajax-mail.js',
  //         '/js/theme.js',
  //       ];

  //       for (const src of scripts) {
  //         try {
  //           await loadScript(src);
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       }
  //     });
  //     return {};
  //   },
  // });
});

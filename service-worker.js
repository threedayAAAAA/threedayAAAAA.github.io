/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "948d57363e5a81d91d9e359ba8476875"
  },
  {
    "url": "accumulate/dataStruct.html",
    "revision": "a3074019482e538085899db26ade0a0b"
  },
  {
    "url": "accumulate/high.html",
    "revision": "1aa645b3f1f9a3102d2aa82db1d68b9e"
  },
  {
    "url": "accumulate/index.html",
    "revision": "d033e931324ec15642136da5c0bb05b2"
  },
  {
    "url": "accumulate/time-spaceAnalyse.html",
    "revision": "5565102c9c53d90b13a2aa3940018b21"
  },
  {
    "url": "algorithm/css.html",
    "revision": "2080a5a1c4a0a6db8f5884f4514ad12b"
  },
  {
    "url": "algorithm/html.html",
    "revision": "7a3cedd14803e1c06a3bedf79d8779d6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b7b1d65e3008b6ebd09e10a936463819"
  },
  {
    "url": "algorithm/js.html",
    "revision": "31e851ade1986ff30502efada44e3e4e"
  },
  {
    "url": "assets/css/0.styles.39f6aafe.css",
    "revision": "ca03663104fc8c9dab0a17e3e32929e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3cfeca96.js",
    "revision": "5e938411432b57b32ea023d7be546bdc"
  },
  {
    "url": "assets/js/11.56c4a298.js",
    "revision": "bb5f4af82545bddda9b093c0f70499ec"
  },
  {
    "url": "assets/js/12.2bcf133d.js",
    "revision": "39f9544be2d4683f998404c1e3a4a4c4"
  },
  {
    "url": "assets/js/13.7cae4b2a.js",
    "revision": "49b8180c69bb7389e956c283a2966094"
  },
  {
    "url": "assets/js/14.cf450f31.js",
    "revision": "1bff21752c977934e4d15b0b1795e2f8"
  },
  {
    "url": "assets/js/15.2e369b16.js",
    "revision": "a463a24593dddb9b985bbbd72236dcaf"
  },
  {
    "url": "assets/js/16.72fdc09e.js",
    "revision": "17d51118581d289692657db88326c423"
  },
  {
    "url": "assets/js/17.1dc5907b.js",
    "revision": "1a14168269195e2c1f068fad5640adbe"
  },
  {
    "url": "assets/js/18.4c46e0ac.js",
    "revision": "5d76fe62d9d133431a2f42a8bc9c288c"
  },
  {
    "url": "assets/js/19.fc819f85.js",
    "revision": "30965a4ab0f65df8124180f9f61727c0"
  },
  {
    "url": "assets/js/2.dd99c12e.js",
    "revision": "02716f586e1619a44597c1290dbc9fb1"
  },
  {
    "url": "assets/js/20.27f4f0b4.js",
    "revision": "b9aac69a26dbde93f8f25558d97f6cff"
  },
  {
    "url": "assets/js/21.aeb44dfb.js",
    "revision": "117e545c64a4124962be3d978c9e6988"
  },
  {
    "url": "assets/js/3.0290596b.js",
    "revision": "9bc15d4066699b635b46c25e36ca5b9b"
  },
  {
    "url": "assets/js/4.d5a2cbbe.js",
    "revision": "34fdaf8091fca2500c85503a02a8bbf7"
  },
  {
    "url": "assets/js/5.a8334344.js",
    "revision": "ff91748a4293a3da786c2dfd8951098e"
  },
  {
    "url": "assets/js/6.91de0efc.js",
    "revision": "bc1356b9ce9679002c8f049046a9cdfe"
  },
  {
    "url": "assets/js/7.ced79d7f.js",
    "revision": "cc45a2a86edc8b7a6421e722fd833f6c"
  },
  {
    "url": "assets/js/8.0fe48bcd.js",
    "revision": "6d52bbbe00f46089e5889cede18687bd"
  },
  {
    "url": "assets/js/9.bf803d30.js",
    "revision": "4a8c17a937414fa16f24e06e5b7722d7"
  },
  {
    "url": "assets/js/app.3e63ed9b.js",
    "revision": "cdc48826306fb4a22412fde8f1c5d9a0"
  },
  {
    "url": "automation/CD.html",
    "revision": "26c190c5ce98c5efee578ff820f89c84"
  },
  {
    "url": "automation/CI.html",
    "revision": "94741a5b2a83dcc95dc4974b26b6d686"
  },
  {
    "url": "automation/index.html",
    "revision": "a50ee345277a68db4742588e8aa17a52"
  },
  {
    "url": "automation/testAutomation.html",
    "revision": "8207175e5046ac14d81272698a7836b5"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/home.jpeg",
    "revision": "229d61c0c33b27cbf2c92ea1c48a3fa0"
  },
  {
    "url": "index.html",
    "revision": "237cf2921aa4983bb0ed94ca33fdc3ee"
  },
  {
    "url": "others/gitHooks.html",
    "revision": "cd745e9f82cd97cd64983a8f5ff478b5"
  },
  {
    "url": "others/index.html",
    "revision": "59a307197d6e9af80deb2fdac986ac11"
  },
  {
    "url": "product/application.html",
    "revision": "87c88dbda308239d85c63a40a370f3bb"
  },
  {
    "url": "product/commonCodeSnippets.html",
    "revision": "f939a047bd9a7ceafb5194bd2244a08b"
  },
  {
    "url": "product/vue2ProduceConfig.html",
    "revision": "a3a678407ce85060f2657566077501be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

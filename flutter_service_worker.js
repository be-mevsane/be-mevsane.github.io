'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3c6ef96924bf91e95998175560da9abf",
".git/config": "8d1e0568f56dfd7c4ec775caa9e04014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b16129f78de882f9c8989a9711ca759",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "47a95c470195d8354aa589117e62dc83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d8c01b2a7e4af42b8afa6fa2ed822c8",
".git/logs/refs/heads/main": "6d8c01b2a7e4af42b8afa6fa2ed822c8",
".git/logs/refs/remotes/origin/HEAD": "b32b92ed011a16f138a0665494e25e35",
".git/logs/refs/remotes/origin/main": "e0d1a0fde719d08c76f4dbf6841332fe",
".git/objects/03/aa333abd82a18a5c58d9d890e3f366ceaa2306": "5be8b31fe835a529c85ff9b6b3633523",
".git/objects/05/b5289a09d362d20c2211e9cb6a926665244b0b": "5486cfd9e68517276c9ca680892be439",
".git/objects/05/e340b74d3bea52d2f4a3880e7fc74ba11e95da": "6bbaec9c509db19bb34ec4688f4a0cf1",
".git/objects/08/f7cc1a565f31768ff67d998d31218d7d8bcd82": "9b98277eb738f4aca66d4d79c1e4005b",
".git/objects/09/65f54e0d39fec8f43ba8a04575c5fd5d968e17": "940332da18f7006a82e6e87dae519062",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/11/e2add97ee5523c6417e2b5eba179a4942797a2": "ea52b1abb33cac75ad006f9093a752eb",
".git/objects/16/3f9ad6dbc79cf6e0f84314477d57d06144e5bf": "f6d47b699560d0a8e7bc9e54fabc36a3",
".git/objects/1a/f17764920c376682daed501aae4ce7a799c712": "7433ec34a15445a22dffa18f262bed82",
".git/objects/20/6f1bda6c78c838e91f7efdf8a0e47e6d806ca8": "9a40835d687df80918a0a62b2a4da484",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/ac543bf4fe2885e2cdf9f10099ba3114f4c9f1": "435dfc9db5c94f35d945b6eb5c9a9f18",
".git/objects/2d/6b1912f3b396cdfd0f13a6b05b0c5c5f63ca3f": "938302efa895c7c1df5ae1d9f63edb19",
".git/objects/33/b70d8cf811dcbdb5235e4a0ccceae2405c50e4": "f6498e2b45f84823c236f33a32f6f020",
".git/objects/35/ed6d2bffd62b73e0c03fe4f74cb67dafc4399f": "56cec664555156b07192a2e248dfc59b",
".git/objects/43/608337aef922819e9772498b4e4ae24dcbb53e": "8c100b94772b6e4b9393e6d9027427fa",
".git/objects/49/e48cd4228b6a1e112e0dd36510a7656b1e796d": "a6c7a7281ba49ea26a1d67fb57f852cf",
".git/objects/51/4f36f5185458f9893549201467c4588738d733": "25b71ed74cb60c4ee63b55f1956afc2d",
".git/objects/52/444fa83278daa5d7db22fe8132488c082252b9": "29e768b97608f793126ce819d25bb65d",
".git/objects/52/89089f034ece428e9c77a98f9c31354a9b8e4d": "1b6cc61a38f6c9eaeaac1a9ad8bb5fd1",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5c/bc6ccb4bdcebedd6bf2015cfd67870b7247b17": "5891a354e11e041ae382f3317415c982",
".git/objects/5d/61ecb0a0cfbc256aa6f287dc2f7e086fa113ce": "42b77d15eb93ba6f20ec707c568f1543",
".git/objects/5d/ec34592dacc3f33da18d1dfca673bfa1985649": "e4758fc1033c5ac95b98f8d8fc9c4494",
".git/objects/5e/cf7ac8d7d870de1f5004f0203ca6fb5879227d": "621eabaafddb29f464e288dfcc3239d7",
".git/objects/5f/8694205e37c23efa6f6d102b2ecad3808697c3": "e3a0cd4f1bbf1fc6105d5353fe173e68",
".git/objects/60/852638f81f6c4d82d8582e8658171ab372cedc": "fa2e8324ad7b13832ba6f6e0834dfb68",
".git/objects/61/334e340fa1055a89108561ac4c0dca6b249412": "1b719e290648c98730ccbf3a355bfb04",
".git/objects/61/e77f526ba43d058e0ec500791291bb7fb0db2f": "9efdc221b7f1b03bcb3fdf33929b3254",
".git/objects/64/6c6c8b5e96ca7d5423e48609c885716660a046": "da4c9c00fc72f2762d02917f011111f9",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/65/a68041025af64f98564179d7524f742da25f3f": "daef7b0ebece8d50a9fad81a57ce21ac",
".git/objects/67/4961291c7957a8843c419221880d2fe9115cb7": "46b49ad96a89c674561748ebf4a3cc92",
".git/objects/67/6e3843192bb31417951c1bf275f74f8422a316": "1c5d9bf67fd5c9e537c443ef13913cec",
".git/objects/69/2035e8efbcd4659c572adbf820cd17533420fb": "c2334e418b7524f146f3e7b7e05cda10",
".git/objects/69/a3ea649e70e1c19a965f4158fc6e862848b757": "cb617351516801a1e376252ab7b26cbf",
".git/objects/7f/056eaa407a55f778160baa5d7b5d859d4a5f28": "4825145ebab03fdc0a24374f94d94d7b",
".git/objects/81/02e74c7ccc4cecb57ae4182eef0186a4384a91": "0a90488117c14cb3e458e7b6a38789e0",
".git/objects/8e/0d14e42529f8f47575afadba23b70287ee8f45": "3d7390c17cfeabed9130b05098e89c0a",
".git/objects/92/56c0a6d02a265e07bd64dadc87a4c2d611291a": "b639c59bf668bbce0f35aea85d591d47",
".git/objects/9a/c18dcd6243ec21daa6297332433badfd85750d": "15a836aa9fe171e72f714a674faf74f0",
".git/objects/9c/750032f487fbec47f5ac66d505793aa7c7e693": "cb1c3dfe3f3595f49013257e4d4dfd3b",
".git/objects/9e/bbff816b4b5fed5f115b128df605dec8d2308b": "af0d8c5713b769bc00748f9bf98153d4",
".git/objects/9f/a4492e02850d4fa7c1d22f929dfc2d6c0d80b6": "af54df7569b998139e80ea9f9a3d0ac9",
".git/objects/a3/0c6951348c216ef2bfb6996ef6ff29d6350bed": "8dd83be9e717dc33c1fa95f78d0f9d32",
".git/objects/a7/d7385481f40c198c597dcee4f2a5fea65eb174": "bcb00babb13b4a00ca5ceac7da09e7ec",
".git/objects/b2/97efb9406ef9c24665979c0736d8d74088450e": "af159f44c09f5d730156e091f962fa02",
".git/objects/b3/b31aadb31aebdc4f38df92731a8bf40ed212d7": "610589ff2ec02bbe978f46bb0a70d2c4",
".git/objects/b5/6a9fffaab4cbef3c559336bdd1c66d556e663e": "751629aa505fff41192feeb48e35f9ed",
".git/objects/b5/aad57e0b8f3795e1aafa2b11779eac288881b3": "b0d7e7c4f1ae6d936a4a50f33b36c6c9",
".git/objects/be/73b57e1b95afcbbd4d7c0f7fca74e64debd458": "f3edd5741504e6d26aeceefb33919fbe",
".git/objects/be/dc5f2e64b595c84fdb42a218500990a7039663": "1ff1d125ae627f6db1d94ac91ee5519f",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/c0/440e67f56a96e6dcaba8581af4e6391c2e0f97": "2502b03102fc1c885e633c37bae65f18",
".git/objects/c5/8618ecb5d1cb3a7dd1ed3f2bf9ec8ad090a290": "9605a37caa73046a0658139757610029",
".git/objects/c6/94935ba5b4bb5bfdb31f4dfb81cbb6596f2abc": "ffc4e285f38ba94b42b7267e179c91a6",
".git/objects/cc/248e2e5f985e373e17c897f2a1ed0b02b4e5b7": "0bb0d620f71a41aa87b7cdb4b57ba9ec",
".git/objects/cf/0abc821ffec661110c02f8ce10776129b6ee30": "349509e13efc0f4df1a84819ad01f8cc",
".git/objects/d4/4e3f42883b04c5a0d8a87d1d1225185419ca2d": "e16bfe7c09922119b0ec38182482c2e5",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d9/843a644779e516acc0fb02fb4d7065623b6b68": "95a04655a3d8fa25bca9ecdfcdc82a27",
".git/objects/da/71e16d4baf90222fc88e5983306e66e47c5be6": "bdf6636295cb0bd8a407c99160ee5960",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/de/e6e2c1be87f66f142cb70ccf780e3c60916b95": "5925a0e4f7f2a871e432080a8c98f9c8",
".git/objects/e3/2cff42b11477a8fd9a7719dc64ecfe59ce7808": "42b3d0d0752f36696782a930c24666dd",
".git/objects/e5/2e4209c93bf0a4c4a529d8cdcebc71647bc1ae": "afe894068128e67d48795d501f92dc36",
".git/objects/e5/ff2be75db12b2c41be29da23c2b85ae51bd2c5": "ada999ccf25e9bde38e8aca3c49da915",
".git/objects/e8/4d68da1a2a2509690c79b1d40b5216c020342d": "69ec867522f9284ec9724f98681807bb",
".git/objects/e9/e313763b3873deeb29299066c2b76aeff25ccd": "99bef4f85078fc00973f4018fc81593a",
".git/objects/ea/ce9ea40e65a3c85b8e94a599afc6314ce3e8e9": "3b788fbb2da31549aee224d00953ad69",
".git/objects/f0/e6fb3bf326af520f019bc267e94b721c2a4352": "b3935ea708a60d5f990f085fbefb0741",
".git/objects/f1/4caa6a94eb21ca1938aafadc153a1b35eef6ee": "8deba9bc6a9f2c46f5b675b1a2f07286",
".git/objects/f3/9016b7ef2fe5e1b3d81063a5be9ab38f5637b1": "4dcd04a0930826ff1b305acaccc6740d",
".git/objects/f5/6cc709ec977c136f404e05919245c0331c79da": "58121fd1940739dc34247aab049103da",
".git/objects/fd/0c639e8635d82effeea6cb2242f98c6c57405a": "e5932c64b9c6ecb7fa8ed74a2dbf7d6b",
".git/objects/fe/081318bf8fb9719c6da246cd5111e0055bafd1": "5e52a41342da89b680c074db95a1a7d3",
".git/objects/fe/66823fae744771c4d10d6dcb97f13f33ace2b1": "0d9443635870165fa20f30d65fbd3769",
".git/objects/pack/pack-82bde061718c43b599f799a9768fa6009632eb58.idx": "aafe7f4f11164c9b103b4ca0ccc2f772",
".git/objects/pack/pack-82bde061718c43b599f799a9768fa6009632eb58.pack": "c99c845dddc2c8eb60f464dcab04045e",
".git/ORIG_HEAD": "4cf6dc6b205b27a92a47f62489fe3f47",
".git/packed-refs": "e70e2da7e7032bb83f26be3494ba2598",
".git/refs/heads/main": "af5ce72dae2dbd8c37c5af0729798e59",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "af5ce72dae2dbd8c37c5af0729798e59",
"assets/AssetManifest.bin": "c1c22d9b130781193239fb9ef26e06e5",
"assets/AssetManifest.json": "2b06e75199fa171aa73b0e22f889d1cd",
"assets/assets/images/aktion_rabatt.jpeg": "9ac9963ce39e3ca45cf4571fcad1b483",
"assets/assets/images/baesthetics_EB_shiny.png": "6add27c0e53da1a752b05ed27c33a03f",
"assets/assets/images/baesthetics_only.png": "16da0534ee58f99972ce98b5783e694f",
"assets/assets/images/baesthetics_only_fog.png": "8feed4158f0a89cf3a39dd291a679c31",
"assets/assets/images/baesthetics_only_shiny.png": "e038c25f7b466205a5cea3f5c8c20790",
"assets/assets/images/baesthetics_only_thin.png": "c53801e2f1f2a515084cf6e2a7d159d3",
"assets/assets/images/baesthetics_only_thin_grad.png": "8ef8da76eaed7ae39bb8c81874fe3891",
"assets/assets/images/ebay_schwarz.png": "75ce16b66490156e1708d826d4bb997b",
"assets/assets/images/EB_only.png": "0df300775571ac6c015635170045236b",
"assets/assets/images/EB_only_fog.png": "263e94af51bc4c7bf5d08acf9de5eaca",
"assets/assets/images/Logo_full_colored.jpeg": "fe6510c2b47999be56fcd69ec597aad2",
"assets/assets/images/TRANSPARENT_LOGO.png": "c160580be55210fab1a120c0191635ec",
"assets/assets/images/TRANSPARENT_LOGO_NO_BORDER.png": "627ec9cb6ebd314bea129404d1097f15",
"assets/assets/videos/EB_ebae.mp4": "90ffaf88c75e71ee8d6d956946dc6fe0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "d369707d270332cf440741f03fabf883",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "08f22b1287f0ff8b17ee37e8eac578ad",
"canvaskit/canvaskit.wasm": "e372502ef8ecc61c9d95828a96c35f3f",
"canvaskit/chromium/canvaskit.js": "94345e0f53b39690825826118925a7a8",
"canvaskit/chromium/canvaskit.wasm": "1beea20b91d23a5fa36944c5ea17238b",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "274d4ff9c575cdafbb3d8879a9f81355",
"canvaskit/skwasm.wasm": "3c14cade026d403e16677a9121a8dc02",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5138440c12bf57af8eb5915b96791329",
"/": "5138440c12bf57af8eb5915b96791329",
"main.dart.js": "d4a1645094145b8f71c95fdc3956b10c",
"manifest.json": "32b00ec4b660efb5735792235b65f204",
"version.json": "93304249216605c6f0988291c70d48e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

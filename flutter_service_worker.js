'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2db742344f5b5cf7bbd257ff61cfce8b",
".git/config": "8d1e0568f56dfd7c4ec775caa9e04014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2933a95083f5c59c2800959c17e02838",
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
".git/index": "d25871bc6c9bcc0ec9cbb1123b080e1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ed91a1606a9a5d57e735b88708b4636",
".git/logs/refs/heads/main": "5ed91a1606a9a5d57e735b88708b4636",
".git/logs/refs/remotes/origin/HEAD": "b32b92ed011a16f138a0665494e25e35",
".git/logs/refs/remotes/origin/main": "857808471e2f0fc7218237ee9d0e9bb4",
".git/objects/09/65f54e0d39fec8f43ba8a04575c5fd5d968e17": "940332da18f7006a82e6e87dae519062",
".git/objects/11/e2add97ee5523c6417e2b5eba179a4942797a2": "ea52b1abb33cac75ad006f9093a752eb",
".git/objects/20/6f1bda6c78c838e91f7efdf8a0e47e6d806ca8": "9a40835d687df80918a0a62b2a4da484",
".git/objects/33/b70d8cf811dcbdb5235e4a0ccceae2405c50e4": "f6498e2b45f84823c236f33a32f6f020",
".git/objects/43/608337aef922819e9772498b4e4ae24dcbb53e": "8c100b94772b6e4b9393e6d9027427fa",
".git/objects/52/444fa83278daa5d7db22fe8132488c082252b9": "29e768b97608f793126ce819d25bb65d",
".git/objects/5e/cf7ac8d7d870de1f5004f0203ca6fb5879227d": "621eabaafddb29f464e288dfcc3239d7",
".git/objects/65/a68041025af64f98564179d7524f742da25f3f": "daef7b0ebece8d50a9fad81a57ce21ac",
".git/objects/7f/056eaa407a55f778160baa5d7b5d859d4a5f28": "4825145ebab03fdc0a24374f94d94d7b",
".git/objects/92/56c0a6d02a265e07bd64dadc87a4c2d611291a": "b639c59bf668bbce0f35aea85d591d47",
".git/objects/9a/c18dcd6243ec21daa6297332433badfd85750d": "15a836aa9fe171e72f714a674faf74f0",
".git/objects/9c/750032f487fbec47f5ac66d505793aa7c7e693": "cb1c3dfe3f3595f49013257e4d4dfd3b",
".git/objects/9f/a4492e02850d4fa7c1d22f929dfc2d6c0d80b6": "af54df7569b998139e80ea9f9a3d0ac9",
".git/objects/b3/b31aadb31aebdc4f38df92731a8bf40ed212d7": "610589ff2ec02bbe978f46bb0a70d2c4",
".git/objects/be/dc5f2e64b595c84fdb42a218500990a7039663": "1ff1d125ae627f6db1d94ac91ee5519f",
".git/objects/cf/0abc821ffec661110c02f8ce10776129b6ee30": "349509e13efc0f4df1a84819ad01f8cc",
".git/objects/d9/843a644779e516acc0fb02fb4d7065623b6b68": "95a04655a3d8fa25bca9ecdfcdc82a27",
".git/objects/e3/2cff42b11477a8fd9a7719dc64ecfe59ce7808": "42b3d0d0752f36696782a930c24666dd",
".git/objects/e9/e313763b3873deeb29299066c2b76aeff25ccd": "99bef4f85078fc00973f4018fc81593a",
".git/objects/f1/4caa6a94eb21ca1938aafadc153a1b35eef6ee": "8deba9bc6a9f2c46f5b675b1a2f07286",
".git/objects/pack/pack-82bde061718c43b599f799a9768fa6009632eb58.idx": "aafe7f4f11164c9b103b4ca0ccc2f772",
".git/objects/pack/pack-82bde061718c43b599f799a9768fa6009632eb58.pack": "c99c845dddc2c8eb60f464dcab04045e",
".git/ORIG_HEAD": "637be89ae1d7f84dd92f5ed16c668958",
".git/packed-refs": "e70e2da7e7032bb83f26be3494ba2598",
".git/refs/heads/main": "6614737d1e68505e9c657d31e2669249",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6614737d1e68505e9c657d31e2669249",
"assets/AssetManifest.bin": "81b60bfe595440635a9388f3e37d5996",
"assets/AssetManifest.json": "80b5f9486d8018c3845770d48503e0cc",
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
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "19e38dfe6428a2b1980baba4da44f55f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
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
"index.html": "c0e0eddcfe57c5e3fc13294a8e2e2835",
"/": "c0e0eddcfe57c5e3fc13294a8e2e2835",
"main.dart.js": "1b0a3d715c1525bcc51518cd6a0b4165",
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

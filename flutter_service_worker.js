'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29c5505cd338c882cf108a82f1224898",
".git/config": "8d1e0568f56dfd7c4ec775caa9e04014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "23ad06e126c23ae2c6c2782fc79eece6",
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
".git/index": "c627a552ef901b99edc4b1ff9411bd36",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2d2304f1341883bc68436af76d5049e",
".git/logs/refs/heads/main": "d2d2304f1341883bc68436af76d5049e",
".git/logs/refs/remotes/origin/HEAD": "590437cdd2744f68b1c668b1825787ad",
".git/logs/refs/remotes/origin/main": "4e673102bfc9c54de4226aafa0e329e9",
".git/objects/3b/bece091fc7117fa62aa49b1cc2442bf32fa4b7": "41544d6ac4dc5249832201cf72384b2e",
".git/objects/49/e8f891bc087fa48dad8b3e3336736129088cd6": "3eb388d54e70b4ac1b631ccc577e8b95",
".git/objects/53/b278a9b3d2b13f65f1a37c6e2b5e3d124bad6b": "61ab78e92787ca77b1a0db8fc5d8135b",
".git/objects/63/14600d3ed7add9dfcf0e4fa0435b574d4eae80": "7053cbdd10904968f1ff221df2c36c09",
".git/objects/a8/99bbe68a9674583ba78c31098d6e2c55af2cfa": "5db441003cb34535d6a967fc709060b8",
".git/objects/pack/pack-72dcc1a5830646c4fc81203e9312675a76c7568d.idx": "73a91970785ede1c7bfe6d160d36d0a4",
".git/objects/pack/pack-72dcc1a5830646c4fc81203e9312675a76c7568d.pack": "409a7ed040fc9d556a5f0bf398166c93",
".git/ORIG_HEAD": "773af968cee1a4f80baa87b2b6a200a7",
".git/packed-refs": "a84a4c80a88fb38f6a1c172059e5b9a4",
".git/refs/heads/main": "2a3dffcc9d9e3bfa7cd75b9221194088",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2a3dffcc9d9e3bfa7cd75b9221194088",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c61eee56fa61071731bc2c86731d931a",
"/": "c61eee56fa61071731bc2c86731d931a",
"main.dart.js": "c63e27fad649038255b76533550d3420",
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

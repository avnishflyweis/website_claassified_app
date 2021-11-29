'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b5bac48afc033b2cd6c6acf601c4203d",
"assets/assets/category/Group%25201322.png": "afe12014e5b673b43f75e5d25ea2f737",
"assets/assets/category/NoPath%2520-%2520Copy%2520(10).png": "60cddd5a0cbabb255f16a714dbd249b5",
"assets/assets/category/NoPath%2520-%2520Copy%2520(12).png": "15ff43e999487ce8dfaddd072c8679f5",
"assets/assets/category/NoPath%2520-%2520Copy%2520(13).png": "3dae9bb1252f8a43d1d6b08033e3fb1c",
"assets/assets/category/NoPath%2520-%2520Copy%2520(5).png": "c4940d6ae842da001e6b853b10960e13",
"assets/assets/category/NoPath%2520-%2520Copy%2520(6).png": "d36cbf1e7d89dbc7f01b742ce14f2abd",
"assets/assets/category/NoPath%2520-%2520Copy%2520(7).png": "52949ee77cda6181f81908979af6f25d",
"assets/assets/category/NoPath%2520-%2520Copy%2520(8).png": "1e7b266fe21a7b1ad1df706c6b7f94f4",
"assets/assets/category/NoPath%2520-%2520Copy%2520(9).png": "fa199404fff878ec4d5f9f29000a4369",
"assets/assets/category/NoPath%2520-%2520Copy.png": "c19030e2d9af3ae81eee3794fb0bdb0b",
"assets/assets/icon/agriculture.png": "150abc92e225a0b64618e981d205354d",
"assets/assets/icon/appstore.png": "190cf6d8055934b50131c2ed414a68db",
"assets/assets/icon/customer-service.png": "8db236036d4de4de4e72a32c109b920d",
"assets/assets/icon/diamond.png": "22e91102eaea89578cd3d0ee86d01a2c",
"assets/assets/icon/dress.png": "7ab7f624b31a01d00293b9c5d34e3998",
"assets/assets/icon/electronic-device.png": "346e80c73c6152463e96c2d10bb9cb93",
"assets/assets/icon/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/icon/furniture.png": "8fea39e39bd45f9da9b0edc0e1414990",
"assets/assets/icon/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/icon/googlestore.png": "43a69109c45011aa3986046c0ea40417",
"assets/assets/icon/house%2520(1).png": "1cabc7ffff997c6d047682fada21135e",
"assets/assets/icon/india.png": "c1eb56242e97861aaf76c11f070d63bf",
"assets/assets/icon/instagram.png": "6d502e87783d611f2d606d55d541e139",
"assets/assets/icon/job.png": "7cc50f6743da869d3af18d2fab2657cb",
"assets/assets/icon/makeup-pouch.png": "2f2abf3b8c577200a8e4ce3beb158c10",
"assets/assets/icon/market.png": "8e00bcf3ffbf69af0244b35d4a9da556",
"assets/assets/icon/pet.png": "5394b0ad7b1836fd4ecb333455b918be",
"assets/assets/icon/playtime.png": "c842e20fecad0e1d4c5a7b7f7ee2ad80",
"assets/assets/icon/repair-tools.png": "d8a71ff749764d43dce88918ec594a79",
"assets/assets/icon/rupee.png": "87e7a6c710e7aaafbe25d6e94ad73259",
"assets/assets/icon/smartphone%2520(1).png": "2dde688d94ea223a423f40d6b2fc54a2",
"assets/assets/icon/sports.png": "2644abc66b583ab6f1a717e1117d90ad",
"assets/assets/icon/twitter.png": "fdf976b38ea62efdd540126784ef8e3d",
"assets/assets/icon/vehicle.png": "60bcf738df3bc34432d66c2c79484c3e",
"assets/assets/icon/working.png": "4feb8d26bc52025237c3efb42a56376b",
"assets/assets/image/3_bhk_independent_house-for-sale-rajinder_nagar-New+Delhi-living_room.png": "a1d9dd94e0b2d955540544d9b2f140ea",
"assets/assets/image/Bitcoin-cuate.png": "04de655074c0726a4d7591dbd3fe871c",
"assets/assets/image/bmw-ninet.jpg": "b1bf68e9f615039859a9ff93f5b9bdeb",
"assets/assets/image/logo.png": "b607bad989344db358a2b47b5f75fd9c",
"assets/assets/image/Mobile%2520browsers-cuate.png": "53550961f550ec7cd2ea96e518cfdbf2",
"assets/assets/image/mobile_user.png": "711675c19bd066afbb2a26ded1aeb71f",
"assets/assets/image/NoPath%2520-%2520Copy%2520(17).png": "92ab197a5b0116a253fc77d745f02400",
"assets/assets/image/NoPath%2520-%2520Copy%2520(4).png": "dc71d2abbadca87c935bb5743d461ddb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b78c97fbe8cbdc9211699c9359f1f434",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef107bcc152a92bfb7c47b17fd1988f2",
"/": "ef107bcc152a92bfb7c47b17fd1988f2",
"main.dart.js": "ccf84f504af00f7a0f0bf27aeff4bde3",
"manifest.json": "8ab3888a0b9a9cdeb2394d12dee09c62",
"version.json": "1082592ca43de13048011fd0862cbae9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

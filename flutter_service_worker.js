'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2614884baf845dbb3e50a8058121100e",
"assets/assets/images/0-0-min.jpg": "e6251c08f694b3bf5461e8f5d1276153",
"assets/assets/images/0-1-min.jpg": "2cfcdf3865eef858af057bdfcf7715f7",
"assets/assets/images/1-0-min.jpg": "b8258409017e8d7d5436d4b2b5791733",
"assets/assets/images/1-1-min.jpg": "6b5fa04a9d6f29b81976efc6f672992e",
"assets/assets/images/1-2-min.jpg": "e204402c158db31576008b9fac908f0c",
"assets/assets/images/10-0-min.jpg": "1a6071c4cbe12e6b3997d207460b6064",
"assets/assets/images/10-1-min.jpg": "b3d85485c5152679d6b9431c4e747797",
"assets/assets/images/10-10-min.jpg": "696e82940d5f3238071f6608fffe1d05",
"assets/assets/images/10-11-min.jpg": "8eabc253f8d9273a0f7799faf3f323cf",
"assets/assets/images/10-12-min.jpg": "5989f0d8a6d11ac900ea964ee12af913",
"assets/assets/images/10-13-min.jpg": "e70074685ae8b67c976a78533611ee49",
"assets/assets/images/10-14-min.jpg": "765dc4823c8b42aa24fbb6ad9f7c388d",
"assets/assets/images/10-15-min.jpg": "80e3748df72397108f197a4c729aaf7b",
"assets/assets/images/10-16-min.jpg": "ba2fd63bdf991b52973884741aabae60",
"assets/assets/images/10-2-min.jpg": "76cbd27db35436dcbef50c0da3d1968b",
"assets/assets/images/10-3-min.jpg": "eb174e9617b2089af22274825a21b865",
"assets/assets/images/10-4-min.jpg": "12fcbbc8f20cdb2739ecbaa466962687",
"assets/assets/images/10-5-min.jpg": "ea13fbd7ffdf9952a50a4ce5bee1517b",
"assets/assets/images/10-6-min.jpg": "a0ffbac0132448c7da4091c9783c91f5",
"assets/assets/images/10-7-min.jpg": "06bd9f9fc150458137e96652b50163c6",
"assets/assets/images/10-8-min.jpg": "ab4c7bbd1df850297d1d50277a65bfd6",
"assets/assets/images/10-9-min.jpg": "96b15d6d2a9d8617ed98c9cb207d8f94",
"assets/assets/images/2-0-min.jpg": "3a92fb057103ac6a7231d91238680654",
"assets/assets/images/2-1-min.jpg": "7f5d31e884bf695232264073e47813f1",
"assets/assets/images/2-2-min.jpg": "0eb2d3abbfa55de31f1e6596fab52b02",
"assets/assets/images/2-3-min.jpg": "c4882fe3b7adbd7aef6f99a604ff3b2f",
"assets/assets/images/3-0-min.jpg": "439b2b7c229ae272aef7e0589b61c844",
"assets/assets/images/3-1-min.jpg": "1675d61adaf38da50d89e08e4015ed5a",
"assets/assets/images/3-2-min.jpg": "27df8a5a3bd3025476e6420388d59992",
"assets/assets/images/3-3-min.jpg": "dadd953436c162140f516f2aaea40f65",
"assets/assets/images/3-4-min.jpg": "7d7daec616ae9f680012d5612079559e",
"assets/assets/images/3-5-min.jpg": "6c73478d14898edeef2833af50dfb1e6",
"assets/assets/images/3-6-min.jpg": "27d6ca5a2e1b35f53e4d99b8b11bbd9d",
"assets/assets/images/3-7-min.jpg": "f1caff7842e8e3914bb92055ad525386",
"assets/assets/images/3-8-min.jpg": "ef4790e4332bfddb4882a5729736635b",
"assets/assets/images/4-0-min.jpg": "7047ef7cf9058fbb6ab2f9688550f5d1",
"assets/assets/images/4-1-min.jpg": "3b1d8927998511a3d6aeac52f6aaca88",
"assets/assets/images/4-2-min.jpg": "e73b9f8127ed2886e7b490a61b11d2ae",
"assets/assets/images/4-3-min.jpg": "a8d2de203ff2fa48300d6c5125faa2f8",
"assets/assets/images/4-4-min.jpg": "892927a03058d300a3c9ca268ed44d49",
"assets/assets/images/4-5-min.jpg": "cb60014f8bfcee4bc3620d6379a21814",
"assets/assets/images/5-0-min.jpg": "8d035f085350eb4dc89f69df9ef22df4",
"assets/assets/images/5-1-min.jpg": "44f9b8dabdba67462ab2ec66fc130526",
"assets/assets/images/5-2-min.jpg": "fb0370887ed1630924e32be231d5f7aa",
"assets/assets/images/5-3-min.jpg": "f04cd6b708d8c97721d936fea8571fb3",
"assets/assets/images/6-0-min.jpg": "8d15b330be89f2c4854202ba1b1a8316",
"assets/assets/images/6-1-min.jpg": "ddf86748b66a9c136a482c14650d63ef",
"assets/assets/images/6-2-min.jpg": "b315a4a4298f01e1b4d1233e9173568f",
"assets/assets/images/6-3-min.jpg": "0c56f4c00cf40f9bc16c2c1fb98a9b3f",
"assets/assets/images/6-5-min.jpg": "ef5093d24a1dd61c3886889f7c63d290",
"assets/assets/images/6-6-min.jpg": "e0e946616702bcd776cb7e1656a9a6c3",
"assets/assets/images/7-0-min.jpg": "ff0f10a97d897573aa7d052d745e14fa",
"assets/assets/images/7-1-min.jpg": "8bf19bda83d3c4301650e0b49f5d6d7e",
"assets/assets/images/7-10-min.jpg": "c1a50c3b53c540c9e834559e73fa5766",
"assets/assets/images/7-11-min.jpg": "e8a0ed9c0887bb29b8eef8e0f3d28570",
"assets/assets/images/7-2-min.jpg": "49c7173cf7f52bc91233aa6f12a0f821",
"assets/assets/images/7-3-min.jpg": "ccb775cfa3b08132a6b2afc40377381b",
"assets/assets/images/7-4-min.jpg": "52ec49ee52fa14dc60f077ac316d182c",
"assets/assets/images/7-5-min.jpg": "0e6587dc2318093f79251fc5a9d66db5",
"assets/assets/images/7-6-min.jpg": "795b69aa22872400cd5f50ff5bf20e22",
"assets/assets/images/7-7-min.jpg": "270ffbaa2893eaf0c9167c7d909afd15",
"assets/assets/images/7-8-min.jpg": "c2a6964913c4b390129240c9c127d41c",
"assets/assets/images/7-9-min.jpg": "4f3cc0c5708321038a6a42c3f2399853",
"assets/assets/images/8-0-min.jpg": "8e1d0a293c001ac78e9bc8475e3c46a4",
"assets/assets/images/8-1-min.jpg": "9f71021750de7dedd9708667e265c60d",
"assets/assets/images/8-2-min.jpg": "daec4d62bac253730dccc6f8548cf6d3",
"assets/assets/images/8-3-min.jpg": "60cd1d18f96b97ff323d679eee0fcab4",
"assets/assets/images/8-4-min.jpg": "f40890e19815397f01b0f9cb58cf546a",
"assets/assets/images/8-5-min.jpg": "e2626f32714f3107abc66d3f2aaa5ad4",
"assets/assets/images/8-6-min.jpg": "089f23c44fe179ba9c699b688df76739",
"assets/assets/images/8-7-min.jpg": "fac7a43aab3793bf918a7cf1df0b3535",
"assets/assets/images/9-0-min.jpg": "a59ff3e13c47a659f766d3acb420b5e2",
"assets/assets/images/9-1-min.jpg": "2f188b38d50daa2949abaf515641c760",
"assets/assets/images/9-2-min.jpg": "bd2b8fd034a43401e540632879292cf2",
"assets/assets/images/9-3-min.jpg": "3aa62f136c0a93b8c1000d68fac02d72",
"assets/assets/images/9-4-min.jpg": "f7f4d0cca019999ed9146f879cdad1a7",
"assets/assets/images/9-5-min.jpg": "ae4d163a12af3f474c4af86922ec2812",
"assets/assets/images/9-6-min.jpg": "6668a0312ee1601d2e6eae70e5563569",
"assets/assets/logo/1.png": "e12bbcce3a59265a249529b33f72f522",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9100d0175ba618b19f2df0603c84945b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5405e0da13b893ca6882e66d46bfcfa2",
"/": "5405e0da13b893ca6882e66d46bfcfa2",
"main.dart.js": "73f89ce90919b58276b0979ee4bf738d",
"manifest.json": "cca2415df12cddd406fafeb90116887a",
"version.json": "74f98bf12d9a8af0f2a61187fa6ae0ef"
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

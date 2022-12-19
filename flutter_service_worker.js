'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fc80fb2a4762dae23b3ca93234a0a355",
"assets/assets/animations/impatient_placeholder.riv": "e1c2cc3498d65688289c0878aa355477",
"assets/assets/animations/login_screen_character.riv": "dd3909a4767b204a2a1cd4a5ac61cf17",
"assets/assets/animations/otp.riv": "53311092f3574fa3d782d32fe123a3a5",
"assets/assets/animations/pull-to-refresh-raster-graphics.riv": "50480bedad18e4c46c425e7a66c86b13",
"assets/assets/dakke_icon.png": "eb7821423294b8a72fb20fee58dc2fc6",
"assets/assets/dakke_logo.png": "c92f3326c5c213dfd44cba31595b7b8f",
"assets/assets/dakke_logo_splash.png": "f74c97f4ed9e0813a9677ef04316eae4",
"assets/assets/icons/arrow-left-1-twoTone.svg": "628072c017ecbe1bd3e7f2f252f7f900",
"assets/assets/icons/book-bulk.svg": "2de846b7e40e9f4c4688c2673a49d070",
"assets/assets/icons/book-twoTone.svg": "510080f4aecfbf0636b3ce9f6a61a13a",
"assets/assets/icons/bookmark-bulk.svg": "e82af50a3e4ee3f5663f96be9249e068",
"assets/assets/icons/bookmark-twoTone.svg": "4fd9f54a24bcb97e42252c3d4614070a",
"assets/assets/icons/category-2-bulk.svg": "abd4f9b4883ee753a31ce7f53a087a0b",
"assets/assets/icons/category-2-twoTone.svg": "f39c9e2cbc0fec7bb16420e4d24c38ce",
"assets/assets/icons/edit-2-bulk.svg": "6da455f30417aa1b7bed3988d36fe5c6",
"assets/assets/icons/facebook-bulk.svg": "2742aa59e581d143390f0b862cfc9590",
"assets/assets/icons/google-bulk.svg": "d45bda6fa1bb43697e2e068a665c8c27",
"assets/assets/icons/home-1-bulk.svg": "ee024f7736537764a4f0fb77e5d8c692",
"assets/assets/icons/home-1-twoTone.svg": "dbf4107117e350a87eda5fd1a32939e5",
"assets/assets/icons/lamp-bulk.svg": "098a713c0d1bb1720fcda89e18416644",
"assets/assets/icons/language-square-bulk.svg": "939dbcb5133f018f7c915b86da7063fc",
"assets/assets/icons/lock-bulk.svg": "1b8d2ad045f20469e85b2aa88757c31f",
"assets/assets/icons/mobile-bulk.svg": "85f67da220c09a565ea8399582d762bb",
"assets/assets/icons/more-2-twoTone.svg": "18ec859f3796e135706890eddca70964",
"assets/assets/icons/password-check-bulk.svg": "1f8b8f26fa32751b5939ce63fe302800",
"assets/assets/icons/profile-bulk.svg": "cedee32636034bc2eb9263ac78ea5385",
"assets/assets/icons/search-normal-bulk.svg": "19bb18414f512deb6c45e0b18a14cfc6",
"assets/assets/icons/search-normal-twoTone.svg": "c8eda4a5931279b5c0c530c4b3a09d31",
"assets/assets/icons/shopping-cart-bulk.svg": "67fc2e614ab5727141e3ed7da000644d",
"assets/assets/icons/shopping-cart-twoTone.svg": "882954b14dfbe45adcbae11b685a7131",
"assets/assets/icons/sms-bulk.svg": "c2791894a5e675e0cb015caa92e481d4",
"assets/assets/icons/speedometer-bulk.svg": "818d139404a706bc06a63f04434c464a",
"assets/assets/icons/trash-bulk.svg": "c12b160a33c57aa34f83578d79d6a3ee",
"assets/assets/icons/user-bulk.svg": "de0ecb374a1eacbbe7477d6c3e4053c5",
"assets/assets/icons/user-twoTone.svg": "7b1ac479bcccecf562f8da48b0e3059d",
"assets/assets/images/Login-rafiki.svg": "37d257090ddddea313fd963bcc8f0971",
"assets/assets/images/Mobile%2520login-pana.svg": "7d99400ccca42b4b274c34df25f7c8ca",
"assets/assets/images/onBoarding1.png": "4a900998cffd8b7b34bcdea312fce7e0",
"assets/assets/images/onBoarding2.png": "581e7ad3295c78680c9799a3af3c6199",
"assets/assets/images/onBoarding3.png": "e620b9155e809c398e711803b58d3c08",
"assets/FontManifest.json": "33d28e45e7f7d0efa2ead053604795b3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/SFPro-Bold.ttf": "d6079ef01292c4bc84dce33988641530",
"assets/fonts/SFPro-Heavy.ttf": "6c498791e52ee77eedea219f291f638d",
"assets/fonts/SFPro-Light.ttf": "359f126c743e77d113cdc1ddda32534b",
"assets/fonts/SFPro-Medium.ttf": "a260cbc18870da144038776461d9df28",
"assets/fonts/SFPro-Regular.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/fonts/SFPro-Semibold.ttf": "1a131c948d598ecec700d37d168a15b5",
"assets/fonts/YekanBakh-Black.ttf": "0d08526d0dff516ab1136a8ef5a4364c",
"assets/fonts/YekanBakh-Bold.ttf": "6b1ec703e429ecce135e2e5519624a16",
"assets/fonts/YekanBakh-Light.ttf": "105fe21063cd1841633a123b47a03b63",
"assets/fonts/YekanBakh-Regular.ttf": "5adb67783888af8ae17889839ef566b1",
"assets/fonts/YekanBakh-SemiBold.ttf": "c9669f949aa2070e465ca31c4e9b461f",
"assets/NOTICES": "59dca16f438f1302ba2e1bd46b8a8545",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b3836643476ab337b8367f4790f9e4ab",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15dca9e0c12186b0a88245b5d095b0d0",
"/": "15dca9e0c12186b0a88245b5d095b0d0",
"main.dart.js": "ecef6fc75a57d050b3fc0d0a3e1d4851",
"manifest.json": "81a5e7b4e7f3136b4a00dfc778b8125f",
"splash/img/dark-1x.png": "b47122a9fbd8320a336e96d41d89285c",
"splash/img/dark-2x.png": "7e8405741c9d4027ad57e1b865dea39c",
"splash/img/dark-3x.png": "1267cebfc58802e82854ae579aabb3ea",
"splash/img/dark-4x.png": "57b953bb8d7c7eb6536caaf3812c4b9c",
"splash/img/light-1x.png": "b47122a9fbd8320a336e96d41d89285c",
"splash/img/light-2x.png": "7e8405741c9d4027ad57e1b865dea39c",
"splash/img/light-3x.png": "1267cebfc58802e82854ae579aabb3ea",
"splash/img/light-4x.png": "57b953bb8d7c7eb6536caaf3812c4b9c",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "725e8b2c040556344a20cb90091ad449",
"version.json": "d2028397b5c185af99e94f0719f03054"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

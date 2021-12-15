'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f5ae06dc661784d698e1918c9e1fa882",
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
"assets/assets/images/11-0-min.jpg": "b61704d60945ec67d1e6de19a0c14095",
"assets/assets/images/11-1-min.jpg": "8beb804a3929f492d90b0cb93610fd85",
"assets/assets/images/11-2-min.jpg": "47b99b416c3351c497ff5edcc6bba480",
"assets/assets/images/11-3-min.jpg": "237a5971d7d9ba927e2114d611c9808d",
"assets/assets/images/11-4-min.jpg": "4212911f782dd0c592a8666a9d910395",
"assets/assets/images/11-5-min.jpg": "56866ac616c889ae0006ab70b05a80f8",
"assets/assets/images/11-6-min.jpg": "c38dd60a1f45ba4ea5009e7776815bc4",
"assets/assets/images/11-7-min.jpg": "733ec9d0cfa5e2b51be2ac2b83fe9549",
"assets/assets/images/12-0-min.jpg": "7889eb8a8e17b52361d5c5a9e508819b",
"assets/assets/images/12-1-min.jpg": "ecbc73a4d4170528a13a354ceb435d15",
"assets/assets/images/12-10-min.jpg": "d80b9f1c3a6f32e5fca340435d7db02e",
"assets/assets/images/12-11-min.jpg": "8f671c05ed14a11c2ece02e8e7b8e5a4",
"assets/assets/images/12-12-min.jpg": "b41cc3a1925d7b4cb4b3baafca0f5d5e",
"assets/assets/images/12-13-min.jpg": "351fae9f8cecaf90496396164d29f2c5",
"assets/assets/images/12-14-min.jpg": "c1ec6a3b7a49cb1907bdf6e4e05bd1f3",
"assets/assets/images/12-15-min.jpg": "831585f9fddfbb9f58435ef2ec2a70c6",
"assets/assets/images/12-2-min.jpg": "72228c62a1b0feae4bc1ab4bc6eae82a",
"assets/assets/images/12-3-min.jpg": "c9f0d8042846979ac77adf3004a0a31c",
"assets/assets/images/12-4-min.jpg": "1c6c2a963c533e5f060eff9dc5ac1cf3",
"assets/assets/images/12-5-min.jpg": "d328b75b0dc62959024b2fee0c82f13b",
"assets/assets/images/12-6-min.jpg": "bc9eb7ec11d61f22b78b2376b7e822f1",
"assets/assets/images/12-7-min.jpg": "a229bf84337f81a520fd19c09b1c8d65",
"assets/assets/images/12-8-min.jpg": "b2163670c352879bb795a53d3ba44e91",
"assets/assets/images/12-9-min.jpg": "804155a6f217c15832c363ecd71392b7",
"assets/assets/images/13-0-min.jpg": "49ce3dfc9676caa87b90470b45a5ce27",
"assets/assets/images/13-1-min.jpg": "368f26c5594feaed7912ce63f8d3a145",
"assets/assets/images/13-10-min.jpg": "55453a0b19df91eb272af0060023c56d",
"assets/assets/images/13-11-min.jpg": "edeff6ff22b0c5509b9314220d344327",
"assets/assets/images/13-12-min.jpg": "539ad8021f2c57355aff4c312f2020ec",
"assets/assets/images/13-2-min.jpg": "cd3bc90c3a5a1cb7a13b7450aab79263",
"assets/assets/images/13-3-min.jpg": "42887bd75d692dbed0d39cd10b2af8da",
"assets/assets/images/13-4-min.jpg": "59594f9b6687cb7f477e7be46ec1d0d7",
"assets/assets/images/13-5-min.jpg": "a72cf8ffe157ebdcee02aa7d7ba4c046",
"assets/assets/images/13-6-min.jpg": "618c55771aa5cd1b3883d8d50dbb9926",
"assets/assets/images/13-7-min.jpg": "bdca61975ae6273532b2a45e45053a1f",
"assets/assets/images/13-8-min.jpg": "ddd373b8cc2e4ae19e4cb3c3613cb473",
"assets/assets/images/13-9-min.jpg": "370e9e2501877321d9ffd16bd4faddc0",
"assets/assets/images/14-0-min.jpg": "90f9253d52efd9f8139b702cf80e9d27",
"assets/assets/images/14-1-min.jpg": "7e036ff7d27318d430f8cbe0df08efba",
"assets/assets/images/14-10-min.jpg": "1f6644f3d7e43bc33775554f51edf8fd",
"assets/assets/images/14-11-min.jpg": "b1e63aee754ee506882aa76dbb33c46b",
"assets/assets/images/14-12-min.jpg": "ffaf5f1b4adf9425317e58f2e7ece872",
"assets/assets/images/14-13-min.jpg": "50839609bb6535dd2fd197c2e0c10ea7",
"assets/assets/images/14-14-min.jpg": "84a418ea991065ac82804a64d07063ea",
"assets/assets/images/14-15-min.jpg": "2dcb6e7f4047c7b85a5bb5ddf03b13e2",
"assets/assets/images/14-16-min.jpg": "4e9454d5bc9aaf532c518b1f7c232089",
"assets/assets/images/14-17-min.jpg": "d5d95d47a4ffcf2ad9da8a38f0f69261",
"assets/assets/images/14-18-min.jpg": "87fe5b2e041d9257752bbebc5d1ac2cf",
"assets/assets/images/14-19-min.jpg": "ce2f5225193907d8643501ae9e1f9fdc",
"assets/assets/images/14-2-min.jpg": "ff13c1699832baadb7cbe32a13d2961c",
"assets/assets/images/14-20-min.jpg": "7f3775371c6597bd94583a3fe42ee363",
"assets/assets/images/14-21-min.jpg": "44c0f4e9b52b91c38fc3815ae58e17fd",
"assets/assets/images/14-22-min.jpg": "3d3bd967574efa0c161d5113cc3e7dc2",
"assets/assets/images/14-23-min.jpg": "c51cfb69c9952b16793f7aec4a09d804",
"assets/assets/images/14-24-min.jpg": "171cf4c945b6a8660634c775d458f972",
"assets/assets/images/14-25-min.jpg": "f9c1a7543ae0ab7f04d91d9ef44bf46c",
"assets/assets/images/14-3-min.jpg": "764400e7140c46c7bd4a4b4c0392aca2",
"assets/assets/images/14-4-min.jpg": "b2bd051d7427e9ee4d4df72a3b717c7a",
"assets/assets/images/14-5-min.jpg": "81564f82693072e82055d2158546b0f6",
"assets/assets/images/14-6-min.jpg": "6162bb332286c7cd0893b782b69e2aee",
"assets/assets/images/14-7-min.jpg": "219b804bc4f3fb09121bd8a937d37611",
"assets/assets/images/14-8-min.jpg": "85b54c379daf1b4619feb6cf4121f463",
"assets/assets/images/14-9-min.jpg": "0bec463a7ab3a5feaa754fdd31caea4f",
"assets/assets/images/15-0-min.jpg": "3809204fb112a743a567b8f419a32cb6",
"assets/assets/images/15-1-min.jpg": "5fa8261fd4cc71faa3b8412f02c87449",
"assets/assets/images/15-10-min.jpg": "4411e521643626068c312c0d1f8c1a3b",
"assets/assets/images/15-2-min.jpg": "1bf4f16b8119e27dec6a19387e6ab34d",
"assets/assets/images/15-3-min.jpg": "71b2420c863acb1c23322fc34e5bad13",
"assets/assets/images/15-4-min.jpg": "687e73eebedeb76ac622fa53b196c2e0",
"assets/assets/images/15-5-min.jpg": "350fe3f1a71ca9ea761b1d34f3070d24",
"assets/assets/images/15-6-min.jpg": "c8e13de3a819e792fd217750d572355a",
"assets/assets/images/15-7-min.jpg": "016d494912a35d2cb21d3036bb56970e",
"assets/assets/images/15-8-min.jpg": "0766fe68fa426a130bf831157a9d5115",
"assets/assets/images/15-9-min.jpg": "6ad56bde0f754e20dbbd1d802f26cc2a",
"assets/assets/images/16-0-min.jpg": "045fb144ef8354d429ea31989684ae0d",
"assets/assets/images/16-1-min.jpg": "da5940047a390657ee51f1ead76bb82a",
"assets/assets/images/16-2-min.jpg": "c056bad37b8f815284885c7e01ca388e",
"assets/assets/images/16-3-min.jpg": "42aecc5fa28a8c6297110defb2bf68f3",
"assets/assets/images/16-4-min.jpg": "dc4094e5475d0b6a7614b48f279abe5f",
"assets/assets/images/16-5-min.jpg": "1204902079668b7e535f9715e6d1c0e5",
"assets/assets/images/17-0-min.jpg": "f371226539ac1d07c48b9794ccd858b0",
"assets/assets/images/17-1-min.jpg": "705dbac2ed999cb6d53e93939f437293",
"assets/assets/images/17-2-min.jpg": "9d3f571770e954e375561008b4f5c482",
"assets/assets/images/17-3-min.jpg": "33d63e06c0a78e2937a71e83de5bd97b",
"assets/assets/images/17-4-min.jpg": "8f250fe63e6b8405c3e3edc9e79850c2",
"assets/assets/images/18-0-min.jpg": "7ef257de75f1bb00e200f95db031123a",
"assets/assets/images/18-1-min.jpg": "cc77ca79c49d34969a89e09da928523a",
"assets/assets/images/18-2-min.jpg": "f7295ec39e6d34a85afc076840dda6ac",
"assets/assets/images/18-3-min.jpg": "ac3abf378b675a4e873357151263aa8a",
"assets/assets/images/18-4-min.jpg": "8929861d4e5a220be3fc62daeeb4833d",
"assets/assets/images/18-5-min.jpg": "25b750b85b8afa206f8cfea4008d28c8",
"assets/assets/images/18-6-min.jpg": "9be9ff9ed7d47680e216c4516bdd9fc0",
"assets/assets/images/18-7-min.jpg": "900739384371382416c52b5ba99d3c0b",
"assets/assets/images/18-8-min.jpg": "d4816b4bc760139786655165517b197c",
"assets/assets/images/19-0-min.jpg": "69431057809e8c8d4402f7e5a35d4712",
"assets/assets/images/19-1-min.jpg": "069f079d3e34e089ea7201c9cfd9eca9",
"assets/assets/images/19-2-min.jpg": "343b645830cc5b241d482f75ea38c77c",
"assets/assets/images/19-3-min.jpg": "308884570b9f82accdfaa6ed3362d3ad",
"assets/assets/images/19-4-min.jpg": "6988dd9e31c15fd3fca8a19df19590a5",
"assets/assets/images/19-5-min.jpg": "104378a75a90723f1e91d45b8e608ff9",
"assets/assets/images/19-6-min.jpg": "0a9db35808f4230408b4e76b75f5bdbf",
"assets/assets/images/2-0-min.jpg": "3a92fb057103ac6a7231d91238680654",
"assets/assets/images/2-1-min.jpg": "7f5d31e884bf695232264073e47813f1",
"assets/assets/images/2-2-min.jpg": "0eb2d3abbfa55de31f1e6596fab52b02",
"assets/assets/images/2-3-min.jpg": "c4882fe3b7adbd7aef6f99a604ff3b2f",
"assets/assets/images/20-0-min.jpg": "809875e06d747debe5336bc0495f0723",
"assets/assets/images/20-1-min.jpg": "1dfeb14b38cf1c46689b4062f264694c",
"assets/assets/images/20-2-min.jpg": "aa3853d7a0a4adbec6ab81dc873cece4",
"assets/assets/images/20-3-min.jpg": "dee33ee934021cbe856a67ffa5cad5a8",
"assets/assets/images/20-4-min.jpg": "7a5b5d1f6604f738a41441c31eff075d",
"assets/assets/images/20-5-min.jpg": "0ab27631ba27b730b47f6cb24850fd42",
"assets/assets/images/20-6-min.jpg": "e46d30f1f5c6365a7198e31cd1968d21",
"assets/assets/images/21-0-min.jpg": "1f2b96ae20f7233442e3243c684d7cc5",
"assets/assets/images/21-1-min.jpg": "d12c4c510ba39cb15e52fd52d086e26b",
"assets/assets/images/21-2-min.jpg": "c06585793c39a2ce68fc9fd76ef65861",
"assets/assets/images/21-3-min.jpg": "4eee68e7799ea72ec8ec0f83c21188ba",
"assets/assets/images/21-4-min.jpg": "04c8022ef268553c64dd0f91e7264951",
"assets/assets/images/21-5-min.jpg": "e3574e534097b4553f6ed70a3bd19156",
"assets/assets/images/21-6-min.jpg": "a7cd4e5bf978f5ee05b8c84dc81983ef",
"assets/assets/images/21-7-min.jpg": "e4124cc43ce1d95a0f31a2e2f6177fda",
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
"assets/assets/images/6-4-min.jpg": "25d12d6b42629bdcc3b76e36e350f413",
"assets/assets/images/6-5-min.jpg": "ef5093d24a1dd61c3886889f7c63d290",
"assets/assets/images/6-6-min.jpg": "e0e946616702bcd776cb7e1656a9a6c3",
"assets/assets/images/6-7-min.jpg": "b71cccb28fdd6b016e7dcfbdc4b10f5e",
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
"index.html": "a9c40253d4e08686aa68f7100c642b2a",
"/": "a9c40253d4e08686aa68f7100c642b2a",
"main.dart.js": "0b72868dddcfcdf44b972a055f2dcf0c",
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

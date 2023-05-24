'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ac52ec94d8ec01071a317469a1aeca73",
".git/config": "8d1e0568f56dfd7c4ec775caa9e04014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7826b44f3e439eaa7009ee06402cc2a7",
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
".git/index": "556e960b7f1f937e9a08f569fbadd259",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a86bd13ad7ba0d4772f5fccf10825ba7",
".git/logs/refs/heads/main": "a86bd13ad7ba0d4772f5fccf10825ba7",
".git/logs/refs/remotes/origin/main": "ca80d88b3cab565cdf388d74185acb4e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/92e3e72ddccc90961d586ca447322dd081a2f2": "38511b4de69f1ca30240a27f80e5cddc",
".git/objects/05/176d8d96dee847cfa4220ba45166589b15563a": "5442e7bd37754bf827b759e034124f0d",
".git/objects/0d/a8fa6d3ab859a96d357275e1a95b5a92d67e7f": "e4b3e5d43192166e0018b1eeb62df6a3",
".git/objects/0e/28c77de14649e68358db27fa95bf87cbe7f605": "7ba3e0f0466efc7886a08bf3a60ab600",
".git/objects/0e/b13f312b7b14d3a24dcac52245eecf54a80ce7": "a9f5a2e15b0ae2f2d971e4e1dca72c81",
".git/objects/0f/11236e3c7c1a991fb98869e93253b7678de9a0": "7a5f4d13aaae40a37f94856389676b62",
".git/objects/12/956deac9af9a4940af1a01ae8137e2418e71aa": "1a0e8f5d605efd937594be3f7dc81a7a",
".git/objects/15/6831d0383c3f1ed53cec467fa7b53a9971aac8": "25ca46ef766964bb15b6b23b7489447c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1f/4fc114c0601ebb78bb4c851436b7a9c50f0b56": "14970cbfd4d690d89bf1809562d62acd",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/61ac35aa423e6a18cfed10196fd1e0d520c531": "42a8cacc3ac09d29c08ba45f35adfca7",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2a/0da9bb4ba60ca734f660ea4805ac613f4bcd3a": "a9ab9d8c750762a6e1b50bb2e5b729af",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/962d29f50c34e6a9f326b46cc28793be389657": "8ddfd23c64a6893f73c3586b93fa6685",
".git/objects/32/9af47678bea5250aaf6e56409a8acfa6db86d6": "e59a84ace6423c2759a3ebe6f5062468",
".git/objects/37/74286389ef30b0fd114f9cf056fee19dcff280": "4110d2781b65179b58f6facfd13441bc",
".git/objects/3c/7fbcf543ce035fb3d91f69c9d870c9207ba88d": "3a637c299a328dd974a98f11b8a807dd",
".git/objects/3c/ae468601fe24bb026d034ef3f3a899eba6d21e": "823a0b3bb60326b82d94973f1bc30ae6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/d971c3c1e12c83c6b69e94b83a72695ff9b716": "d7cffa0b82a6fc5edbffdda76c355f2d",
".git/objects/41/5ea990af56ce8d8a8be18fed9fc16458789add": "d4a44470aa61ca1de939021dd8424a83",
".git/objects/41/c4ff606d49b37f9e90734dbb25ec26ad09eaa6": "833cef46d5eff4ef2e14c405a2d311e4",
".git/objects/44/733ddf4c419b88ed90c9f9f440103df5913eac": "b6c8ef5a7634502c49ceee0e62ed86c6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/892c28e763be8800db5f0ceee6a7275d567005": "ec03c2637291e1e0fc674e38e20093da",
".git/objects/4f/99dcadb4097ff5177a7f44f24fd1d206c7021d": "e84c21eb686e8c898be05e6f3d34bc47",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/55/aea59956f02983ca0b18601f63ab3c767c2062": "8c08ec9acf1ee5caa7fa286c78f15305",
".git/objects/5b/b446de470937a53a1b5211f5ae6643be0d55b5": "3872831857cb63085c6c6bf8758f652f",
".git/objects/61/e9e8151f5bcdbba5a887e6d8392d1eac4d3e70": "9928f70f8ddb69c8626a8b6b091b02a0",
".git/objects/62/2c3046d626a7424d4bd4c63b37decfe398711b": "9809bc0f5ebd7d98d05a8936dd323738",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/6fe9f7d536dc1bbeee8457236c6e33f975245f": "97907091ac5f15053bd31f986f8fbff8",
".git/objects/67/ae1af5001a9716f68f7d41d7fda51cf9d9e655": "546c32fe3c8bf25927627f4b4e70540d",
".git/objects/69/2a54c8e447974b336725b076c4d9ce69dde567": "1ad4d4f5fb385c74410f4197ece3da06",
".git/objects/6d/1c1dfa350475bdbfa28a446f2edcdb47c5dc82": "26263db62b35a87e6ccca697ebe07658",
".git/objects/70/83b109f0f4d0c19b56229e10bca290a6b2524d": "7edd2ca2f8de4c8fc2ccacd1b9b85605",
".git/objects/71/8d5d0f646d0b9870c4a3509fc16fa6f3897c7f": "abf60cddb85b27fd00a3da8406b92f1c",
".git/objects/73/df56b1d17b4a7bc1f96db456b2efc2eb1a9c63": "8692c531c3ab6efd3d2b8ba1e1283d3f",
".git/objects/73/f99c1c9f3603ecbcd4e9c17ff66a77bc79f5e9": "63a37a79a0c983a7e354ac92129b41f5",
".git/objects/74/61b4bf8e5eec800218f308c3ffc2d6d679e675": "4c5f694a4d80d1c44cfc850c42aab312",
".git/objects/74/b090c28fa58fadc946f5b9ccc448e1f91b12ce": "9d53c14e9b262cf800f002156a1aff8e",
".git/objects/77/b8f5495e403e82fb0001a8f42d44221d28750e": "3a8dd0d775ae542d7357f8dacab362dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/df5608dbd83028d656c7350744ac13a923c07a": "abef47846af7788a2b7519e444aff41a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/64949a9d9c9fb96be2d239bda650604112d118": "39cc489b305c1d261a7f78e99acd6099",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/81/77b1bafc0e6c0b41290dd3be19278c57744f26": "677f62debc1cfbf0453a0b6aecebf455",
".git/objects/83/9be15aa04c8b291362642e970499a92fb627b6": "bc57372973b9516186933812180eef39",
".git/objects/84/91e1845c45093f6faa2e6e951f08ce92885555": "630e5fdc0270fce24dc79d1ba1c53702",
".git/objects/87/5391476577f6e3cd96ed149311e25734e969f9": "dbdf73a577b40373808cb1b80e60333e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/13b13984f6452e7f65a603632e09dd431044ac": "2d192dda2088e2b557b5e27992357646",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/866ce9eeac1acff88b85c6a5e51de4c4a00099": "af1fd7b59fe56309b6f47a06e794c547",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/ffd473243e3360aef2eea127175c61ae131812": "7498643bf982ff9fb19a1bc127387e28",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/779097da0c0d2e12ee34ef1f7b64cedc3cc11c": "6ccdc0b7c3d5c53556d218889fdcf0c3",
".git/objects/9c/654e582011674c4e08bf377169f536be69e7f1": "f00d0a9ada3de88d731509bcb6ad16e6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7b42fc561b28ea2802dbef26f692eee500f557": "0e6aeb82734e8455bb22f823f959e040",
".git/objects/a4/d511e1ea8d9e3b7154ac85f1e936f5cc1b91d2": "3ab447b10cc32ec053bb3e478e83d225",
".git/objects/a7/1b1d74535e82a93747430da01b3ff53c374bb0": "b622c6aec64c0964de80573b555a3ecc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6493a2c4070054a41844ed56958dbe7b84c542": "236656fad4f1e5fb3d6175b7414c2e55",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/d0403fb9763d164363705a0af2b0a1cd944828": "004d183176a0549b50bd792211b14a23",
".git/objects/b2/ec71709573cd8321c435a2bb169ee72130840f": "1665963c8b8c42b4ade1669572d841bb",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6620c6038e68111fddd8c1cddff5a49b631430": "94037bdb384a6cd488aeacc33df68eaa",
".git/objects/ba/21d608a2675eeb92a1a170b8ea4188cbae0ffc": "9e54a5e6adc5896907d109ccb1ddcfc0",
".git/objects/be/4dbac8a6beb56ef4c93dffb5d35275fdeaaad8": "020ccc518b007f8b82f1941b42117620",
".git/objects/be/c93117325448363faa4ad7fb7fc36fe38bb8a1": "69b1e711f51d8a8282d1060b9cddbfa0",
".git/objects/be/cbd7ef63bd54bb92ddd427d65f75f8ee22dce6": "b8b4f9302cbf97346694cb674cf42406",
".git/objects/bf/579d95f24dbf35c995e8c5a1b490ef08d66529": "299763c301fcb2966f97f963c790a620",
".git/objects/c4/a7b1fb90dc5f1ff14964d1feeab18f30503b9a": "8d05d65e72df322fe66d725fd7c959c6",
".git/objects/c6/6d1acac6ba85d1e7f54b19eb67e7fd74c11dd1": "cecbf2978b97aeb61efbd17648dcb61b",
".git/objects/c8/a4a4e924c3e12dfbd1f28dbb9df83fd45c62fd": "12c30b6181fbc71c9c58df94679ea8a2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/a6b4154d15ae0f15d3331df5b63bb8d4a69a93": "434f48f115d156e3b5776e6042921897",
".git/objects/cf/f46f3acd4e0d4e9b0182a13685684969ce65b3": "08a07f86200c2a12e10429c80c0b8932",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/15e541f9284305d43808d0348ff4224c53183b": "26c6d6ff225b43d089b45d1cf023583a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/cb6865822d0b82ff5066cec7bb4782273daec7": "c13bf5915866b93a5647e155f8f21a42",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e5/46934b9fdc7d5df6463da5f12e411850c22557": "5c835972bda0ea495105377dab756dc8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/174f587974e88a1af126d6140cc04dc48554ae": "fa17c84a3fb3aee5f43511bcf9a4fd06",
".git/objects/e9/0b08675144a960feebe83fadde1450f98d3136": "aa8cf31158e09addabd00f7ee7789cc7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6474fea7218882e57617bd01c7348d59fba1ab": "816d5e729a6ab3f4a055a4d353c83d52",
".git/objects/ec/90b95f5634abd7d8c0d0d9a3c2d27689c82939": "70e6f1527f03a9e14da628b96b38c643",
".git/objects/ef/17fac4df3b70a989b6e220afc622617c09e400": "131cf8add449f06db4abf0e355cbd58a",
".git/objects/f4/74df74d9bf6ee0e542cf44e9573d593e7f97fd": "8de17eb45a2541cbbc07d622e172cc1d",
".git/objects/f8/df59300ff8e2a5bf5393b2a53d3d7ba28d23ea": "9a95610746859a93a5c77df67242d787",
".git/objects/ff/97b934d0dad0883a31c36ba4af3d66cf145f52": "0f767e650cd71490cce6346d6a1390e2",
".git/ORIG_HEAD": "1bbb6ecc2087c2a6d142b651b1aa723d",
".git/refs/heads/main": "24e6498bb2d06c878d8e383dbecf44cf",
".git/refs/remotes/origin/main": "24e6498bb2d06c878d8e383dbecf44cf",
"assets/AssetManifest.bin": "7af9b0e95a3916fae54eeaa7ebae702f",
"assets/AssetManifest.json": "c7bda85290e2216fff510683aa72ff85",
"assets/assets/images/baesthetics_EB_shiny.png": "6add27c0e53da1a752b05ed27c33a03f",
"assets/assets/images/baesthetics_only.png": "16da0534ee58f99972ce98b5783e694f",
"assets/assets/images/baesthetics_only_fog.png": "8feed4158f0a89cf3a39dd291a679c31",
"assets/assets/images/baesthetics_only_shiny.png": "e038c25f7b466205a5cea3f5c8c20790",
"assets/assets/images/baesthetics_only_thin.png": "c53801e2f1f2a515084cf6e2a7d159d3",
"assets/assets/images/demo1.jpg": "8900a2f3cba64601b9282f887727367a",
"assets/assets/images/demo2.jpg": "4703f0f9af9a63df6da7966410a9f055",
"assets/assets/images/demo3.jpg": "0a3756772e0bcecf9ed3c55a04541d84",
"assets/assets/images/ebay_schwarz.png": "9f32be5aa4ddb8b447fb47c26ba906fa",
"assets/assets/images/EB_only.png": "0df300775571ac6c015635170045236b",
"assets/assets/images/EB_only_fog.png": "263e94af51bc4c7bf5d08acf9de5eaca",
"assets/assets/images/Logo_full_colored.jpeg": "fe6510c2b47999be56fcd69ec597aad2",
"assets/assets/images/TRANSPARENT_LOGO.png": "c27d4155cb3f33e7099d39eabffb4aa1",
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
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
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
"index.html": "31d447a2968c1e1393c75c7fa2983c76",
"/": "31d447a2968c1e1393c75c7fa2983c76",
"main.dart.js": "7cd9515adff76fa52007dc34bba8e13e",
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

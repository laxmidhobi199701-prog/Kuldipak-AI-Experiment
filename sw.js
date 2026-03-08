/**
 * फाइल: sw.js
 * कार्य: शुक्राचार्य कवच (Service Worker)
 * उद्देश्य: ऐप को ऑफलाइन चलाने और माया (Cache) को नियंत्रित करने हेतु
 */

const cacheName = 'prahari-v4-siddhi';
const assets = [
  './Prahari_Mukhauta.html',
  './manifest.json',
  './logo.png'
];

// कवच की स्थापना (Installation)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('॥ शुक्राचार्य कवच ॥: सुरक्षा घेरा तैयार किया जा रहा है...');
      return cache.addAll(assets);
    })
  );
});

// पुरानी माया का विनाश (Activation)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// सत्य का दर्शन (Fetch)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

//Almacenamiento previo en caché
workbox.precaching.precacheAndRoute([
    'index.html',
    'calcular.html',
    'offline.html',
    'app.js',
    'sw.js',
    'manifest.webmanifest',
    'css/bootstrap.min.css',
    'js/bootstrap.js',
    'js/bootstrap.bundle.js',
    'images/styleInicio.css',
    'images/styleCalcular.css',
    'images/logo.png',
    'images/portada.jpeg',
    'images/portadaCalcular.jpeg'
]);

//Ruta de almacenamiento en caché en tiempo de ejecución 
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
    ({request}) => request.destination === 'document',
    new workbox.strategies.NetworkFirst()
);

//Página web e imagen por defecto en estado Offline
workbox.routing.setCatchHandler(async context=>{
    console.log(context);
    console.log(context.request);
    if (context.request.destination === 'image'){
        return workbox.precaching.matchPrecache('images/offline.jpg');
    }
    if (context.request.destination === 'document'){
        return workbox.precaching.matchPrecache('offline.html');
    }
    /**console-log("si entro");
    console.log(event);
    return true;*/
});

/**var cacheName = 'appV1';
var contenidoCache = [
    'index.html',
    'galeria.html',
    'nosotros.html',
    'app.js',
    'sw.js',
    'manifest.webmanifest',
    'css/bootstrap.min.css',
    'js/bootstrap.js',
    'js/bootstrap.bundle.js',
];

self.addEventListener('install', (e) =>{
    console.log("instalado");
    e.waitUntil((async() => {
        const cache = await caches.open(cacheName);
        await cache.addAll(contenidoCache);
    })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async()=>{
        const r = await caches.match(e.request);
        if (r) return r;
        console.log(r);
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());

        return response;
    })());
});**/
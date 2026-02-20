const CACHE_NAME='ordermgr-v7';
const REPO='/order-management-app';
const PRE=[REPO+'/index.html',REPO+'/manifest.json',REPO+'/icon-192.png',REPO+'/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(PRE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==self.location.origin){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return;}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.status===200&&r.type==='basic')caches.open(CACHE_NAME).then(cc=>cc.put(e.request,r.clone()));return r;})));});

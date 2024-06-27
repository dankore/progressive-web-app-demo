window.addEventListener('load', function(){
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").then(function(){
            console.log("PWA service worker is registered.")
        });
      }
})
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
if ('serviceWorker' in navigator) {
  runtime.register().then(() => console.log("Service worker registered!"));
}

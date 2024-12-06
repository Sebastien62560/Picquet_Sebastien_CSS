import Alpine from "alpinejs";
window.Alpine = Alpine;


import Gallery from './../../src/js/components/gallery';  

document.addEventListener('alpine:init', () => {
  Alpine.data('Gallery', Gallery); 
});


Alpine.start();

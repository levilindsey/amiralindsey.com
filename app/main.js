(function () {

  function onDocumentLoaded() {
    document.removeEventListener('load', onDocumentLoaded);
  }

  window.amira = window.amira || {};

  window.addEventListener('load', onDocumentLoaded, false);
})();

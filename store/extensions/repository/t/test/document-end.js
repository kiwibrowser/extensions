(() => {
  'use strict';
  console.log('Dumping current page status' + document.readyState);
  alert('Testing context ' + document.location);
  console.log('Running at document end');
})();

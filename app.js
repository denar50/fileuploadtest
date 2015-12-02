angular.module('test', ['ngResource']);

angular.module('test').controller('MainCtrl', function($resource){
  var resource = $resource('/file', {}, {
    upload: {
      method: 'POST',
      transformRequest: angular.identity,
      headers: {'Content-Type':undefined, enctype:'multipart/form-data'}
    }
  });

  $('#cosito').on('change', function(event){
    debugger;
    var file = event.target.files[0];
    var fd = new FormData();
    fd.append('cosito', file);
    resource.upload({}, fd).$promise.then(function(resource){
      debugger;
    })
    .catch(function(resource){
      debugger;
    });
  });
  function upload()
  {

  }
});

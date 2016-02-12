'use strict';

juke.config(function($stateProvider){
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/views/allalbums.template.html',
    controller: 'AlbumsCtrl'
  })
  .state('album', {
  	url: '/album/:albumid',
  	templateUrl: '/views/album.template.html',
  	controller: 'AlbumCtrl'
  })
})



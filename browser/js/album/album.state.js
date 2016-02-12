'use strict';

juke.config(function($stateProvider){
  console.log('hi, i am the album.state');
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/views/album.template.html',
    controller: 'AlbumsCtrl'
  })
})

'use strict';

juke.config(function($stateProvider){
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/views/allalbums.template.html',
    controller: 'AlbumsCtrl',
    resolve: {
      albums: function(AlbumFactory){
        return AlbumFactory.fetchAll();
      }
    }
  })
  .state('album', {
  	url: '/album/:albumid',
  	templateUrl: '/views/album.template.html',
  	controller: 'AlbumCtrl',
    resolve: {
      album: function(AlbumFactory, $stateParams){
        return AlbumFactory.fetchById($stateParams.albumid);
      }
    }
  })
})



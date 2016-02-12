'use strict';

juke.config(function($stateProvider){
  console.log('hi, i am the all artists.state');
  $stateProvider.state('allArtists', {
    url: '/artists',
    templateUrl: '/views/allartists.template.html',
    controller: 'ArtistsCtrl',
    resolve:{
      artists: function(ArtistFactory){
        return ArtistFactory.fetchAll();
      }
    }
  })
  .state('artist', {
  	url: '/artist/:artistid',
  	templateUrl: '/views/artist.template.html',
  	controller: 'ArtistCtrl',
    resolve: {
      artist: function(ArtistFactory, $stateParams){
        return ArtistFactory.fetchById($stateParams.artistid);
      }
    }
  })
  .state('artist.albums', {
    url: '/artist/:artistid/albums',
    templateUrl: '/views/artist.albums.template.html',
    controller: 'ArtistCtrl'
  })
  .state('artist.songs', {
    url: '/artist/:artistid/songs',
    templateUrl: '/views/artist.songs.template.html',
    controller: 'ArtistCtrl'
  })
})

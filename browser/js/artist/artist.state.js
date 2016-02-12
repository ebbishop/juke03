'use strict';

juke.config(function($stateProvider){
  console.log('hi, i am the all artists.state');
  $stateProvider.state('allArtists', {
    url: '/artists',
    templateUrl: '/views/allartists.template.html',
    controller: 'ArtistsCtrl'
  })
  .state('artist', {
  	url: '/artist/:artistid',
  	templateUrl: '/views/artist.template.html',
  	controller: 'ArtistCtrl'
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

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
})

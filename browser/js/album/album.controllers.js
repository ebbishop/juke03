'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams) {
  console.log("in album controller (singular), stateParams",$stateParams.albumid)

  // $scope.$on('viewSwap', function (event, data) {
  //   if (data.name !== 'oneAlbum') return $scope.showMe = false;
  //   $scope.showMe = true;
  //   AlbumFactory.fetchById(data.id)
  //   .then(album => {
  //     $scope.album = album;
  //   })
  //   .catch($log.error);
  // });

  AlbumFactory.fetchById($stateParams.albumid)
    .then(album => {
      $scope.album = album;
      console.log("got album",$scope.album)
    })
    .catch($log.error);

  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, $log, $rootScope, PlayerFactory, AlbumFactory) {

  // $scope.showMe = true;

  // $scope.$on('viewSwap', function (event, data) {
  //   $scope.showMe = (data.name === 'allAlbums');
  //   console.log($scope.showMe);
  // });

  $scope.viewOneAlbum = function (album) {
    // $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

  AlbumFactory.fetchAll()
  .then(albums => {
    $scope.albums = albums;
  })
  .catch($log.error); // $log service can be turned on and off; also, pre-bound

});

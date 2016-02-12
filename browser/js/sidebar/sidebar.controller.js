'use strict';

juke.controller('SidebarCtrl', function ($scope, $rootScope) {

  $scope.viewAlbums = function () {
    console.log('emit from view albums');
    $rootScope.$broadcast('viewSwap', { name: 'allAlbums'});
  };

  $scope.viewAllArtists = function () {
    $rootScope.$broadcast('viewSwap', { name: 'allArtists' });
  };

});

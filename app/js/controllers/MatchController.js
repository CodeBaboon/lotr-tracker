'use strict';

lotrApp.controller('MatchController',
    function MatchController($scope) {
        $scope.match = {
            deck: 'Leadership (Core)',
            spheres: ['Leadership'],
            heroes: ['Aragorn', 'Theodred', 'Gloin'],
            scenario: 'Passage through Mirkwood',
            result: 'w'
        }
    }
);
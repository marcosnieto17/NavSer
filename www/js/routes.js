angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.privacidad', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacidad.html',
        controller: 'privacidadCtrl'
      }
    }
  })

  .state('menu.grooming', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grooming.html',
        controller: 'groomingCtrl'
      }
    }
  })

  .state('menu.ciberbullying', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ciberbullying.html',
        controller: 'ciberbullyingCtrl'
      }
    }
  })

  .state('menu.sexting', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sexting.html',
        controller: 'sextingCtrl'
      }
    }
  })

  .state('menu.phishing', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phishing.html',
        controller: 'phishingCtrl'
      }
    }
  })

  .state('menu.dobleAutenticaciN', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dobleAutenticaciN.html',
        controller: 'dobleAutenticaciNCtrl'
      }
    }
  })

  .state('menu.QuiNesSomos', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuiNesSomos.html',
        controller: 'QuiNesSomosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.QuEs', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuEs.html',
        controller: 'QuEsCtrl'
      }
    }
  })

  .state('menu.formasEnQueSeProduce', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/formasEnQueSeProduce.html',
        controller: 'formasEnQueSeProduceCtrl'
      }
    }
  })

  .state('menu.algunasEstadSticas', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/algunasEstadSticas.html',
        controller: 'algunasEstadSticasCtrl'
      }
    }
  })

  .state('menu.CMoPrevenirlo', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CMoPrevenirlo.html',
        controller: 'CMoPrevenirloCtrl'
      }
    }
  })

  .state('menu.FuisteVictima', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/FuisteVictima.html',
        controller: 'FuisteVictimaCtrl'
      }
    }
  })

  .state('menu.tESTEresUnBullySinSaberlo', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tESTEresUnBullySinSaberlo.html',
        controller: 'tESTEresUnBullySinSaberloCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});
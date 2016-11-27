// import angular from 'angular'
// import { authStore } from '../../../../utils/data-adapter'
// import view from './views/auth.html'
// import './auth.styl'
// const Component = 'auth'
// (function () {
//   angular.module(`app.components.auth`, [])
//     .component('auth', {
//       template: 'app/components/auth/auth.html',
//       controller: AuthController
//     })

//   function AuthController($scope) {
//     let $ctrl = this

//     let updateUser = (user) => {
//       $ctrl.member = user
//       $ctrl.activeView = null
//       update()
//     }

//     $ctrl.$onInit = () => {
//       authStore.on('USER', updateUser)
//     }

//     this.login = (providerString, credentials) => {
//       authStore.login(providerString, credentials)
//     }

//     this.logout = () => {
//       authStore.logout()
//     }

//     this.register = (credentials) => {
//       authStore.register(credentials)
//     }

//     let update = () => {
//       $scope.$evalAsync()
//     }
//   }
// })();

(function () {

  angular.module('1x')
    .component('auth', {
      templateUrl: 'app/components/auth/auth.html',
      controller: AuthController
    })

  function AuthController() {;
    let $ctrl = this

    let updateUser = (user) => {
      $ctrl.member = user
      $ctrl.activeView = null
      update()
    }

    $ctrl.$onInit = () => {
      authStore.on('USER', updateUser)
    }

    this.login = (providerString, credentials) => {
      authStore.login(providerString, credentials)
    }

    this.logout = () => {
      authStore.logout()
    }

    this.register = (credentials) => {
      authStore.register(credentials)
    }

    let update = () => {
      $scope.$evalAsync()
    }
  } 

})(); 
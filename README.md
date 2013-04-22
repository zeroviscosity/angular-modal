# Angular Modal

### An AngularJS Directive for controlling a Bootstrap Modal

### Usage

* Replace `myApp` with the name of your AngularJS application 
* Place the following include your base controller:

      <div angular-modal></div>
    
* To activate the modal, broadcast a `showModal` from the $rootScope along with
  modal options:

      $rootScope.$broadcast('showModal', {
          title: 'Error', 
          message: 'Some important error message!', 
          alert: 'error'
      });
    

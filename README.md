# Angular Modal

### An AngularJS Directive for controlling a Bootstrap Modal

### Usage

1. Replace `myApp` with the name of your AngularJS application 
2. Place the following include your base controller:

        <div angular-modal></div>
    
3. To activate the modal, broadcast a `showModal` from the $rootScope along with
   modal options:

        $rootScope.$broadcast('showModal', {
            title: 'Error', 
            message: 'Some important error message!', 
            alert: 'error'
        });
    

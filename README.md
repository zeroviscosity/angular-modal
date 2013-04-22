# Angular Modal

### An AngularJS Directive for controlling a Bootstrap Modal

#### Usage

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

#### Modal Options

The directive provides five options, the defaults for wich are: 

        $scope.defaults = {
            title: 'Notification',
            message: '',
            alert: null,
            class: '',            
            action: function() {  }
        };

Of these, the four that can be passed in are:

* `title` - The title displayed at the top of the modal.
* `message` - The message displayed in the body of the modal. This should always
  be included in the options.
* `alert` - This determines whether or not a Bootstrap alert will be used to 
  wrap the message. Possible values include 'error', 'info' and 'success'
  See http://twitter.github.io/bootstrap/components.html#alerts
* `action` - This is called when the user clicks the OK button. Other methods of
  closing the modal have been disabled.

The `class` option is set based on the value passed into `alert`.
    
#### Naming Options

To rename the directive, change `angularModal` to whatever you want it called,
for example:

        myApp.directive('bootstrapPopUp', function() {
        
If the directive name is changed, then it needs to be called with the new name:

        <div bootstrap-pop-up></div>
    

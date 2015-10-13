app.controller("HelloCtrl", function($scope) {
    $scope.name = "Calvin Hobbes";
});
app.controller('view1ctrl',function($scope){
    var count  = 0;
    $scope.Count = count + ' Alarms Scheduled';
    $scope.result = '';
    $scope.setAlarm = function(){
        var myDate  = new Date("October 15, 2015 16:25:00");

// This is arbitrary data pass to the alarm
        var data    = {
            foo: "bar"
        };

// The "ignoreTimezone" string is what make the alarm ignoring it
        var request = navigator.mozAlarms.add(myDate, "honorTimezone", data);
        request.onsuccess = function () {
            $scope.result = "The alarm has been scheduled";
            count+=1;
            $scope.Count = count + ' Alarms Scheduled';
        };

        request.onerror = function () {
            $scope.result =  "An error occurred: ";
        };
        request = navigator.mozAlarms.getAll();

        request.onsuccess = function () {
            this.result.forEach(function (alarm) {
                console.log('Id: ' + alarm.id);
                console.log('date: ' + alarm.date);
                console.log('respectTimezone: ' + alarm.respectTimezone);
                console.log('data: ' + JSON.stringify(alarm.data));
            });
        };

        request.onerror = function () {
            console.log("An error occurred: " + this.error.name);
        };
    };

});
angular.module('gw2-timer').controller('UpcomingListController', ['schedule', '$scope', '$interval', function (schedule, $scope, $interval) {
    $scope.events = null;

    function refresh() {
        // Get upcoming events from schedule
        $scope.events = schedule.getUpcomingEvents();

        // Add timer to all events
        $scope.events.forEach(function (event) {
            event.timer = new CountdownTimer(event.rawTime, true, false);
        });
    }

    function tick() {
        // Make text for everytimer
        var date = new Date();
        $scope.events.forEach(function (event) {
            if (event.timer.tick(date) == true) refresh();
        });
    }

    // Refresh once and start timer
    refresh();
    tick();
    $interval(tick, 20000);
}]);
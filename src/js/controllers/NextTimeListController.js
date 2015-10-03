angular.module('gw2-timer').controller('NextTimeListController', ['schedule', 'bossInfo', '$scope', '$interval', function (schedule, bossInfo, $scope, $interval) {
    // Create an array of all bosses
    $scope.bosses = [];
    for (var boss in bossInfo) {
        if (bossInfo.hasOwnProperty(boss)) {
            $scope.bosses.push({
                name: bossInfo[boss].name
            });
        }
    }

    // Sort array alphabetically
    $scope.bosses.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    /**
     * Refreshes this controller
     */
    function refresh() {
        // For each boss
        $scope.bosses.forEach(function (boss) {
            // Get event
            var event = schedule.getNextOfBoss(boss.name);

            // Grab info
            boss.localTime = event.localTime;
            boss.timer = new CountdownTimer(event.rawTime, true, false);
        });
    }

    function tick() {
        // Make text for every timer
        var date = new Date();

        $scope.bosses.forEach(function (boss) {
            if (boss.timer.tick(date) == true) refresh();
        });
    }

    // Refresh once and start the timer
    refresh();
    tick();
    $interval(tick, 20000);
}]);
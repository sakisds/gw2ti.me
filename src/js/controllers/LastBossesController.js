angular.module('gw2-timer').controller('LastBossesController', ['schedule', '$scope', '$interval', function (schedule, $scope, $interval) {
    $scope.bosses = null;

    /**
     * Refreshes the next bosses
     */
    function refresh() {
        $scope.bosses = schedule.getLastBosses();

        // Create countdown timers
        $scope.bosses.forEach(function (boss) {
            boss.timer = new CountupTimer(boss.rawTime);
        })
    }

    /**
     * Ticks the timers
     */
    function tick() {
        var date = new Date();

        // Tick both bosses
        $scope.bosses.forEach(function (boss) {
            if (boss.timer.tick(date) == true) {
                refresh();
            }
        });
    }

    // Refresh once and start the timer
    refresh();
    tick();
    $interval(tick, 1000);
}]);
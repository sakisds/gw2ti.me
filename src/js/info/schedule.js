angular.module('gw2-timer').service('schedule', ['bossInfo', function (bossInfo) {

    /**
     * The daily events, sorted by time.
     * @type {RingArray}
     */
    this.events = new RingArray([
        {h: 0, m: 0, boss: [bossInfo.tequatl, bossInfo.taidha]},
        {h: 0, m: 15, boss: [bossInfo.svanir]},
        {h: 0, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 0, m: 45, boss: [bossInfo.elemental]},
        {h: 1, m: 0, boss: [bossInfo.tripleTrouble, bossInfo.shatterer]},
        {h: 1, m: 15, boss: [bossInfo.wurm]},
        {h: 1, m: 30, boss: [bossInfo.modniir]},
        {h: 1, m: 45, boss: [bossInfo.behemoth]},
        {h: 2, m: 0, boss: [bossInfo.karka, bossInfo.golem]},
        {h: 2, m: 15, boss: [bossInfo.svanir]},
        {h: 2, m: 30, boss: [bossInfo.jormag]},
        {h: 2, m: 45, boss: [bossInfo.elemental]},
        {h: 3, m: 0, boss: [bossInfo.tequatl, bossInfo.taidha]},
        {h: 3, m: 15, boss: [bossInfo.wurm]},
        {h: 3, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 3, m: 45, boss: [bossInfo.behemoth]},
        {h: 4, m: 0, boss: [bossInfo.tripleTrouble, bossInfo.shatterer]},
        {h: 4, m: 15, boss: [bossInfo.svanir]},
        {h: 4, m: 30, boss: [bossInfo.modniir]},
        {h: 4, m: 45, boss: [bossInfo.elemental]},
        {h: 5, m: 0, boss: [bossInfo.golem]},
        {h: 5, m: 15, boss: [bossInfo.wurm]},
        {h: 5, m: 30, boss: [bossInfo.jormag]},
        {h: 5, m: 45, boss: [bossInfo.behemoth]},
        {h: 6, m: 0, boss: [bossInfo.karka, bossInfo.taidha]},
        {h: 6, m: 15, boss: [bossInfo.svanir]},
        {h: 6, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 6, m: 45, boss: [bossInfo.elemental]},
        {h: 7, m: 0, boss: [bossInfo.tequatl, bossInfo.shatterer]},
        {h: 7, m: 15, boss: [bossInfo.wurm]},
        {h: 7, m: 30, boss: [bossInfo.modniir]},
        {h: 7, m: 45, boss: [bossInfo.behemoth]},
        {h: 8, m: 0, boss: [bossInfo.tripleTrouble, bossInfo.golem]},
        {h: 8, m: 15, boss: [bossInfo.svanir]},
        {h: 8, m: 30, boss: [bossInfo.jormag]},
        {h: 8, m: 45, boss: [bossInfo.elemental]},
        {h: 9, m: 0, boss: [bossInfo.taidha]},
        {h: 9, m: 15, boss: [bossInfo.wurm]},
        {h: 9, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 9, m: 45, boss: [bossInfo.behemoth]},
        {h: 10, m: 0, boss: [bossInfo.shatterer]},
        {h: 10, m: 15, boss: [bossInfo.svanir]},
        {h: 10, m: 30, boss: [bossInfo.karka, bossInfo.modniir]},
        {h: 10, m: 45, boss: [bossInfo.elemental]},
        {h: 11, m: 0, boss: [bossInfo.golem]},
        {h: 11, m: 15, boss: [bossInfo.wurm]},
        {h: 11, m: 30, boss: [bossInfo.tequatl, bossInfo.jormag]},
        {h: 11, m: 45, boss: [bossInfo.behemoth]},
        {h: 12, m: 0, boss: [bossInfo.taidha]},
        {h: 12, m: 15, boss: [bossInfo.svanir]},
        {h: 12, m: 30, boss: [bossInfo.tripleTrouble, bossInfo.megadestroyer]},
        {h: 12, m: 45, boss: [bossInfo.elemental]},
        {h: 13, m: 0, boss: [bossInfo.shatterer]},
        {h: 13, m: 15, boss: [bossInfo.wurm]},
        {h: 13, m: 30, boss: [bossInfo.modniir]},
        {h: 13, m: 45, boss: [bossInfo.behemoth]},
        {h: 14, m: 0, boss: [bossInfo.golem]},
        {h: 14, m: 15, boss: [bossInfo.svanir]},
        {h: 14, m: 30, boss: [bossInfo.jormag]},
        {h: 14, m: 45, boss: [bossInfo.elemental]},
        {h: 15, m: 0, boss: [bossInfo.karka, bossInfo.taidha]},
        {h: 15, m: 15, boss: [bossInfo.wurm]},
        {h: 15, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 15, m: 45, boss: [bossInfo.behemoth]},
        {h: 16, m: 0, boss: [bossInfo.tequatl, bossInfo.shatterer]},
        {h: 16, m: 15, boss: [bossInfo.svanir]},
        {h: 16, m: 30, boss: [bossInfo.modniir]},
        {h: 16, m: 45, boss: [bossInfo.elemental]},
        {h: 17, m: 0, boss: [bossInfo.tripleTrouble, bossInfo.golem]},
        {h: 17, m: 15, boss: [bossInfo.wurm]},
        {h: 17, m: 30, boss: [bossInfo.jormag]},
        {h: 17, m: 45, boss: [bossInfo.behemoth]},
        {h: 18, m: 0, boss: [bossInfo.karka, bossInfo.taidha]},
        {h: 18, m: 15, boss: [bossInfo.svanir]},
        {h: 18, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 18, m: 45, boss: [bossInfo.elemental]},
        {h: 19, m: 0, boss: [bossInfo.tequatl, bossInfo.shatterer]},
        {h: 19, m: 15, boss: [bossInfo.wurm]},
        {h: 19, m: 30, boss: [bossInfo.modniir]},
        {h: 19, m: 45, boss: [bossInfo.behemoth]},
        {h: 20, m: 0, boss: [bossInfo.tripleTrouble, bossInfo.golem]},
        {h: 20, m: 15, boss: [bossInfo.svanir]},
        {h: 20, m: 30, boss: [bossInfo.jormag]},
        {h: 20, m: 45, boss: [bossInfo.elemental]},
        {h: 21, m: 0, boss: [bossInfo.taidha]},
        {h: 21, m: 15, boss: [bossInfo.wurm]},
        {h: 21, m: 30, boss: [bossInfo.megadestroyer]},
        {h: 21, m: 45, boss: [bossInfo.behemoth]},
        {h: 22, m: 0, boss: [bossInfo.shatterer]},
        {h: 22, m: 15, boss: [bossInfo.svanir]},
        {h: 22, m: 30, boss: [bossInfo.modniir]},
        {h: 22, m: 45, boss: [bossInfo.elemental]},
        {h: 23, m: 0, boss: [bossInfo.karka, bossInfo.golem]},
        {h: 23, m: 15, boss: [bossInfo.wurm]},
        {h: 23, m: 30, boss: [bossInfo.jormag]},
        {h: 23, m: 45, boss: [bossInfo.behemoth]},
    ]);

    // Add 'raw time' and 'localtime' to the array above.
    this.events.array.forEach(function (event) {
        // Raw time
        event.rawTime = getRawTime(event.h, event.m);

        // Localtime
        var rawTimeWithOffset = event.rawTime - new Date().getTimezoneOffset(); // Timezone offset

        // Edge cases
        if (rawTimeWithOffset >= (24 * 60)) {
            rawTimeWithOffset = rawTimeWithOffset - 24 * 60;
        }

        var localTime = getTimeFromRaw(rawTimeWithOffset);
        event.localTime = makeTimeText(localTime.h, localTime.m, null);
    });

    /**
     * Creates a simplified event object
     * @param event
     * @param bossIndex
     * @returns {{name: *, map: *, hardcore: *, icon: *, localtime: *, rawTime: *, waypoint: *, mapImage: *}}
     * @private
     */
    function _createSimplifiedEvent(event, bossIndex) {
        return {
            name: event.boss[bossIndex].name,
            map: event.boss[bossIndex].map,
            hardcore: event.boss[bossIndex].hardcore,
            icon: event.boss[bossIndex].icon,
            localtime: event.localTime,
            rawTime: event.rawTime,
            waypoint: event.boss[bossIndex].waypoint,
            mapImage: event.boss[bossIndex].mapImage
        }
    }

    /**
     * Return the next two bosses
     */
    this.getNextBosses = function () {
        // Time right now
        var date = new Date();
        var h = date.getUTCHours();
        var m = date.getUTCMinutes();

        // Edge cases, right before midnight
        if (h == 23 && m > 45) {
            return [
                _createSimplifiedEvent(events.get(0), 0),
                _createSimplifiedEvent(events.get(0), 1)
            ];
        }

        // Convert to rawTime
        var rawTime = getRawTime(h, m);

        // Find next two bosses
        var event;
        for (var i = 0; i < this.events.length + 1; i++) {
            event = this.events.get(i);

            if (event.rawTime > rawTime) {
                // If the event holds two bosses, return them normally
                if (event.boss.length == 2) {
                    return [
                        _createSimplifiedEvent(this.events.get(i), 0),
                        _createSimplifiedEvent(this.events.get(i), 1)
                    ];
                } else { // Otherwise we must get the next event
                    return [
                        _createSimplifiedEvent(this.events.get(i), 0),
                        _createSimplifiedEvent(this.events.get(i + 1), 0)
                    ];
                }
            }
        }
    };

    /**
     * Get last boss event
     * @returns {*[]}
     */
    this.getLastBosses = function () {
        var date = new Date();
        var h = date.getUTCHours();
        var m = date.getUTCMinutes();
        var rawTime = getRawTime(h, m);

        // Edge cases
        if (h == 23 && m > 45) {
            return [
                _createSimplifiedEvent(this.events.get(this.events.length - 1), 0),
                _createSimplifiedEvent(this.events.get(this.events.length - 2), 1)
            ];
        }

        // Find next boss
        for (var i = 0; i < this.events.length; i++) {
            if (this.events.get(i).rawTime > rawTime) {
                if (i == 0) {
                    return [
                        _createSimplifiedEvent(this.events.get(this.events.length - 1), 0),
                        _createSimplifiedEvent(this.events.get(this.events.length - 2), 1)
                    ];
                } else if (i == 1) {
                    return [
                        _createSimplifiedEvent(this.events.get(0), 0),
                        _createSimplifiedEvent(this.events.get(0), 1)
                    ];
                } else {
                    if (this.events.get(i - 1).boss.length == 2) {
                        return [
                            _createSimplifiedEvent(this.events.get(i - 1), 0),
                            _createSimplifiedEvent(this.events.get(i - 1), 1)
                        ];
                    } else {
                        return [
                            _createSimplifiedEvent(this.events.get(i - 1), 0),
                            _createSimplifiedEvent(this.events.get(i - 2), 0)
                        ];
                    }
                }
            }
        }
    };

    /**
     * Get an array of upcoming events
     * @returns {Array<Event>}
     */
    this.getUpcomingEvents = function () {
        var date = new Date();
        var h = date.getUTCHours();
        var m = date.getUTCMinutes();
        var rawTime = getRawTime(h, m);

        // Edge cases
        if (h == 23 && m > 45) {
            return this.events.getMany(0, 13);
        }

        // Find upcoming events
        var event;
        for (var i = 0; i < this.events.length; i++) {
            event = this.events.get(i);
            if (event.rawTime > rawTime) {
                if (event.boss.length == 1) {
                    return this.events.getMany(i + 2, 13);
                } else {
                    return this.events.getMany(i + 1, 13);
                }
            }
        }
    };

    this.getNextOfBoss = function (name) {
        var date = new Date();
        var h = date.getUTCHours();
        var m = date.getUTCMinutes();
        var rawTime = getRawTime(h, m);

        for (var i = 0; i < this.events.length; i++) {
            var event = this.events.get(i);

            // Check name
            var nameCheck = false;
            event.boss.forEach(function (eventBoss) {
                if (eventBoss.name === name) nameCheck = true;
            });

            // If everything matches return event
            if (nameCheck && event.rawTime >= rawTime) return event;

            // Edge case around 00:00
            if (i == this.events.length - 1) {
                rawTime = 0;
                i = -1;
            }
        }
    }
}]);
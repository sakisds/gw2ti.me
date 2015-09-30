/**
 * Creates a timer that counts up from an event.
 * @param target When did the event occur.
 * @constructor
 */
function CountupTimer(target) {
    this.target = target;
    this.text = '--:--';
}

/**
 * Refreshes the timer.
 * @param now Current time (Date object).
 * @returns {boolean} Returns false if the event didn't occur at least 30 minutes ago.
 */
CountupTimer.prototype.tick = function (now) {
    var rawNow = getRawTime(now.getUTCHours(), now.getUTCMinutes());

    var remainingRaw = rawNow - this.target;
    if (remainingRaw >= 30) {
        return true;
    } else {
        var remaining = getTimeFromRaw(remainingRaw);
        this.text = makeTimeText(null, remaining.m, now.getUTCSeconds());

        return false;
    }
};
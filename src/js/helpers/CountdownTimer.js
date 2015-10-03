/**
 * Creates a timer that counts down towards an event.
 * @constructor
 * @param target When will the event occur.
 * @param hours Whether to render hours.
 * @param seconds Whether to render seconds.
 */
function CountdownTimer(target, hours, seconds) {
    if (hours == true) this.hours = 0;
    else this.hours = null;
    if (seconds == true) this.seconds = 0;
    else this.seconds = null;

    var now = new Date();
    var nowRaw = getRawTime(now.getUTCHours(), now.getUTCMinutes());
    if (target < nowRaw) {
        this.target = (24*60) + target;
    } else {
        this.target = target;
    }

    if (hours && seconds) {
        this.text = '--:--:--';
    } else {
        this.text = '--:--';
    }
}

/**
 * Refreshes the timer.
 * @param now Current time (Date object).
 * @returns {boolean} Returns false if the event hasn't begun yet.
 */
CountdownTimer.prototype.tick = function (now) {
    var rawNow = getRawTime(now.getUTCHours(), now.getUTCMinutes());

    var remainingRaw = this.target - rawNow;
    if (remainingRaw <= 0) {
        return true;
    } else {
        var remaining = getTimeFromRaw(remainingRaw);

        if (this.hours != null) this.hours = remaining.h;
        if (this.seconds != null) this.seconds = 59 - now.getUTCSeconds();
        this.text = makeTimeText(this.hours, remaining.m, this.seconds);

        return false;
    }
};
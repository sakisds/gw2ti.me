// Make raw time
function getRawTime(h, m) {
    return (h * 60) + m;
}

function getTimeFromRaw(rawTime) {
    return {
        h: Math.floor(rawTime / 60),
        m: rawTime % 60
    }
}

function makeTimeText(h, m, s) {
    // Hours
    if (h != null) {
        var _h = '';
        if (h > 9) _h = h.toString();
        else _h = '0' + h.toString();
    }

    // Minutes
    var _m = '';
    if (m > 9) _m = m.toString();
    else _m = '0' + m.toString();

    // Seconds
    if (s != null) {
        var _s = '';
        if (s > 9) _s = s.toString();
        else _s = '0' + s.toString();
    }

    // Return result
    var result = '';

    if (h != null) result += _h + ':';
    result += _m;
    if (s != null) result += ':' + _s;

    return result;
}
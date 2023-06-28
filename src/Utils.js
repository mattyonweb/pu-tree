"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msToTime = exports.signedNum = void 0;
function signedNum(n) {
    /* Adds a '+' in front of a number if needed */
    if (n > 0) {
        return "+" + n;
    }
    else {
        return n.toString();
    }
}
exports.signedNum = signedNum;
function msToTime(duration) {
    /* Converts ms to hours+minutes */
    var minutes = Math.floor((duration / (1000 * 60)) % 60), hours = Math.floor((duration / (1000 * 60 * 60)));
    return ((hours < 10) ? "0" + hours : hours) + "h " +
        ((minutes < 10) ? "0" + minutes : minutes) + "min";
}
exports.msToTime = msToTime;

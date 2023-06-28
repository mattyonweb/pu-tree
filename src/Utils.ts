export function signedNum(n: number): string {
    /* Adds a '+' in front of a number if needed */
    if (n > 0){
        return "+" + n;
    } else {
        return n.toString();
    }
}

export function msToTime(duration): string {
    /* Converts ms to hours+minutes */
    let minutes: number = Math.floor((duration / (1000 * 60)) % 60),
        hours: number   = Math.floor((duration / (1000 * 60 * 60)));

    return ((hours < 10) ? "0" + hours : hours) + "h " +
        ((minutes < 10) ? "0" + minutes : minutes) + "min";
}
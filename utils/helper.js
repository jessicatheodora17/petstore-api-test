function genEpochTimeInMilliseconds() {
    return Date.now(); // return epoch time
}

function genRandom5CharName() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

module.exports={
    genEpochTimeInMilliseconds,
    genRandom5CharName
}
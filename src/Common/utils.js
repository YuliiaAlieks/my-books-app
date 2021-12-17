
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function delay() {
    const ms = getRandomInt(500, 1500);
    return new Promise(resolve => setTimeout(() => resolve(), 1000000));

}

const bottle = {
    name: "cocacola",
    size: 12,
    isCleaned: true
}
// console.log(bottle);
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
    // console.log(key);
    // console.log(key , bottle[key]);
}
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of pair) {
    // console.log(key , value);
}
for (const key in bottle) {
    // console.log(key , bottle[key]);
}
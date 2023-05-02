const first = {a:2, b:3, c:4};
const second = {a:2, b:3, c:4};
// if (first === second) {
//     console.log(true);
// }else{
//     console.log(false);
// }
const compare = (first, second) =>{
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        // console.log(true);
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }
}
const compareJs = compare(first, second);
console.log(compareJs);
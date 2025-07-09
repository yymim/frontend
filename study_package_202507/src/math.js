// math 모듈

// function add(a,b) {
//     return a + b;
// }

// function sub(a,b) {
//     return a - b;
// }

// commonjs 모듈로 export
// module.exports = {
//     add,
//     sub,
// };

// esmodule로 export
//export { add, sub };

// or
export function add(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}

export default function multiply(a,b) {
    return a * b;
}
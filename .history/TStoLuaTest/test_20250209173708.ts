/**   @noselfinfile  **/
export function add(a: number, b: number) {
    return a + b
}

let array = [11, 2, 22, 1]
array.sort((a, b) => b + a)
for (const element of array) {
    console.log(element)
}


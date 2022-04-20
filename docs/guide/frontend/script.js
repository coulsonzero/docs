let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1])
set.add(89)
set.delete(4)
// set.clear()
// set.forEach(v => console.log(v))
// console.log(set.has(9))   //true
// console.log(set.size)
for(let v of set.values()) {
    console.log(v)
}


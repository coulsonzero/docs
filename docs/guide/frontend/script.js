let map = new Map([
	["k1", "v1"],
	["k2", "v2"],
])



console.log(map)    // Map(2) { 'k1' => 'v1', 'k2' => 'v2' }
map.forEach((k, v) => console.log(k, v))
for (let item of map.entries()) {
    console.log(item)
}
/*
[ 'k1', 'v1' ]
[ 'k2', 'v2' ]
*/

for (let item of map.entries()) {
    console.log(item[0], item[1])
}
/*
k1 v1
k2 v2
*/

map.set("k3", "v3").set("k4", "v4")
map.delete("k3")
map.clear()

console.log(map.get("k2"))  // v2
console.log(map.has("k3"))  // undefined

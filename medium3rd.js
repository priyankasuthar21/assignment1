function removeDups(data)
{
	return [new Set(data)]
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["the", "big", "cat"]));
console.log(removeDups(["john", "taylor", "john"]));
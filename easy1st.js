const charCount = ( letter, str) =>
{
	var count = 0;
	for (var pos = 0;  pos<str.length;  pos++)
	if(str.charAt(pos)==letter)
	{
		count+=1;	
	}
console.log(count);
}
charCount("a", "as u wish");
charCount("b", "big fat bubble");
charCount("c", "chamber of secret");




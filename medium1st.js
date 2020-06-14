function specialReverse(num, letter){
x= num.split(' ');
for ( y=0; y<x.length; y++ )
{
if (x[y][0] == letter)
{
	x[y]= x[y].split(' ');
}
}
return x.join(' ')
}
console.log(specialReverse("word searches are super fun", "s"));
	console.log(specialReverse("first man to walk on the moon", "m"));
		console.log(specialReverse("peter piper picked pickled pepper", "p"));
			
			
			
	

function testJackpot(num)
{
	for(i=0; i<num.length; i++)
	  {
	  	for(j=1; j<i; j++)
	  	if(num[i]  !==num[j] )
	  	{
	  	return  false	; 		
	  	}
	  }
	  return true;
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["ss", "ss", "ss", "ss"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));






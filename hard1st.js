function realType(num)
{
	if (num==null)
	{
		return "null";
	}
	else
	{
		  if(typeof(num)==="number")
			{
				return "number";
			}
			
			else	if(typeof(num)==="string")
			{
			   return "string";
			}
			
			else	if(typeof(num)==="boolean")
				{
					return "boolean";	
				}
			
			 else	if(typeof(num)==="object")
			{
				return "array";	
			}	
		
	}
}

console.log(realType(1));
console.log(realType("xyz"));
console.log(realType(true));
console.log(realType([ ]));
console.log(realType(null));

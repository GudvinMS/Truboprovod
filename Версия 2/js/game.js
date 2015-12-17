/*Генератор начало*/

		function getRandomInt(min, max)
		{
  			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var vibor = function(p)
		{
			var rand = Math.floor(Math.random() * p.length);
			return p[rand];

		}

		var generator = function()
		{
			var pol = new Array(10);
			for(var i = 0;i < 10;i++)
			{
				pol[i] = [];
			for( var j = 0; j < 10; j++) 
			{
				pol[i][j] = 0;
			}
			}

		

		pol[0][0] = 0;
		var i = 1;
		var j = 0;
		var j1  = 0;
		var i1 = 0;
		var chp = 3;
		var ch = 0;
		while((i != 9) || (j != 9))
		{
			if(i < 5)
			{
				switch(chp)
				{
					case 1:
					if(j == 9)
					{
						ch = 3;
					}
					else if(i == 0)
					{
						ch = 2;
					}
					else
					{
						ch = vibor([1,2]);
					}
					break;
					case 2:
					if(j == 9)
					{
						ch = 3;
					}
					else if(i == 0)
					{
						ch = vibor([2,3]);
					}
					else
					{
						ch = vibor([1,2,3]);
					}
					break;
					case 3:
					if(j == 9)
					{
						ch = 3;
					}
					else if(i == 0)
					{
						ch = vibor([2,3]);
					}
					else
					{
						ch = vibor([2,3]);
					}
					
					break;
				
				}

			} else 
			{
				switch(chp)
				{
					case 2:
					if(i == 9)
					{
						ch = 2;
					} else if(j == 9)
					{
					ch = 3;
					}
					else
					{
						ch = vibor([2,3]);
					}
					break;
					case 3:
					if(i == 9)
					{
						ch = 2;
					} else if(j == 9)
					{
					ch = vibor([3,4]);
					} else if(j == 0)
					{
						ch = vibor([2,3]);
					}
					else
					{
						ch = vibor([2,3,4]);
					}
					
					break;
					case 4:
					if(j == 0)
					{
						ch = 3;
					}
					else
					{
					  ch = vibor([4,3]);
					}
					
					break;
				}
                        
			}
			switch(ch)
		{
			case 1:
			i1 = i - 1;
			j1 = j;
			break;
			case 2:
			i1 = i;
			j1 =  j+1;
			break;
			case 3:
			i1 = i +1;
			j1 = j;
			break;
			case 4:
			j1 = j -1;
			i1 = i;
			break;
		}
		if(((chp == 1)&&(ch == 1))||((chp == 3)&&(ch == 3)))
		{
			pol[i][j] = 2;
		}
		if(((chp == 4)&&(ch == 4))||((chp == 2)&&(ch == 2)))
		{
			pol[i][j] = 1;
		}
		if(((chp == 4)&&(ch == 3))||((chp == 1)&&(ch == 2)))
		{
			pol[i][j] = 3;
		}
		if(((chp == 2)&&(ch == 3))||((chp == 1)&&(ch == 4)))
		{
			pol[i][j] = 4;
		}
		if(((chp == 3)&&(ch == 4))||((chp == 2)&&(ch == 1)))
		{
			pol[i][j] = 5;
		}
		if(((chp == 3)&&(ch == 2))||((chp == 4)&&(ch == 1)))
		{
			pol[i][j] = 6;
		}
		i = i1;
		j = j1;
		chp = ch;

		}
		
		return pol;	
}

function changetruba(p)
{
var i = 0;
var j = 0;
	for(i = 0;i != 10; i++)
	{
		for(j = 0; j != 10; j++)
		{
			if(p[i][j] == 1 || p[i][j] == 1)
			{
				p[i][j] = vibor([1,2]);
			}
			if(p[i][j] == 3 || p[i][j] == 4 || p[i][j] == 5 || p[i][j] == 6)
			{
				p[i][j] = vibor([3,4,5,6]);
			}
		}
	}
}

g = generator();
g1 = changetruba(g);
/*Генератор конец*/


/*Повороты Трубы*/
$(document).ready(function(){
	$(".point").click(function(){
		var rotation = $(this).data('rotation')*1;
		$(this).find('.pipe').removeClass('rotation-'+rotation);
		rotation += 1;
		if (rotation > 4) rotation = 1;
		$(this).data('rotation', rotation);
		$(this).find('.pipe').addClass('rotation-'+rotation);
	});
})
/*Повороты Трубы конец*/


/**/

	
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
		p = new Array();
		for(i=0; i < 10; i++)
		{
			p[i] = new Array();
			for(j = 0; j < 10; j++)
			{
				p[i][j] = 0;
			}
		}
		
		chp = 3;
		i = 1;
		j = 0;
		while((i != 9) || (j != 9))
		{
		if(i < 5)
		{
			if(j == 9)
			{
				ch = 3;
			}
			else if(i== 0)
			{
				switch(chp)
				{
					case 1:
					ch = 2;
					break;
					case 2:
					ch = vibor([2,3])
					break;
				}
			}
			else
			{
				switch(chp)
				{
					case 1:
					ch = vibor([1,2]);
					break;
					case 2:
					ch = vibor([2,3,1])
					break;
					case 3:
					ch = vibor([3,2]);
					break;
				}
			}
		}
		else
		{
			if(i == 9)
			{
				ch = 2;
			}
			else if(j == 0)
			{
				switch(chp)
				{
					case 4:
					ch = 3;
					break;
					case 3:
					ch = vibor([3,2]);
					break;
				}
			}
			else if(j == 9)
			{
				switch(chp)
				{
					case 3:
					ch = vibor([3,4]);
					break;
					case 2:
					ch = 3;
					break;
				}
			}
			else
			{
				switch(chp)
				{
					case 4:
					ch = vibor([4,3]);
					break;
					case 3:
					ch = vibor([3,2,4]);
					break;
					case 2:
					ch= vibor([2,3]);
					break;
				}
			}
		}
		
		if(((chp == 1) && (ch == 1))||((chp == 3)&&(ch == 3)))
		{
			p[i][j] = 6;
		}
		if(((chp == 2) && (ch == 2))||((chp == 4)&&(ch == 4)))
		{
			p[i][j] = 5;
		}
		if(((chp == 3) && (ch == 2))||((chp == 4)&&(ch == 1)))
		{
			p[i][j] = 4;
		}
		if(((chp == 4) && (ch == 3))||((chp == 1)&&(ch == 2)))
		{
			p[i][j] = 1;
		}
		if(((chp == 2) && (ch == 3))||((chp == 1)&&(ch == 4)))
		{
			p[i][j] = 2;
		}
		if(((chp == 3) && (ch == 4))||((chp == 2)&&(ch == 1)))
		{
			p[i][j] = 3;
		}
		
		switch(ch)
		{
			case 1:
			i -= 1;
			break;
			case 2:
			j  += 1;
			break;
			case 3:
			i += 1;
			break;
			case 4:
			j -= 1;
			break;
		}
		chp = ch;
		}
		return p;	
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

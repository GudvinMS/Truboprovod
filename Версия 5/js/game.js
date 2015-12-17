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
/* Изменение труб */
		
function changetruba(g)
{
	var p = []
	for(i = 0; i != 10; i++)
	{
		p[i] = [];
		for(j = 0; j != 10; j++)
		{
			p[i][j] = g[i][j];
		}
	}
	for(i = 0;i != 10; i++)
	{
		for(j = 0; j != 10; j++)
		{
			if(p[i][j] == 5 || p[i][j] == 6)
			{
				p[i][j] = vibor([5,6]);
			}
			if(p[i][j] == 1 || p[i][j] == 2 || p[i][j] == 3 || p[i][j] == 4)
			{
				p[i][j] = vibor([1,4,2,3]);
			}
		}
	}
	
	return p;
}

/* ГЕНЕРАТОР МУСОРА */

function Musor(g)
{
	var p = []
	for(i = 0; i != 10; i++)
	{
		p[i] = [];
		for(j = 0; j != 10; j++)
		{
			p[i][j] = g[i][j];
		}
	}
   for( i  = 1; i <= 8; i++)
   {
	for( j = 1; j <= 8; j++)
	{
		b = false;
		if(g[i][j] != 0)
		{
			if(!b)
			{
				if(p[i-1][j] == 0)
				{
					
						p[i-1][j] = vibor([5,6]);
					
					
					b = true;
				}
			}
			if(!b)
			{
				if(p[i][j-1] == 0)
				{
					
						p[i][j-1] = vibor([5,6]);
					
					
					b = true;
				}
			}
			if(!b)
			{
				if(p[i+1][j] == 0)
				{
					
						p[i+1][j] = vibor([5,6]);
					
					
					b = true;
				}
			}
			if(!b)
			{
				if(p[i][j+1] == 0)
				{
					
						p[i][j+1] = vibor([5,6]);
					
					
					b = true;
				}
			}
			
			
		
		}
	}
   }
	return p;
}

p = generator();
z = changetruba(p);
g = Musor(z);

/*Генератор конец*/

function sravn(a,b)
{
	for(var i = 0; i != 10; i++)
	{
		for(j = 0; j != 10; j++)
		{
			if(a[i][j] != b[i][j])
				return false;
		}
	}
	return true;
}

/*Повороты Трубы*/
$(document).ready(function(){
	$(".point").click(function(){
		rotation = $(this).find('.pipe').attr("class");
		id = this.id;
	
		var num = Number(rotation.indexOf('-')) + 1 ;
		rotation = Number(rotation[num])
		$(this).find('.pipe').removeClass('rotation-' + rotation);
		if ( $(this).attr("class").indexOf('arc') != -1)
		{
			rotation += 1;
			if (rotation > 4) rotation = 1;
			if(z[Number(id[0])][Number(id[1])] != 0)
			z[Number(id[0])][Number(id[1])] = rotation;
		}
		else
		{
			rotation += 1;
			if (rotation > 2) rotation = 1;
			if(z[Number(id[0])][Number(id[1])] != 0)
			{
			  if (rotation == 1)
				  z[Number(id[0])][Number(id[1])] = 5;
			  else
				  z[Number(id[0])][Number(id[1])] = 6;
		    }
		}
		$(this).find('.pipe').addClass('rotation-'+ rotation);
        /*
		Поворот труб
		*/

		$('#but').click(function()
		{
			if(sravn(p,z))
			{
			  $(".rocket").addClass("push");
			  setTimeout(function() { alert('Вы выиграли!!!'); location.reload();}, 2000);
			  
			}
		  
		  
		})
	});
})
/*Повороты Трубы конец*/

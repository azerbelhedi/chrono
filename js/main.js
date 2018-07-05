var time=0;
var run=0;
var work=0;
var zm="0",zs="0",zms="0";
var min=0,sec=0,ms=0;

var startlaps=1;
var laps=0;
var list =new Array(50);
var i,v=0;


function test()
{
	min=Math.trunc(time/6000);
	sec=Math.trunc((time%6000)/100);
	ms=Math.trunc((time%6000)%100);

	if(min<10)
	{zm="0";}
	else
	{zm="";}

	if(sec<10)
	{zs="0";}
	else
	{zs="";}

	if(ms<10)
	{zms="0";}
	else
	{zms="";}

	document.getElementById("output").innerHTML=zm+min+":"+zs+sec+":"+zms+ms;
}

function start()
{
	if(!work)
	{
		run=1;
		work=1;
		document.getElementById("stopresume").innerHTML="stop";
	}
}

function stop_resume()
{
	if(work)
	{
		if(run)
		{
			run=0;
			document.getElementById("stopresume").innerHTML="resume";
		}
		else
		{
			run=1;
			document.getElementById("stopresume").innerHTML="stop";
		}
	}	
}

function reset()
{
	time=0;
	work=0;
	run=0;
	laps=0;
	test();
	document.getElementById("stopresume").innerHTML="stop/resume";
	for(i=1; i<7; i++)
	{
		document.getElementById("t"+i).innerHTML=i+". 00:00:00";
	}
}

function count()
{
	if(run)
	{
		time+=1;
		if(time>5994000)
		{
			alert("time limit");
			time=0;
		}
		test();
	}
}

function test2(v)
{
	for(i=startlaps; i<=laps+v; i++)
	{
		document.getElementById("t"+i).innerHTML= i+". "+list[i-1];
	}
}

function lap()
{	
	if(laps>=6)
	{
		alert("laps limit");
	}
	else
	{
		list[laps]=document.getElementById("output").innerHTML;
		laps++;
		test2(0);
	}
}


setInterval(count,1);
var currentpage;
window.onload=example();
function example(){
	currentpage=1;
	document.getElementById("prev").classList.add("disabled-btn");
		document.getElementById("next").classList.remove("disabled-btn");

		document.getElementById("btn1").classList.add("outline-blue");
		document.getElementById("btn2").classList.remove("outline-blue");
		document.getElementById("btn3").classList.remove("outline-blue");
		document.getElementById("btn4").classList.remove("outline-blue");

		document.getElementById("btn1").classList.remove("border-style-prop");
		document.getElementById("btn2").classList.add("border-style-prop");
		document.getElementById("btn3").classList.add("border-style-prop");
		document.getElementById("btn4").classList.add("border-style-prop");
}

function behave(currentpage){
	document.querySelector("h2").innerHTML="Current page: "+currentpage;
	if(currentpage==1){
		document.getElementById("prev").classList.add("disabled-btn");
		document.getElementById("next").classList.remove("disabled-btn");

		document.getElementById("btn1").classList.add("outline-blue");
		document.getElementById("btn2").classList.remove("outline-blue");
		document.getElementById("btn3").classList.remove("outline-blue");
		document.getElementById("btn4").classList.remove("outline-blue");

		document.getElementById("btn1").classList.remove("border-style-prop");
		document.getElementById("btn2").classList.add("border-style-prop");
		document.getElementById("btn3").classList.add("border-style-prop");
		document.getElementById("btn4").classList.add("border-style-prop");

	}
	else if(currentpage==2)
	{
		document.getElementById("prev").classList.remove("disabled-btn");
		document.getElementById("next").classList.remove("disabled-btn");

		document.getElementById("btn1").classList.add("outline-blue");
		document.getElementById("btn2").classList.add("outline-blue");
		document.getElementById("btn3").classList.remove("outline-blue");
		document.getElementById("btn4").classList.remove("outline-blue");

		document.getElementById("btn1").classList.remove("border-style-prop");
		document.getElementById("btn2").classList.remove("border-style-prop");
		document.getElementById("btn3").classList.add("border-style-prop");
		document.getElementById("btn4").classList.add("border-style-prop");

	}
	else if(currentpage==3)
	{
		document.getElementById("prev").classList.remove("disabled-btn");
		document.getElementById("next").classList.remove("disabled-btn");

		document.getElementById("btn1").classList.add("outline-blue");
		document.getElementById("btn2").classList.add("outline-blue");
		document.getElementById("btn3").classList.add("outline-blue");
		document.getElementById("btn4").classList.remove("outline-blue");

		document.getElementById("btn1").classList.remove("border-style-prop");
		document.getElementById("btn2").classList.remove("border-style-prop");
		document.getElementById("btn3").classList.remove("border-style-prop");
		document.getElementById("btn4").classList.add("border-style-prop");
	}
	else
	{
		document.getElementById("prev").classList.remove("disabled-btn");
		document.getElementById("next").classList.add("disabled-btn");

		document.getElementById("btn1").classList.add("outline-blue");
		document.getElementById("btn2").classList.add("outline-blue");
		document.getElementById("btn3").classList.add("outline-blue");
		document.getElementById("btn4").classList.add("outline-blue");

		document.getElementById("btn1").classList.remove("border-style-prop");
		document.getElementById("btn2").classList.remove("border-style-prop");
		document.getElementById("btn3").classList.remove("border-style-prop");
		document.getElementById("btn4").classList.remove("border-style-prop");
	}
}	



document.querySelector(".next-btn").addEventListener("click",function(){
	currentpage++;
	if(currentpage<=4)
	{
		behave(currentpage);
	}
	else
	{
		currentpage=4;
		behave(4);
	}
	});

document.querySelector(".prev-btn").addEventListener("click",function(){
	currentpage--;
	if(currentpage<=0)
	{
		example();
	}
	behave(currentpage);
	});

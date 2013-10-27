function first(){
	barsize=500;
	video= document.getElementById('my video');
	butn=  document.getElementById("play button");
	dbr=   document.getElementById('dbar');
	pbr=   document.getElementById('pbar');

	butn.addEventListener('click',playOrPause, false);
	dbr.addEventListener('click',clickedBar, false);


}

function playOrPause(){
	if(!video.paused && !video.ended)
	{
		video.pause();
		butn.innerHTML='play';
		window.clearInterval(updtbr);
      
	}
	else{
		 video.play();
       butn.innerHTML='pause';
       updtbr=setInterval(update,500);
	}
}

function update(){
	if(!video.ended){
		var size=parseInt(barsize*video.currentTime/video.duration);
		pbr.style.width=size+'px';
		
	}
	else{
		video.currentTime='0';
		pbr.style.width='0px';
		butn.innerHTML='play';
		window.clearInterval(updtbr);
		
	}
}

function clickedBar(e)
{
	if(!video.paused && !video.ended){
		var mx=e.pageX-dbr.offsetLeft;
		var newt=video.duration*mx/barsize;
		video.currentTime=newt;
		pbr.style.width=mx+'px';

	}
}

window.addEventListener('load',first,false);
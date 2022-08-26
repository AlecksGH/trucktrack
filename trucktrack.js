//POSSIBLE SEIZURE WARNING: THERE ARE FLASHING LIGHTS WHEN THE CAR CRASHES
//A comically sized truck navigating an extraordinarily tight turn ridden loop with the option of destroying some of the track, leading the truck to explode against the white void
//I took some of the elementary things from the course's github demos (https://github.com/sifakis/CS559F21_Demos), mostly Week6 Demo1. 
//I looked up how to make animations in javascript on our piazza and found a link to the tutorials of graphics.cs.wisc.edu, which I used to create the loop
//I also looked up how to make a dotted line in javascript, which is used on the painting of the road. 
//All code was developed by me, Alex Jans, and Eftychios Sifakis, though his public GitHub, and whoever made gl-matrix-min
//Sorry that this one is a bit artistically boring compared to my other ones. I was misreading the assignment for a while so my train of thought was led more towards this than any, more creative avenues.
function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var carPos = 1;
    var frame = 0;

    function draw() {
	canvas.width = canvas.width;
	// use the sliders to get the angles
	var tParam = carPos*0.01;
	
	function moveToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.lineTo(res[0],res[1]);}
	
        function bezierToTx(bez1,bez2,loc,Tx)
	{var res1=vec2.create(); var res2=vec2.create(); var res0=vec2.create(); vec2.transformMat3(res1,bez1,Tx); vec2.transformMat3(res2,bez2,Tx); vec2.transformMat3(res0,loc,Tx); context.bezierCurveTo(res1[0],res1[1],res2[0],res2[1],res0[0],res0[1]);}

	function drawCar(color,Tx) {
	    context.beginPath();
	    context.fillStyle = color;
	    //body
	    moveToTx([-.1,-.05],Tx);
	    lineToTx([-.1,.05],Tx);
            lineToTx([.1,.05],Tx);
	    lineToTx([.11,.04],Tx);
      	    lineToTx([.11,-.04],Tx);
	    lineToTx([.1,-.05],Tx);
	    context.closePath();
	    context.lineWidth = .03;

	    context.fill();
    	    context.stroke();
	    //bed
	    context.beginPath();
	    moveToTx([-.09,-.04],Tx);
	    lineToTx([-.09,.04],Tx);
	    lineToTx([0,.04],Tx);
	    lineToTx([0,-.04],Tx);
	    context.closePath();
 	    context.fillStyle = "#4f4f4f";
	    context.fill();
	    //windshield
	    context.beginPath();
	    moveToTx([.045,-.04],Tx);
	    lineToTx([.045,.04],Tx);
	    lineToTx([.07,.04],Tx);
	    lineToTx([.07,-.04],Tx);
	    context.closePath();
	    context.fill();
	    //side windows
	    context.beginPath();
	    moveToTx([.05,-.042],Tx);
	    lineToTx([.015,-.042],Tx);
	    lineToTx([.015,-.048],Tx);
	    lineToTx([.05,-.048],Tx);
	    context.closePath();
	    context.fill();
	    context.beginPath();
	    moveToTx([.05,.042],Tx);
	    lineToTx([.015,.042],Tx);
	    lineToTx([.015,.048],Tx);
	    lineToTx([.05,.048],Tx);
	    context.closePath();
	    context.fill();
	}
	function drawExplosion(frame,Tx, Tsmoke) {
	    drawCar("black", Tx);
	    context.beginPath();
	    if (frame <= 20 && frame%3 == 0){
	    moveToTx([-.05,-.05],Tx);
	    lineToTx([0,-.22],Tx);
            lineToTx([.05,-.05],Tx);
      	    lineToTx([.1,-.17],Tx);
	    lineToTx([.06,-.03],Tx);
            lineToTx([.15,-.1],Tx);
      	    lineToTx([.1,-.17],Tx);
	    lineToTx([.07,-.02],Tx);
	    lineToTx([.2,0],Tx);
	    lineToTx([.07,.02],Tx);
      	    lineToTx([.1,.17],Tx);
            lineToTx([.15,.1],Tx);
	    lineToTx([.06,.03],Tx);
      	    lineToTx([.1,.17],Tx);
            lineToTx([.05,.05],Tx);
	    lineToTx([0,.22],Tx);
	    lineToTx([-.05,.05],Tx);
      	    lineToTx([-.1,.17],Tx);
	    lineToTx([-.06,.03],Tx);
            lineToTx([-.15,.1],Tx);
      	    lineToTx([-.1,.17],Tx);
	    lineToTx([-.07,.02],Tx);
	    lineToTx([-.2,0],Tx);
	    lineToTx([-.07,-.02],Tx);
      	    lineToTx([-.1,-.17],Tx);
            lineToTx([-.15,-.1],Tx);
	    lineToTx([-.06,-.03],Tx);
      	    lineToTx([-.1,-.17],Tx);	
	    context.closePath();
	    context.fillStyle = "orange";
	    context.fill();
	    
	    } else if(frame <= 20 && frame%3 == 1){
	    moveToTx([-.05,-.05],Tx);
	    lineToTx([0,-.25],Tx);
            lineToTx([.02,-.05],Tx);
      	    lineToTx([.11,-.2],Tx);
	    lineToTx([.04,-.03],Tx);
            lineToTx([.18,-.13],Tx);
	    lineToTx([.05,-.02],Tx);
	    lineToTx([.25,0],Tx);
	    lineToTx([.05,.02],Tx);
            lineToTx([.18,.13],Tx);
	    lineToTx([.04,.03],Tx);
      	    lineToTx([.11,.2],Tx);
            lineToTx([.04,.03],Tx);
	    lineToTx([0,.22],Tx);
	    lineToTx([-.04,.03],Tx);
            lineToTx([-.17,.13],Tx);
	    lineToTx([-.05,.02],Tx);
	    lineToTx([-.23,0],Tx);
	    lineToTx([-.05,-.02],Tx);
      	    lineToTx([-.12,-.21],Tx);
	    lineToTx([-.05,-.03],Tx);
      	    lineToTx([-.12,-.2],Tx);	
	    context.closePath();
	    context.fillStyle = "red";
	    context.fill();
	    
	    } else if(frame <= 20 && frame%3 ==2){
	    moveToTx([-.03,-.05],Tx);
	    lineToTx([0,-.19],Tx);
            lineToTx([.03,-.05],Tx);
      	    lineToTx([.14,-.2],Tx);
	    lineToTx([.04,-.03],Tx);
            lineToTx([.15,-.10],Tx);
	    lineToTx([.05,-.02],Tx);
	    lineToTx([.20,0],Tx);
	    lineToTx([.05,.02],Tx);
            lineToTx([.15,.10],Tx);
	    lineToTx([.04,.03],Tx);
      	    lineToTx([.14,.2],Tx);
            lineToTx([.03,.05],Tx);
	    lineToTx([0,.22],Tx);
	    lineToTx([-.03,.05],Tx);
            lineToTx([-.15,.10],Tx);
	    lineToTx([-.05,.02],Tx);
	    lineToTx([-.20,0],Tx);
	    lineToTx([-.05,-.02],Tx);
      	    lineToTx([-.15,-.10],Tx);
	    lineToTx([-.03,-.05],Tx);	
	    context.closePath();
	    context.fillStyle = "yellow";
	    context.fill();
	    } else if(frame > 20 && frame%12 < 4){
            moveToTx([0,0],Tx);
            bezierToTx([.025,.1],[.05,.1],[0,.2],Tsmoke);
	    context.setLineDash([10, 0]);
	    context.strokeStyle = "black";
	    context.lineWidth =5;
	    context.stroke();
	    } else if(frame > 20 && frame%12 >= 4 && frame%12 < 8){
            moveToTx([0,0],Tx);
            bezierToTx([0,.1],[.05,.1],[.05,.2],Tsmoke);
	    context.setLineDash([10, 0]);
	    context.strokeStyle = "black";
	    context.lineWidth =5;
	    context.stroke();
	    } else if(frame > 20){
            moveToTx([0,0],Tx);
            bezierToTx([-.05,.1],[0,.1],[-.050,.2],Tsmoke);
	    context.setLineDash([10, 0]);
	    context.strokeStyle = "black";
	    context.lineWidth =5;
	    context.stroke();
	    }
	}
	
	var Hermite = function(t) {
	    return [
		2*t*t*t-3*t*t+1,
		t*t*t-2*t*t+t,
		-2*t*t*t+3*t*t,
		t*t*t-t*t
	    ];
	}

	var HermiteDerivative = function(t) {
            return [
		6*t*t-6*t,
		3*t*t-4*t+1,
		-6*t*t+6*t,
		3*t*t-2*t
            ];
	}

	function Cubic(basis,P,t){
	    var b = basis(t);
	    var result=vec2.create();
	    vec2.scale(result,P[0],b[0]);
	    vec2.scaleAndAdd(result,result,P[1],b[1]);
	    vec2.scaleAndAdd(result,result,P[2],b[2]);
	    vec2.scaleAndAdd(result,result,P[3],b[3]);
	    return result;
	}
	
	var p0=[0.2,0.5];
	var d0=[0,1.3];
	var p1=[1,1.3];
	var d1=[-2,1];
	var p2=[1.5,1];
	var d2=[-1.5,-2];
	var p3=[1.4,.3];
	var d3=[.25,-.5];


	var P0 = [p0,d0,p1,d1]; // First two points and tangents
	var P1 = [p1,d1,p2,d2]; // second two points and tangents
	var P2 = [p2,d2,p3,d3]; // third two points and tangents
	var P3 = [p3,d3,p0,d0]; // third two points and tangents

	var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
	var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
	var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
	var C3 = function(t_) {return Cubic(Hermite,P3,t_);};

	var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
	var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
	var C2prime = function(t_) {return Cubic(HermiteDerivative,P2,t_);};
	var C3prime = function(t_) {return Cubic(HermiteDerivative,P3,t_);};

	var Ccomp = function(t) {
            if (t<1){
		var u = t;
		return C0(u);
            } else if (t<2){
		var u = t-1.0;
		return C1(u);
            } else if (t<3){
      		var u = t-2.0;
        	return C2(u);    	
            } else{
      		var u = t-3.0;
        	return C3(u);    	
            }  
	}

	var Ccomp_tangent = function(t) {
            if (t<1){
		var u = t;
		return C0prime(u);
            } else if (t<2){
		var u = t-1.0;
		return C1prime(u);
            } else if (t<3){
      		var u = t-2.0;
        	return C2prime(u);    	
            } else{
      		var u = t-3.0;
        	return C3prime(u);    	
            }        
	}

	function drawTrack(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    if (color == "yellow"){
		context.setLineDash([5, 5]);
		context.lineWidth = 2;
	    } else {
		context.lineWidth = 20;
	    }
	    context.beginPath();
            moveToTx(C(t_begin),Tx);
            for(var i=1;i<=intervals;i++){
		var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
		lineToTx(C(t),Tx);
            }
            context.stroke();
	}


	var Ttrack_to_canvas = mat3.create();
	mat3.fromTranslation(Ttrack_to_canvas,[50,350]);
	mat3.scale(Ttrack_to_canvas,Ttrack_to_canvas,[150,-150]); // Flip the Y-axis

	drawTrack(0.0,1.0,100,C0,Ttrack_to_canvas,"grey");
	drawTrack(0.0,1.0,100,C1,Ttrack_to_canvas,"grey");
	drawTrack(0.0,1.0,100,C2,Ttrack_to_canvas,"grey");
	if (slider1.value == 0){
	drawTrack(0.0,1.0,100,C3,Ttrack_to_canvas,"grey");
	};

	drawTrack(0.0,1.0,100,C0,Ttrack_to_canvas,"yellow");
	drawTrack(0.0,1.0,100,C1,Ttrack_to_canvas,"yellow");
	drawTrack(0.0,1.0,100,C2,Ttrack_to_canvas,"yellow");
	if (slider1.value == 0){
	drawTrack(0.0,1.0,100,C3,Ttrack_to_canvas,"yellow");
	};

	var Tcar_to_track = mat3.create();
	mat3.fromTranslation(Tcar_to_track,Ccomp(tParam));
	var Tcar_to_trackNoRot = mat3.create();
	mat3.fromTranslation(Tcar_to_trackNoRot,Ccomp(tParam));
	var Tcar_to_canvas = mat3.create();
	var Tcar_to_canvasNoRot = mat3.create();
	var tangent = Ccomp_tangent(tParam);
	var angle = Math.atan2(tangent[1],tangent[0]);
	mat3.rotate(Tcar_to_track,Tcar_to_track,angle);
	mat3.multiply(Tcar_to_canvas, Ttrack_to_canvas, Tcar_to_track);
	mat3.multiply(Tcar_to_canvasNoRot, Ttrack_to_canvas, Tcar_to_trackNoRot);
	if (slider1.value == 1 && carPos > 300 && carPos < 400){
	  drawExplosion(frame, Tcar_to_canvas, Tcar_to_canvasNoRot); 
	  frame += 1.25;
	} else {
	  drawCar("red",Tcar_to_canvas);
	  carPos += 2;
	  if (carPos > 400) carPos = 0;
	}
	window.requestAnimationFrame(draw);
    }
    
      window.requestAnimationFrame(draw);
}
window.onload = setup;


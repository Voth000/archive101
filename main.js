var tabs = document.querySelectorAll(".sw .tab ul li");
var ds = document.querySelectorAll(".d");
var inte = document.querySelectorAll(".inter");
var animations = document.querySelectorAll(".ani");
var all = document.querySelectorAll(".c1");
var bod = document.querySelector("header");




tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})

		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((c1)=>{
			c1.style.visibility = "hidden";

    
		})

		if(tabval == "d"){
			ds.forEach((d)=>{
				d.style.visibility = "visible";  
			});

    

		}
		else if(tabval == "ani"){
			animations.forEach((ani)=>{
				ani.style.visibility = "visible";          
			});
           

		}
		else{
			inte.forEach((inter)=>{
				inter.style.visibility = "visible"; 
			});
            
		}

	})
})




////float///
$(document).ready(function() {
    animateDiv($('.a'));
    animateDiv($('.q'));
    animateDiv($('.w'));
    animateDiv($('.e'));
    animateDiv($('.r'));
    animateDiv($('.t'));
    animateDiv($('.y'));
    animateDiv($('.u'));
    animateDiv($('.i'));

        animateDiv($('.b'));
        animateDiv($('.c'));
        animateDiv($('.z'));
        animateDiv($('.x'));
        animateDiv($('.v'));
        animateDiv($('.n'));
    
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 200;
    var w = $container.width() - 200;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};




function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier=" ";

    if($("#fl").is(":hover"))
    {
        var speedModifier = 0.0001;
    }
    else
    {
    var speedModifier = 0.09;
    };

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}


/////fix
var colors = [
    'rgb(86, 255, 168)', 
    
    "white", 
  
    "#F23EE2",
   
  
  ];
  
    var currentColor = 0
    var lis = document.querySelectorAll("#h")
    function changeColor() {
      --currentColor
      if (currentColor < 0) currentColor = colors.length -1
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = colors[(currentColor +i) % colors.length]
      }
    }
    setInterval(changeColor, 1000)
  
    ///pag1///

    var colors1 = [
        'rgb(86, 255, 168)', 
        
        "white", 
        "orange",
      
    
       
      
      ];
      
        var currentColor1 = 0
        var lis1 = document.querySelectorAll("#f")
        function changeColor1() {
          --currentColor1
          if (currentColor1 < 0) currentColor1 = colors1.length -1
          for (var i = 0; i < lis1.length; i++) {
            lis1[i].style.color = colors1[(currentColor1 +i) % colors1.length]
          }
        }
        setInterval(changeColor1, 2000)



        ///////hjfx///
        gsap.from(".txt", 0.8, {
          y: 40,
          opacity: 0,
          ease: "power2.inOut",
          delay: 0,
        });
        
        
        TweenLite.to(".loader", 1, {
          width: "40vw",
          delay: 3,
        });
        
        gsap.to(".pre-loader", 2, {
          top: "-115vh",
          ease: "power4.inOut",
          delay: 4,
        });

        gsap.from(".tab", {
          opacity: 1, 
          x: -650,
          duration: 2.5,
          delay: 0,
        });

        gsap.from(".trai", {
          opacity: 1, 
          x: -400,
          duration: 2,
          delay: 0,
        });

        gsap.from(".phai", {
          opacity: 1, 
          x: 300,
          duration: 2,
          delay: 0,
        });

        gsap.from(".btn-dropdown", {
          opacity: 1, 
          y: 80,
          duration: 1,
          delay: 0,
        });
        
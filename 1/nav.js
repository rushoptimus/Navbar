document.addEventListener("DOMContentLoaded",function(){
    let t1 = gsap.timeline({
        paused: true,
    });
    

    t1.to(".navigation",{
        duration:1.8,
        clipPath:"polygon(0 0,100% 0, 100% 100%,0 100%)",
        ease:"power2out",
        pointerEvents:"auto",
    })
    t1.from(
        ".ul a",
        {
            opacity: 0,
            duration: 0.90,
            y: 80,
            stagger: 0.05,
            ease: "power1.inOut",
        },
        "<"
    );
    t1.to(
        ".nav_showreel",
        {
            duration: 1,
            height: "200px",
            ease: "power2.out",
        },
        "<"
    );
    t1.from(
        ".nav_footer",
         {
             opacity: 0,
             duration: 0.3,
             y: 40,
             stagger: 0.05,
             ease: "power1.inOut",
         },
       
     );
    t1.from(
       ".nav_social_links a",
        {
            opacity: 0,
            duration: 0.3,
            y: 80,
            stagger: 0.05,
            ease: "power1.inOut",
        },
       
    );
   
    const Open = document.getElementById("Open");
    const Close = document.getElementById("Close");
    function openMenu(){
        document.querySelector('.navigation').style.pointerEvents="none";
        t1.play();
        console.log("clciked");
    }
    function CloseMenu(){
        document.querySelector('.navigation').style.pointerEvents="none";
        t1.reverse();
        console.log("clciked");
    }
        Open.addEventListener("click",openMenu);
        Close.addEventListener("click",CloseMenu);
        t1.reverse();
})

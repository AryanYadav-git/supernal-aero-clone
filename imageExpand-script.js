gsap.from(".text",{
    x:100,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".image img",
        start:"top 20%",
        end:"top 10%",
        scrub:1.5,
        // markers:true,
    }
})

gsap.from(".image",{
    scale: 0.9,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".image img",
        start:"top 30%",
        end:"top 20%",
        scrub:1.5,
        // markers:true,
    }
});


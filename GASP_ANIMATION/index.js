let tl = gasp.timelinr({defaults: {ease : "power4.inOut", duration : 4}});
let flagPoles = CSSRulePlufin.getRule(".card:before") 

tl.to('h1',{'clip-path':'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',opacity: 1, y: 0 ,duration : 2.2 })
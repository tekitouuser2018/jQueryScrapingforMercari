javascript:void((function(f){
  
  var script = document.createElement('script');

  script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';

  
  script.onload = function(){
  
    var $ = jQuery.noConflict(true);

    
    f($);
  };

  
  document.body.appendChild(script);
})(function($, undefined){
  


  let imgs = $("div main div section div section a figure img");
  let names = $("div main div section div section a div h3");
  let prices = $("div main div section div section a div div .items-box-price");  
  let items = $("div main div section div section a");
  

  let arr=[];
  let left = "{";
  let right = "}";

  for(var i =0 ;i<items.length; i++){
    
    let name = String(names[i].innerText);
    let price = String(prices[i].innerText);
    let img = String(imgs[i].src);
    let url = String(items[i].href);
   
  
    let s = "\""+name+"\""+":"
      +left+"\"price\""+":"+"\""+price+"\""+","
      +"\"img\""+":"+"\""+img+"\""+","
      +"\"url\""+":"+"\""+url+"\""+
      right;
    arr.push(s);
    
  }
  let all = left+arr.join(',')+right;

  let json = JSON.parse(all);
  console.log(json);


}));
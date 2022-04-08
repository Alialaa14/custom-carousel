const items = document.querySelectorAll(".carousel-inner .carousel-item");

const next = document.querySelector(".carousel-control-next");

const prev = document.querySelector(".carousel-control-prev");

var next_index=0;    // دي هتستخدمها في الترانسفورم عشان كل خطوة تجمع او تطرح عليها رقم

var active_index=0;  // دي هتسخدمها عشان تعرف العنصر الاكتيف فين بالظبط

next.addEventListener("click",function(){

  next_index-=370; //تطرح منها قيمة العرض بتاعها عشان تعملها ترانسلات اكس 
  for(var i = 0 ; i<items.length-1;i++){
    // هتدور فيهم علي العنصر الاكتيف 
    if (items[i].classList.contains("active")){

        active_index =i
       
    }
    }
    // طبعا اما تدوس ع نكست ف العنصر الاكتيف هيبقي العنصر الي بعده
    items[active_index].classList.remove("active");

    items[active_index+1].classList.add("active");
   
// و دي هتستخدمها عشان تجرك كل الصور ك مجموعة مع بعض عشان لو عملت واحدة بس هتتحرك لوحدها
      for (var x=active_index ; x<items.length;x++){

        items[x].setAttribute("style",`transform:translateX(${next_index}px)`)
  
      }
    

});

prev.addEventListener("click",function(){

  next_index+=370;

  for (var i = 0 ; i <items.length;i++){

   if (items[i].classList.contains("active")){

     active_index=i
     
   }
  }
  items[active_index].classList.remove("active");

  items[active_index-1].classList.add("active");
 
   
    for (var x=active_index-1 ; x<items.length;x++){
   
      items[x].setAttribute("style",`transform:translateX(${next_index}px)`)
   
    }
  

})


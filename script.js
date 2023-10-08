/* product1 */
var total=0;
var count1=0;
let btn1p=document.getElementById("btn1p");
btn1p.addEventListener("click",add);
function add(){
    count1++;
    let cp1=document.getElementById("cart-product1");
        cp1.style.display="flex";
   total += 100;
    let c=document.getElementById("count1");
    c.innerHTML=count1;
    let d=document.getElementById("c-count1");
        d.innerHTML=count1;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    
}

let btn1m=document.getElementById("btn1m");
btn1m.addEventListener("click",sub);
function sub(){
    if(count1>0){
    count1--;
    if(count1==0){
        let cp1=document.getElementById("cart-product1");
        cp1.style.display="none";
    }
    total -= 100;
        let c=document.getElementById("count1");
        c.innerHTML=count1;
        let d=document.getElementById("c-count1");
        d.innerHTML=count1;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    }
    
}



/* product2 */
    

var count2=0;
let btn2p=document.getElementById("btn2p");
btn2p.addEventListener("click",add2);
function add2(){
    count2++;
    let cp1=document.getElementById("cart-product2");
        cp1.style.display="flex";
    total += 200;
    let c=document.getElementById("count2");
    c.innerHTML=count2;
    let d=document.getElementById("c-count2");
        d.innerHTML=count2;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    
}

let btn2m=document.getElementById("btn2m");
btn2m.addEventListener("click",sub2);
function sub2(){
    if(count2>0){
    count2--;
    if(count2==0){
        let cp1=document.getElementById("cart-product2");
        cp1.style.display="none";
    }
    total -= 200;
        let c=document.getElementById("count2");
        c.innerHTML=count2;
        let d=document.getElementById("c-count2");
        d.innerHTML=count2;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    }
    
}

/*  product2 */

var count3=0;
let btn3p=document.getElementById("btn3p");
btn3p.addEventListener("click",add3);
function add3(){
    count3++;
    let cp1=document.getElementById("cart-product3");
        cp1.style.display="flex";
    total += 300;
    let c=document.getElementById("count3");
    c.innerHTML=count3;
    let d=document.getElementById("c-count3");
        d.innerHTML=count3;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    
}

let btn3m=document.getElementById("btn3m");
btn3m.addEventListener("click",sub3);
function sub3(){
    if(count3>0){
    count3--;
    if(count3==0){
        let cp1=document.getElementById("cart-product3");
        cp1.style.display="none";
    }
    total -= 300;
        let c=document.getElementById("count3");
        c.innerHTML=count3;
        let d=document.getElementById("c-count3");
        d.innerHTML=count3;
        let totalvalue=document.getElementById("totalvalue");
        // totalvalue.innerHTML=total;
        if(total==0){
            totalvalue.innerHTML="No product Added";
        }
        else{
            totalvalue.innerHTML=total;
        }
    }
    
}


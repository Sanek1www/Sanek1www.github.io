let sl_on = 0
function slider(){
    let sl = document.getElementById('nav');
    if(sl_on==0){
    sl.style.display='block';
    sl_on+=1;
    }else{
        sl.style.display='none'; 
        sl_on-=1;
    }
 }
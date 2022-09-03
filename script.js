console.log("page loaded...");

function changeName(){
    document.getElementById('name').innerHTML = 'Javiera Erlandsen';
}


function ocultar(elem,opcion){

    target= document.getElementById(elem);    
    target.setAttribute("style","display:none");

    var n_conn=document.getElementById('conn');
    var valor=n_conn.innerText;
    valor--;
    n_conn.innerText=valor;
    console.log(n_conn);
    if(opcion==1){//se debe sumar 1
        var your_conn=document.getElementById('your_conn');
        valor=your_conn.innerText;
        valor++; 
        your_conn.innerText=valor;       
        
    } 
}


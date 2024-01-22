function limpaTexto(){
    document.getElementById("cor").value="";
}

function verificaCor(){
    let cor = document.getElementById("cor").value;
        cor = cor.toLowerCase();
                    
switch(cor){
    
    case "azul":
        document.body.style.backgroundColor = "blue";
break;
    case "vermelho":
        document.body.style.backgroundColor = "red";
break;
    case "amarelo":
        document.body.style.backgroundColor = "yellow";
break;
case "verde":
        document.body.style.backgroundColor = "green";
break;
default:
document.getElementById("teste").innerHTML = "Preenchimento errado, tente novamente!";

document.body.style.backgroundColor = "white";
setTimeout(function() { location. reload(); }, 5000);   


}
    }

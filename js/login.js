function logar(){
    var apartamento = document.getElementById('apartamento').value
    var password = document.getElementById('password').value
    var alerta = document.getElementById('alerta')

    if(apartamento == 2201 && password == 123456){
        alert('Login realizado com sucesso!')
        location.href = "main.html"
       
    }else if(apartamento == 9999 && password == 123456){
        alert('Login como Administrador!')
        location.href = "administrador.html"
        
    }else{
        alerta.innerHTML = "Apartamento ou senha incorreto"
    }
}


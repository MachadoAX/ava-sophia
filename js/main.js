const salao = document.getElementById('salao')
const gourmet = document.querySelector('#gourmet')
const entregas = document.querySelector('#entregas')
const visitas = document.querySelector('#visitas')
const agua = document.querySelector('#agua')
const servicos = document.querySelector('#servicos') 

// redirecinando com o click
salao.addEventListener('click', function(){
   location.href ='salaodefestas.html'
})

gourmet.addEventListener('click', function(){
     location.href ='salaogourmet.html'
 })

 entregas.addEventListener('click', function(){
     location.href ='entregas.html'
 })

 visitas.addEventListener('click', function(){
     location.href ='visitas.html'
 })

 agua.addEventListener('click', function(){
     location.href ='agua.html'
 })

 servicos.addEventListener('click', function(){
     location.href ='tercerizado.html'
 })
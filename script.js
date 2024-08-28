var btnDesencriptar = document.querySelector('.btn-desencriptar');
var btnEncriptar = document.querySelector('.btn-encriptar');
var btnCopar = document.querySelector('.copiar');  
var textarea = document.querySelector('.textarea')
var mensaje = document.querySelector('.mensaje');
var informacion = document.querySelector('.informacion')
console.log(mensaje.value);
  
  function encriptar (string){
    var arrayClaves = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    string = string.toLowerCase();

    for(var i =0; i< arrayClaves.length;i++){
        if(string.includes(arrayClaves[i][0])){
            string= string.replaceAll(arrayClaves[i][0],arrayClaves[i][1])
        }
    }
    return string;
  }

  function desencriptar (string){
    var arrayClaves = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    string = string.toLowerCase();

    for(var i =0; i< arrayClaves.length;i++){
        if(string.includes(arrayClaves[i][1])){
            string= string.replaceAll(arrayClaves[i][1],arrayClaves[i][0])
        }
    }
    return string;
  }

  btnEncriptar.addEventListener('click',function(){
    if(/^[a-zA-Z]+$/.test(textarea.value)){
      var textoEncriptado = encriptar(textarea.value);
      console.log(textoEncriptado);
      mensaje.innerHTML = textoEncriptado;
      
      informacion.classList.remove('error');
      btnCopar.classList.remove('inactive');
      
    }else{
      informacion.classList.add('error');
      textarea.value='';
      mensaje.innerHTML='';
      console.log('lo sineto');
    }
    
  })

  btnDesencriptar.addEventListener('click',function(){
    if(textarea.value){
      var textoEncriptado = desencriptar(textarea.value);
      console.log(textoEncriptado);
      mensaje.innerHTML = textoEncriptado;
      btnCopar.classList.remove('inactive');
       
    }else{
      console.log('no hace nada')
    
    
  }})

  btnCopar.addEventListener('click',
    async function copiarContenido() {
      var text= encriptar(textarea.value);
      try {
        await navigator.clipboard.writeText(text);
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
      } catch (err) {
        console.error('Error al copiar: ', err);
        /* Rechazado - fallo al copiar el texto al portapapeles */
      }
      textarea.value='';
      mensaje.innerHTML='';
    }
      
  )
 var s='jesus'
 console.log(encriptar(s));


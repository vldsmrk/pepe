 var file = document.querySelector('link[href]')
 var button = document.querySelector('#theme');

 var baseURL = 'file:///home/student-pc-8/Documents/Smrk/';

 console.log(file);

 button.addEventListener('click' , function(){
     
     if (file.href == baseURL + 'light-theme.css' ){
         file.href =  baseURL + 'dark-theme.css'
     } else if (file.href == baseURL + 'dark-theme.css' ){
        file.href =  baseURL + 'light-theme.css'
    } 
 });
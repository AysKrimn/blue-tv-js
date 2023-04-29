const acordions = document.querySelectorAll('.akordiyon-item')

acordions.forEach(function(div) {

    
    div.onclick = function(event) {
    
     console.log(event)
     const p = event.target.nextElementSibling
     const spanIcon = event.target.children[1]
     // p deki classı toggle yap
     p.classList.toggle('ek-yazi')

     console.log("ikon:", spanIcon)
     // spanikonun classı down classını içeriyorsa
     if(spanIcon.classList.contains("down")) {

       spanIcon.classList.remove('down')
       spanIcon.classList.add('up')
       return;
     } 

     if(spanIcon.classList.contains("up")) {
        
        spanIcon.classList.remove('up')
        spanIcon.classList.add('down')

     }

    }

})
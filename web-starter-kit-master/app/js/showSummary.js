//if(sessionStorage.getItem('myUserEntity') !== null) {
          //var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
          
   //     }
   jQuery(document).ready(function() {
   	if(sessionStorage.getItem('myUserEntity') !== null) {
          var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
          console.log(em.Email);
          
           // document.getElementById("signOutText").style.display = "inline";
           	var content = document.getElementById('summary-card-1');
          content.innerHTML = em.Email;
         }
   
      });
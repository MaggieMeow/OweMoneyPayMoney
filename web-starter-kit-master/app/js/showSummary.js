//if(sessionStorage.getItem('myUserEntity') !== null) {
          //var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
          
   //     }
   $(document).ready(function() {
   	if(sessionStorage.getItem('myUserEntity') !== null) { //if user is signed in
   		var num_transaction = 5;
          var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
          console.log(em.Email);
          var content = '<table style="width:100%">'
          for(i=0; i<num_transaction; i++){
    		content += '<tr><td>' + 'Account ' +  i +"： "+ "$123" + '</td></tr>';
		  }
		  content += '</table>';
           // document.getElementById("signOutText").style.display = "inline";
           
          $('#summary-card-1').html(content);
         }
   
      });
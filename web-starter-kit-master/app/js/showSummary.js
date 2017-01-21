//if(sessionStorage.getItem('myUserEntity') !== null) {
          //var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
          
   //     }
   $(document).ready(function() {
   	// if(sessionStorage.getItem('myUserEntity') !== null) { //if user is signed in
   	// 	var num_transaction = 5;
    //       var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
    //       console.log(em.Email);
    //       var content = '<table style="width:100%">'
    //       for(i=0; i<num_transaction; i++){
    // 		content += '<tr><td>' + 'Account ' +  i +"： "+ "$123" + '</td></tr>';
		  // }
		  // content += '</table>';
    //        // document.getElementById("signOutText").style.display = "inline";
           
    //       $('#summary-card-1').html(content);
    //      }

    $("#submitnewform").submit(function(e) {
        var email = $("#sample3").val();
        var amount = $("#sample4").val();

        e.preventDefault();
        if(sessionStorage.getItem('myUserEntity') !== null) {
            var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
            var myemail = em.Email;
            $.ajax({
                type: 'POST',
                url: '../php/getSummary.php',
                data: {
                    cmd: 'add',
                    email1: myemail,
                    email2: email,
                    amount: amount,
                },
                success: function(feedback) {
                }
            });
        }
        return false;
    });

    	 var valid_session = false;
         if(sessionStorage.getItem('myUserEntity') !== null) {
         	var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
         	var email = em.Email;
         	$.ajax({
         		type: 'POST',
         		url: '../php/getSummary.php',
         		data: {
         			cmd: 'register',
         			email: email,
         		},
         		success: function(feedback) {
         			console.log(feedback);
         			valid_session = true;

         		$.ajax({
         			type: 'POST',
         			url: '../php/getSummary.php',
         			data: {
         				cmd: 'retrieve',
         				email: email,
         			},
         			success: function(feedback) {

         			console.log(feedback);
         			//valid_session = true;
         			var us2 = JSON.parse(feedback);
         			var records = JSON.parse(us2.record);
         			for (i = 0; i < records.length; i ++) {
         				if (records[i].user1 == email) {

         				} else {
         					
         				}
         			}
         			console.log(us2.record[0].amount);
			         	}
			         });
         		}

         	})

         }

         
   
      });
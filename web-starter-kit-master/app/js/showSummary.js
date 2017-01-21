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
         			var parsed = JSON.parse(feedback);
         			//var records = JSON.parse(us2.record);
         			var parsedArray = parsed.record;
         			var userArray = [20];
         			var emailArray = [20];
         			var recordArray = [];
         			

					for ( var i = 0; i < 20; i++ ) {
    					recordArray[i] = []; 
					}
         			for (i = 0; i < parsedArray.length; i ++) {
         				//var userLeft = 
         				// if (parsedArray[i].user1 == email) {
         				// 		if ($.inArray(parseInt(parsedArray[i].uid2), userArray) == -1) { //is not note stored
         				// 			//console.log("the" + i + "th time: "+parseInt(parsedArray[i].uid2));
         				// 	//console.log("the" + i + "th time: "+$.inArray(parseInt(parsedArray[i].uid2), userArray));
         				// 			userArray.push(parseInt(parsedArray[i].uid2));
         				// 			emailArray.push(parsedArray[i].user2);
         				// 			recordArray.push();
         				// 		} else {

         				// 		}
         				// } else {
         				// 	if ($.inArray(parseInt(parsedArray[i].uid1), userArray) == -1) { //if is not stored
         					
         				// 		userArray.push(parseInt(parsedArray[i].uid1));
         				// 		emailArray.push(parsedArray[i].user1);
         				// 	} else {

         				// 	}
         				// }

         				var user1_id = parseInt(parsedArray[i].uid1);
         				var user2_id = parseInt(parsedArray[i].uid2);
         				var email1 = parsedArray[i].user1;
         				var email2 = parsedArray[i].user2;

         				if (emailArray[user1_id] == null) {
         					emailArray[user1_id] = email1;
         				}
         				if (emailArray[user2_id] == null) {
         					emailArray[user2_id] = email2;
         				}
         				// console.log("the" + i +"th " +user1_id);
         				// console.log("the" + i +"th " +user2_id);
         				//recordArray[4][1] = 1;
         				if (recordArray[user1_id][user2_id] == null) {
         					recordArray[user1_id][user2_id] = parseInt(parsedArray[i].amount);
         				} else {
         				var temp = recordArray[user1_id][user2_id];
         				recordArray[user1_id][user2_id] = temp + parseInt(parsedArray[i].amount);
         				}
         			}
         			// for (i = 0; i < recordArray.length; i ++) {
         			// 	console.log(recordArray[i]);

         			// }
         			// console.log(userArray);
         			// 	console.log(emailArray);
         			for (i = 0; i < recordArray.length; i ++) {
         				for (j = 0; j < recordArray.length; j ++) {
         					if (recordArray[i][j] == null) {

         					} else {
         						console.log(emailArray[i] + " is receiving " + recordArray[i][j] + "from " + emailArray[j]);
         					}
         				}
         			}
         			

         			// for (i = 0; i < userArray.length; i ++) {

         			// }
			         	}
			         });
         		}

         	})

         }

         
   
      });
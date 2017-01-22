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

        if ($('#owed').is(':checked')) {
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
        } 
        if ($('#owe').is(':checked')) {
            e.preventDefault();
        if(sessionStorage.getItem('myUserEntity') !== null) {
            var em = JSON.parse(sessionStorage.getItem('myUserEntity'));
            var myemail = em.Email;
            $.ajax({
                type: 'POST',
                url: '../php/getSummary.php',
                data: {
                    cmd: 'add',
                    email1: email,
                    email2: myemail,
                    amount: amount,
                },
                success: function(feedback) {
                }
            });
        }
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
                    var receive_content = '<table style="width:100%" id="credit-table">';
                    var return_content = '<table style="width:100%" id="debt-table">';


                    var index = 0;
                    var num_interactions = 0;
                    for (i = 0; i < emailArray.length; i ++) {
                        if (emailArray[i] == email) {
                            index = i;
                        }
                    }

                    // for (i = 0; i < recordArray[index].length; i ++) {
                    //     if (recordArray[index][i] !== null) {
                    //         var temp = recordArray[index][i];
                    //         recordArray[index][i] = temp - recordArray[i][index];
                    //     }
                    // }

                    for (i = 0; i < recordArray.length; i ++) {
                        for (j = 0; j < recordArray.length; j ++) {
                            if (j == index) {
                                if (recordArray[i][j] !== null) {
                                    if (recordArray[j][i] == null) {
                                        recordArray[j][i] = 0 - recordArray[i][j];
                                    } else {
                                        recordArray[j][i] = recordArray[j][i] - recordArray[i][j];
                                    }
                                } else {

                                }
                            }
                        }
                    }

                    for (i = 0; i < recordArray[index].length; i ++) {
                        var temp2 = recordArray[index][i];
                        if (temp2 !== null && temp2 !== 0 && !isNaN(temp2)) {
                            console.log(recordArray[index][i]);
                            num_interactions ++;
                            var money = recordArray[index][i];
                            if (money > 0) {
                                        console.log("i am receiving " + money + " from " + emailArray[i]);
                                
                                        receive_content += '<tr><td>' + 'Account ' +  emailArray[i] +": "+ " $"+ money + '</td>' + '<td>' + 
                                        '<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">' +
                                        '<i class="material-icons">email</i>' +
                                        '</button>' + '</td></tr>';
                                    
                                    } else if (money < 0){
                                        console.log("i am oweing " + money + " from " + emailArray[i]);
                                        return_content += '<tr><td>' + 'Account ' +  emailArray[i] +": "+ " $"+ (0-money) + '</td>' + '<td>' + 
                                        '<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">' +
                                        '<i class="material-icons">email</i>' +
                                        '</button>' + '</td></tr>';
                                    }
                        }
                    }



                    $('#receive').html(receive_content);
                    $('#return').html(return_content);
                    console.log("interactions: " + num_interactions);

         			// for (i = 0; i < recordArray.length; i ++) {
         			// 	for (j = 0; j < recordArray.length; j ++) {
         			// 		if (recordArray[i][j] == null) {

         			// 		} else {
            //                     var money = recordArray[i][j] - recordArray[j][i];

            //                     if (emailArray[i] == email) {
            //                         if (money >= 0) {
            //                             console.log(emailArray[i] + " is receiving " + money + " from " + emailArray[j]);
                                
            //                             receive_content += '<tr><td>' + 'Account ' +  emailArray[j] +"： "+ " $"+money + '</td></tr>';
                                    
            //                         } else {
            //                             console.log(emailArray[j] + " is oweing " + money + " from " + emailArray[i]);
            //                             return_content += '<tr><td>' + 'Account ' +  emailArray[i] +":"+ " $"+ money*-1 + '</td></tr>';
            //                         }
                                    
                                    
            //                     } else {
            //                         console.log(emailArray[j] + " is oweing " + money + " from " + emailArray[i]);
            //                         return_content += '<tr><td>' + 'Account ' +  emailArray[i] +":"+ " $"+ money + '</td></tr>';
            //                     }
         						
         			// 		}
         			// 	}
            //             receive_content += '</table>';
            //             return_content += '</table>';
                        
         			// }
         			

         			// for (i = 0; i < userArray.length; i ++) {

         			// }
			         	}
			         });
         		}

         	})

         }

         
   
      });
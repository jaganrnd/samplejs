alert('In Script');
			var http = new XMLHttpRequest();
			var url = "https://test.salesforce.com";
			var params = "username=api.userprovision@aero.bombardier.com.uat&password=Aero123!yrbIL5DcZeqHoLUtY8Kk2Vg9";
			http.open("POST", url, true);

			//Send the proper header information along with the request
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			http.onreadystatechange = function() {//Call a function when the state changes.
				if(http.readyState == 4 && http.status == 200) {
					alert(http.responseText);
				}
			}
			http.send(params);

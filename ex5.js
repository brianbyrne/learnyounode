console.log("\n" + process.argv[2]);

var fs = require('fs');

var patte

var buff = fs.readdir(process.argv[2],
	function(err, data) {
		if(err) {
			console.log(err);		
			return;
		}
		else {
			for(var i = 0; i < data.length; i++) {
				console.log(data[i]);			
			}	
		}
	}
);

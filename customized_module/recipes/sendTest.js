

var recipe = {
	transcriptionHook: {
	"TEST": {
		    pattern: "테스트",
		    command: "TEST"
		  },
	
	},
	command: {
		"TEST": {
				    notificationExec: {
				      notification: "SHOW_ALERT",
				      payload: {
				        message: "1",
					        timer: 5000,
				      }
				    },
				},
	

}
}
exports.recipe = recipe 
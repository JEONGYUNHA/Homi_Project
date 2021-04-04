

var recipe = {
	transcriptionHook: {
	  "SAYHELLO": {
	    pattern: "안녕",
	    command: "SAYHELLO"
	},
	},
	command: {
		"SAYHELLO": {
		    notificationExec: {
		      notification: (params, key) => {
		        // params: result of transcriptionHook match or gAction parameters
		        // key: which transcriptionHook or gAction call this command
		        
			if (key == "SAYHELLO")
		        return "SHOW_ALERT"
	

		      },
		      payload: (params, key)=> {
		        return { // return value will be used as payload
		          message: key,
		          timer: 5000,
		        }
		      }
		    },
  		},
	}
}
exports.recipe = recipe 
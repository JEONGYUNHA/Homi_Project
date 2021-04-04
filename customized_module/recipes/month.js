

var recipe = {
	transcriptionHook: {
	"MONTH": {
		    pattern: "([0-9]+)월 보여 줘",
		    command: "MONTH"
		  },
	
/////
	},
//////////////////////////////////////////////////////////////////////////
	command: {
		"MONTH": {
				    notificationExec: {
				      notification:(params, key) => {
					return "NOTIFICATION_MONTH"
				},
				      payload: (params, key)=> {
				        return{
						month : params[1] , 
						// 결과
						// params[0] : 4월 보여줘
						// params[1] : 4
					        timer: 5000,
					}
				      }
				    },
				},


}
}
exports.recipe = recipe 
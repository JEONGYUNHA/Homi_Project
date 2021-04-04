var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "ko",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
		  module: "MMM-Test",
		  position: "fullscreen_above"
		},
	
		/*{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		

		
		{
		      module: "MMM-NotificationTrigger",
		      config: {
		        useWebhook:true,
		        triggers:[
		          {
		            trigger: "IFTTT_COMMAND",
		            fires: [
		              {
		                fire:"SHOW_ALERT",
				payload: (payload) => {return payload}
		
		              },
		            ],
		          },
			]
		      }
		 },*/
		{
			module: "MMM-Hotword",
			position: "top_right",
			config: {
				chimeOnFinish: null,
				mic: {
					//recordProgram: "arecord",
					//'device: "plughw:1"	
					verbose: true


				},
				record: {
					recordProgram: "arecord",
					device: "plughw:1"	
				},				
				models: [
					{
						hotwords    : "smart_mirror",
						file        : "smart_mirror.umdl",
						sensitivity : "0.5",
					},
					{
						hotwords    : "homi",
						file        : "HOMI.pmdl",
						sensitivity : "0.5"
					},
					{
						hotwords    : "camera",
						file        : "camera1.pmdl",
						sensitivity : "0.5"
					},
				],
				commands: {
					"smart_mirror": {
						notificationExec: {
							notification: "ASSISTANT_ACTIVATE",
							payload: (detected, afterRecord) => {
							return {profile:"default"}
							}
						},
						restart:false,
						afterRecordLimit:0
					},


					"homi": {
						notificationExec: {
							notification: "ASSISTANT_ACTIVATE",
							payload: (detected, afterRecord) => {
								return {profile:"default"}
							}
						},
						restart:false,
						afterRecordLimit:0
					},

/*

					"camera": {
				
						shellExec: {	
						exec: "bash camera2.sh && java -jar /home/pi/MagicMirror/insert.jar"
						////exec: "bash camera2.sh"
						////exec: "java -jar /home/pi/MagicMirror/insert1.jar"
						}
					},
*/

				}
			}
		},
		{
			module: "MMM-AssistantMk2",
			position: "top_right",
			config: {
				deviceLocation: {
					coordinates: {
						latitude: 37.5650168, // -90.0 - +90.0
						longitude: 126.8491231, // -180.0 - +180.0
					},
				},
				record: {
					recordProgram : "arecord",  
					device        : "plughw:1",
				},
				
				notifications: {
					ASSISTANT_ACTIVATED: "HOTWORD_PAUSE",
					ASSISTANT_DEACTIVATED: "HOTWORD_RESUME",
				},
				//useWelcomeMessage: "hello",
				profiles: {
					"default" : {
						lang: "ko-KR"
						//lang: "en-US"
					}
				},
				recipes: ["reboot.js","sayHello.js","month.js"],
				


			}
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
"use strict"

const NodeHelper = require("node_helper")
const bodyParser = require("body-parser")
const request = require("request")

module.exports = NodeHelper.create({

  start: function(){
  },

  socketNotificationReceived: function(noti, payload) {
    console.log("check socketNotification from Module:",noti,payload)
    if (noti == "INIT") {
      this.config = payload
      this.sendSocketNotification("INITIALIZED")
    }
	if (noti == "SEARCH_MONTH") {  //날짜
		this.getPhotosByMonth(payload)
  	}
	if (noti == "SEARCH_TEMP") {  //온도
		this.getPhotosByTemp(payload)
  	}
	if (noti == "SEARCH_WEEK") {  //요일
		this.getPhotosByWeek(payload)
  	}
	if (noti == "SEARCH_WEATHER") {  //날씨
		this.getPhotosByWeather(payload)
  	}
	if (noti == "SEARCH_TODAY") {  //오늘
		this.getPhotosByToday(payload)
  	}
  },
//날씨
   getPhotosByMonth: function(monthNumber){
 	var options = {
		url: "http://192.168.0.5:3000/search_date",
		form: {
			search: 190+monthNumber
		}
	}
	request.post(options,(err, res, body)=>{
		if(err){
			console.log("ERROR:", err)
		}else{
			console.log("API_RESULT:",body)
			var ret = JSON.parse(body)		
			console.log(ret.photos.length)
			console.log(typeof ret.photos)
			if(typeof ret.photos !=="undefined"&&ret.photos.length>0){
				this.sendSocketNotification("FOUND_PHOTOS", ret.photos)
			}
		}
	})
},
//온도
   getPhotosByTemp: function(tempNumber){
 	var options = {
		url: "http://192.168.0.5:3000/search_temp",
		form: {
			search: tempNumber
		}
	}
	request.post(options,(err, res, body)=>{
		if(err){
			console.log("ERROR:", err)
		}else{
			console.log("API_RESULT:",body)
			var ret = JSON.parse(body)		
			console.log(ret.photos.length)
			console.log(typeof ret.photos)
			if(typeof ret.photos !=="undefined"&&ret.photos.length>0){
				this.sendSocketNotification("FOUND_PHOTOS", ret.photos)
			}
		}
	})
},
//요일
   getPhotosByWeek: function(week){
 	var options = {
		url: "http://192.168.0.5:3000/search_week",
		form: {
			search: week
		}
	}
	request.post(options,(err, res, body)=>{
		if(err){
			console.log("ERROR:", err)
		}else{
			console.log("API_RESULT:",body)
			var ret = JSON.parse(body)		
			console.log(ret.photos.length)
			console.log(typeof ret.photos)
			if(typeof ret.photos !=="undefined"&&ret.photos.length>0){
				this.sendSocketNotification("FOUND_PHOTOS", ret.photos)
			}
		}
	})
},
//날씨
   getPhotosByWeather: function(weather){
 	var options = {
		url: "http://192.168.0.5:3000/search_weather",
		form: {
			search: weather
		}
	}
	request.post(options,(err, res, body)=>{
		if(err){
			console.log("ERROR:", err)
		}else{
			console.log("API_RESULT:",body)
			var ret = JSON.parse(body)		
			console.log(ret.photos.length)
			console.log(typeof ret.photos)
			if(typeof ret.photos !=="undefined"&&ret.photos.length>0){
				this.sendSocketNotification("FOUND_PHOTOS", ret.photos)
			}
		}
	})
},
//오늘
   getPhotosByToday: function(today){
 	var options = {
		url: "http://192.168.0.5:3000/search_date",
		form: {
			search: 190927
		}
	}
	request.post(options,(err, res, body)=>{
		if(err){
			console.log("ERROR:", err)
		}else{
			console.log("API_RESULT:",body)
			var ret = JSON.parse(body)		
			console.log(ret.photos.length)
			console.log(typeof ret.photos)
			if(typeof ret.photos !=="undefined"&&ret.photos.length>0){
				this.sendSocketNotification("FOUND_PHOTOS", ret.photos)
			}
		}
	})
},
})




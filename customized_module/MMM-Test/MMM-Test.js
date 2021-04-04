Module.register("MMM-Test", {
  defaults: {
    interval: 2 * 1000,
  },

  getStyles: function() {
    return ["MMM-Test.css"]
  },

  start: function () {
    this.timer = null
    this.currentPhoto = null
  },


  notificationReceived: function(noti, payload, sender) {
    if (noti == "DOM_OBJECTS_CREATED") {
      this.sendSocketNotification("INIT", this.config)
    }

   if (noti == "NOTIFICATION_MONTH") { //날짜 검
    var month = payload.month
    console.log(month)
    this.sendSocketNotification("SEARCH_MONTH", month)
  }
   if (noti == "NOTIFICATION_TEMP") {  //온도 검색
    var temp = payload.temp
    console.log(temp)
    this.sendSocketNotification("SEARCH_TEMP", temp)
  }
   if (noti == "NOTIFICATION_WEEK") {  //요일 검색
    var week = payload.week
    console.log(week)
    this.sendSocketNotification("SEARCH_WEEK", week)
  }
   if (noti == "NOTIFICATION_WEATHER") {  //날씨 검색
    var weather = payload.weather
    console.log(weather)
    this.sendSocketNotification("SEARCH_WEATHER", weather)
  }
  if (noti == "NOTIFICATION_TODAY") {  //오늘 검색
    var today = payload.today
    console.log(today)
    this.sendSocketNotification("SEARCH_TODAY",today)
  }
  },


  socketNotificationReceived: function(noti, payload) {//30
    console.log(noti, payload)
    if (noti == "FOUND_PHOTOS") {
      this.slidePhotos([].concat(payload))
    }
  },

  getDom: function() {
    var dom = document.createElement("div")//40
    dom.id = "TEST"
    if (this.currentPhoto) {
      var img = document.createElement("div")
      img.id = "TEST_PHOTO"
      var url = this.currentPhoto
      img.style.backgroundImage = `url("${url}")`
      console.log(img.style.backgroundImage)
      dom.appendChild(img)
    }

    return dom
  },

  slidePhotos: function(photos) {
    console.log(photos, this.currentPhoto)
    if (photos && photos.length > 0) {
      this.currentPhoto = photos.pop()
      console.log(this.currentPhoto)
      this.timer = setTimeout(()=>{
        this.slidePhotos(photos)
      }, this.config.interval)
    } else {
      clearTimeout(this.timer)
      this.timer = null
      this.currentPhoto = null
      console.log("Finished.")
    }
    this.updateDom()
  }
})
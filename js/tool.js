function hrefObj() {　　
  var localhref = window.location.href;
  if (localhref.indexOf('?') != -1) {
    var localarr = localhref.split('?')[1].split('&')
    var tempObj = {};
    for (var i = 0; i < localarr.length; i++) {　　
      tempObj[localarr[i].split('=')[0]] = localarr[i].split('=')[1]
    }
    return tempObj;
  } else {
    return ""
  }
}


function getdata(url, data, fn) {
  let token = localStorage.getItem("token")
  $.ajax({
    url: url,
    type: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "DeviceId": "xcx",
      "access-token": token,
    },
    data: data,
    dataType: 'json',
    success: fn
  })
}

$("#music").on('click', function () {
  if ($(this).hasClass('on')) {
    $("#myMusic").get(0).pause()
    $(this).attr('class', 'off')
  } else {
    $("#myMusic").get(0).play()
    $(this).attr('class', 'on')
  }
})

let autoplay1 = localStorage.getItem("autoplay")
if (autoplay1 == 'on') {
  $("#myMusic").get(0).play()
  $("#music").attr('class', 'on')
} else {
  $("#myMusic").get(0).pause()
  $("#music").attr('class', 'off')
}
let currentTime1 = localStorage.getItem("currentTime")
$('#myMusic').get(0).currentTime = currentTime1
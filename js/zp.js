var lastBox = $('.box_children').eq(0)
var flag = false

$('.mask_layer').show()
$('.loading').show()

// 图片缩小
function getRes(that, time) {
  let index = that.data('index')
  let deg = 30 * index + 15
  
  $('.center_img').animate({
    width: '12%',
    top: '15%'
  }, 1000, function () {
    that.addClass('active').siblings().removeClass('active')
    $(this).hide()
    lastBox.children('.box_children_img').show(function () {
      lastBox = that
    })
    center_imgShow(that, time)

    if (index == 0) {
      $('.box').css({
        transform: 'rotate(-15deg)'
      })
      return false
    }
    $('.box').css({
      transform: 'rotate(-' + deg + 'deg)'
    })
  })
}

// 图片放大
function center_imgShow(that, time = 2000) {
  let imgsrc1 = that.data('imgsrc1')
  $('.center_img img').attr('src', imgsrc1)
  setTimeout(() => {
    that.children('.box_children_img').hide()
    $('.center_img').show().animate({
      width: '40%',
      top: '50%'
    })
    flag = true
  }, time)
}


window.onload = function () {
  $('.mask_layer').hide()
  $('.loading').hide()

  $('.main_btn').on('click', function () {
    let currentTime = $('#myMusic').get(0).currentTime
    let autoplay = $('#music').attr('class')
    localStorage.setItem('autoplay',autoplay)
    localStorage.setItem('currentTime',currentTime)
    let id = $('.active').data('id')
    window.location.href = './gender.html?xingzuo=' + id
  })

  $('.box_children').on('click', function () {
    let _this = $(this)
    if (flag) {
      flag = false
      getRes(_this)
    }
  })
  
  let rotate
  for (let i = 1; i < 13; i++) {
    rotate = i * 30 + 15
    $('.box_children').eq(i).css({
      'transform': `translate(-50%) rotate(${rotate}deg)`
    })
  }

  $('.needle').css({
    'transform': 'translate(-50%) rotate(0deg'
  })

  getRes(lastBox, 1000)
  
}
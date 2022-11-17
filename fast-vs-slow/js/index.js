// is in viewport functie
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};


// $.fn.preload = function() {
//   this.each(function(){
//       $('<img/>')[0].src = this;
//   });
// }

// $(['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg5.jpg','bg6.jpg','bg7.jpg','bg8.jpg','bg9.jpg','bg10.jpg','bg11.jpg','bg12.jpg','bg13.jpg','bg13.jpg','bg14.jpg','bg15.jpg','bg16.jpg','bg17.jpg','bg18.jpg']).preload();




var player01 = videojs('#my-video');

player01.ready(function () {

  player01.on('timeupdate', function () {
    var time = player01.currentTime();
    var duration = player01.duration();
    if (time >= duration) {

      $('.introvid').css({ 'display': 'none' });

    }

  })
});

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp = 0;

$(document).mousemove(function (e) {
  $mouseX = e.clientX;
  $mouseY = e.clientY;

});


var $loop = setInterval(function () {
  // change 12 to alter damping higher is slower
  $xp = (($mouseX - $xp) / 15);
  $yp = (($mouseY - $yp) / 15);
  $(".vjs-big-play-button").css({ left: $mouseX, top: $mouseY });
}, 30);









// background transitions
$(window).on('resize scroll', function () {

  $('.para').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h1-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h1-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para2').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h2-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara2').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h2-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para3').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h3-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara3').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h3-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para4').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h4-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara4').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h4-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para5').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h5-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara5').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h5-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para6').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para7').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.para8').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara6').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara7').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});

$(window).on('resize scroll', function () {

  $('.rpara8').each(function () {

    if ($(this).isInViewport()) {

      let achtergrondje = $(this).attr('data-background');

      $('#h6-bg-rechts').css({
        'background': 'url(img/' + achtergrondje + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      })

    }
  })
});










// bolletjes navigatie
$(window).on('resize scroll', function () {
  if ($('.lt1').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b1').addClass('fill')
  }
  else $('.b1').removeClass('fill')
})

$(window).on('resize scroll', function () {
  if ($('.lt2').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b2').addClass('fill')
  }
  else $('.b2').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.lt3').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b3').addClass('fill')
  }
  else $('.b3').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.lt4').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b4').addClass('fill')
  }
  else $('.b4').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.lt5').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b5').addClass('fill')
  }
  else $('.b5').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.lt6').isInViewport() && $('.wrapperrechts').hasClass('closed')) {

    $('.b6').addClass('fill')
  }
  else $('.b6').removeClass('fill')
})


$(window).on('resize scroll', function () {
  if ($('.rt1').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s1').addClass('fill')
  }
  else $('.s1').removeClass('fill')
})

$(window).on('resize scroll', function () {
  if ($('.rt2').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s2').addClass('fill')
  }
  else $('.s2').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.rt3').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s3').addClass('fill')
  }
  else $('.s3').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.rt4').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s4').addClass('fill')
  }
  else $('.s4').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.rt5').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s5').addClass('fill')
  }
  else $('.s5').removeClass('fill')
})
$(window).on('resize scroll', function () {
  if ($('.rt6').isInViewport() && $('.wrapperlinks').hasClass('closed')) {

    $('.s6').addClass('fill')
  }
  else $('.s6').removeClass('fill')
})











// slide ins graphics
$(window).on('resize scroll', function () {

  if ($('.h1p1').isInViewport()) {
    $('.h1-1 a').removeClass('slideout')
    $('.h1-1 a').addClass('slidein')
  } else if ($('.h1-1 a').hasClass('slidein') && $('.h1p2').isInViewport()) {
    $('.h1-1 a').addClass('slideout')
    $('.h1-1 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h1p2').isInViewport()) {
    $('.num').removeClass('slideout')
    $('.num').addClass('slidein')
  } else if ($('.h1-2 img').hasClass('slidein') && $('.h1p3').isInViewport() || $('.h1p1').isInViewport()) {
    $('.num').addClass('slideout')
    $('.num').removeClass('slidein')
  }

})


$(window).on('resize scroll', function () {

  if ($('.h3p1').isInViewport()) {
    $('.h3-1 img').removeClass('slideout')
    $('.h3-1 img').addClass('slidein')
  } else if ($('.h3-1 img').hasClass('slidein') && $('.h3p2').isInViewport() || $('.h2p3').isInViewport()) {
    $('.h3-1 img').addClass('slideout')
    $('.h3-1 img').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h2p1').isInViewport()) {
    $('.h2-1 a').removeClass('slideout')
    $('.h2-1 a').addClass('slidein')
  } else if ($('.h2-1 a').hasClass('slidein') && $('.h1p3').isInViewport() || $('.h2p2').isInViewport()) {
    $('.h2-1 a').addClass('slideout')
    $('.h2-1 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h2p3').isInViewport()) {
    $('.h2-3 a').removeClass('slideout')
    $('.h2-3 a').addClass('slidein')
  } else if ($('.h2-3 a').hasClass('slidein') && $('.h2p2').isInViewport() || $('.h3p1').isInViewport()) {
    $('.h2-3 a').addClass('slideout')
    $('.h2-3 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h2p2').isInViewport()) {
    $('.fotocont').removeClass('slideout')
    $('.fotocont').addClass('slidein')
  } else if ($('.fotocont').hasClass('slidein') && $('.h2p1').isInViewport() || $('.h2p3').isInViewport()) {
    $('.fotocont').addClass('slideout')
    $('.fotocont').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperlinks .h3p2').isInViewport()) {
    $('.wrapperlinks .h3-2 a').removeClass('slideout')
    $('.wrapperlinks .h3-2 a').addClass('slidein')
  } else if ($('.h3-2 a').hasClass('slidein') && $('.h3p1').isInViewport() || $('.h3p3').isInViewport()) {
    $('.wrapperlinks .h3-2 a').addClass('slideout')
    $('.wrapperlinks .h3-2 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperlinks .h3p3').isInViewport()) {
    $('.h3-3 a').removeClass('slideout')
    $('.h3-3 a').addClass('slidein')
  } else if ($('.h3-3 a').hasClass('slidein') && $('.h3p2').isInViewport() || $('.h4p1').isInViewport()) {
    $('.h3-3 a').addClass('slideout')
    $('.h3-3 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h4p1').isInViewport()) {
    $('.h4-1 a').removeClass('slideout')
    $('.h4-1 a').addClass('slidein')
  } else if ($('.h4-1 a').hasClass('slidein') && $('.h4p2').isInViewport() || $('.h3p3').isInViewport()) {
    $('.h4-1 a').addClass('slideout')
    $('.h4-1 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h4p2').isInViewport()) {
    $('.h4-2 a').removeClass('slideout')
    $('.h4-2 a').addClass('slidein')
  } else if ($('.h4-2 a').hasClass('slidein') && $('.h4p1').isInViewport() || $('.h4p3').isInViewport()) {
    $('.h4-2 a').addClass('slideout')
    $('.h4-2 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h4p3').isInViewport()) {
    $('.h4-3 a').removeClass('slideout')
    $('.h4-3 a').addClass('slidein')
  } else if ($('.h4-3 a').hasClass('slidein') && $('.h5p1').isInViewport() || $('.h4p2').isInViewport()) {
    $('.h4-3 a').addClass('slideout')
    $('.h4-3 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h5p1').isInViewport()) {
    $('.h5-1 a').removeClass('slideout')
    $('.h5-1 a').addClass('slidein')
  } else if ($('.h5-1 a').hasClass('slidein') && $('.h4p3').isInViewport() || $('.h5p2').isInViewport()) {
    $('.h5-1 a').addClass('slideout')
    $('.h5-1 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h5p2').isInViewport()) {
    $('.h5-2 a').removeClass('slideout')
    $('.h5-2 a').addClass('slidein')
  } else if ($('.h4-3 a').hasClass('slidein') && $('.h5p1').isInViewport() || $('.h5p3').isInViewport()) {
    $('.h5-2 a').addClass('slideout')
    $('.h5-2 a').removeClass('slidein')
  }

})

$(window).on('resize scroll', function () {

  if ($('.h5p3').isInViewport()) {
    $('.h5-3 a').removeClass('slideout')
    $('.h5-3 a').addClass('slidein')
  } else if ($('.h5-3 a').hasClass('slidein') && $('.h4p1').isInViewport() || $('.h5p2').isInViewport()) {
    $('.h5-3 a').addClass('slideout')
    $('.h5-3 a').removeClass('slidein')
  }

})

// $(window).on('resize scroll', function () {

//   if ($('.h6p1').isInViewport()) {
//     $('.h6-1 a').removeClass('slideout')
//     $('.h6-1 a').addClass('slidein')
//   } else if ($('.h6-1 a').hasClass('slidein') && $('.h5p3').isInViewport() || $('.h6p2').isInViewport()) {
//     $('.h6-1 a').addClass('slideout')
//     $('.h6-1 a').removeClass('slidein')
//   }

// })

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h1p1').isInViewport()) {
    $('.wrapperrechts .h1-1 img').removeClass('slideout2')
    $('.wrapperrechts .h1-1 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h1-1 img').hasClass('slidein2') && $('.wrapperrechts .h1p2').isInViewport()) {
    $('.wrapperrechts .h1-1 img').addClass('slideout2')
    $('.wrapperrechts .h1-1 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h1p2').isInViewport()) {
    $('.wrapperrechts .h1-2 img').removeClass('slideout2')
    $('.wrapperrechts .h1-2 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h1-2 img').hasClass('slidein2') && $('.wrapperrechts .h1p1').isInViewport() || $('.wrapperrechts .h1p3').isInViewport()) {
    $('.wrapperrechts .h1-2 img').addClass('slideout2')
    $('.wrapperrechts .h1-2 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h1p3').isInViewport()) {
    $('.wrapperrechts .h1-3 a').removeClass('slideout2')
    $('.wrapperrechts .h1-3 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h1-3 a').hasClass('slidein2') && $('.wrapperrechts .h1p2').isInViewport() || $('.wrapperrechts .h2p1').isInViewport()) {
    $('.wrapperrechts .h1-3 a').addClass('slideout2')
    $('.wrapperrechts .h1-3 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h2p1').isInViewport()) {
    $('.wrapperrechts .h2-1 a').removeClass('slideout2')
    $('.wrapperrechts .h2-1 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h2-1 a').hasClass('slidein2') && $('.wrapperrechts .h1p3').isInViewport() || $('.wrapperrechts .h2p2').isInViewport()) {
    $('.wrapperrechts .h2-1 a').addClass('slideout2')
    $('.wrapperrechts .h2-1 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h2p2').isInViewport()) {
    $('.wrapperrechts .h2-2 a').removeClass('slideout2')
    $('.wrapperrechts .h2-2 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h2-2 a').hasClass('slidein2') && $('.wrapperrechts .h2p1').isInViewport() || $('.wrapperrechts .h2p3').isInViewport()) {
    $('.wrapperrechts .h2-2 a').addClass('slideout2')
    $('.wrapperrechts .h2-2 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h2p3').isInViewport()) {
    $('.wrapperrechts .h2-3 img').removeClass('slideout2')
    $('.wrapperrechts .h2-3 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h2-3 img').hasClass('slidein2') && $('.wrapperrechts .h2p2').isInViewport() || $('.wrapperrechts .h4p1').isInViewport()) {
    $('.wrapperrechts .h2-3 img').addClass('slideout2')
    $('.wrapperrechts .h2-3 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h3p1').isInViewport()) {
    $('.wrapperrechts .h3-1 a').removeClass('slideout2')
    $('.wrapperrechts .h3-1 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h3-1 a').hasClass('slidein2') && $('.wrapperrechts .h2p3').isInViewport() || $('.wrapperrechts .h3p2').isInViewport()) {
    $('.wrapperrechts .h3-1 a').addClass('slideout2')
    $('.wrapperrechts .h3-1 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h3p2').isInViewport()) {
    $('.wrapperrechts .h3-2 a').removeClass('slideout2')
    $('.wrapperrechts .h3-2 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h3-2 a').hasClass('slidein2') && $('.wrapperrechts .h3p1').isInViewport() || $('.wrapperrechts .h3p3').isInViewport()) {
    $('.wrapperrechts .h3-2 a').addClass('slideout2')
    $('.wrapperrechts .h3-2 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h3p3').isInViewport()) {
    $('.wrapperrechts .h3-3 a').removeClass('slideout2')
    $('.wrapperrechts .h3-3 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h3-3 a').hasClass('slidein2') && $('.wrapperrechts .h3p2').isInViewport() || $('.wrapperrechts .h4p1').isInViewport()) {
    $('.wrapperrechts .h3-3 a').addClass('slideout2')
    $('.wrapperrechts .h3-3 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h4p1').isInViewport()) {
    $('.wrapperrechts .h4-1 a').removeClass('slideout2')
    $('.wrapperrechts .h4-1 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h4-1 a').hasClass('slidein2') && $('.wrapperrechts .h3p3').isInViewport() || $('.wrapperrechts .h4p2').isInViewport()) {
    $('.wrapperrechts .h4-1 a').addClass('slideout2')
    $('.wrapperrechts .h4-1 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h4p2').isInViewport()) {
    $('.wrapperrechts .h4-2 img').removeClass('slideout2')
    $('.wrapperrechts .h4-2 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h4-2 img').hasClass('slidein2') && $('.wrapperrechts .h4p1').isInViewport() || $('.wrapperrechts .h4p3').isInViewport()) {
    $('.wrapperrechts .h4-2 img').addClass('slideout2')
    $('.wrapperrechts .h4-2 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h4p3').isInViewport()) {
    $('.wrapperrechts .h4-3 img').removeClass('slideout2')
    $('.wrapperrechts .h4-3 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h4-3 img').hasClass('slidein2') && $('.wrapperrechts .h4p2').isInViewport() || $('.wrapperrechts .h5p1').isInViewport()) {
    $('.wrapperrechts .h4-3 img').addClass('slideout2')
    $('.wrapperrechts .h4-3 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h5p1').isInViewport()) {
    $('.wrapperrechts .h5-1 img').removeClass('slideout2')
    $('.wrapperrechts .h5-1 img').addClass('slidein2')
  } else if ($('.wrapperrechts .h5-1 img').hasClass('slidein2') && $('.wrapperrechts .h4p3').isInViewport() || $('.wrapperrechts .h5p2').isInViewport()) {
    $('.wrapperrechts .h5-1 img').addClass('slideout2')
    $('.wrapperrechts .h5-1 img').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h5p2').isInViewport()) {
    $('.wrapperrechts .h5-2 a').removeClass('slideout2')
    $('.wrapperrechts .h5-2 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h5-2 a').hasClass('slidein2') && $('.wrapperrechts .h5p1').isInViewport() || $('.wrapperrechts .h5p3').isInViewport()) {
    $('.wrapperrechts .h5-2 a').addClass('slideout2')
    $('.wrapperrechts .h5-2 a').removeClass('slidein2')
  }

})

$(window).on('resize scroll', function () {

  if ($('.wrapperrechts .h5p3').isInViewport()) {
    $('.wrapperrechts .h5-3 a').removeClass('slideout2')
    $('.wrapperrechts .h5-3 a').addClass('slidein2')
  } else if ($('.wrapperrechts .h5-3 a').hasClass('slidein2') && $('.wrapperrechts .h5p2').isInViewport()) {
    $('.wrapperrechts .h5-3 a').addClass('slideout2')
    $('.wrapperrechts .h5-3 a').removeClass('slidein2')
  }

})

// $(window).on('resize scroll', function () {

//   if ($('.wrapperrechts .h6p1').isInViewport()) {
//     $('.wrapperrechts .h6-1 a').removeClass('slideout2')
//     $('.wrapperrechts .h6-1 a').addClass('slidein2')
//   } else if ($('.wrapperrechts .h6-1 a').hasClass('slidein2') && $('.wrapperrechts .h5p3').isInViewport() || $('.wrapperrechts .h6p2').isInViewport()) {
//     $('.wrapperrechts .h6-1 a').addClass('slideout2')
//     $('.wrapperrechts .h6-1 a').removeClass('slidein2')
//   }

// })






// klikfuncties navigatie
$('.s1, .s2, .s3, .s4, .s5, .s6, .hrechts p').click(function (event) {
  event.preventDefault();

  $('.wrapperrechts').animate().css({
    'width': '85vw',
    'z-index': '200',
    'opacity': '1',
    'overflow': 'visible'

  });

  $('.wrapperlinks').animate().css({
    'width': '15vw',
    'z-index': '100',
    'background': '#272727',
    'overflow': 'hidden'
  });

  $('.showandhide').animate().css({
    'opacity': '0',
  });

  $('.showandhide-rechts').animate().css({
    'opacity': '1',
  });


  $('.navigatie').animate().css({
    'right': 'calc(85vw - 260px)',
  });
  $('.wrapperrechts').removeClass('closed');
  $('.wrapperlinks').addClass('closed');

})

$('.b1, .b2, .b3, .b4, .b5, .b6, .hlinks p').click(function (event) {
  event.preventDefault();

  $('.wrapperrechts').animate().css({
    'width': '15vw',
    'z-index': '100',
    'opacity': '0',
    'overflow': 'hidden'
  });

  $('.wrapperlinks').animate().css({
    'width': '85vw',
    'z-index': '200',
    'overflow': 'visible'
  });

  $('.showandhide').animate().css({
    'opacity': '1',
  });

  $('.navigatie').animate().css({
    'right': 'calc(15vw - 260px)',
  });
  $('.wrapperrechts').addClass('closed');
  $('.wrapperlinks').removeClass('closed');

})

$('.s1').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h1r").offset().top
      }, 2000);
    }, 1000)

})

$('.s2').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h2r").offset().top
      }, 2000);
    }, 1000)

})

$('.s3').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h3r").offset().top
      }, 2000);
    }, 1000)

})

$('.s4').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h4r").offset().top
      }, 2000);
    }, 1000)

})

$('.s5').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h5r").offset().top
      }, 2000);
    }, 1000)

})

$('.s6').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h6r").offset().top
      }, 2000);
    }, 1000)

})

$('.b1').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h1l").offset().top
      }, 2000);
    }, 1000)

})

$('.b2').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h2l").offset().top
      }, 2000);
    }, 1000)

})

$('.b3').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h3l").offset().top
      }, 2000);
    }, 1000)

})

$('.b4').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h4l").offset().top
      }, 2000);
    }, 1000)

})

$('.b5').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h5l").offset().top
      }, 2000);
    }, 1000)

})

$('.b6').click(function (event) {
  event.preventDefault();

  setTimeout(
    function () {
      $('html, body').animate({
        scrollTop: $(".h6l").offset().top
      }, 2000);
    }, 1000)

})



$('.f1').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h1l").offset().top
  }, 2000);

})

$('.f2').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h2l").offset().top
  }, 2000);

})

$('.f3').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h3l").offset().top
  }, 2000);

})

$('.f4').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h4l").offset().top
  }, 2000);

})

$('.f5').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h5l").offset().top
  }, 2000);

})

$('.f6').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h6l").offset().top
  }, 2000);

})



$('.r1').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h1r").offset().top
  }, 2000);

})

$('.r2').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h2r").offset().top
  }, 2000);

})

$('.r3').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h3r").offset().top
  }, 2000);

})

$('.r4').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h4r").offset().top
  }, 2000);

})

$('.r5').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h5r").offset().top
  }, 2000);

})

$('.r6').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $(".h6r").offset().top
  }, 2000);

})



// grafiek parallax
$('.h1-4').parallaxie({
  speed: 0.8,
  size: '70%',
  "pos_x": '20%',
});



$('.num').counterUp({ delay: 10, time: 4000 })

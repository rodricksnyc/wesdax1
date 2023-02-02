$(document).ready(function () {



  $('.NavItem').click(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var navItem = $(this),
    allNavItems = $('.NavItem'),
    activeClass = 'NavItem--is-active';

    allNavItems.removeClass(activeClass);
    navItem.addClass(activeClass);

    var type = $(this).data('type');
    $('.option').addClass('hidden');
    $('.option[data-type="'+type+'"]').removeClass('hidden');

  })


  $('.option[data-type="topics"]').addClass('hidden').show();
  $('.option[data-type="data"]').addClass('hidden').show();
  $('.option[data-type="marks"]').addClass('hidden').show();
  $('.option[data-type="stats"]').addClass('hidden').show();






  //hover for dropdown items in main navbar

  var $dropdown = $(".navbar-nav .nav-item");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";

  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          var $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          var $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });


  var dropdownButton = $(".btn-group .dropdown-menu")

  dropdownButton.on('mouseleave', function() {

    dropdownButton.removeClass('show');

  })


  //levels

  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');

      /* JUST ADD HERE CLASS .ACTIVE */
      $this.removeClass("activeState");

      $this.next().slideUp(350);
    }
    else {
      $this.parent().parent().find('li .inner').removeClass('show');

      if($this.hasClass('parent')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED */

        $this.parents(".accordion").find(".toggle").removeClass("activeState");

      }

      else if($this.hasClass('child')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child1").removeClass("activeState");

      }

      else if($this.hasClass('child')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child2").removeClass("activeState");

      }

      else if($this.hasClass('child')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child3").removeClass("activeState");

      }

      else if($this.hasClass('child')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child4").removeClass("activeState");

      }

      else if($this.hasClass('child')){

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child5").removeClass("activeState");

      }

      else

      {

        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD OF CHILD */
        $this.parents(".accordion").find(".toggle.child6").removeClass("activeState");

      }

      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');

      /* JUST ADD HERE CLASS .ACTIVE */
      $this.addClass("activeState");
      $this.addClass("minus-sign");
      $this.next().slideToggle(350);
    }
  });


  //changing colors in projects accordion

  $(".panel-body .accordions .panel .panel-header").click(function (){
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      setTimeout(function() {
        $(".panel-body .accordions .panel .panel-header").addClass('lighterBlue');
        $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue');
      },400)

      console.log("blahhhhh")
    }
    else {
      $(".panel-body .accordions .panel .panel-header").addClass('darkerBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      console.log("2blahhhhh")
    }

  });

  $('#accordion .panel .panel-header').click(function() {
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      console.log("3blahhhhh")
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue')
      setTimeout(function() {
        $('.nested').removeClass('show')
      },400)
    }

    else if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && !$('.nested').hasClass('show'))  {

      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
    }
  })


  //change html in navbar


  if($('body').hasClass('analysis')) {
    $('#navbarDropdownMenuAnalysis .down').html('Analysis on Demand');
    $('.down:after').css('content' , 'none ');
  }


  //projects slider

  if($('body').hasClass('initial')) {
    $( "#slideOutLeft" ).css('left', '0')
  }

  if($('body').hasClass('initial')) {
    $('#slideOutLeft .projects').hide()

  }

  else {
    $('#slideOutLeft .projects').show();
    $('#slideOutLeft .selectProject').hide()
  }


  $('.projects').on('mouseenter', function() {
    $('.projects').css('cursor', 'grab')
  })

  $('.projects').on('mouseleave', function() {
    $('.projects').css('cursor', 'pointer')
  })



  $(window).on('load',function(){
    if($('body').hasClass('initial')) {
      $('#myModal').modal('show');

    }
  });

  $('.listOptions').click(function() {

    $('.backdropShadow').fadeOut();
    $( "#slideOutLeft" ).animate({
      left: "-400",
    }, 800, function() {

    });
  })

  $('.close-project').click(function(e) {
    e.stopPropagation()
    $('.backdropShadow').fadeOut();
    $( "#slideOutLeft" ).animate({
      left: "-400",
    }, 800, function() {

    });

    $('#slideOutRight').css('z-index', '10')
  })


  $('.projects').click(function() {

    $('.backdropShadow').fadeIn()
    $( "#slideOutLeft" ).animate({
      left: "0",
    }, 800, function() {

    });

    $('#slideOutRight').css('z-index', '1')
  });


  //zip case slider

  $('#one').on('click', function() {
    $('.backdropShadow').fadeIn()
    $( "#slideOutRight" ).addClass('showSlideOut')

  })


  $('#close').on('click', function() {
    $('.backdropShadow').fadeOut()
    $( "#slideOutRight" ).removeClass('showSlideOut')

  })


  //levels

  var one = 1
  var two = 2
  var three = 3
  var four = 4
  var five = 5
  var six = 6
  var seven = 7

  $("input[name=allLevels]").click(function() {
    if (this.checked) {
      // $('.filter-attr-list').find('li').remove();
      $("input[name=levels]").prop('checked', true).change();
      $("input[name=allLevels]").prop('checked', true).change();
    }

    else  {
      $("input[name=levels]").prop('checked', false).change();
      $("input[name=allLevels]").prop('checked', false).change();
    }
  });

  $("input[name=levels]").change(function() {

    $("input[name=allLevels]").prop('checked', false);
  });


  $('.level1 .addToList').click(function() {
    if($(this).attr('value')) {


      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)

      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val();

      // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level2 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val();

      // $('.levelTopicAreaNumber').html(two + '1')

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level3 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level4 .addToList').click(function() {
    if($(this).attr('value')) {
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level5 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level6 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level7 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })


  // $('.continuousHeader').click(function() {
  //   $('.levels-accordion').addClass('animated fadeOut')
  //   setTimeout(function() {
  //   $('.levels-accordion').hide()
  //   $('.levels-accordion').removeClass('animated fadeOut')
  // },700)
  //     setTimeout(function() {
  //   $('.levels-accordion2').addClass('animated fadeIn').show();
  //
  // },700);
  //
  // // $('p.levels-accordion').addClass('animated fadeOut')
  // // $('plevels-accordion2').addClass('animated fadeOut')
  //
  // setTimeout(function() {
  // $('p.levels-accordion').html('Analysis Variables')
  // $('p.levels-accordion2').html('Table Variables')
  // // $('p.levels-accordion').removeClass('animated fadeOut')
  // // $('p.levels-accordion2').removeClass('animated fadeOut')
  // // $('p.levels-accordion').addClass('animated fadeIn')
  // // $('p.levels-accordion2').addClass('animated fadeIn')
  // },700)
  // })
  //
  //
  // $('.categoricalHeader').click(function() {
  //   $('.levels-accordion2').addClass('animated fadeOut')
  //   setTimeout(function() {
  //   $('.levels-accordion2').hide()
  //     $('.levels-accordion2').removeClass('animated fadeOut')
  // },700)
  //     setTimeout(function() {
  //   $('.levels-accordion').addClass('animated fadeIn').show();
  //
  // },700);
  //
  // // $('p.levels-accordion').addClass('animated fadeOut')
  // // $('p.levels-accordion2').addClass('animated fadeOut')
  //
  // setTimeout(function() {
  // $('p.levels-accordion2').html('Table Variables')
  // $('p.levels-accordion').html('Analysis Variables')
  // // $('p.levels-accordion2').removeClass('animated fadeOut')
  // // $('p.levels-accordion').removeClass('animated fadeOut')
  // // $('p.levels-accordion2').addClass('animated fadeIn')
  // // $('p.levels-accordion').addClass('animated fadeIn')
  // },700)
  // })

  //scale logo

  var resizeText = function () {

    var preferredFontSize = 56; // %
    var preferredSize = 1024 * 768;

    var currentSize = $(window).width() * $(window).height();
    var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
    var newFontSize = preferredFontSize * scalePercentage + 2;
    $(".navbar-brand img").css("width", newFontSize + '%');
  };


  var resizeText2 = function () {

    var preferredFontSize2 = 50; // %
    var preferredSize2 = 1024 * 768;

    var currentSize2 = $(window).width() * $(window).height();
    var scalePercentage2 = Math.sqrt(currentSize2) / Math.sqrt(preferredSize2);
    var newFontSize2 = preferredFontSize2 * scalePercentage2 + 2;
    // $(".nav-item a").css("font-size", newFontSize2 + '%');
    // $(".nav-item .down").css("font-size", newFontSize2 + '%');
  }



  $(window).bind('resize', function() {
    resizeText2();
  }).trigger('resize');



  $(window).bind('resize', function() {
    resizeText();
  }).trigger('resize');



  // $(":checkbox[data-year]").on('change' , function() {
  //
  //   var years = $(this).attr('id');
  //
  //   $('.filter-attr-list').append(`<li class="results selected"> ${years} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);
  //
  //
  //
  // });




  // $(":checkbox[data-year]").change(function (e) {
  //
  //   var saveYear = $('.saveYear')
  //   $('.filter-attr-list').empty().append(saveYear)
  //
  //   $('.years :checkbox:checked').each(function (ind, ele) {
  //
  //     if (this.checked == true)  {
  //       var value = $(ele).attr('id')
  //       $('.filter-attr-list').append(`<li data-year="${value}" class="results selected">${value} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);
  //     }
  //
  //
  //
  //
  //     // $('.filter-attr-list').on('click', '.removeTag', function() {
  //     //   console.log("hi there")
  //     //   $(this).closest('.results').remove();
  //     //
  //     //     if ($(`li[data-year="${value}"  == $(this).find(':checkbox').attr(data-year="${value}"]`)) {
  //     //       console.log("geibuibuewgbuiegriuhgeriuhewfhiuewfihu")
  //     //
  //     //         $(`:checkbox[data-year="${value}"]`).prop('checked', false);
  //     //       // $(":checkbox[data-year]").prop('checked', false);
  //     //     }
  //     //
  //     //   // $('.years :checkbox:checked').prop('checked', false);
  //     //
  //     // })
  //
  //   });
  //
  // })


  //years checkboxes

  $('.grayLayer').css('top', $('.lightBlueBack').height())
  console.log($('.lightBlueBack').height())

  $(".years :checkbox").change(function(){

    // var saveYear = $('.saveYear')
    // $('.filter-attr-list').empty().append(saveYear)
    console.log(this.value)
    if($(this).prop("checked")==true){
      $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
    }

    else{
      $(".filter-attr-list li[data-year=" + this.value + "]").remove()
    };

    $(".filter-attr-list [data-year]").on('click',  function(){
      $("input[name=addall]").prop('checked', false);
      var yearName = $(this).attr("data-year");

      $(".years :checkbox[value=" + $(this).attr("data-year") + "]").prop("checked",false);

      $(this).remove();
    });
  });



  $("input[name=addall]").click(function() {
    if (this.checked) {
      $('.filter-attr-list').find('li').remove();
      $("input[name=year]").prop('checked', true).change();
      $("input[name=addall]").prop('checked', true).change();
    }

    else  {
      $("input[name=year]").prop('checked', false).change();
      $("input[name=addall]").prop('checked', false).change();
    }
  });



  // function updateAllChecked() {
  //   $('.years :checkbox:checked').each(function (ind, ele) {
  //
  //
  //   if($(this).prop("checked")== true) {
  //
  //     $('.filter-attr-list').find('li').remove();
  //
  //     // $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
  //
  //   }
  //
  //   else {
  //     $(".filter-attr-list li[data-year=" + this.value + "]").remove()
  //   }
  //
  //   });
  //
  //
  // }
  //
  // updateAllChecked()

  $("input[name=year]").change(function() {

    $("input[name=addall]").prop('checked', false);
  });


  //levels topics checkboxes

//clicking on add as row

  $('.addRow').on('click', function() {



    var obj = $(this).closest('.levels').find('input[data-level]').val()

    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);


    if($(this).closest('.levels').find('input[data-level]').prop("checked")==true) {

      $('#rowTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${obj}' value='${obj}' class='custom-control-input' id='${obj}'><label class='custom-control-label' for='${obj}'><p class='blue'>${obj}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel'></i></div></div>`);


      // $('#rowTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${obj}' value='${obj}' class='custom-control-input' id='${obj}'><label class='custom-control-label' for='${obj}'><p class='blue'>${obj}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel'></i></div></div>");


       $(this).closest('.levels').find('input[data-level]').parent().hide()


    }



  })



$('#rowTopic').on('click', '.removeLevel' , function() {

  var el = $(this).closest('.levels').find('input[data-level]').val()

  console.log(el)

  //
  // if($(this).closest('.levels').find('input[data-level =" '+el+' "]').val() == $('.addRow').closest('.levels').find('input[data-level =" '+el+' "]').val()) {
  //
  //   console.log('fuck')


    $('.addRow').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')
    $('.addRow').closest('.levels').find(`input[data-level='${el}']`).prop("checked", false);

//   if ($('#rowTopic .levels').length == 0) {
//
//   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() - 500)
// }

// }

    $(this).closest('.levels').remove();


})






//clicking on add as column

  $('.addColumn').on('click', function() {

    // var obj = $(this).parent().parent().siblings().val();

    var obj = $(this).closest('.levels').find('input[data-level]').val()

    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);

    // var checkedBox = $(this).parent().parent().siblings().closest(':checkbox[data-level]').prop("checked", true);
    // var thisCheckBox = $(this).parent().parent().siblings().closest(':checkbox[data-level]')

    if($(this).closest('.levels').find('input[data-level]').prop("checked")==true) {

      $('#columnTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${obj}' value='${obj}' class='custom-control-input' id='${obj}'><label class='custom-control-label' for='${obj}'><p class='blue'>${obj}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel'></i></div></div>`);

       // $(this).closest('.levels').fadeOut()
       $(this).closest('.levels').find('input[data-level]').parent().hide()


    }

//     if ($('#rowTopic .levels').length > 0) {
//
// $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 100);
//
//
// }

  })



$('#columnTopic').on('click', '.removeLevel' , function() {

  var el = $(this).closest('.levels').find('input[data-level]').val()

  console.log(el)

  //
  // if($(this).closest('.levels').find('input[data-level =" '+el+' "]').val() == $('.addRow').closest('.levels').find('input[data-level =" '+el+' "]').val()) {
  //
  //   console.log('fuck')


    $('.addColumn').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')
    $('.addColumn').closest('.levels').find(`input[data-level='${el}']`).prop("checked", false);

//   if ($('#rowTopic .levels').length == 0) {
//
//   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() - 500)
// }

// }

    $(this).closest('.levels').remove();


})




  // });



  // $('.removeLevel').click(function() {
  //   var obj = $(this).parent().parent().siblings().val();
  //   var checkedBox = $(this).parent().parent().siblings().closest(':checkbox[data-level]').prop("checked", false);
  //
  //
  //
  //   // $(obj).attr("checked","checked")
  //
  //   // var checkboxValue = $(this).parent().parent().siblings().find("input[data-level='" + obj.value + "']")
  //   // console.log(checkboxValue)
  //
  //   if($(checkedBox).prop("checked")==false){
  //
  //     // $('#rowTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${obj}' value='${obj.value}' class='custom-control-input id='${obj}'><label class='custom-control-label' for='${obj}'><p class='blue'>${obj}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel'></i></div></div>`);
  //
  //     $(checkedBox).parent().fadeIn()
  //
  //   }
  //
  //   if ($('#rowTopic .levels').length > 3) {
  //     console.log("more than")
  //
  //     $('#rowTopic .levels').slice(3).hide();
  //     $('.whiteBar').fadeIn()
  //
  //   }
  //
  // });


  //
  // $("#topicLevels :checkbox").change(function(){
  //
  //   console.log(this.value)
  //   if($(this).prop("checked")==true){
  //
  //
  //     $('#rowTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${this.value}' value='${this.value}' class='custom-control-input id='${this.value}'><label class='custom-control-label' for='${this.value}'><p class='blue'>${this.value}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt'></i></div></div>`);
  //
  //   // $('#rowTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='" + this.value + "' value='" + this.value + "' class='custom-control-input id='" + this.value + "'><label class='custom-control-label' for='" + this.value + "'><p class='blue'>" + this.value + "</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt'></i></div></div>");
  //
  //     $(this).parent().fadeOut()
  //
  //   }
  //
  //
  //   if ($('#rowTopic .levels').length > 3) {
  //   console.log("more than")
  //
  //     $('#rowTopic .levels').slice(3).hide();
  //     $('.whiteBar').fadeIn()
  //
  //   }
  //
  //
  //
  //
  //
  // });



  //move zip case tab on window shrink

  $(window).scroll(function () {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 100) {
      $('#one').css({
        top: "92px"
      })

    } else {
      $('#one').css({
        top: "270px"
      })

    }
  });

  // drag and drop functionality

  if (
    !document.querySelectorAll
    ||
    !('draggable' in document.createElement('span'))
    ||
    window.opera
  ) {
    return;
  }

  //get the collection of draggable items and add their draggable attribute
  for (var items = document.querySelectorAll('[data-draggable="item"]'),
  len = items.length,
  i = 0; i < len; i ++
)
{
  items[i].setAttribute('draggable', 'true');
}

//variable for storing the dragging item reference
//this will avoid the need to define any transfer data
//which means that the elements don't need to have IDs
var item = null;

document.addEventListener("drag", function(event) {

}, false);



// //dragstart event to initiate mouse dragging
document.addEventListener('dragstart', function(e) {



  $('#rowTopic').animate({

    minHeight: 20,
    paddingTop:25

  },100);

  $('#columnTopic').animate({

    minHeight: 80,
    paddingTop:25

  },100);




  item = e.target;

  // console.log('moving first time')



  //we don't need the transfer data, but we have to define something
  //otherwise the drop action won't work at all in firefox
  //most browsers support the proper mime-type syntax, eg. "text/plain"
  //but we have to use this incorrect syntax for the benefit of IE10+
  e.dataTransfer.setData('text', '');





}, false);

// dragover event to allow the drag by preventing its default
// ie. the default action of an element is not to allow dragging
document.addEventListener('dragover', function(e) {


  console.log('moving second time')


  if(item) {
    e.preventDefault();

      // $(item).closest('.levels').find('input[data-level]').prop("checked", true);



  }
}, false);

//drop event to allow the element to be dropped into valid targets
document.addEventListener('drop', function(e) {



  console.log('moving third time')

  $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 90);


  // $('.levels').addClass('dragged')


  //if this element is a drop target, move the item here
  //then prevent default to allow the action (same as dragover)
  if(e.target.getAttribute('data-draggable') == 'target') {




    console.log('moving fourth time')

    var thing = e.target.appendChild(item);

    //     function handle_drop_patient(event, ui) {
    //          $(this).append( $(ui.draggable).clone().css({'float':'left','display':'block'}) );
    //          $(ui.draggable).remove();
    //     }
    //     $(thing).droppable({
    //     classes: {
    //       'ui-droppable': 'highlight'
    //     },
    //     drop: handle_drop_patient
    // });
    //
    //       $(thing).addClass( "ui-state-highlight" )

    //
    //   if ($('#rowTopic .levels').length > 3) {
    //
    //   $(thing).draggable().css("position", "absolute");
    //
    //
    // }


    // $('#rowTopic').on('mouseenter' , function() {
    //   alert("kubfwubih89figu43")

    // })





    if ($(thing).children('.deleteOptions').length == 0 ) {

      $('<div class="deleteOptions"><i class="fal fa-expand-arrows"></i>&nbsp;&nbsp;<i class="fal fa-trash-alt removeDrag"></i></div>').appendTo(thing)
    }
    //
    // else {
    //
    //   $(thing).detach($('<div class="deleteOptions"><i class="fal fa-expand-arrows"></i>&nbsp;&nbsp;<i class="fal fa-trash-alt"></i></div>'))
    // }


            $('#rowTopic').on('click', '.removeDrag' , function() {

                // $('#topicLevels').append($(thing).closest('.levels'))

                  // $(this).closest('.levels').remove();
                  $(this).closest('.levels').appendTo('#topicLevels')

                // $(this).closest('#rowTopic [data-draggable]').remove();

              // $(this).closest('.levels').find('input[data-level]').prop("checked", false);


              if ($('#rowTopic .levels').length == 0) {
                $('#rowTopic').animate({

                  minHeight: 0,
                  paddingTop:0

                },100);
              }



            })




    if ($('#rowTopic .levels').length > 3) {
      console.log("more than")


      // $('#rowTopic .levels').slice(3).hide();
      $('.whiteBar').fadeIn()


      // $('#rowTopic').animate({
      //
      //   minHeight: 80,
      //   maxHeight:80,
      //   height:80
      //
      // },1000);


    }

    //
    // if  ($('#topicLevels .levels').length > 3) {
    //     console.log("less than")
    //
    //     $('#rowTopic .levels').show();
    //   }



    //     some(function(e) {
    //       let elements = document.elementsFromPoint(e.clientX, event.clientY);
    //       let target = elements.find(e => e.matches('.whiteBar'));
    //       target.dispatchEvent(new DragEvent('drop', {
    //
    //       }));
    //     })
    // some()


    e.preventDefault();
  }
}, false);


//dragend event to clean-up after drop or abort
//which fires whether or not the drop target was valid
document.addEventListener('dragend', function(e) {

  console.log('moving fifth time')


  item = null;





}, false);



// $('.listArea #topicLevels .levels .deleteOptions').hide()


//
// if ($('#rowTopic .levels').length < 1) {
//
//   console.log("fucker")
//   $('#rowTopic').animate({
//
//     minHeight: "0px"},
//
//   );
//
// }



$('#one').keyup(function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) {

    $("#slideOutRight").addClass('showSlideOut');

  }
});





//make the nav item have active line on current page

var path = window.location.href;
$('.navbar-nav li a').each(function() {
  if (this.href === path) {
    $(this).addClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});

//make the nav item children have active line on current page

$('.navbar-nav li .dropdown-menu .dropdown-item').each(function() {
  if (this.href === path) {
    $(this).parent().siblings('a').addClass('active');
    // $(this).removeClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});


})

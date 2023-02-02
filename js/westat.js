
var queries = [
    {
        context: 'mobile',
        match: function () {
            //console.log('Mobile callback. Maybe hook up some tel: numbers?');
          /*  $('body').addClass('w-mobile');*/
        },
        unmatch: function () {
            // We're leaving mobile.
            $('body').removeClass('w-mobile');
        }
    },
    {
        context: 'phone-portrait',
        match: function () {
            //console.log('entering phone portrait');
            $('body').addClass('w-phone-portrait');
            $('[id^="ps-mobile-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
            $('[id^="ps-phone-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
        },
        unmatch: function () {
            //console.log('leaving phone portrait!');
            $('body').removeClass('w-phone-portrait');
        }

    },
    {
        context: 'phone-landscape',
        match: function () {
            //console.log('entering phone landscape.');
            $('body').addClass('w-phone-landscape');
            $('[id^="ps-mobile-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
            $('[id^="ps-phone-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
        },
        unmatch: function () {
            //console.log('leaving phone landscape!');
            $('body').removeClass('w-phone-landscape');
            $('[id^="ps-phone-accordion"]').accordion("destroy");
        }

    },
    {
        context: 'tablet-portrait',
        match: function () {
            //console.log('entering tablet portrait.');
            $('body').addClass('w-tablet-portrait');
            $('[id^="ps-mobile-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
            $('[id^="ps-portrait-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head" });
        },
        unmatch: function () {
            //console.log('leaving tablet portrait!');
            $('body').removeClass('w-tablet-portrait');
            $('[id^="ps-portrait-accordion"]').accordion("destroy");
            $('[id^="ps-mobile-accordion"]').accordion("destroy");
        }

    },
    {
        context: 'tablet-landscape',
        match: function () {
            //console.log('entering tablet landscape.');
            //location.once().reload(false);
            $('body').addClass('w-tablet-landscape');
        },
        unmatch: function () {
            //console.log('leaving tablet landscape!');
            //location.once().reload(false);
            $('body').removeClass('w-tablet-landscape');
        }

    },
    {
        context: 'desktop',
        match: function () {
            //console.log('entering desktop.');
            $('body').addClass('w-desktop');
        },
        unmatch: function () {
            //console.log('leaving desktop!');
            $('body').removeClass('w-desktop');
        }

    }
];
// Go!
MQ.init(queries);

(function ($) {
    $('#skip-link a').click(function () { $('#w-content').attr('tabIndex', -1).focus(); })
    $('[id^="ps-accordion"]').accordion({ collapsible: true, header: ".ps-accordion-head", heightStyle: "content" });

    // Collapsible messages list
    //hide message_body after the first one
    $(".message_list .message_body:gt(0)").hide();
    //hide message li after the 5th
    $(".message_list li:gt(4)").hide();
    //toggle message_body
    $(".message_head").click(function () {
        $(this).next(".message_body").slideToggle(500)
        return false;
    });
    //collapse all messages
    $(".collpase_all_message").click(function () {
        $(".message_body").slideUp(500)
        return false;
    });
    //show all messages
    $(".show_all_message").click(function () {
        $(this).hide()
        $(".show_recent_only").show()
        $(".message_list li:gt(4)").slideDown()
        return false;
    });
    //show recent messages only
    $(".show_recent_only").click(function () {
        $(this).hide()
        $(".show_all_message").show()
        $(".message_list li:gt(4)").slideUp()
        return false;
    });

    // Menu toggle
    $('#top-navigation .menu').slicknav({
        prependTo: '#top-navigation .block-content',
        'closedSymbol': '',
        'openedSymbol': ''
    });

    // left Menu toggle
    $('#left-navigation .menu').slicknav({
        prependTo: '#left-navigation .block-content',
        'closedSymbol': '',
        'openedSymbol': '',
    });

    // Sticky menu
    $(window).load(function () {
        var leaderHeight = $('body.ps-sticky-head #w-leaderboard').height();
        var headHeight = $('body.ps-sticky-head #w-header').height();
        var navHeight = $('body.ps-sticky-head #w-navigation').height();
        if ($('#w-leaderboard').length) {
            $('body.ps-sticky-head #w-header').css({ 'top': parseInt(leaderHeight) + 'px' });
            $('body.ps-sticky-head #w-navigation').css({ 'top': parseInt(leaderHeight + headHeight) + 'px' });
        } else {
            $('body.ps-sticky-head #w-header').css({ 'top': 0 });
            $('body.ps-sticky-head #w-navigation').css({ 'top': parseInt(headHeight) + 'px' });
        }
        if ($('#w-highlight').length) {
            $('body.ps-sticky-head #w-highlight').css({ 'margin-top': parseInt(headHeight + navHeight) + 'px' });
        } else {
            $('body.ps-sticky-head #w-content').css({ 'margin-top': parseInt(headHeight + navHeight) + 'px' });
        }
    });
    $(window).resize(function () {
        var leaderHeight = $('body.ps-sticky-head #w-leaderboard').height();
        var headHeight = $('body.ps-sticky-head #w-header').height();
        var navHeight = $('body.ps-sticky-head #w-navigation').height();
        if ($('#w-leaderboard').length) {
            $('body.ps-sticky-head #w-header').css({ 'top': parseInt(leaderHeight) + 'px' });
            $('body.ps-sticky-head #w-navigation').css({ 'top': parseInt(leaderHeight + headHeight) + 'px' });
        } else {
            $('body.ps-sticky-head #w-header').css({ 'top': 0 });
            $('body.ps-sticky-head #w-navigation').css({ 'top': parseInt(headHeight) + 'px' });
        }
        if ($('#w-highlight').length) {
            $('body.ps-sticky-head #w-highlight').css({ 'margin-top': parseInt(headHeight + navHeight) + 'px' });
        } else {
            $('body.ps-sticky-head #w-content').css({ 'margin-top': parseInt(headHeight + navHeight) + 'px' });
        }
    })

    // Unified height
    $(window).load(function () {
        var maxHeight = 0;
        $('.region').find('.ps-uniHeight').each(function () {
            if ($(this).parents('body').hasClass('w-tablet-landscape') || $(this).parents('body').hasClass('w-desktop')) {
                var height = $(this).height();
                if (height > maxHeight) { maxHeight = height; }
            } else {
                maxHeight = 'auto';
            }
        });
        $('.ps-uniHeight').css('height', maxHeight);
    });
    $(window).resize(function () {
        var maxHeight = 0;
        $('.region').find('.ps-uniHeight').each(function () {
            if ($(this).parents('body').hasClass('w-tablet-landscape') || $(this).parents('body').hasClass('w-desktop')) {
                var height = $(this).height();
                if (height > maxHeight) { maxHeight = height; }
            } else {
                maxHeight = 'auto';
            }
        });
        $('.ps-uniHeight').css('height', maxHeight);
    });

    // Unified height
    $(window).load(function () {
        var maxHeight = 0;
        $('.block').find('.ps-uniHeightB').each(function () {
            if ($(this).parents('body').hasClass('w-tablet-landscape') || $(this).parents('body').hasClass('w-desktop')) {
                var height = $(this).height();
                if (height > maxHeight) { maxHeight = height; }
            } else {
                maxHeight = 'auto';
            }
        });
        $('.ps-uniHeightB').css('height', maxHeight);
    });
    $(window).resize(function () {
        var maxHeight = 0;
        $('.block').find('.ps-uniHeightB').each(function () {
            if ($(this).parents('body').hasClass('w-tablet-landscape') || $(this).parents('body').hasClass('w-desktop')) {
                var height = $(this).height();
                if (height > maxHeight) { maxHeight = height; }
            } else {
                maxHeight = 'auto';
            }
        });
        $('.ps-uniHeightB').css('height', maxHeight);
    });

    $(window).load(function () {
        var cookieValue = $.cookie("leftNav");
        if ($('body').hasClass('w-tablet-portrait')) {
            if ($('#w-content').hasClass('leftnav_open')) {
                $('#w-content').removeClass('leftnav_open').addClass('leftnav_closed');

            } else {
                $('#w-content:not(.leftnav_closed)').addClass('leftnav_closed');

            }
        } else {
            if (cookieValue) {
                $('#w-content').addClass(cookieValue);
                if ((cookieValue == "leftnav_closed") && ($("#nav-side ul li").length > 0)){
                    $('.projects_btn').css({ "transform": "scaleX(-1)" });
                    $('#mainContent').css({ "padding-left": "42px" });
                    $('#breadcrumb').css({ "padding-left": "42px" });
                }
            } else {
                $('#w-content').addClass('leftnav_open')

            }
        }
        //$('.w-tablet-landscape #Tabs .block-content, .w-tablet-portrait #Tabs .block-content, .w-phone-landscape #Tabs .block-content').css({'height':parseInt($('#Tabs').parent('.block-content').height()) + 'px'});
        //$('.w-desktop #Tabs .block-content').css({'height':'auto'});
    });
    $(window).resize(function () {
        var cookieValue = $.cookie("leftNav");
        if ($('body').hasClass('w-tablet-portrait')) {
            if ($('#w-content').hasClass('leftnav_open')) {
                $('#w-content').removeClass('leftnav_open').addClass('leftnav_closed');
                //$.cookie("leftNav", 'leftnav_open', { expires: 5, path: '/' });
                if (location.protocol == 'https:') {
                    // page is secure
                    $.cookie("leftNav", 'leftnav_open', { expires: 5, path: '/', secure: true });
                } else {
                    $.cookie("leftNav", 'leftnav_open', { expires: 5, path: '/' });
                }
            } else {
                $('#w-content:not(.leftnav_closed)').addClass('leftnav_closed');
            }
        } else {
            if (cookieValue) {
                if ($('#w-content').hasClass('leftnav_open')) {
                    $('#w-content').removeClass('leftnav_open').addClass(cookieValue);
                } else if ($('#w-content').hasClass('leftnav_closed')) {
                    $('#w-content').removeClass('leftnav_closed').addClass(cookieValue);
                }
            } else {
                $('#w-content').addClass('leftnav_open')
            }
        }
        //$('.w-tablet-landscape #Tabs .block-content, .w-tablet-portrait #Tabs .block-content, .w-phone-landscape #Tabs .block-content').css({'height':parseInt($('#Tabs').parent('.block-content').height()) + 'px'});
        //$('.w-desktop #Tabs .block-content').css({'height':'auto'});
    });

    // table even rows
    $("tr:odd").addClass("odd");

    //public data mode changes for menu collapse buttons
    $('.projects_btn').click(function (e) {
        e.preventDefault();
        if ($('#w-content').hasClass('leftnav_open')) {
            //Menu Closed
            if ($('body').hasClass('w-tablet-portrait')) {
                $('#w-content').removeClass('leftnav_open').addClass('leftnav_closed');
            } else {
                $('#w-content').removeClass('leftnav_open').addClass('leftnav_closed');
            }
            $(this).removeClass('projects_closed').addClass('projects_open');
            if (location.protocol == 'https:') {
                // page is secure
                $.cookie("leftNav", 'leftnav_closed', { expires: 5, path: '/', secure: true });
            } else {
                $.cookie("leftNav", 'leftnav_closed', { expires: 5, path: '/' });
            }
           // $.cookie("leftNav", 'leftnav_closed', { expires: 5, path: '/' });
            $('.projects_btn').css({ "transform": "scaleX(-1)" });
            /*$('.projects_btn').css({ "margin-left": "10px" });*/
            $('#mainContent').css({ "padding-left": "42px" });
            $('#breadcrumb').css({ "padding-left": "42px" });

        } else {
            //Menu Opened
            $('#w-content').stop().animate({ left: "0" }, 200).addClass('leftnav_open').removeClass('leftnav_closed');
            if (location.protocol == 'https:') {
                // page is secure
                $.cookie("leftNav", 'leftnav_open', { expires: 5, path: '/', secure: true });
            } else {
                $.cookie("leftNav", 'leftnav_open', { expires: 5, path: '/' });
            }
            $('.projects_btn').css({ "transform": "" });
            $('#mainContent').css({ "padding-left": "0px" });
            $('#breadcrumb').css({ "padding-left": "0px" });
            /*$('.projects_btn').css({ "margin-left": "10px" });*/
        }
    });

    $('.tabsToggle').click(function (e) {
        e.preventDefault();
        $(this).next('.block-content')
            //.toggle()
            .toggleClass('actContent');
        $(this).toggleClass('act');
        $(this).find('span').toggleClass('hidden');
        //$('.queryBody').toggleClass('queryBodyFull');
    });
    $('.activeTab a').click(function (e) { e.preventDefault(); });
    $('.activeTab').parents('li').addClass('activeList');

    // Add expand active-menu parents
    setTimeout(function () {
        $('#left-navigation .slicknav_parent.slicknav_collapsed li.active').parents('.slicknav_parent')
        .removeClass('slicknav_collapsed').addClass('slicknav_open')
        .find('ul').removeClass('slicknav_hidden').show();
    }, 100);
    // Tabs
    //    $('#w-tab').responsiveTabs({
    //        rotate: false,
    //        startCollapsed: 'accordion',
    //        collapsible: 'accordion',
    //        setHash: true,
    //	//animation: 'slide',
    //        //disabled: [3,4]
    //    });

    // Add your own jQuery here

    // Your own jquery ends here
})(jQuery);

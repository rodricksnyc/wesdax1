var constants = {
   'ShowDetail': 'Show Detail',
   'HideDetail': 'Hide Detail',
   'LoadingContent': 'Loading...'
};

function checkListAction(chkSelAllID, chklstID) {
    //alert("checkListAction");
    //on loading if all the checkboxes are checked, the select all checkbox should be also checked
    var chkall = $('#' + chkSelAllID);
//    alert(chkall);
//    alert(chklstID);
    var allLen = $('input[type=checkbox][id*=' + chklstID + ']').length;
//    alert(allLen);
    var checkedLen = $('input[type=checkbox][id*=' + chklstID + ']:checked').length;
//    alert(checkedLen);
    if (allLen == checkedLen) {
        chkall.attr('checked', true);
    }

   //attach the click event handler
    $('#' + chkSelAllID).click(function () {
        var flag = $('#' + chkSelAllID);
        $('input[type=checkbox][id*=' + chklstID + ']').attr('checked', flag.is(':checked'));
    });

    //$("[id^='" + chklstID + "'][type=checkbox]").click(function (e) {
    $("[id^='" + chklstID + "'][type=checkbox]").live('click', function (event) {
        var chkall = $('#' + chkSelAllID);

        if (!$(this)[0].checked) {
            chkall.attr('checked', false);
        } else {
            var allLen = $('input[type=checkbox][id*=' + chklstID + ']').length;
            var checkedLen = $('input[type=checkbox][id*=' + chklstID + ']:checked').length;
            if (allLen == checkedLen) {
                chkall.attr('checked', true);
            }
        }

    });
}

//================================
function applyCheckboxStyle() {
    var chkcls = "styledCheckbox";
    var wrapcls = "styledCheckboxWrap";
    var checkedcls = "wrapChecked";
    var wrapDisabledcls = "wrapDisabled";

    $("span input[type='checkbox']").each(function () {
        //if checkbox doesn't have the standard class, add it
        if (!$(this).hasClass(chkcls)) {
            $(this).addClass(chkcls);
        }

        if ($(this).is(':checked')) {
            $(this).parent().addClass(checkedcls);
            //alert("disabled?");
            if ($(this).is(':disabled')) {
                //take care of the disable checkboxes
                //alert("disabled");
                if (!$(this).parent().hasClass(wrapcls)) {
                    //alert("add wrapcls=" + wrapcls);
                    $(this).parent().addClass(wrapcls);
                }
                $(this).parent().removeClass(checkedcls);
                $(this).parent().addClass("wrapCheckedDisabled");
            } else {
                $(this).parent().removeClass(wrapDisabledcls);
                $(this).parent().removeClass("wrapCheckedDisabled");
            }

        }
        else {
            $(this).parent().removeClass(checkedcls);
            if ($(this).is(':disabled')) {
                $(this).parent().addClass(wrapDisabledcls);
            }
            else {
                $(this).parent().removeClass(wrapDisabledcls);
            }
        }


    });

    $("span.styledCheckboxWrap label").each(function () {
        var lblcls = "checkboxLabel";
        if (!$(this).hasClass(lblcls)) {
            $(this).addClass(lblcls);
        }
    });

    $('ul.checklist li span.styledCheckboxWrap').each(function () {
        $(this).find('input:checkbox:first').addClass("styledCheckbox");
        $(this).find('label').addClass("checkboxLabel");
    });
}

//===================================
function setCheckboxDisplay(selallid, myid) {
    var chk = $('#' + selallid);
    if (chk.is(':checked')) {
        $("[id^=" + myid + "][type=checkbox]").attr('checked', true);
    }
    else {
        $("[id^=" + myid + "][type=checkbox]").attr('checked', false);
    }

//    var chk = $('#' + myid);
//    var span = chk.parent();
//    if (chk.is(':checked')) {
//        span.addClass("wrapChecked");
//    }
//    else {
//        span.removeClass("wrapChecked");
//    }
}

//====================================
////===================================
//function setRadioDisplay(myid) {
//    var chk = $('#' + myid);
//    var span = chk.parent();
//    if (chk.is(':checked')) {
//        span.addClass("wrapRadioChecked");
//    }
//    else {
//        span.removeClass("wrapRadioChecked");
//    }
//}

//====================================
function showFieldDetailPopUp(fldID) {

    $.ajax({
        type: "POST",
        url: "CallbackDatasource.aspx/GetFieldDetailInfoContent",
        data: "{FieldID: " + fldID + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            $("#dialog-field").html(msg.d);
            showDialog_fld("field message");
        },
        error: function (x, status, error) {
                            //alert(x);
                            alert(status);
                            //alert(error);
        }
    });

}
//====================================
function showDefinitionPopUp(defTitle, defID) {
    var tagName = 'p'

   // $('#dialog-def').dialog("close");
    if (defID == 'def_poplimit_age') {tagName = 'div';}
    $('#dialog-def').load("Definition.aspx" + " #" + defID + " " + tagName);
    if (defID == 'def_cellestimates') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 600, 675);
    }
    else if (defID == 'def_geo_geoarea') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 250, 350);
    }
    else if (defID == 'def_geo_addtopic') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 250, 350);
    }
    else if (defID == 'def_precisionmeasures') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 450, 500);
    }
    else if (defID == 'def_stattests') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 450, 500);
    }
    else if (defID == 'def_statoptions') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 350, 400);
    }
    else if (defID == 'def_stdrates') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 350, 400);
    }
    else if (defID == 'def_datayear') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 350, 400);
    }
    else if (defID == 'def_datayear_addtopic') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 350, 400);
    }
    else if (defID == 'def_getdata') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 450, 500);
    }
    else if (defID == 'def_poplimit') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 250, 350);
    }
    else if (defID == 'def_poplimit_age') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 450, 500);
    }
    else if (defID == 'def_topicmode') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 250, 350);
    }
    else if (defID == 'def_restrictedvar') {
        ShowPopup_def(defTitle, $('#dialog-def').html(), 350, 400);
    }
    else {
        ShowPopup_def(defTitle, $('#dialog-def').html());
    }
    return false;
    //alert("content=" + $('#dialog-def').html());

//    var postData = ""; // you can send any data to ajax file.
//    $.ajax({
//        type: "POST",
//        url: "Project/Definition.aspx" + " #" + defID + " p",
//        data: postData,
//        success: function (msg) {
//            ShowPopup_def(defTitle, msg.d);
//        },
//        error: function (request, status, error) { alert(request.responseText); }
////        error: function (errmsg) {
////            //return errmsg;
////            alert("errmsg=" + errmsg);
////        }
//    });

}
//=====================================
function showDialog_fld(contentMsg) {

    $("#dialog-field").dialog({
        resizable: true,
        autoOpen: false,
        height: 300,
        modal: false,
        buttons: {
            "Close": {
                title: contentMsg, text: 'Close', click: function () {
                    $(this).dialog("close");
                }
            }

        }
    });

    $('#dialog-field').dialog('open');

} //===================================
function ShowPopup_def(titleMsg, contentMsg, winHeight, winWidth) {
    // setting default value
    winHeight = winHeight || "200";
    winWidth = winWidth || "350";

    //assign content to the div html
    $('#dialog-def').attr("title", titleMsg);
 //   $('#dialog-def').dialog('option', 'title', titleMsg);


    //define the dialog UI
    $("#dialog-def").dialog({
        resizable: true,
        autoOpen: false,
        height: winHeight,
        width: winWidth,
        modal: false,
        title: titleMsg,
        buttons: {
            "Close": {
                title: titleMsg, text: 'Close', click: function () {
                    $(this).dialog("close");
                }
            }
        },
        open: function () {
            //set the focus on the first tabbable control in the UI modal pop-up
            $(".ui-dialog:visible:last :tabbable:first").focus();

            //alert("go top");
            var el = $(this);
            var scrollY = 0;            // this.scrollHeight;
            el.scrollTop(scrollY);
            //            el.parent().queue(function (next) {
            //                el.scrollTop(scrollY);
            //                next();
            //            });
        }
    });

    //launch the dialog UI
    $('#dialog-def').dialog('open');
}

//==================================
function radioListAction() {

    $('input[type=radio]').each(function () {
        $(this).click(function () {
            //alert("hello");
            var myid = $(this).attr('id');

            setRadioDisplay(myid);

        });

    });
}


//================================
function applyRadioStyle() {

//    $("span.styledRadioWrap input[type='radio']").each(function () {
//        if ($(this).is(':checked')) {
//            $(this).parent().addClass("wrapRadioChecked");
//            if ($(this).is(':disabled')) {
//                $(this).parent().removeClass("wrapRadioChecked");
//                $(this).parent().addClass("wrapRadioCheckedDisabled");
//            }
//            else {
//                $(this).parent().removeClass("wrapRadioCheckedDisabled");
//                $(this).parent().removeClass("wrapRadioDisabled");
//                $(this).parent().addClass("wrapRadioChecked");
//            }

//        }
//        else {
//            $(this).parent().removeClass("wrapRadioChecked");
//            if ($(this).is(':disabled')) {
//                $(this).parent().addClass("wrapRadioDisabled");
//            }
//            else {
//                $(this).parent().removeClass("wrapRadioDisabled");
//            }
//        }

//        var lblcls = "styledRadio";
//        if (!$(this).hasClass(lblcls)) {
//            $(this).addClass(lblcls);
//        }
//    });

//    $("span.styledRadioWrap label").each(function () {
//        var lblcls = "radioLabel";
//        if (!$(this).hasClass(lblcls)) {
//            $(this).addClass(lblcls);
//        }
//    });

}

//===================================
function setRadioDisplay(myid) {

//    var span = $('#' + myid).parent();
//    //get current radio group name
//    var name = $('#' + myid).attr('name');
//    //alert("name=" + name);
//    if ($('#' + myid).is(':checked')) {
//        //alert("checked");
//        span.addClass("wrapRadioChecked");
//        //remove the checked class from other radio wrappers
//        $('input[name=' + name + ']:radio').each(function () {
//            if (!($(this).is(':checked'))) {
//                if ($(this).attr("id") != myid) {
//                    var span2 = $(this).parent();
//                    span2.removeClass("wrapRadioChecked");
//                }
//            }
//        });
//    }
//    else {
//        //alert("not checked");
//        //no need to radio button uncheck


//    }

}

//==================================
//function applyPageLayout() {
//    //make the right column the same height as left column if the left is longer
//    var lcol_h = $("div#leftcolumn").height();
//    var rcol_h = $("#contentwrapper").height();
//    var offset = 0;
//    //alert("left col h=" + lcol_h + "; right col h=" + rcol_h);
//    if (lcol_h > rcol_h) {
//        //make it a little longer in case
//        lcol_h += offset;
//        $("div#contentwrapper").css("height", lcol_h + 'px');

//    }

//    //make the branding section's width equal to the content's one
//    $(window).on('resize', function () {
//        var win = $(this); //this = window
//        var content_w = $("div#content").width();

//        $("div#branding").css("width", content_w);
//        $("div#prefoot").css("width", content_w);
//        $("div#siteinfo").css("width", content_w);
//        // if (win.height() >= 820) { /* ... */ }
//        // if (win.width() >= 1280) { /* ... */ }
//    });
//}

//===================================
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

//===================================
function GetTreeNode(anchor, setID, locID, setType, pageUrl) {
    //alert("call function GetTreeNode");
    var myShowText = constants.ShowDetail;
    var myHideText = constants.HideDetail;
    var myLoadText = constants.LoadingContent;
    var det = $(anchor).parent().siblings('div')
    var span = $(anchor).parent();
    if (det.length > 0) {
        span.toggleClass("opened");
        det.slideToggle();
        //just return because the data is already retrieved and no need to ajax data from server again
        return;
    }
    span.addClass("opened");
    var nodeText = $(anchor).html();
    $(anchor).html(myLoadText);

    $(anchor).ajaxStart(function () {
        //alert("start ajax");
        $(this).css("visibility", "visible");
        $(this).animate({
            opacity: 1
        }, 0);
    }).ajaxStop(function () {
        $(this).animate({
            //opacity: 0
        }, 2000);
    });

    $.ajax({
        type: "POST",
        url: "CallbackDatasource.aspx/GetSetFieldList",
        data: "{UIScreenID: " + getParameterByName('ScreenID') + ",ParentSetID: '" + setID + "',SetType: '" + setType + "',PageUrl:'" + pageUrl + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            $(anchor).html(nodeText);
            $('#' + locID).removeClass('loading');
            $('#' + locID).parent().parent().append(msg.d);
            //msg.d.prependTo($('#' + locID).parent().parent());
            //$('#' + locID).parent().parent().find('div').slideDown();
            $('#' + locID).parent().parent().find('div:first').slideDown('slow');
        },
        error: function (ojb, errmsg) {
            alert("errmsg=" + errmsg);
        }
    });
}

//=========================================================
function GetFieldDetail(anchor, fldID, locID) {
    var myShowText = "<%=Westat.Olap.Helper.Constants.UI.ShowDetail %>";
    var myHideText = "<%=Westat.Olap.Helper.Constants.UI.HideDetail %>";
    var myLoadText = "<%=Westat.Olap.Helper.Constants.UI.LoadingContent %>";
    if ($(anchor).siblings('div.myDetail').length > 0) {
        var det = $(anchor).siblings('div.myDetail');
        det.toggle();
        if (det.is(":visible")) {
            $(anchor).html(myHideText);
        }
        else {
            $(anchor).html(myShowText);
        }
        return;
    }

    //var seeMore = $(anchor).html();
    $(anchor).html(myLoadText);

    $(anchor).ajaxStart(function () {
        $(this).css("visibility", "visible");
        $(this).animate({
            opacity: 1
        }, 0);
    }).ajaxStop(function () {
        $(this).animate({
            //opacity: 0
        }, 2000);
    });

   $.ajax({
        type: "POST",
        url: "CallbackDatasource.aspx/GetFieldDetailInfoContent",
        data: "{FieldID: " + fldID + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            $(anchor).html(myHideText);
            $('#' + locID).removeClass('loading');
            $('#' + locID).append("<div class='myDetail'>" + msg.d + "</div>");
        },
        error: function (ojb, errmsg) {
            alert("errmsg=" + errmsg);
        }
    });
}

//=========================================================
function getValueOfRadioList(clientid) {
    var radiolist = document.getElementById(clientid);

    var radio = radiolist.getElementsByTagName("input");

    for (var x = 0; x < radio.length; x++) {
        if (radio[x].type === "radio" && radio[x].checked) {
            return radio[x].value;
        }
    }

    return;
}

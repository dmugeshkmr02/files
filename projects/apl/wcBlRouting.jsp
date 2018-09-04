<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="org.json.*" %>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="no-js ie ie6" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js ie ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="no-js ie ie9" lang="en"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta http-equiv="Cache-control" content="no-cache"/>
<title class="lang-headtitle">General Trace</title>
<!-- Favicon and apple touch icons-->
<link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="images/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon/favicon.ico"/>
<link rel="stylesheet" type="text/css" href="style/custom.css"/>
<!--[if IE]>
<script type="text/javascript" src="javascript/html5shiv.js"></script>
<![endif]-->
<script type="text/javascript" src="javascript/jquery-1.11.1.js"></script>
<script type="text/javascript" src="javascript/global.js"></script>
<script type="text/javascript" src="javascript/respond.min.js"></script>

<script>
var WORDS_ZH = { 
    "track" 			: "货物追踪",
	"trace" 			: "货物追踪", 
	"bl" 				: "提单",
	"containernumber" 	: "集装箱号",
    "routing" 			: "航程",
    "ok" 				: "好",
    "summary" 			: "概要",
	"bkgdetails" 		: "订舱详情",
	"hazmat"			: "危险物品",
	"bldetails"			: "提单详情",
	"blclearance" 		: "提单清关",
	"origin"            : "起运地",
	"loadport"          : "装货港",
	"dischargeport"     : "卸货港",
	"destination"       : "目的地",
    "number"            : "号",
    "vv"                : "船名航次",
    "arrival"           : "到达",
    "departure"         : "出发",
    "actual"            : "实际",
    "estimate"          : "预计",
    "plan"              : "计划",
    "load"              : "装载",
    "discharge"         : "卸载",
    "containers"        : "集装箱",
    "type"              : "类型",
    "size"              : "尺寸",
    "height"            : "高度",
    "vgmweight"         : "集装箱总重量",
    "submission_date"   : "提交日期",
    "status"            : "状态",
    "location"          : "所在地",
    "lastfreedaydemurragequote"      : "滞期费",
    "notetext1"         : "apl_tracking@apl.com",
    "na"                : "-",
    "relayport1"        : "中转港1",
    "relayport2"        : "中转港2",
    "relayport3"        : "中转港3",
    "total"             : "总数",
    "headtitle" 		: "一般跟踪",
    "jan"               : "一月",
    "feb"               : "二月",
    "mar"               : "三月",
    "apr"               : "四月",
    "may"               : "五月",
    "jun"               : "六月",
    "jul"               : "七月",
    "aug"               : "八月",
    "sep"               : "九月",
    "oct"               : "十月",
    "nov"               : "十一月",
    "dec"               : "十二月"


};

var WORDS_EN = { 
    "track"				: "Track", 
	"trace" 			: "Trace",
	"bl" 				: "BL",
	"containernumber" 	: "Container Number(s)",
    "routing"			: "Routing",
	"ok" 				: "OK",
	"summary"			: "Summary",
	"bkgdetails"		: "BKG Details",
	"hazmat"			: "Hazmat",
	"bldetails" 		: "BL Details",
	"blclearance" 		: "BL Clearance",
	"origin"            : "Origin",
	"loadport"          : "Load Port",
	"dischargeport"     : "Discharge Port",
	"destination"       : "Destination",
    "number"            : "Number",
    "vv"                : "VV",
    "arrival"           : "Arrival",
    "departure"         : "Departure",
    "actual"            : "Actual",
    "estimate"          : "Estimate",
    "plan"              : "Plan",
    "load"              : "Load",
    "discharge"         : "Discharge",
    "containers"        : "Container(s)",
    "type"              : "Type",
    "size"              : "Size",
    "height"            : "Height",
    "vgmweight"         : "VGM Weight",
    "submission_date"   : "Submission Date",
    "status"            : "Status",
    "location"          : "Location",
    "lastfreedaydemurragequote"     : "Last Free Day / Demurrage Quote",
    "notetext1"         : "apl_tracking@apl.com",
    "na"                : "-",
    "relayport1"        : "Relay Port 1",
    "relayport2"        : "Relay Port 2",
    "relayport3"        : "Relay Port 3",
    "total"             : "Total",
    "headtitle" 		: "General Trace",
    "jan"               : "Jan",
    "feb"               : "Feb",
    "mar"               : "Mar",
    "apr"               : "Apr",
    "may"               : "May",
    "jun"               : "Jun",
    "jul"               : "Jul",
    "aug"               : "Aug",
    "sep"               : "Sep",
    "oct"               : "Oct",
    "nov"               : "Nov",
    "dec"               : "Dec"

};

window.onload = initialize;

var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function initialize() {   
    var glang = getQueryString('lang');
    loadsLanguage(glang);
    if(glang=='EN'){
        $('#ZH').removeClass("active");
        $('#EN').addClass("active");
    }else{
        $('#EN').removeClass("active");
        $('#ZH').addClass("active");
    }
}

function loadsLanguage(lang){
    /*fills all the a tags with class=lang pattern*/ 
    $('a[class^="lang"]').each(function(){
        var temp = new Array();
            temp = (this.className).split(" ");
        var LangVar = temp[0].replace('lang-','');
        var Text = window["WORDS_"+lang][LangVar];
        $(this).find('span').eq(1).text(Text);   
    });  

    /*fills all the h2 tags with class=lang pattern*/ 
    $('h2[class^="lang"]').each(function(){
        var temp = new Array();
            temp = (this.className).split(" ");
        var LangVar = temp[0].replace('lang-','');
        var Text = window["WORDS_"+lang][LangVar];
        $(this).text(Text);   
    });

    /*fills all the h3 tags with class=lang pattern*/ 
    $('h3[class^="lang"]').each(function(){
        var temp = new Array();
            temp = (this.className).split(" ");
        var LangVar = temp[0].replace('lang-','');
        var Text = window["WORDS_"+lang][LangVar];
        $(this).text(Text);   
    });

   /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
        var temp = new Array();
            temp = (this.className).split(" ");
        var LangVar = temp[0].replace('lang-','');
        var Text = window["WORDS_"+lang][LangVar];
        $(this).text(Text);   
    });
    
    /*fills all the title tags with class=lang pattern*/ 
	$('title').each(function(){
		var temp = new Array();
			temp = (this.className).split(" ");
		var LangVar = temp[0].replace('lang-','');
		var Text = window["WORDS_"+lang][LangVar];
		$(this).text(Text);   
	});

}
</script>

</head>
<body id="top">
    <!--[if lte IE 9]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	<![endif]-->
	<main>
		<!-- .header -->
		<header class="header innerheader">
            <div class="bottomshadow">
                <div class="container posRel">
                    <div class="back_logo">
                        <a href="index.html" class="back_btn ripple"><span class="icon back_icon"></span></a>
                        <div class="inner_logo"><figure><img src="images/logo.png" alt="APL Logo" title="APL Logo" /></figure></div>
                    </div>
                    <h1><span class="lang-routing">Routing</span></h1>
                </div>
            </div>
            <div class="blmenu_box fL">
                <div class="container">
                    <h3 class="h2_title pTB05 fw400"><span class="lang-bl fw300">BL</span> / <span class="lang-containernumber fw300">Container Number(s)</span>
                        <div class="language_picker">
                            <a href="javascript:void(0);" id="ZH" class="active" onclick="loadsLanguage('ZH');">中文</a><span> | </span><a href="javascript:void(0);" id ="EN" onclick="loadsLanguage('EN')">English</a>
                        </div>
                    </h3>
                    <div class="clear"></div>
                    <%
                   JSONObject obj = new JSONObject((request.getAttribute("strData")).toString());
                   String pageName = obj.getString("blnumber");

                   %>
                    <ul class="blmenu_ul">
                        <li>
                            <a href="javascript:void(0);" class="active"><%=pageName%></a>
                        </li>
                    </ul>
                    <div class="down_click_btn">
                        <a href="#containers" class="down_arrow_icon">
                            <span class=""><img src="images/down_arrow_icon.png" alt="" title="" /></span>
                        </a>
                        <a href="#top" class="up_arrow_icon" style="display:none;">
                            <span class=""><img src="images/up_arrow_icon.png" alt="" title="" /></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
		</header>
		<!-- /.header -->
        <!-- .main_container -->
        <section class="main_container inner_main_container">
            <div class="content">
                <div class="container">
                 <%
                   JSONArray arr = obj.getJSONArray("routingInfoList");
                   for (int i = 0; i < arr.length(); i++)
                   {
                       String route = arr.getJSONObject(i).getString("route");
                       String langRo = route.replaceAll("\\s+","").toLowerCase();
                       String langRoute = "lang-"+langRo+" fL title_span";
                   	String location = arr.getJSONObject(i).getString("location");
                   	String vessel = arr.getJSONObject(i).getString("vessel");
                   	String arriveDate = arr.getJSONObject(i).getString("arriveDate");
                   	String departDate = arr.getJSONObject(i).getString("departDate");
                   
                   %>
                    <div class="detail">
                        <h2 class="h2_title">
                            <span class="<%=langRoute%>"><%=route%></span> <span class="fL location_span"><span class="icon_map"><img src="images/map.png" alt="" title="" /><%=location%></span>
                        </h2>
                        <div class="detail_inner">
                            <p><span class="lang-vv name_span">VV</span> : <span class="lang-na"><%=vessel%></span></p>
                            <p>
                                <span class="wper50_span">
                                    <span class="lang-arrival name_span">Arrival</span> : <span><%=arriveDate%></span>
                                </span>
                                <span class="wper50_span">
                                    <span class="lang-departure name_span">Departure</span> : <span><%=departDate%></span>
                                </span>
                            </p>
                        </div>
                    </div>
					<%
                   }
                   %>
                    <div class="clear"></div>
                    <h3 class="h3_title fw600" id="containers"><span class="lang-containers">Container(s)</span><span class="fR"><span class="lang-total">Total</span> : </span></h3>
                    <!-- .detail Containers -->
                    <div class="detail">
                        <ul class="titleinfo_ul">
                            <li><span class="containericon_span"><img src="images/container_icon.png" alt="" title="" /></span></li>
                        </ul>
                        <p><span class="fL label_span"><span class="lang-vgmweight">VGM Weight</span> <span class="color_r">:</span></span> <span class="fL"></span></p>
                        <p><span class="fL label_span"><span class="lang-submission_date">Submission Date</span> <span class="color_r">:</span></span> <span class="fL"></span></p>
                        <p><span class="fL label_span"><span class="lang-status">Status</span> <span class="color_r">:</span></span> <span class="fL"></span></p>
                        <p><span class="fL label_span"><span class="lang-location">Location</span> <span class="color_r">:</span></span> <span class="fL"><a href="javascript:void(0);" class="link_a"></a></span></p>
                    </div>
                    <!-- /.detail Containers -->
                    <div class="clear"></div>
                    <div class="detail notes">
                        <p><span class="mR5">A=<span class="lang-actual">Actual</span></span><span class="mR5"><span class="red">E</span>=<span class="lang-estimate">Estimate</span></span><span class="mR5">P=<span class="lang-plan">Plan</span></span><span class="mR5">L=<span class="lang-load">Load</span></span><span class="">D=<span class="lang-discharge">Discharge</span></span></p>
                        <!--<p>
                            <span class="fs12"><a href="javascript:void(0);" class="link_a"><span class="lang-notetext1">apl_tracking@apl.com</span></a></span>
                        </p>--> 
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
        <!-- /.main_container -->
    </main>
<script type="text/javascript" src="javascript/jquery.materialripple.js"></script>
<script type="text/javascript">
	$(document).ready(function()
	{
		/*--------------// Material Ripple //-------------*/
		$('.ripple').materialripple();
	});

</script>
</body>
</html>
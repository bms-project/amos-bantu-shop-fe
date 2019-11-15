/*......................................................................................................................*/
// Mega Menu Columns
var selSearchCategoryDDVal = "";
$(document).ready(function() { 
	
	if($.uniform != undefined && $('.searchcategory').children().hasClass('selector' )){
			$.uniform.restore("select.searchCategoryDD");
		}
		
    var localeCheckSession = $.cookie('agilent_locale');	
	var sessionContents = {};
	switch(localeCheckSession){
		case "ja_JP":
			sessionContents.firstTitle = "セッションの期限が間もなく切れます";
			sessionContents.firstContent1 = "ログアウトされるまでの時間";
			sessionContents.firstContent2 = "アジレントアカウントのログイン状態を保持しますか?";
			sessionContents.firstButton1 = "いいえ、ログアウトする";
			sessionContents.firstButton2 = "はい、ログインしたままにする";
			sessionContents.Footer = "セキュリティを確保するため、アクティブでない状態が 30 分間続いた場合はログアウトします。";
			sessionContents.SecondTitle = "セッションの期限が切れました。";
			sessionContents.SecondContent1 = "アジレントアカウントにアクセスするには、再度ログインしてください。";
			sessionContents.SecondButton = "ログイン";
			sessionContents.specificClass = "jp_session";
			break;
		case "zh_CN":
			sessionContents.firstTitle = "您的会话即将失效";
			sessionContents.firstContent1 = "您将在以下时间后注销登录";
			sessionContents.firstContent2 = "是否需要使安捷伦账户保持登录状态？";
			sessionContents.firstButton1 = "不，我要注销登录";
			sessionContents.firstButton2 = "是，保持登录状态";
			sessionContents.Footer = "为确保安全，账户将在处于非活动状态 30 分钟后注销登录。";
			sessionContents.SecondTitle = "您的会话已过期。";
			sessionContents.SecondContent1 = "如需再次访问您的安捷伦账户，请重新登录。";
			sessionContents.SecondButton = "登录";
			sessionContents.specificClass = "ch_session";
			break;
		case "fr_FR":
			sessionContents.firstTitle = "Votre session est sur le point d’expirer";
			sessionContents.firstContent1 = "Vous serez déconnecté dans";
			sessionContents.firstContent2 = "Souhaitez-vous rester connecté sur votre compte Agilent ?";
			sessionContents.firstButton1 = "NON, ME DÉCONNECTER";
			sessionContents.firstButton2 = "OUI, RESTER CONNECTÉ";
			sessionContents.Footer = "À des fins de sécurité, nous vous déconnecterons après un délai de 30 minutes sans activité.";
			sessionContents.SecondTitle = "Votre session a expiré.";
			sessionContents.SecondContent1 = "Pour accéder à votre compte Agilent, veuillez vous reconnecter.";
			sessionContents.SecondButton = "s'identifier";
			sessionContents.specificClass = "fr_session";
			break;
		case "it_IT":
			sessionContents.firstTitle = "La sessione scadrà a breve";
			sessionContents.firstContent1 = "L'utente sarà disconnesso";
			sessionContents.firstContent2 = "Rimanere collegati all'account Agilent?";
			sessionContents.firstButton1 = "No, esci";
			sessionContents.firstButton2 = "Sì, rimani collegato";
			sessionContents.Footer = "Per motivi di sicurezza, l'utente sarà scollegato dopo 30 minuti di inattività.";
			sessionContents.SecondTitle = "La sessione è scaduta.";
			sessionContents.SecondContent1 = "Per accedere all'account Agilent, effettuare di nuovo l'accesso.";
			sessionContents.SecondButton = "Accesso";
			sessionContents.specificClass = "it_session";
			break;
		case "es_ES":
			sessionContents.firstTitle = "Su sesión está a punto de caducar";
			sessionContents.firstContent1 = "Su sesión se cerrará en";
			sessionContents.firstContent2 = "¿Desea permanecer conectado a su cuenta de Agilent?";
			sessionContents.firstButton1 = "NO, CERRAR SESIÓN";
			sessionContents.firstButton2 = "SÍ, MANTENER LA SESIÓN INICIADA";
			sessionContents.Footer = "Por su seguridad, cerraremos la sesión después de 30 minutos de inactividad.";
			sessionContents.SecondTitle = "Su sesión ha caducado.";
			sessionContents.SecondContent1 = "Vuelva a iniciar sesión para acceder a su cuenta de Agilent.";
			sessionContents.SecondButton = "iniciar session";
			sessionContents.specificClass = "es_session";
			break;
		case "de_DE":
			sessionContents.firstTitle = "Ihre Sitzung läuft in Kürze ab";
			sessionContents.firstContent1 = "Sie werden abgemeldet in";
			sessionContents.firstContent2 = "Möchten Sie in Ihrem Agilent Kundenkonto angemeldet bleiben?";
			sessionContents.firstButton1 = "NEIN, BITTE ABMELDEN";
			sessionContents.firstButton2 = "JA, ICH MÖCHTE ANGEMELDET BLEIBEN";
			sessionContents.Footer = "Zu Ihrer eigenen Sicherheit werden Sie nach 30 inaktiven Minuten abgemeldet.";
			sessionContents.SecondTitle = "Ihre Sitzung ist verlaufen.";
			sessionContents.SecondContent1 = "Bitte melden Sie sich erneut in Ihrem Agilent Kundenkonto an.";
			sessionContents.SecondButton = "Anmeldung";
			sessionContents.specificClass = "de_session";
			break;
		default:
			sessionContents.firstTitle = "Your session is about to expire";
			sessionContents.firstContent1 = "You will be logged out in";
			sessionContents.firstContent2 = "Would you like to stay logged into your Agilent Account?";
			sessionContents.firstButton1 = "NO, LOG ME OUT";
			sessionContents.firstButton2 = "YES, KEEP ME LOGGED IN";
			sessionContents.Footer = "For your security, we will log you out after 30 minutes of inactivity.";
			sessionContents.SecondTitle = "Your session has expired";
			sessionContents.SecondContent1 = "To access your  Agilent account, please log in again.";
			sessionContents.SecondButton = "LOGIN";
			sessionContents.specificClass = "en_session";
			break;
	}

    // number of columns
    var defaultNumCols = 5,    
    // get all nodes with class column-list. returns array
    container = $('.column-list'),
    listItem = 'li',
    listClass = 'col-fifth';
    var isCrossLab = false;
    // iterate every node matching to class column-list
    container.each(function() {
		if($(this).parent().parent().hasClass("mega-menu-title-desc-section")){
			defaultNumCols = 2;
		}else if($(this).parent(".crosslab").length) {
           //console.log("CrossLab reached");
           isCrossLab = true; 
           defaultNumCols = 4;
        }
        else {
            isCrossLab = false;
            defaultNumCols = 5;
            // DCWCS-876 - added below condition to set the group columns based on CTA
            var parentContainer = $(this).closest(".l2-mega-menu-container");
            var ctaMenuLengthForGroup = parentContainer.find(".mega-menu-cta-section ol").length;
            if (ctaMenuLengthForGroup > 0)
                defaultNumCols -= ctaMenuLengthForGroup;
        }


        var itemsPerCol = [];
        // get all nodes matching listItem ('li). Returns an array
        
        var tmpItems = $(this).find(listItem);
        var items = tmpItems;
        if(isCrossLab){
            items = tmpItems.slice(1);
        }

        var numCols = (items.length < defaultNumCols) ? items.length : defaultNumCols;
        var minItemsPerCol = Math.floor(items.length / numCols),
        difference = items.length - (minItemsPerCol * numCols);
        
        // compute number of items per column
        for (var i = 0; i < numCols; i++) {
            if (i < difference) {
                    itemsPerCol[i] = minItemsPerCol + 1;
            } else {
                    itemsPerCol[i] = minItemsPerCol;
            }
        }
        for (var h = 0; h < numCols; h++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            
            for (var j = 0; j < itemsPerCol[h]; j++) {
                var pointer = 0;
                for (var k = 0; k < h; k++) {
                        pointer += itemsPerCol[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
        
    
            
    });
	//$(".nav.next.column-list").css("display","block !important");


	/*Session Time-out across the application*/
	
	$("body").append('<div class="modal fade noPrint smallPopup '+sessionContents.specificClass+'" id="sessionExp-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><div id="rememberClose" class="closePopup" data-dismiss="modal" aria-hidden="true"></div><h3 class="modal-title">'+sessionContents.SecondTitle+'</h3></div><div class="modal-container"><div id="content"><p>'+sessionContents.SecondContent1+'</p><div class="ok-section"><button type="button" data-dismiss="modal" class="btn-stnd-medium expiredPop-login">'+sessionContents.SecondButton+'</button></div></div></div><div class="modal-footer"><p>'+sessionContents.Footer+'</p></div></div></div></div>');


	if($.cookie('loginFlag') == "true"){
				
		//$("body").append("<div id='sessionAbtExp' style='display:none;' title='Your session is about to expire'><div id='clockdiv'><div>you will be logged out in <span class='hours'>00</span>:<span class='dynaTime'>02:00</span></div><div class='accountContent'>Would you like to stay logged into your Agilent Account?</div><div class='expiringButton'> <a id='logMeOut' class='btn btn-primary'>NO, LOG ME OUT</a><a id='keepMeIn' class='btn btn-primary'>YES, KEEP ME LOGGED IN</a></div></div><div class='expiringFooter'><div>For your security, we will log you out after 30 minutes of inactivity.</div></div></div>");
		
		$("body").append("<div id='sessionAbtExp' class='"+sessionContents.specificClass+"' style='display:none;'><div id='clockdiv'><div>"+sessionContents.firstContent1+" <span class='hours'>00:</span><span class='dynaTime'>05:00</span></div><div class='accountContent'>"+sessionContents.firstContent2+"</div><div class='expiringButton'> <a id='logMeOut' class='btn btn-primary'>"+sessionContents.firstButton1+"</a><a id='keepMeIn' class='btn btn-primary'>"+sessionContents.firstButton2+"</a></div></div><div class='expiringFooter'><div>"+sessionContents.Footer+"</div></div></div>");
	
		//title='"+sessionContents.firstTitle+"'
		
		$.cookie("IsSession",'true',{ path: '/', domain: '.agilent.com'});
		
		//var _redirectUrl = 'index2.html'; // login URL
		var _redirectHandleFirst = null;_redirectHandleSecond = null;_eventCapturing = null;
		var _timeinFirst = "";_timeinSecond = "";
		var temp = 0;
		var mevnt_clientx = 0,mevnt_clienty = 0;
		_timeinFirst = 1499 + "000";

		function startTimer(){
			if($.cookie("IsSession") == "true"){
				//console.log('true')
				if($('#sessionAbtExp').parent().hasClass('ui-dialog')){
					$("#sessionAbtExp").dialog("close");
					clearInterval(_redirectHandleSecond);
					$.cookie("IsSession",'false',{ path: '/', domain: '.agilent.com'});
				}
				clearTimeout(_redirectHandleFirst);
				temp = 1;
			}else{
				//console.log('false')
				if(temp == 1){
					_redirectHandleFirst = setTimeout(function () {
						$("#sessionAbtExp").dialog({
							resizable: false,
							draggable: false,
							modal: true,
							dialogClass:"sessionAbtExp",
							position: { my: 'top', at: 'top+150' },
							title:sessionContents.firstTitle,
							closeOnEscape:false,
							height:356,
							width:560,
							open: function(event, ui) {
								$(document).off("mousemove mousedown keypress scroll mousewheel touchmove click");
								$(".ui-widget-overlay").css("z-index","2000000");
								var timerMatch = true;								
								function startTimer(duration, display) {
									var timer = duration, minutes, seconds;
									_redirectHandleSecond = setInterval(function () {
										minutes = parseInt(timer / 60, 10);
										seconds = parseInt(timer % 60, 10);

										minutes = minutes < 10 ? "0" + minutes : minutes;
										seconds = seconds < 10 ? "0" + seconds : seconds;

										display.textContent = minutes + ":" + seconds;
										
										if (--timer < 0 && timerMatch == true) {	
											timerMatch = false;												
											$.cookie("systemLogout",'true',{ path: '/', domain: '.agilent.com'});
											$("#sessionAbtExp").dialog("close");
											if($.cookie('IPU') == "True"){
												doLogout('?isHubSpanPage=true');
											}else{
												doLogout('?endURL='+encodeURIComponent(location.href));
											}
										}
										
									}, 1000);
								}

								var fiveMinutes = 60*5,
								display = document.querySelector('.dynaTime');
								startTimer(fiveMinutes, display);

								$('#sessionAbtExp #logMeOut').bind('click',function(){
									$.cookie("systemLogout",'false',{ path: '/', domain: '.agilent.com'});
									$.cookie("systemLogout",'false');
									if($.cookie('IPU') == "True"){
										doLogout('?isHubSpanPage=true');
									}else{
										doLogout();
									}
								});
								
								$('#sessionAbtExp #keepMeIn').bind('click',function(){
									location.reload();
								});
							},
							close: function(){
								
							}
						});
					},_timeinFirst)
					temp = 0;
				}
			}
			setTimeout(function(){ startTimer(); },1000)
		}
		
		function eventCapturedCall(){
			if($.cookie('systemLogout') != 'true'){
				$.cookie("IsSession",'true',{ path: '/', domain: '.agilent.com'});
				clearTimeout(_eventCapturing);
				_eventCapturing = setTimeout(function () {
					//console.log('event capture call and changing IsSession value')
					$.cookie("IsSession",'false',{ path: '/', domain: '.agilent.com'});
				},1000);
			}
		}
		
		if($.cookie('IPU') == "True"){
			$(document).on("click",function(e){
				eventCapturedCall(e);
			});
		}else{
			$(document).on("mousemove mousedown keypress scroll mousewheel touchmove",function(e){				
				//eventCapturedCall(e);
				if(e.type == "mousemove"){
					if(mevnt_clientx != e.clientX || mevnt_clienty != e.clientY){
						eventCapturedCall(e);
					}
					mevnt_clientx = e.clientX;
					mevnt_clienty = e.clientY;
				}else{
					eventCapturedCall(e);
				}
			});
		}
		eventCapturedCall();
		startTimer();
	}
	/*Session Time-out across the application*/
	
	
	/*second modal expired*/
	if($.cookie('systemLogout') == 'true'){
		if($.cookie('IPU') != "True"){
			if(location.pathname == "/common/login.jsp"){
				$( "div.containerPanel" ).before( '<div id="error-messages" class="alert alert-dismissable alert-danger">'+sessionContents.SecondTitle+'. '+ sessionContents.SecondContent1+'</div>' );
				$.cookie("systemLogout",'false',{ path: '/', domain: '.agilent.com'});
				$.cookie("systemLogout",'false');
			}else{
				$.cookie("systemLogout",'false',{ path: '/', domain: '.agilent.com'});
				$.cookie("systemLogout",'false');
				$('#sessionExp-modal').modal({
					backdrop: "static",
					keyboard: true
				});
			}
		}
	}
	/*second modal expired*/


});



/*......................................................................................................................*/
// Mega Menu See All  Columns
 
$(function() {
    
    // number of column
    var defaultNumCols = 4,    
    // get all nodes with class column-list. returns array
    container = $('#seeall'),
    listItem = 'li',
    listClass = 'col-fifth_sa',
    spaceClass = 'listspace',
    headerClass = 'nav-header';
  

     if($(window).width() < 996 && $(window).width() > 796 ){
    	//alert("window <996");
        defaultNumCols = 3;  
        } 

	if ($(window).width()< 796){
        // alert("window <796 ", $(window).width());
         defaultNumCols = 2;  
   	 }  

     
    // iterate every node matching to class column-list
//    container.each(function() {
        var itemsPerCol = [];
        // get all nodes matching listItem ('li). Returns an array
        
        var tmpItems = $(container).find(listItem);
        if(tmpItems.length === 0){
            return;
        }
        
        
        var startChar = '^';
        var items = [];       
        for(var index = 0; index < tmpItems.length; index++){
            if($(tmpItems[index]).text().charAt(0).toUpperCase() !== startChar){
                startChar = $(tmpItems[index]).text().charAt(0).toUpperCase();
                var newNode = $('<li >' + startChar + '</li>').addClass(headerClass);
             
                items.push(newNode);
            }
            items.push(tmpItems[index]);
        }  
      

          
        var numCols = (items.length < defaultNumCols) ? items.length : defaultNumCols;
        var minItemsPerCol = Math.floor(items.length / numCols),
        difference = items.length - (minItemsPerCol * numCols);
        
        var startIndex = 0;
        var itemsConsumed = 0;
        // compute number of items per column
        for (var i = 0; i < numCols && itemsConsumed <= items.length; i++) {
            if (i < difference) {
                    itemsPerCol[i] = minItemsPerCol + 1;
            } else {
                    itemsPerCol[i] = minItemsPerCol;
            }
            if($(items[startIndex + itemsPerCol[i] - 1]).hasClass(headerClass)){
                itemsPerCol[i]++;
            }
            startIndex = startIndex + itemsPerCol[i];
            itemsConsumed += itemsPerCol[i];            
        }
        numCols = itemsPerCol.length;
        
        
        for (var h = 0; h < numCols; h++) {
	var ipadclass = document.getElementsByClassName("col-fifth_sa");
	//alert(ipadclass);
            $(container).append($('<ul ></ul>').addClass(listClass). addClass(spaceClass));
		if(defaultNumCols ==2){
		ipadclass[h].style.maxWidth =50 + "%";
		}
		if(defaultNumCols ==3){
		ipadclass[h].style.maxWidth =33 + "%";
		}



          	for (var j = 0; j < itemsPerCol[h]; j++) {
                var pointer = 0;
                for (var k = 0; k < h; k++) {
                        pointer += itemsPerCol[k];
                }
                if((j+pointer) < items.length){
                    $(container).find('.' + listClass).last().append(items[j + pointer]);
                }
            }


        } 
 
    $("#seeall").css("visibility", "visible");

//    });


});

/*for genemoics pages */
$(document).ready(function() {
$(".nav.next.column-list").removeAttr("style");
});


/* for 13374 careerpage */

$(document).ready(function(){
   
if(window.location.href.indexOf("careers") > -1) {
//$('.globalHeader meta[name=viewport]').remove();
$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1');
}


var BrowserUpdateAlert=$.cookie("BrowserUpdateAlert");
if(BrowserUpdateAlert==null){
	var userBrowser = navigator.userAgent;
	if(userBrowser!=null && userBrowser.indexOf("compatible; MSIE 7.0")>-1){
					var currURL = location.href;
					var destURL = "//www.agilent.com/cs/ContentServer?pagename=Sapphire/BrowserUpdateAlert" + "&returnURL=" + encodeURIComponent(currURL);
					location.href = destURL;
	}
           
     }  
});

$(document).ready(function(){
//for home page carousel
	/*$('.homeContainer div[id^="bx-pager"] ul a').mousedown(function(e){
		console.log("hasdasi");
		var sliderLabel = e.target.firstChild.innerTEXT;
		console.log(sliderLabel);
		agilentEventTracker('eventTracker','Home Page Clicks','Carousel',sliderLabel,0)
	
	});*/

/************************************************************************
*********************G_O_O_G_L_E__A_N_A_L_Y_T_I_C_S**********************
*************************************************************************/	
/************* start of header navigation tracking**********************/

//for top nav primary links
//	$('.globalHeaderContainer ol.column-list ul.col-fifth li a').mousedown(function(e){
	$('.page.globalHeaderContainer .nav.next a').mousedown(function(e){

		try {
			var navLabel = e.target.innerText;
			var breadCrumbLevel1 = '';
			var breadCrumbLevel2 = '';
			var breadCrumbLabel = '';
			//var breadCrumbLevel1 = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[0];
			//var breadCrumbLevel2 = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[1];
			var closestParentObject = ''; 
			try{
				closestParentObject = e.target.closest('div.globalHeaderContainer');
			}catch (err){
				//fix for ie which does not recognize jquery closest
				closestParentObject = closestByClass(e.target, 'page globalHeaderContainer active' );
			}
			if (isMobil()){ /////////////// logic for womp
				breadCrumbLevel1 = e.target.dataset.sectionName.split(':')[1];
				breadCrumbLevel2 = e.target.dataset.sectionName.split(':')[2];
				if (typeof(breadCrumbLevel1) !== "undefined"){
					breadCrumbLabel = breadCrumbLevel1;
					if (typeof(breadCrumbLevel2) !== "undefined" && breadCrumbLevel2.toLowerCase() != navLabel.toLowerCase() ){
						breadCrumbLabel = breadCrumbLabel + ' > ' + breadCrumbLevel2;
					}	
				}
			}else{ /////////// logic for the desktop version
				breadCrumbLevel1 = $(closestParentObject).find('ol.globalHeaderBreadcrumb')[0].children[0];
				breadCrumbLevel2 = $(closestParentObject).find('ol.globalHeaderBreadcrumb')[0].children[1];
				if (typeof(breadCrumbLevel1) !== "undefined"){
				breadCrumbLabel = breadCrumbLevel1.innerText;
					if (typeof(breadCrumbLevel2) !== "undefined"){
						breadCrumbLabel = breadCrumbLabel + ' > ' + breadCrumbLevel2.innerText;
					}	
				}
			}	
			agilentEventTracker('eventTracker','Primary Navigation Clicks',breadCrumbLabel,navLabel,0);
		}catch(err){
			console.log(" error in header ga tracking : " + err.message);
		}
	});
	
	//for the see all products link only
		/*<sl:translate>*/var see_all_product = 'See All Products'/*</sl:translate>*/;
		$('a:contains('+see_all_product+')').mousedown(function(e){
		try {
				agilentEventTracker('eventTracker','Header Navigation Clicks','Products','See All Products',0)
			}catch (err){
				console.log(" error in footer contact info ga tracking : " + err.message);
			}
		});
/************* end of header navigation tracking**********************/

/************* start of footer navigation tracking**********************/
//for footer social bar
	$('#homeSocialBar.homeSocialBar.globalHeaderContainer a').mousedown(function(e){
		try {
			var navLabel = e.target.alt;
			if (typeof(navLabel) !== "undefined"){
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Connect with Agilent',navLabel,0)
			} 
		}catch (err){
			console.log(" error in footer social ga tracking : " + err.message);
		}		
	});
	
//for footer links
	$('footer[id="footer"] .footer-nav  .footer-links a').mousedown(function(e){
		try {
			var navLabel = e.target.innerText;
			var parentObject = '';
			try{
				parentObject = e.target.closest('div');
			} catch (err){
				parentObject = closestByClass(e.target, 'DIV' );
			}
			var evenActionLabel = '';
			if (typeof(parentObject) !== "undefined"){
				var className = 	$(parentObject).attr('class');
				if ((className.trim() == 'col-sixth')){
					evenActionLabel = $(parentObject).find('span')[0].innerText;
				}else if (className.trim() == 'legal') {
					evenActionLabel = 'Legal Notice';
				} else {
					evenActionLabel = 'default';
				}
			agilentEventTracker('eventTracker','Footer Navigation Clicks',evenActionLabel,navLabel,0)
			}	
		}catch (err){
			console.log(" error in footer navigation ga tracking : " + err.message);
		}
	});	
		
//for footer links ( contact us section)
	$('footer[id="footer"] .footer-nav  .agilent-details a').mousedown(function(e){
		try {
			var navLabel = e.target.innerText;
			agilentEventTracker('eventTracker','Footer Navigation Clicks','Contact Info',navLabel,0)
		}catch (err){
			console.log(" error in footer social ga tracking : " + err.message);
		}
	});
	

//CHECK IF THE PAGE LOADED WOMPMOBIL VERSION ////////////////////
	//var objValid= $("[id*='womp']").get();
	if ( isMobil()) {
	//for footer links ( contact us section) WOMPMOBIL VERSION 
		$('#footer .agilent-details a').mousedown(function(e){
			try {
				var navLabel = e.target.innerText;
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Contact Info',navLabel,0)
			}catch (err){
				console.log(" error in footer contact info ga tracking : " + err.message);
			}
		});
		
	//for footer links ( legal notice section) WOMPMOBIL VERSION
		$('#footer .legal a').mousedown(function(e){
			try {
				var navLabel = e.target.innerText;
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Legal Notice',navLabel,0)
			}catch (err){
				console.log(" error in footer legal ga tracking : " + err.message);
			}
		});	
	}

//END OF WOMPMOBIL VERSION 
/************* end of footer navigation tracking**********************/

})

/*for  datalayer event push*/
function agilentEventTracker (eventVal, eventCatVal , eventActVal, eventLblVal , eventValVal){
	
	if (typeof dataLayer === 'undefined') {
		dataLayer = [{ 'event':eventVal, 'eventCat': eventCatVal, 'eventAct':eventActVal, 'eventLbl': eventLblVal, 'eventVal':eventValVal  }]
	}
	else {
		dataLayer.push({'event':eventVal, 'eventCat': eventCatVal, 'eventAct':eventActVal, 'eventLbl': eventLblVal, 'eventVal':eventValVal });
	}
}	

/*utility function*/
/**
 * Get the closest element of a given element by class
 */
var closestByClass = function(el, clazz) {
    // Traverse the DOM up with a while loop
	if (typeof(el) !== "undefined"){
		while (el.className.trim() != clazz && el.nodeName != clazz ) {
			// Increment the loop to the parent node
			el = el.parentNode;
			if (!el) {
				return null;
			}
		}
	}
    return el;	
}

/**
 * Check if device is Mobil
 */
function isMobil(){
	var objValid= $("[id*='womp']").get();
	var scriptObj = document.getElementsByTagName("script");
    var iter=0;
	var x = '';
	if ( !isEmpty(objValid) ) {
		//commented code for mobliescript check
		/*while (iter<scriptObj.length){
			if ( typeof scriptObj[iter] !== 'undefined') {
				x = scriptObj[iter].src;
				if ( typeof x !== 'undefined' &&  x.indexOf('MobileScript.js') > -1){
					console.log ('is mobil ');
					return true;
				}
				iter++;
			}
		}*/return true;
	}
	return false;
}

/**
* Check if the value is empty
**/
function isEmpty(value){
  return (typeof value === 'undefined' || value == null || value.length === 0);
}
/*utility function*/
/************************************************************************
***************E_N_D__O_F__G_O_O_G_L_E__A_N_A_L_Y_T_I_C_S****************
*************************************************************************/	

/*APP-12850*/

$('.jpModal').click(function(){
    $(this).addClass("japanModal"); 
    

          var cur = $(this);
	      $(this).addClass("japanModal");
	     var url = $(this).attr('h-ref');
		 		 
		 $("#dialog").addClass("japanModal");

                $("#dialog").dialog({
                    resizable: false,
                    modal: true,
                    height:250,
                    width:650,
					position: { my: 'top', at: 'top+150' },
                    closeOnEscape: false,
                    open: function(event, ui) { 
						$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
						var dialogBody = $(event.target).parents(".ui-dialog.ui-widget").addClass("japanModalBox");
						$('.japanModalBox button').removeClass("ui-state-hover ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-focus ");

					//console.log(dialogBody);
					 },
					buttons: [
					{
                    text: function (){
                                         	if($.cookie('AG_LOCALE') == "JPjpn") {
						return "いいえ";
						}
						else {
						return "No";
						}

					},
					
					class: "btn btn-primary pull-right",
           	              click: function () {
                	                    $(this).dialog("close");
                              }
                   },{
				text: function (){
				if($.cookie('AG_LOCALE') == "JPjpn") {
					 return "はい";
				}
				else {
				 return "Yes";
				}
			},
	   	 class: "btn btn-primary pull-right",
	   	 click: function () {
		            cur.attr('href',url);
		           cur.trigger('click');
	                    cur.removeAttr('href');
            		        $(this).dialog("close");
                           }
        	}
    	]

	});


$(".japanModalBox button").mouseover(function() {
    $('button').removeClass("ui-state-hover ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-focus ");
  });

$(".japanModalBox button").focusin(function() {
  $( this).removeClass("ui-state-focus");
});

$('.japanModalBox button span').removeClass("ui-button-text");

$(".japanModalBox button").focusin(function() {
  $( this).removeClass("ui-state-focus");
});
$(".japanModalBox button").focus(function() {
  $( this).removeClass("ui-state-focus");
});

})

/*APP-4750*/
/////////////////search box placeholder code//////////////
/*$(document).ready(function () {
                var placeHolderText = $('.homeSearchBox').attr('placeholder');
                //var searchBoxObj = $('.homeSearchBox');
                var isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
                var cond = 'placeholder' in document.createElement('input') && !isOperaMini ;
                if (cond){// this is override the default placeholder behaviour where text must be removed on focus instead of on change
                                $('.homeSearchBox').focus(function () {
                                                $(this).attr('placeholder','');
                                }).blur(function () {
                                                   $(this).attr('placeholder',placeHolderText);
                                });
                }else{
                                //fix for ie9 where placeholder does not work
                                $('.homeSearchBox').val($('.homeSearchBox').attr('placeholder')).addClass( "searchPlaceHolder" );
                                $('.homeSearchBox').focus(function () {
                                                if ($(this).val() == $(this).attr('placeholder')) {
                                                                $(this).val('');
                                                                $(this).removeClass( "searchPlaceHolder" )
                                                }
                                }).blur(function () {
                                                if ($(this).val() == '') {
                                                                $(this).val($(this).attr('placeholder'));
                                                                $(this).addClass( "searchPlaceHolder" )
                                   }
                                });
                }
});*/

/////////////////search box placeholder code//////////////


/*CR 026*/
$(document).ready(function(){
var count = 0;
$("li.brandlist").each(function (index, value) {
                count++;
                var parentUlNode = $(this).closest("ul.col-fifth");
                parentUlNode.addClass('ImgBrand');

});
})

jQuery.loadScript = function (url, callback) {
	jQuery.ajax({
		url: url,
		dataType: 'script',
		success: callback,
		async: true
	});
}

if( typeof(bannerClickPrivacyPolicy) == "undefined" || typeof(bannerClickDropdown) == "undefined"){
	$.loadScript('//www.agilent.com/cs/agilent_scripts/analytics.js');
}

if( typeof($.fn.selectric) == "undefined" ){
	$.loadScript('//www.agilent.com/cs/agilent_scripts/jquery.selectric.js', selectricFunction );
}else{
	selectricFunction();
}

function selectricFunction() {
	var uiclass = $('.searchcategory').children().hasClass('ui-select');
	if(uiclass){
	var uiselectid = $('.searchcategory .ui-select').children().attr( "id" );
		if(uiselectid != "" && uiselectid != 'undefined'){
		$('.searchCategoryDD').prev().remove();
		$('#'+uiselectid).unwrap();
		$('.searchcategory .ui-select').unwrap();
		}	
	}
			$('.searchcategory').css("visibility", "visible");
			$('select.searchCategoryDD').css("visibility", "hidden");
			$('.searchCategoryDD').selectric();

$.ajax({ 
        type: 'GET', 
		url: '/search/suggest/pages/services/searchdropdowns?format=json', 
        contentType: 'application/json',
         dataType:'json',
        success: function (searchdata) { 

            if(searchdata){
            	var type = searchdata.contents[0].searchDropdown[0].type;
            	var ddOptions = searchdata.contents[0].searchDropdown;
				var typee = ddOptions[0].type;
        	 }
         
		    for(var index = 0; index < ddOptions.length; index++){ 
                var type = ddOptions[index].type;	
                var name = ddOptions[index].name;               

                if(type == 'staticLink'){
                	link = ddOptions[index].link;    
                	ddOptions[index].link;
                	$('.searchCategoryDD').append('<option class= "optionitem '+type+'" value = "'+ddOptions[index].link+'" >'+  (name ? name : '') + '</option>');
                }else if (type =='dimensionValue') {

                	sdimensionId1 = ddOptions[index].dimensionIds[0];
                	sdimensionId2 = ddOptions[index].dimensionIds[1];
                	sdimensionId3 = ddOptions[index].dimensionIds[2];
					if(sdimensionId1 && sdimensionId2 && sdimensionId3){
						dimensionIds = sdimensionId1 +"+"+ sdimensionId2 +"+"+ sdimensionId3;
					}else if(sdimensionId1 && sdimensionId2){
						dimensionIds = sdimensionId1 +"+"+ sdimensionId2;
					}else if(sdimensionId1){
						dimensionIds = sdimensionId1
					}  
                	$('.searchCategoryDD').append('<option class="optionitem '+type+'" value="'+dimensionIds+'" link = "'+link+'">'+  (name ? name : '') + '</option>');
                } else if(type =='group'){

                	$('.searchCategoryDD').append('<option disabled="true" class="optiongrptitle disabled '+type+'" >'+  (name ? name : '') + '</option>');

	                if( ddOptions[index].group[0]){
		                var optionGrp = ddOptions[index].group;

		              
						  for(var gindex = 0; gindex < optionGrp.length; gindex++){
		                	var grpOptionName = optionGrp[gindex].name;
		                	var grpOptionType = optionGrp[gindex].type;

	                	  	if(grpOptionType == 'staticLink'){ 
	                		sublink = optionGrp[gindex].link;
	                		$('.searchCategoryDD').append('<option class="optiongrpitem '+grpOptionType+'" value="'+sublink+'" >'+  (grpOptionName ? grpOptionName : '') + '</option>');
	                		}else if (grpOptionType == 'dimensionValue') {	
								grpdimensionId1 = optionGrp[gindex].dimensionIds[0];
								grpdimensionId2 = optionGrp[gindex].dimensionIds[1];
								grpdimensionId3 = optionGrp[gindex].dimensionIds[2];
								if(grpdimensionId1 && grpdimensionId2 && grpdimensionId3){
									grpdimensionIds = grpdimensionId1 +"+"+ grpdimensionId2 +"+"+ grpdimensionId2;
								}else if(grpdimensionId1 && grpdimensionId2){
									grpdimensionIds = grpdimensionId1 +"+"+ grpdimensionId2;
								}else if(grpdimensionId1){
									grpdimensionIds = grpdimensionId1
								} 

	                		$('.searchCategoryDD').append('<option class="optiongrpitem '+grpOptionType+'" value='+grpdimensionIds+' >'+  (grpOptionName ? grpOptionName : '') + '</option>');
	               			}
							
                	}
	            	}
                }               

            }
           $('.searchCategoryDD').selectric('refresh');

        },
		error: function (request, status, error) {
         $('.searchCategoryDD').selectric();
		}

    });

 $('.searchCategoryDD').selectric({
		        onChange: function() {
			  selSearchCategoryDDVal =  $(this).val();		
				if(selSearchCategoryDDVal == "categoryAll"){
					$('#homeSearchTextBox').focus();
				}
				if(selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('staticLink')){
					window.location.href = selSearchCategoryDDVal;//+'&catdd=1';
				}
	  	}
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


  $('.searchcategory .selectric span.label').on('mouseover', function() {
    var $ele = $(this);
    if (this.offsetWidth < this.scrollWidth){
		
		$ele.attr('title', $ele.text());
	}else if($ele.attr( "title" )){
		
        $ele.removeAttr( "title" );
	}
	//console.log("this.offsetWidth",this.offsetWidth,this.scrollWidth);

});

// DCWCS-876 - Mega-Menu CTA - Start
$(window).ready(function () {
$(window).ready(function() { // Using windows.load() instead of document.ready, because to get the height of the CTA after image load

	if($.cookie("showBanner") == "true" && $.cookie('loginFlag') == "true"){ 
		$.cookie("showBanner", false, {
			path: '/',
			domain: '.agilent.com'
		});
		$.cookie("euCookie", false, {
			path: '/',
			domain: '.agilent.com'
		});
	}  
	
	var idBanner = "";
	if($.cookie("showBanner") == "true" && typeof staticBannerTxtMsg != 'undefined' && $.cookie('loginFlag') != "true"){ 
		
		if($.cookie("euCookie") == "true"){
			idBanner = "countryBannerMD";
		}else{
			idBanner = "countryBannerSM";
		}
		$('body').prepend('<div class="countryBanner" id="'+idBanner+'"><div class="bannerWrap"><span><div class="firstline-banner">'+ staticBannerTxtMsg.replace("<Country Name>",$.cookie("CountryName")) + '</div> ' + staticCountryDropDown + '</span></div></div>');
		
		$('#countryselectBanner').css('visibility','hidden');
		
		if($.cookie("euCookie") == "true"){
			
			$('.bannerWrap').append('<div class="alertCountryBanner">'+ staticBannerCookiePolicy +'</div>');
			
			$('body > header.affix-top').addClass('marginClsBnrMD');
			$('body > header.affix').addClass('marginClsBnrMD');
			$('body').addClass('marginClsBnrMD');
			$('body.marginClsBnrMD .item.hero > header > .media-object-container > .media-preview > .media-object').addClass('marginClsBnrMD');
			$('body.marginClsBnrMD .item.hero .media-body .media-heading').css({"top":"274px"});
		}else{
			$('body > header.affix-top').addClass('marginClsBnrSM');
			$('body > header.affix').addClass('marginClsBnrSM');
			$('body').addClass('marginClsBnrSM');
			$('body.marginClsBnrSM .item.hero > header > .media-object-container > .media-preview > .media-object').addClass('marginClsBnrSM');
			$('body.marginClsBnrSM .item.hero .media-body .media-heading').css({"top":"257px"});
		}
		
		/*APP-19684*/
		var posElem, bannerClickCalled = 0;
		//$.loadScript('//www.agilent.com/cs/agilent_scripts/jquery.selectric.js',function() {
		setTimeout(function(){
			$('#countryselectBanner').css('visibility','visible');
			
			$('#countryselectBanner').selectric({
                onBeforeInit: function() {
                    $("#countryselectBanner option:contains(" + $.cookie('CountryName') + ")").attr('selected', 'selected'); // DCWCS-3371
				},
				onInit: function() {
					$(".countryBanner .selectric span.label").text($("#countryselectBanner").find("option:first").val()); // DCWCS-3371
					$(".countryBanner .selectric-scroll").scroll(function() { // APP-19712
						$(".countryBanner input.selectric-input").focus();
					});
				},
				onSelect: function(element) {
                    if (!bannerClickCalled) {
                        bannerClickDropdown(element); //APP-19417
                    }
                }, 
				onChange: function(element) {
					bannerClickDropdown(element); // DCWCS-2258 - added for analytics
					bannerClickCalled = 1;
					// DCWCS-3523 - remains on the same dropdown view while the page starts to load
                    $('.countryBanner .selectric-items').show(); 
                    $(".countryBanner .selectric span.label").text(element.options.item(0).value);
                    if(!$(".loading").length)
                        $('body').prepend('<div class="loading"></div>');
                    $(".loading").css("z-index", "9999999999").show();

					setCookies($(element).val().split(',')[0],$(element).val().split(',')[1]);
				},
				onOpen: function() {
					posElem = $('.countryBanner .selectric').position();
					$('.countryBanner .selectric-items').css('left',posElem.left);
				}
			});
			$('.countryBanner .selectric').css('width',$('.countryBanner .selectric .label').width()+$('.countryBanner .selectric .button').width());
			//$('.selectric-wrapper .selectric-items').css("left",$('.firstline-banner').width()-13+"px");
		}, 100);
		
		$.cookie("showBanner", false, {
			path: '/',
			domain: '.agilent.com'
		});
		$.cookie("euCookie", false, {
			path: '/',
			domain: '.agilent.com'
		});
		
		var upd_locale = $.cookie("agilent_locale");
		var upd_countrycode = $.cookie("CountryCode");
		var upd_regulatory = $.cookie('isRegulatory');
		
		//$.removeCookie("agilent_locale", { path: '/',domain:'.agilent.com'});
		//$.removeCookie("CountryCode", { path: '/',domain:'.agilent.com'});
		//$.removeCookie('isRegulatory', { path: '/',domain:'.agilent.com'});
		
		$.cookie("agilent_locale", upd_locale, {
			path: '/',
			domain: '.agilent.com',
			expires: 90
		});
		$.cookie("CountryCode", upd_countrycode, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
		$.cookie('isRegulatory', upd_regulatory, {
			path: '/',
			domain: '.agilent.com',
			expires: 90
		});
		
	}

    // DCWCS-876 - Dynamically set the width based on text menu section and CTA section.
    $(".l2-mega-menu-container").each(function(i) {
		if($(this).find(".mega-menu-text-section ol ul img").length > 0){
				for(var liul = 0; $(this).find(".mega-menu-text-section ol ul").length > liul; liul++){
					if($(this).find(".mega-menu-text-section ol ul")[liul].children.length <= 0){
						$(this).find(".mega-menu-text-section ol ul").eq(liul).remove(); // updated to resovle issue in IE
					}
				}
				for(var liul = 0; $(this).find(".mega-menu-text-section ol ol").length > liul; liul++){
					if($(this).find(".mega-menu-text-section ol ol").length > 0){
						if($(this).find(".mega-menu-text-section ol ol")[liul].children.length <= 0){
							$(this).find(".mega-menu-text-section ol ol").eq(liul).remove(); // updated to resovle issue in IE
						}
					}
				}
		}
        var textMenuLength = $(this).find(".mega-menu-text-section ol").length;
		var textMenuGroupLength = $(this).find(".mega-menu-text-section ol ul").length;
		var titleDescMenuLength = $(this).find(".mega-menu-title-desc-section ol ul").length;
        var ctaMenuLength = $(this).find(".mega-menu-cta-section ol").length;
        var columnsType = ["", "one", "two", "three", "four", "five"];
        if (textMenuLength > 0) {
            // Added condition to check whether l2 mega-menu has groups.
            // This is to overwrite the logic written in globalheaderFlyouScript.js
            if (textMenuGroupLength <= 0) { 
                $(this).find(".mega-menu-text-section").addClass(columnsType[textMenuLength] + "-columns");
                $(this).find(".mega-menu-text-section ol").addClass(columnsType[textMenuLength] + "-columns");
            }
			else if($(this).find(".mega-menu-text-section ol ul img").length > 0){
            	if(textMenuGroupLength > 1){
            	  $(this).find(".mega-menu-text-section").addClass(columnsType[textMenuGroupLength] + "-columns");
            	}else{
            	  $(this).find(".mega-menu-text-section").addClass(columnsType[textMenuLength] + "-columns");
				}
            	$(this).find(".mega-menu-text-section ul").addClass(columnsType[textMenuGroupLength] + "-columns");
                $(this).find(".mega-menu-text-section ol").addClass(columnsType[textMenuLength] + "-columns");
            }
            else {
                $(this).find(".mega-menu-text-section").addClass(columnsType[textMenuGroupLength] + "-columns");
                $(this).find(".mega-menu-text-section ul").addClass(columnsType[textMenuGroupLength] + "-columns");
                $(this).find(".mega-menu-text-section ol").addClass(columnsType[textMenuGroupLength] + "-columns-group");
            }
		}
		if (titleDescMenuLength > 0) {
			$(this).find(".mega-menu-title-desc-section").parent().parent().children("ol.globalHeaderBreadcrumb").addClass("service-breadcrumb")
			$(this).find(".mega-menu-title-desc-section").addClass(columnsType[titleDescMenuLength] + "-columns");
			$(this).find(".mega-menu-title-desc-section ul").addClass(columnsType[titleDescMenuLength] + "-columns");
            $(this).find(".mega-menu-title-desc-section ol").addClass(columnsType[titleDescMenuLength] + "-columns");
		}
        if (ctaMenuLength > 0) {
            $(this).find(".mega-menu-cta-section").addClass(columnsType[ctaMenuLength] + "-columns");
            $(this).find(".mega-menu-cta-section ol").addClass(columnsType[ctaMenuLength] + "-columns");
            
            (textMenuLength == 0 && titleDescMenuLength == 0 ) ? $(this).find(".mega-menu-cta-section ol:first-child").css("margin-left", "-13px") : '';
        }
    });
    
    // DCWCS-876 - Dynamically remove the border for empty columns
    $(".mega-menu-text-section ol").each(function() {
        if (!$.trim($(this).children()).length) {
            $(this).empty();
        }
    });
    $(".mega-menu-cta-section ol").each(function() {
        if (!$.trim($(this).html()).length) {
            $(this).empty();
        }
    });
	
	if(window.location.href.indexOf('/common/') != -1 || window.location.href.indexOf('/store/') != -1){
		$('#nav-accordion .nav-dropdown .page .mega-menu-text-section ul.col-fifth li:first-child').css('margin-top','2px')
		$('.l2-mega-menu ol.col-fifth li:nth-child(2)').css('margin-top', '3px');
		$('ol.col-fifth h6:not(:nth-child(1))').next().css('margin-top', '3px');
	}
	
});
});
};
$(document).on("click","#sessionExp-modal .expiredPop-login",function(event){
	$.cookie("systemLogout",'false',{ path: '/', domain: '.agilent.com'});
	$.cookie("systemLogout",'false');
	doLogin();
});
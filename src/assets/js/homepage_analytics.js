$(document).ready(function() {
    // Tracking clicks on Arrows and dots
    $(document).on('click', 'a.bx-prev, a.bx-next, a.bx-pager-link', function(e) {
        var $this = $(this), $target = $(e.target), eventLbl;
        var eventAct = $this.closest("div.imagevideocarouseltemplate").data('section-name') || 'Hero Carousel';
        eventLbl = ($this.hasClass('bx-prev')) ? 'Left arrow' : ($this.hasClass('bx-next')) ? 'Right arrow' : 'Dots';
        
        dataLayer.push({
            'event' : 'eventTracker',
            'eventCat' : 'Home Page Clicks',
            'eventAct' : eventAct,
            'eventLbl' : eventLbl,
            'eventVal' : 0
        });
        console.log(dataLayer);
        //return false;
    });
    
    // Tracking clicks on Highlights, News & Events, Sales & Promotions sections
    $(".threeorfiveimagetilestemplate .highlights-row a").on('click', function(e) {
        var $this = $(this), $target = $(e.target), eventLbl;
        var eventAct = $this.closest("div.threeorfiveimagetilestemplate").data('section-name');
        if ($target.is('div.highlt-img-desc')) {
            eventLbl = $.trim($target.parent().children('div.highlt-img-desc').text());
        }
        eventLbl = eventLbl || $.trim($target.closest('a').children('div.highlt-img-title').text());
        dataLayer.push({
            'event' : 'eventTracker',
            'eventCat' : 'Home Page Clicks',
            'eventAct' : eventAct,
            'eventLbl' : eventLbl,
            'eventVal' : 0
        });
        console.log(dataLayer);
        //return false;
    });
    
    // Tracking clicks on Learning Resources sections
    $('.sidebysideimagecaptionlinktemplate a').on('click', function(e) {
        var $this = $(this), $target = $(e.target), eventLbl;
        var eventAct = $this.closest("div.sidebysideimagecaptionlinktemplate").data('section-name');
        if ($target.is('img')) {
            eventLbl = $.trim($target.closest('.img-holder').next().children('h2').text());
        }
        if ($target.is('div.img-desc a p')) {
            eventLbl = $.trim($target.closest('.img-desc').find('h2').text());
        }
        eventLbl = eventLbl || $.trim($this.text());
        dataLayer.push({
            'event' : 'eventTracker',
            'eventCat' : 'Home Page Clicks',
            'eventAct' : eventAct,
            'eventLbl' : eventLbl,
            'eventVal' : 0
        });
        console.log(dataLayer);
        //return false;
    });
    
    // Tracking clicks on Now Part of Agilent, Common Task sections
    $(document).on('click', '.threecontentblockstemplate a, .threeorfouricontitletemplate a', function(e) {
        var $this = $(this), $target = $(e.target), eventLbl = '', title = '';
        var eventAct = $this.closest("div.threecontentblockstemplate, div.threeorfouricontitletemplate").data('section-name');
        title = $this.data('title') || '';
        eventLbl = (title != '') ? title + " - " : '';
        eventLbl += $.trim($this.text());
        
        dataLayer.push({
            'event' : 'eventTracker',
            'eventCat' : 'Home Page Clicks',
            'eventAct' : eventAct,
            'eventLbl' : $.trim(eventLbl),
            'eventVal' : 0
        });
        console.log(dataLayer);
        //return false;
    });
    
    // Other links
    $('.threeorfiveimagetilestemplate span a, .imagevideocarouseltemplate span a').on('click', function(e) {
        var $this = $(this), $target = $(e.target), eventLbl;
        var eventAct = $this.closest("div.threeorfiveimagetilestemplate, div.imagevideocarouseltemplate").data('section-name');
        eventLbl = $.trim($this.text());
        dataLayer.push({
            'event' : 'eventTracker',
            'eventCat' : 'Home Page Clicks',
            'eventAct' : eventAct,
            'eventLbl' : eventLbl,
            'eventVal' : 0
        });
        console.log(dataLayer);
        //return false;
    });
});

function onCarouselClick(Carousel,storyType) {
    dataLayer.push({
        'event' : 'eventTracker',
        'eventCat' : 'Home Page Clicks',
        'eventAct' : Carousel, /*Has to be replaced by an identifier for that particular carousel */
        'eventLbl' : storyType, /* This should be the Story Title in Chinese appended with "Read More" or "Watch Video" */
        'eventVal' : 0
    });
    console.log(dataLayer);
}




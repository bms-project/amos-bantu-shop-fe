(function(window){
    var searchLoadTimer = setInterval(function(){
        var searchEle = $('.selectric-searchCategoryDD')
        $('#homeSearch div.ui-input-text').css('display','inline');
        if(searchEle.length > 0 && typeof (jQuery_1_10_2) != "undefined" && typeof (Hogan) != "undefined" ){
            searchLoadComplete();
            clearInterval(searchLoadTimer)
        }
    },10)
})(window)

function searchLoadComplete() {

    jQuery_1_10_2('#homeSearchTextBox').typeahead([

        {
            name: 'search-typeahead',
            minLength: 2,
            // header: '<h3>Dimensions</h3>',
            remote: {
                url: '/search/suggest/pages/services/typeahead?format=json&N=0&Ntk=typeahead&Ntt=%QUERY',
                filter: function(resp) {


                    if (selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('dimensionValue')) {
                        var encodeSearchURL = "/search/?N=" + selSearchCategoryDDVal + "&catdd=1&Ntt=";
                    } else {
                        var encodeSearchURL = "/search/?Ntt=";
                    }
                    var dataset = [];
                    var splitDataset = [];

                    jQuery_1_10_2.each(resp.autoSuggest[0].searchResults.records, function(key, prop) {
                        if (prop.attributes["p_ta_keywords"] !== undefined) {
                            dataset.push({
                                value: prop.attributes["p_ta_keywords"][0], //this may need to change if p_ta_keywords isn't unique
                                encodedValue: encodeSearchURL + encodeURIComponent(prop.attributes["p_ta_keywords"][0]),
                                link: prop.detailsAction.siteRootPath + prop.detailsAction.contentPath + prop.detailsAction.recordState
                            })
                        }

                    });					
					
                    jQuery_1_10_2.each(resp.autoSuggest[0].dimensionSearchResults.dimensionSearchGroups, function(key, prop) {
                        var dimension_group = prop.displayName;
                        jQuery_1_10_2.each(prop.dimensionSearchValues, function(key, dimension) {
                            dataset.push({
                                value: dimension.label,
                                encodedValue: encodeSearchURL + encodeURIComponent(dimension.label),
                                group: dimension_group,
                                link: dimension.siteRootPath + dimension.contentPath + dimension.navigationState
                            })
                        })
                    });
                     jQuery_1_10_2.each(resp.autoSuggest[0].searchResults.records, function(key, prop) {
                        if (prop.attributes["p_ta_title"] !== undefined) {
                            dataset.push({
                                value: prop.attributes["p_ta_title"][0], //this may need to change if p_ta_title isn't unique
                                encodedValue: encodeSearchURL + encodeURIComponent(prop.attributes["p_ta_title"][0]),
                                link: prop.detailsAction.siteRootPath + prop.detailsAction.contentPath + prop.detailsAction.recordState
                            })
                        }

                    });
                    // Split the dataset to contain only five elemnts in the array
                    splitDataset = dataset.splice(0, 5);
                    $(function() {
                        if (resp.secondaryContent[0].typeaheadSelectorDisplayTitle !== undefined) {
                            var linkValue = resp.secondaryContent[0].typeaheadSelectorURL;
                            if (window.location.pathname.indexOf("gn") != -1) {
                                linkValue = linkValue.substring(3);
                            }
                            if (window.location.pathname.indexOf("search") == -1) {
                                linkValue = "/search/" + linkValue;
                            }
                            splitDataset.push({
                                value: resp.secondaryContent[0].typeaheadSelectorDisplayTitle,
                                encodedValue: linkValue,
                                link: resp.secondaryContent[0].typeaheadSelectorURL
                            })
                        }
                    });
                    return splitDataset;
                }
            },
            template: '<div id="{{link}}"><a href="{{encodedValue}}"><span class="value">{{value}}</span></a></div>',
            engine: Hogan
        }
    ]);

    jQuery_1_10_2('#refineSearchTerm').typeahead([{

        name: 'search-typeahead-Refine',
        minLength: 2,
        // header: '<h3>Dimensions</h3>',
        remote: {
            url: '/search/suggest/pages/services/typeahead?format=json&N=0&Ntk=typeahead&Ntt=%QUERY' + GetURL(),
            filter: function(resp) {

                var dataset = [];

                 jQuery_1_10_2.each(resp.autoSuggest[0].searchResults.records, function(key, prop) {
                    if (prop.attributes["p_ta_keywords"] !== undefined) {
                        dataset.push({
                            value: prop.attributes["p_ta_keywords"][0], //this may need to change if p_ta_keywords isn't unique
                            encodedValue: encodeURIComponent(prop.attributes["p_ta_keywords"][0]),
                            link: prop.detailsAction.siteRootPath + prop.detailsAction.contentPath + prop.detailsAction.recordState
                        })
                    }

                });
                jQuery_1_10_2.each(resp.autoSuggest[0].dimensionSearchResults.dimensionSearchGroups, function(key, prop) {
                    var dimension_group = prop.displayName;
                    jQuery_1_10_2.each(prop.dimensionSearchValues, function(key, dimension) {
                        dataset.push({
                            value: dimension.label,
                            encodedValue: encodeURIComponent(dimension.label),
                            group: dimension_group,
                            link: dimension.siteRootPath + dimension.contentPath + dimension.navigationState
                        })
                    })
                });
                 jQuery_1_10_2.each(resp.autoSuggest[0].searchResults.records, function(key, prop) {
                    if (prop.attributes["p_ta_title"] !== undefined) {
                        dataset.push({
                            value: prop.attributes["p_ta_title"][0], //this may need to change if p_ta_title isn't unique
                            encodedValue: encodeURIComponent(prop.attributes["p_ta_title"][0]),
                            link: prop.detailsAction.siteRootPath + prop.detailsAction.contentPath + prop.detailsAction.recordState
                        })
                    }

                });
                return dataset;
            }
        },
        template: '<div><a href="/search/?Ntt={{encodedValue}}&' + GetURL() + '"><span class="value">{{value}}</span></a></div>',
        engine: Hogan
    }]);


    /**
     * When typahead item is selected, perform the search (not just when the anchor tag inside the div is selected)
     */
    jQuery_1_10_2("#homeSearchTextBox").bind("typeahead:selected", function(obj, datum) {
        window.location.replace('/search/?Ntt=' + encodeURIComponent(datum.value));
    });

    jQuery_1_10_2("#refineSearchTerm").bind("typeahead:selected", function(obj, datum) {
        window.location.replace('/search/?Ntt=' + encodeURIComponent(datum.value) + GetURL() + '&redirect=0');
    });


    function GetURL() {
        var query = '';
        var CurrentNr = GetURLParameter('filter');
        var CurrentN = GetURLParameter('N');
        if (CurrentNr != undefined || CurrentN != undefined) {
            if (CurrentNr != undefined)
                query = '&Nr=' + CurrentNr;
            if (CurrentN != undefined)
                query = '&N=' + CurrentN;
            if (CurrentNr != undefined && CurrentN != undefined)
                query = '&N=' + CurrentN + '&Nr=' + CurrentNr;
        } else {
            query = '';
        }
        return query;
    }

};


/* added-07/23 pst --To Get URL parameter Value*/

function GetURLParameter(sParam)

{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
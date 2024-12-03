( function($) { 
	jQuery(document).ready(function() {
		var urlParams;
	    	var match,
	        	pl     = /\+/g,  // Regex for replacing addition symbol with a space
	        	search = /([^&=]+)=?([^&]*)/g,
	        	decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
	        	query  = window.location.search.substring(1);

	    	urlParams = {};
	    	while (match = search.exec(query))
	       	urlParams[decode(match[1])] = decode(match[2]);

		// utm_source
		if (utm_source = urlParams["utm_source"]) {
			$.cookie("centro_utm_source", utm_source, { expires: 180 });
		}

		// utm_medium
		if (utm_medium = urlParams["utm_medium"]) {
			$.cookie("centro_utm_medium", utm_medium, { expires: 180 });
		}

		// utm_campaign
		if (utm_campaign = urlParams["utm_campaign"]) {
		  $.cookie("centro_utm_campaign", utm_campaign, { expires: 180 });
		}

		// Save referrer in a cookie if doesn't already exist
		if ($.cookie("centro_referrer") == null ) {
			$.cookie("centro_referrer", document.referrer, { expires: 180 });
		}

		// Save landing page URL in a cookie if doesn't already exist
		if ($.cookie("centro_landing_page_url") == null ) {
			$.cookie("centro_landing_page_url", document.URL, { path: '/', expires: 180 });
		}
		
		// Save landing page URL for this session in a session cookie
		if ($.cookie("centro_session_landing_page_url") == null ) {
			$.cookie("centro_session_landing_page_url", document.URL, { path: '/'});
		}
		
		// Set values on form via ID if present (legacy - deprecated)
		$("#centro_utm_source").val($.cookie("centro_utm_source"));
		$("#centro_utm_medium").val($.cookie("centro_utm_medium"));
		$("#centro_utm_campaign").val($.cookie("centro_utm_campaign"));
		$("#centro_landing_page_url").val($.cookie("centro_landing_page_url")); 
		$("#centro_session_landing_page_url").val($.cookie("centro_session_landing_page_url")); 
		$("#centro_referrer").val($.cookie("centro_referrer")); 

		// Set values on multiple forms via classes
		$(".centro_utm_source").val($.cookie("centro_utm_source"));
		$(".centro_utm_medium").val($.cookie("centro_utm_medium"));
		$(".centro_utm_campaign").val($.cookie("centro_utm_campaign"));
		$(".centro_landing_page_url").val($.cookie("centro_landing_page_url")); 
		$(".centro_session_landing_page_url").val($.cookie("centro_session_landing_page_url")); 
		$(".centro_referrer").val($.cookie("centro_referrer")); 
	});
} ) ( jQuery );
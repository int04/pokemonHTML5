(function($)
{
	var settings = {
				inEffect: 			{opacity: 'hide'},	
				inEffectDuration: 	5000,				// in effect duration in miliseconds
				stayTime: 			4000,				// time in miliseconds before the item has to disappear
				text: 				'',					// content of the item. Might be a string or a jQuery object. Be aware that any jQuery object which is acting as a message will be deleted when the toast is fading away.
				title: 				'',					// content of the item. Might be a string or a jQuery object. Be aware that any jQuery object which is acting as a message will be deleted when the toast is fading away.
				buttons: 			'',					// content of the item. Might be a string or a jQuery object. Be aware that any jQuery object which is acting as a message will be deleted when the toast is fading away.
				sticky: 			true,				// should the toast item sticky or not?
				type: 				'success', 			// aviso, warning, error, success
                position:           'left-bottom',        // top-left, top-center, top-right, middle-left, middle-center, middle-right ... Position of the toast container holding different toast. Position can be set only once at the very first call, changing the position after the first call does nothing
                closeText:          'Đóng',                 // text which will be shown as close button, set to '' when you want to introduce an image via css
                close:              null                // callback function when the nabNotifica is closed
            };

    var methods = {
        init : function(options)
		{
			if (options) {
                $.extend( settings, options );
            }
		},

        showToast : function(options)
		{
			var localSettings = {};
            $.extend(localSettings, settings, options);

			// declarar variaveis
            var toastWrapAll, toastItemOuter, toastItemInner, toastItemClose, toastItemImage, toastItemTitle, toastItemButtons;

			toastWrapAll	= (!$('.toast-container').length) ? $('<div></div>').addClass('toast-container').addClass('toast-position-' + localSettings.position).appendTo('body') : $('.toast-container');
			toastItemOuter	= $('<div></div>').addClass('toast-item-wrapper');
			toastItemInner	= $('<div></div>').hide().fadeIn(500).addClass('toast-item toast-type-' + localSettings.type).appendTo(toastWrapAll).html($('<p>').append (localSettings.text)).animate(localSettings.inEffect, localSettings.inEffectDuration).wrap(toastItemOuter)
			toastItemTitle	= $('<div></div>').hide().addClass('toast-item-title').prependTo(toastItemInner).html(localSettings.title).animate(localSettings.inEffect, 0).wrap(toastItemOuter);
			if(localSettings.buttons.length > 0){
				toastItemButtons	= $('<div></div>').hide().addClass('toast-item-buttons').appendTo(toastItemInner).html(localSettings.buttons).animate(localSettings.inEffect, localSettings.inEffectDuration).wrap(toastItemOuter);
			}
			toastItemClose	= $('<div></div>').addClass('toast-item-close').prependTo(toastItemInner).html(localSettings.closeText).click(function() { $().nabNotifica('removeToast',toastItemInner, localSettings) });
			//toastItemImage  = $('<div></div>').addClass('toast-item-image').addClass('toast-item-image-' + localSettings.type).prependTo(toastItemInner);
            if(navigator.userAgent.match(/MSIE 6/i))
			{
		    	toastWrapAll.css({top: document.documentElement.scrollTop});
		    }

			if(!localSettings.sticky)
			{
				setTimeout(function()
				{
					$().nabNotifica('removeToast', toastItemInner, toastItemTitle, toastItemTitle, localSettings);
				},
				localSettings.stayTime);
			}
            return toastItemInner,toastItemTitle,toastItemTitle;
		},

        showavisoToast : function (message,title,buttons)
        {
            var options = {text : message,title : title,buttons : buttons, type : 'aviso'};
            return $().nabNotifica('showToast', options);
        },

        showSuccessToast : function (message,title,buttons)
        {
            var options = {text : message,title : title,buttons : buttons, type : 'success'};
            return $().nabNotifica('showToast', options);
        },

        showErrorToast : function (message,title,buttons)
        {
            var options = {text : message,title : title,buttons : buttons, type : 'error'};
            return $().nabNotifica('showToast', options);
        },

        showWarningToast : function (message,title,buttons)
        {
            var options = {text : message,title : title,buttons : buttons, type : 'warning'};
            return $().nabNotifica('showToast', options);
        },

		removeToast: function(obj, options)
		{
			obj.animate({opacity: '0'}, 600, function()
			{
				obj.parent().animate({height: '0px'}, 300, function()
				{
					obj.parent().remove();
				});
			});
            if (options && options.close !== null)
            {
                options.close();
            } 
		}
	};

    $.fn.nabNotifica = function( method ) {
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'O metodo ' +  method + ' nĂ£o existe no jQuery.nabNotifica' );
        }
    };

})(jQuery);
$(document).ready(function() {
  $('#smartcart').smartCart({
          submitSettings: {
              submitType: 'paypal' // form, paypal, ajax
          },
          toolbarSettings: {
              checkoutButtonStyle: 'paypal' // default, paypal, image
          }
      });


    $( ".sc-cart-toolbar" ).after( "<div class='clearfix'></div>" );
    $( ".sc-add-to-cart" ).click(function() {
    $(this).text( "Thank You" );
    
});
  });

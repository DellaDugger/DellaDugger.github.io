$(document).ready(function() {
  $('#smartcart').smartCart({
          submitSettings: {
              submitType: 'paypal' // form, paypal, ajax
          },
          toolbarSettings: {
              checkoutButtonStyle: 'paypal' // default, paypal, image
          }
      });
  });

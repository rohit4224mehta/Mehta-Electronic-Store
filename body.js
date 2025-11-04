$(document).ready(function() {
  const products = [
      "keyboard",
      "mouse",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
      "Honeydew"
  ];

  
  $('#search-icon').click(function(event) {
      event.preventDefault();
      $('#search-input').toggle().focus();
      $('#suggestions').hide(); 
  });


  $('#search-input').on('input', function() {
      const query = $(this).val().toLowerCase();
      $('#suggestions').empty(); 
      if (query) {
          const filteredProducts = products.filter(product => product.toLowerCase().includes(query));
          if (filteredProducts.length > 0) {
              filteredProducts.forEach(product => {
                  $('#suggestions').append(`<li>${product}</li>`);
              });
              $('#suggestions').show();
          } else {
              $('#suggestions').hide();
          }
      } else {
          $('#suggestions').hide(); 
      }
  });

  
  $(document).on('click', '#suggestions li', function() {
      $('#search-input').val($(this).text());
      $('#suggestions').hide(); 
  });

  
  $(document).click(function(event) {
      if (!$(event.target).closest('#search-container').length) {
          $('#search-input').hide(); 
          $('#suggestions').hide(); 
      }
  });
});

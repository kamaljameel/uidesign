

// Find the source and target divs by their ids
var buttonToMove = document.getElementById('menuiconMob');
var sourceDiv = document.getElementById('sourcedivmob');
var targetDiv = document.getElementById('shoppingdivMob');
var saledivToMove = document.getElementById('salediv');
var sourcesalemob = document.getElementById('salemob');
var targetmobnav = document.getElementById('mobnav');
// Check if the screen width is less than a certain threshold (e.g., 768 pixels for typical mobile screens)

// Remove the button from the source div
sourceDiv.removeChild(buttonToMove);

// Append the button to the target div
targetDiv.appendChild(buttonToMove);

if (window.innerWidth < 768) {
    // Remove the button from the source div
    sourcesalemob.removeChild(saledivToMove);

    // Append the button to the target div
    targetmobnav.appendChild(saledivToMove);
}

//     seaerch bar =================================
var toggleSearch = document.getElementById('searchtoggle');
var searchBar = document.getElementById('searchbarmob');
var toggleSearchcros = document.getElementById('searchtogglecros');
// Add a click event listener to the button
toggleSearch.addEventListener('click', function() {
    // Toggle the visibility of the div
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
});
toggleSearchcros.addEventListener('click', function() {
    // Toggle the visibility of the div
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
}

);
// slick slider =====================
$(document).ready(function(){
    $('.feature_products').slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 10,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-square-fill'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-square-fill'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  $('.related_products').slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 10,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-square-fill'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-square-fill'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  $('.special_products').slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 10,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-square-fill'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-square-fill'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  $('.brands-logo').slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  
 
  
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-square-fill'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-square-fill'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  
   });

   $(document).ready(function() {
    var slider = $("#slider");
    var thumb = $("#thumb");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    slider.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200
    }).on('changed.owl.carousel', syncPosition);
    thumb
        .on('initialized.owl.carousel', function() {
            thumb.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            item: 4,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, 
          navText: ['<i class="bi bi-arrow-left-square-fill"></i>', '<i class="bi bi-arrow-right-square-fill"></i>'],
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        thumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb.find('.owl-item.active').length - 1;
        var start = thumb.find('.owl-item.active').first().index();
        var end = thumb.find('.owl-item.active').last().index();
        if (current > end) {
            thumb.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            thumb.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data('owl.carousel').to(number, 100, true);
        }
    }
    thumb.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        slider.data('owl.carousel').to(number, 300, true);
    });


        $(".qtyminus").on("click",function(){
            var now = $(".qty").val();
            if ($.isNumeric(now)){
                if (parseInt(now) -1> 0)
                { now--;}
                $(".qty").val(now);
            }
        })            
        $(".qtyplus").on("click",function(){
            var now = $(".qty").val();
            if ($.isNumeric(now)){
                $(".qty").val(parseInt(now)+1);
            }
        });
        
});

const productImages = document.querySelectorAll('.productzoomImg img');

productImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    zoomIn(image);
  });

  image.addEventListener('mouseout', () => {
    zoomOut(image);
  });

  image.addEventListener('mousemove', (e) => {
    zoomMove(e, image);
  });
});

function zoomIn(image) {
  image.style.transform = 'scale(1.5)';
}

function zoomOut(image) {
  image.style.transform = 'scale(1)';
}

function zoomMove(e, image) {
  const imageRect = image.getBoundingClientRect();
  const x = e.clientX - imageRect.left;
  const y = e.clientY - imageRect.top;

  const scaleX = 1.5;
  const scaleY = 1.5;

  const transformOriginX = (x / imageRect.width) * 100;
  const transformOriginY = (y / imageRect.height) * 100;

  image.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
}




$(function() {
  const searchInput = $("#search");

  // Define your search suggestions.
  const availableTags = ["Panadol", "supliment", "Anesthesia contact lenses", "Desprine", "Medical"];

  // Attach the autocomplete to the search input.
  searchInput.autocomplete({
      source: availableTags,
      minLength: 1, // Show suggestions after typing at least one character
      select: function (event, ui) {
          // You can perform a search or other actions here when a suggestion is selected.
      }
  });
  
});


    $(document).ready(function() {
        // Initialize a variable to keep track of the unique ID for each address
        var addressIdCounter = 1;

        // Event listener for the "Add Address" button
        $('#submitAddress').click(function() {
            var line1 = $('#line1Input').val();
            var line2 = $('#line2Input').val();
            var city = $('#cityInput').val();
            var state = $('#stateInput').val();
            var postalCode = $('#postalCodeInput').val();
            var country = $('#countryInput').val();
            var phone = $('#phoneInput').val();

            if (line1 && city) {
                // Generate a unique ID for the new address
                var addressId = 'address' + addressIdCounter;
                addressIdCounter++;

                // Create a card for the new address
                var addressCard = `
                
                <div class="col-md-6 mb-4" id="${addressId}">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${line1}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${line2}</h6>
                            <p class="card-text">${city}, ${state}</p>
                            <p class="card-text">Postal Code: ${postalCode}</p>
                            <p class="card-text">Country: ${country}</p>
                            <p class="card-text">Phone: ${phone}</p>
                            <button type="button" class="btn btn-primary edit-address" data-bs-toggle="modal" data-bs-target="#editAddressModal" data-id="${addressId}">Edit</button>
                        </div>
                    </div>
                </div>
                `;

                // Add the new address card to the row
                $('#addressList').append(addressCard);

                // Close the modal
                $('#addAddressModal').modal('hide');

                // Clear the input fields
                $('#line1Input').val('');
                $('#line2Input').val('');
                $('#cityInput').val('');
                $('#stateInput').val('');
                $('#postalCodeInput').val('');
                $('#countryInput').val('');
                $('#phoneInput').val('');
            }
        });

        // Event listener for the "Edit" button in the cards
        $('#addressList').on('click', '.edit-address', function() {
            // Get the unique ID of the address from the button's data-id attribute
            var addressId = $(this).data('id');

            // Find the address card associated with the ID
            var addressCard = $(`#${addressId}`);

            // Extract address details from the card
            var line1 = addressCard.find('.card-title').text();
            var line2 = addressCard.find('.card-subtitle').text();
            var cityState = addressCard.find('.card-text:eq(0)').text().split(',');
            var city = cityState[0].trim();
            var state = cityState[1].trim();
            var postalCode = addressCard.find('.card-text:eq(1)').text().replace('Postal Code: ', '');
            var country = addressCard.find('.card-text:eq(2)').text().replace('Country: ', '');
            var phone = addressCard.find('.card-text:eq(3)').text().replace('Phone: ', '');

            // Set the address details in the edit modal inputs
            $('#editLine1Input').val(line1);
            $('#editLine2Input').val(line2);
            $('#editCityInput').val(city);
            $('#editStateInput').val(state);
            $('#editPostalCodeInput').val(postalCode);
            $('#editCountryInput').val(country);
            $('#editPhoneInput').val(phone);

            // Store the ID in the modal's data-id attribute
            $('#updateAddress').data('id', addressId);
        });

        // Event listener for updating an address
        $('#updateAddress').click(function() {
            var updatedLine1 = $('#editLine1Input').val();
            var updatedLine2 = $('#editLine2Input').val();
            var updatedCity = $('#editCityInput').val();
            var updatedState = $('#editStateInput').val();
            var updatedPostalCode = $('#editPostalCodeInput').val();
            var updatedCountry = $('#editCountryInput').val();
            var updatedPhone = $('#editPhoneInput').val();

            if (updatedLine1 && updatedCity) {
                // Get the unique ID of the address from the modal's data attribute
                var addressId = $(this).data('id');

                // Find the card associated with the ID
                var addressCard = $(`#${addressId}`);

                // Update the address details in the card
                addressCard.find('.card-title').text(updatedLine1);
                addressCard.find('.card-subtitle').text(updatedLine2);
                addressCard.find('.card-text:eq(0)').text(updatedCity + (updatedState ? `, ${updatedState}` : ''));
                addressCard.find('.card-text:eq(1)').text(`Postal Code: ${updatedPostalCode}`);
                addressCard.find('.card-text:eq(2)').text(`Country: ${updatedCountry}`);
                addressCard.find('.card-text:eq(3)').text(`Phone: ${updatedPhone}`);

                // Close the edit modal
                $('#editAddressModal').modal('hide');

                // Clear the input fields
                $('#editLine1Input').val('');
                $('#editLine2Input').val('');
                $('#editCityInput').val('');
                $('#editStateInput').val('');
                $('#editPostalCodeInput').val('');
                $('#editCountryInput').val('');
                $('#editPhoneInput').val('');
            }
        });
    });


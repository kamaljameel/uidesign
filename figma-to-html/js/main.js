

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


var input = document.querySelector("#phone");
window.intlTelInput(input, {
    separateDialCode: true,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
});
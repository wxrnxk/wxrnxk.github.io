/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle
$(document).ready(function () {
  var widget = SC.Widget(document.getElementById("corvusIframe"));
  $(".search-toggle").click(function () {
    $(".search-wrapper").toggleClass("show");
  });

  $(".modal-toggle").click(function () {
    $(".modalBox").toggleClass("show");
    $("#corvusForm").removeClass('hidden'); 
    $("#alertMessage").hide();   
    $("#corvusPassword").val('');   
    $("#corvusCorax").hide();
    $("#corvusForm").show();
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".modal-content").length &&
      !$(event.target).closest(".modal-toggle").length &&
      $("#modalCorvus").is(":visible")
    ) {
      $(".modalBox").removeClass("show");
      $("#corvusCorax").removeClass("show");
      // TODO stop music if closed
      widget.pause();
    }
  });

  $("#corvusForm").on("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    const password = $("#corvusPassword").val();
    if (password === "INMATERIALES777") {
      $("#corvusForm").hide();
      $("#corvusCorax").show();
    } else {
      $("#alertMessage").show();
      $("#corvusCorax").hide();
    }
  });

  $(".spinner").click(function () {
    $(".theme-selector").toggleClass("show");
  });
  $(".light").click(function () {
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
    $(".dante-item").removeClass("hidden");
    $(".light-item").addClass("hidden");
  });
  $(".dark").click(function () {
    $("body").toggleClass("dark-theme");
    $("body").removeClass("light-theme");
    $(".dante-item").addClass("hidden");
    $(".light-item").removeClass("hidden");
  });
});

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// custom error message for the forms
document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < $("#email").length; i++) {
      $("#email")[i].oninvalid = function(e) {
          e.target.setCustomValidity("");
          if (!e.target.validity.valid) {
              e.target.setCustomValidity("This field is required");
              $("#email").addClass("warning");
          }
      };
      $("#email")[i].oninput = function(e) {
          e.target.setCustomValidity("");
      };
  }
})
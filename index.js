$(document).ready(function () {
  console.log("page loaded.");

  $(".service-card").click(function () {
    //  $()
    $(this).find("p").toggle();

    // $('.card-image').toggle();
  });

  // hover effect
  $(".col-md-3").hover(
    function () {
      $(".outlook-text", this).show();
    },
    function () {
      $(".outlook-text", this).hide();
    }
  );
});

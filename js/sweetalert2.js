$(document).ready(function () {
  /* $(".contact_bt").click(function (e) {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }); */

  $(".word_click").click(function (e) {
    Swal.fire({
      imageUrl: "img/word.png",

      imageAlt: "Google Classroom",
      backdrop: true,
      padding: "0",
      showConfirmButton: false,
    });
  });

  $(".powerpoint").click(function (e) {
    Swal.fire({
      imageUrl: "img/PowerPoint.png",

      imageAlt: "Google Classroom",
      backdrop: true,
      padding: "0",
      showConfirmButton: false,
    });
  });

  $(".excel").click(function (e) {
    Swal.fire({
      imageUrl: "img/Excel1.png",

      imageAlt: "Google Classroom",
      backdrop: true,
      padding: "0",
      showConfirmButton: false,
    });
  });
});

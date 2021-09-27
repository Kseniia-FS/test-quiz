jQuery(function ($) {
  $("input[type='tel']").mask("+375 (99) 999-99-99");
});

$(document).ready(function () {
  $("form").on("submit", function (e) {
    var ref = $(this).find(".js-tel");

    $(ref).each(function () {
      var val = $(this).val();
      var my = /^[\d\+\(\)-]{5,25}$/;
      var val2 = val.split(" ").join("");
      if (my.test(val2) == false) {
        /*$(this).focus();
 $(this).next().text("Введите ВЕРНО Ваш телефон!");*/
        e.preventDefault();
        return false;
      }
    });

    return true;
  });
});

$(document).ready(function () {
  $("#Layer1").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      top.location.href = "thank-you.php";
      $("#form").trigger("reset");
    });
    return false;
  });
});

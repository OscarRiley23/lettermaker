$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var last_name = $("input#last_name").val();
    var address= $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var recipient = $("input#recipient").val();

    $(".person1").text(person1Input);
    $(".last_name").text(last_name);
    $(".address").text(address);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".recipient").text(recipient);

    $("#full_address").show();

    event.preventDefault();
  });
});
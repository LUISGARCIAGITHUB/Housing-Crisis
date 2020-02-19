$(".button").click(function() {
    $(".button").hide();
    $(".Option").show();
    $(".Nice.House").show();
    $(".Mediocre.House").show();
    $(".Low.House").show();
    $(".Text").show();
});

$(".Option").hide();
$(".Nice.House").hide();

$(".Mediocre.House").hide();


$(".Low.House").hide();

$(".Text").hide();

$(".Nice-House").click(function() {
    $(".House").text("2,888,000");
});
$(".Medicore.House").click();
$(".Mediocre.House").text("748,000");

$(".Low.House").click();
$(".Low.House").text("3,000 for rent");
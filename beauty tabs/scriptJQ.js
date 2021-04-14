$(function () {
    $("button").click(function () {
        let name = $(this).attr("data-name");
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        let $targetTab = $(`.tab-content[data-name=${name}]`);
        $(".tab-content.active").removeClass("active");
        $targetTab.addClass("active");
    })
});
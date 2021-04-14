$(function () {
  $(".btn").click(function () {
    let $progress = $("#progress");
    if (!$progress.is(":animated")) {
      if ($progress.css("width") !== $("#bar").css("width")) {
        $progress.animate(
          {
            width: `100%`,
          },
          "slow"
        );
        /* todo Третий аргумент .animate() - функция которая сработает когда анимация уже остановлена. Незачем останавливать анимацию в этой функции.
            Поправь и можешь смержить эту ветку в master. В остальном всё ок
             */
      }
    }
  });
});

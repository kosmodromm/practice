$(function () {
    // todo тут при каждом действии 2 раза выполняется поиск по #modal. Создай внешнюю переменную
    let $modalWrapper = $('#modal');
    /*
    * todo многие методы jquery объектов возвращают сами jquery объекты. В том числе и .css() с 2 аргументами
    * Т. е. $('#modal').css(..., ...) вернёт то же что и $('#modal'). Поэтому можно делать цепочки вызовов:
    * $('#modal').css(..., ...).css(..., ...)...
    * Кроме того в .css можно сразу передать объект {свойство: 'значение', свойство: 'значение', ...} чтобы не вызывать кучу раз
    * Переделай все двойные вызовы css на вариант с цепочкой вызовов либо на вариант с объектом
    */
    $('#open-modal-btn').click(function () {
        $modalWrapper.css({
            'visibility': 'visible',
            'opacity': '1'
        });
    })

    $('.close').click(function () {
        $modalWrapper.css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    })

    $(window).click(function (event) {
        if (event.target.id === 'modal') {
            $modalWrapper.css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    })
})
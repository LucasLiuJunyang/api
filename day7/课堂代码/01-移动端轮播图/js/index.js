window.addEventListener('load', function () {
    var focus = document.querySelector('.focus')
    var ul = focus.children[0];
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000);
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            var translatex = -index * w;
            ul.style.transition = 'none'
            ul.style.transform = 'translateX(' + translatex + 'px)'
        } else if (index < 0) {
            index = 2;
            var translatex = -index * w;
            ul.style.transition = 'none'
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    });
    var startX = 0;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function (e) {
        var moveX = e.targetTouches[0].pageX - startX
        var translatex = -index * w + moveX;
        ul.style.transition = 'none'
        ul.style.transform = 'translateX(' + translatex + 'px)'
        e.preventDefault();

    })
})
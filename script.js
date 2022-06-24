var images  = ['img/rei.png', 'img/rei_png.png'],
    length  = images.length,
    index   = 1;
setInterval(function() {
    if(index == length) index = 0;
    document.getElementById('image_id').src = images[index++];
}, 1000)
$(document).ready(function() {
    const images = [
        'img/image1.jpeg',
        'img/image2.jpeg',
        'img/image3.jpeg',
        'img/image4.jpeg',
        'img/image5.jpeg',
        'img/image6.jpeg',
        'img/image7.jpeg',
        'img/image8.jpeg',
        'img/image9.jpeg',
        'img/image10.jpeg',
        'img/image11.jpeg',
        'img/image12.jpeg'
    ];

    images.forEach(image => {
        $('.gallery').append(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                <img src="${image}" alt="Photo" class="img-fluid gallery-img">
            </div>
        `);
    });

    $('.gallery-img').on('click', function() {
        const src = $(this).attr('src');
        $('.modal-img').attr('src', src);
        $('#imageModal').modal('show');
    });
});
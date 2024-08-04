$(document).ready(function() {
    const images = [
        { src: 'img/image1.jpeg', description: 'Description for image 1' },
        { src: 'img/image2.jpeg', description: 'Description for image 2' },
        { src: 'img/image3.jpeg', description: 'Description for image 3' },
        { src: 'img/image4.jpeg', description: 'Description for image 4' },
        { src: 'img/image5.jpeg', description: 'Description for image 5' },
        { src: 'img/image6.jpeg', description: 'Description for image 6' },
        { src: 'img/image7.jpeg', description: 'Description for image 7' },
        { src: 'img/image8.jpeg', description: 'Description for image 8' },
        { src: 'img/image9.jpeg', description: 'Description for image 9' },
        { src: 'img/image10.jpeg', description: 'Description for image 10' },
        { src: 'img/image11.jpeg', description: 'Description for image 11' },
        { src: 'img/image12.jpeg', description: 'Description for image 12' },
    ];

    const backgroundImage = { src: 'img/backgorund2.jpg' };
    images.push(backgroundImage);

    images.forEach(image => {
        $('.gallery').append(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                <div class="gallery-item">
                    <img src="${image.src}" alt="Photo" class="img-fluid gallery-img" data-description="${image.description}">
                </div>
            </div>
        `);
    });

    let imagesLoaded = 0;

    function checkIfAllImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            $('#loadingScreen').fadeOut('slow');
        }
    }

    $('.gallery-img').each(function() {
        if (this.complete) {
            checkIfAllImagesLoaded.call(this);
        } else {
            $(this).one('load', checkIfAllImagesLoaded);
        }
    });

    // Preload the background image
    const bgImg = new Image();
    bgImg.src = backgroundImage.src;
    if (bgImg.complete) {
        checkIfAllImagesLoaded.call(bgImg);
    } else {
        $(bgImg).one('load', checkIfAllImagesLoaded);
    }


    $('.gallery-img').on('click', function() {
        const src = $(this).attr('src');
        const description = $(this).data('description');
        $('.modal-img').attr('src', src);
        $('.modal-description').text(description);
        $('#imageModal').modal('show');
    });
});

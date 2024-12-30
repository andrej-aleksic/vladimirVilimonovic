$(document).ready(function () {
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
        { src: 'img/image5.jpeg', description: 'Description for image 5' },
        { src: 'img/image6.jpeg', description: 'Description for image 6' },
        { src: 'img/image7.jpeg', description: 'Description for image 7' },
        { src: 'img/image8.jpeg', description: 'Description for image 8' },
        { src: 'img/image9.jpeg', description: 'Description for image 9' },
        { src: 'img/image10.jpeg', description: 'Description for image 10' },
        { src: 'img/image11.jpeg', description: 'Description for image 11' },
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
        { src: 'img/image5.jpeg', description: 'Description for image 5' },
        { src: 'img/image6.jpeg', description: 'Description for image 6' },
        { src: 'img/image7.jpeg', description: 'Description for image 7' },
        { src: 'img/image8.jpeg', description: 'Description for image 8' },
        { src: 'img/image9.jpeg', description: 'Description for image 9' },
        { src: 'img/image10.jpeg', description: 'Description for image 10' },
        { src: 'img/image11.jpeg', description: 'Description for image 11' }
    ];

    const imagesPerPage = 25;
    let currentPage = 0;
    let imagesLoaded = 0;

    function loadImages() {
        const startIndex = currentPage * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;

        const chunk = images.slice(startIndex, endIndex);
        chunk.forEach(image => {
            $('.gallery').append(`
                <div class="gallery-item">
                    <img src="${image.src}" alt="Photo" class="img-fluid gallery-img" data-description="${image.description}">
                    <div class="overlay">${image.description}</div>
                </div>
            `);
        });

        currentPage++;

        // Hide the "Load More" button if no more images
        if (currentPage * imagesPerPage >= images.length) {
            $('#loadMore').hide();
        }

        preloadImages(chunk.map(image => image.src));
    }

    // Initial load
    loadImages();

    // Add Load More button
    $('.main-container').append(`
        <div class="text-center mt-4">
            <button id="loadMore" class="btn btn-warning">Load More</button>
        </div>
    `);

    $('#loadMore').on('click', function () {
        loadImages();
    });

    function preloadImages(imageSources) {
        imageSources.forEach(src => {
            const img = new Image();
            img.src = src;
            if (img.complete) {
                checkIfAllImagesLoaded();
            } else {
                $(img).on('load', checkIfAllImagesLoaded);
            }
        });
    }

    function checkIfAllImagesLoaded() {
        imagesLoaded++;
        const totalVisibleImages = $('.gallery-img').length;
        if (imagesLoaded === totalVisibleImages) {
            $('#loadingScreen').fadeOut('slow');
        }
    }

    // Preload the background image
    const bgImg = new Image();
    bgImg.src = 'img/_pozadina.jpg';
    if (bgImg.complete) {
        checkIfAllImagesLoaded();
    } else {
        $(bgImg).on('load', checkIfAllImagesLoaded);
    }

    $('.gallery').on('click', '.gallery-img', function () {
        const src = $(this).attr('src');
        const description = $(this).data('description');

        $('.modal-img').attr('src', src);
        $('.modal-description').text(description);

        $('#imageModal').on('shown.bs.modal', function () {
            const modalDialog = $(this).find('.modal-dialog');
            modalDialog.css('max-width', '90%');
        });

        $('#imageModal').modal('show');
    });

    window.addEventListener('resize', () => {
        const slideshow = document.querySelector('#slideshow');
        slideshow.style.height = `${window.innerHeight}px`;
    });
});
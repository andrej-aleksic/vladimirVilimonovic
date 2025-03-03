$(document).ready(function () {
    const images = [
        { src: 'img/72nd Special Brigade - Serbia.jpg', description: '72nd Special Brigade - Serbia' },
        { src: 'img/Aerial Photography - Albania 1.jpg', description: 'Aerial Photography - Albania' },
        { src: 'img/Aerial Photography - Albania 2.jpg', description: 'Aerial Photography - Albania' },
        { src: 'img/Aerial Photography - Macedonia 1.jpg', description: 'Aerial Photography - Macedonia' },
        { src: 'img/Aerial Photography - Macedonia 2.jpg', description: 'Aerial Photography - Macedonia' },
        { src: 'img/Aerial Photography - Macedonia 3.jpg', description: 'Aerial Photography - Macedonia' },
        { src: 'img/Aerial Photography - Serbia 1.jpg', description: 'Aerial Photography - Serbia' },
        { src: 'img/Aerial Photography - Serbia 2.jpg', description: 'Aerial Photography - Serbia' },
        { src: 'img/Aerial Photography - Serbia 3.jpg', description: 'Aerial Photography - Serbia' },
        { src: 'img/Aras Gibieza - Sarajevo, Bosnia & Herzegovina.jpg', description: 'Aras Gibieza - Sarajevo, Bosnia & Herzegovina' },
        { src: 'img/Biljana Djenic - Krushevo, Macedonia.jpg', description: 'Biljana Djenic - Krushevo, Macedonia' },
        { src: 'img/Boris Stijepovic - Durmitor National Park, Montenegro.jpg', description: 'Boris Stijepovic - Durmitor National Park, Montenegro' },
        { src: 'img/Borislav Mesi - Krushevo, Macedonia.jpg', description: 'Borislav Mesi - Krushevo, Macedonia' },
        { src: 'img/Borislav Mesi - Oludeniz, Turkey.jpg', description: 'Borislav Mesi - Oludeniz, Turkey' },
        { src: 'img/David Coulthard - Sarajevo, Bosnia & Herzegovina 1.jpg', description: 'David Coulthard - Sarajevo, Bosnia & Herzegovina' },
        { src: 'img/David Coulthard - Sarajevo, Bosnia & Herzegovina 2.jpg', description: 'David Coulthard - Sarajevo, Bosnia & Herzegovina' },
        { src: 'img/Drinska Regata - Serbia 1.jpg', description: 'Drinska Regata - Serbia' },
        { src: 'img/Drinska Regata - Serbia 2.jpg', description: 'Drinska Regata - Serbia' },
        { src: 'img/Elias Hountondji - Sarajevo, Bosnia & Herzegovina 3.jpg', description: 'Elias Hountondji - Sarajevo, Bosnia & Herzegovina' },
        { src: 'img/Free Rider - Kopaonik, Serbia.jpg', description: 'Free Rider - Kopaonik, Serbia' },
        { src: 'img/Freestyle Snowboarding - Kopaonik, Serbia 1.jpg', description: 'Freestyle Snowboarding - Kopaonik, Serbia' },
        { src: 'img/Freestyle Snowboarding - Kopaonik, Serbia 2.jpg', description: 'Freestyle Snowboarding - Kopaonik, Serbia' },
        { src: 'img/Gentlemans Ride - Belgrade, Serbia 1.jpg', description: 'Gentlemans Ride - Belgrade, Serbia' },
        { src: 'img/Gentlemans Ride - Belgrade, Serbia 2.jpg', description: 'Gentlemans Ride - Belgrade, Serbia' },
        { src: 'img/Helicopter Rescue - Serbia 3.jpg', description: 'Helicopter Rescue - Serbia' },
        { src: 'img/Heliocopter Rescue - Serbia 1.jpg', description: 'Heliocopter Rescue - Serbia' },
        { src: 'img/Heliocopter Rescue - Serbia 2.jpg', description: 'Heliocopter Rescue - Serbia' },
        { src: 'img/Highlander - Stara Planina, Serbia.jpg', description: 'Highlander - Stara Planina, Serbia' },
        { src: 'img/Ivan Maksimovic - Kopaonik, Serbia.jpg', description: 'Ivan Maksimovic - Kopaonik, Serbia' },
        { src: 'img/Jorge Atramiz - Albania.jpg', description: 'Jorge Atramiz - Albania' },
        { src: 'img/Jorge Atramiz - Durmitor National Park, Montenegro 1.jpg', description: 'Jorge Atramiz - Durmitor National Park, Montenegro' },
        { src: 'img/Jorge Atramiz - Durmitor National Park, Montenegro 2.jpg', description: 'Jorge Atramiz - Durmitor National Park, Montenegro' },
        { src: 'img/Jorge Atramiz - Ohrid Lake, Macedonia 1.jpg', description: 'Jorge Atramiz - Ohrid Lake, Macedonia' },
        { src: 'img/Jorge Atramiz - Ohrid Lake, Macedonia 2.jpg', description: 'Jorge Atramiz - Ohrid Lake, Macedonia' },
        { src: 'img/Kevin Philipp - Oludeniz, Turkey.jpg', description: 'Kevin Philipp - Oludeniz, Turkey' },
        { src: 'img/Mario Roman - Zlatibor, Serbia 1.jpg', description: 'Mario Roman - Zlatibor, Serbia' },
        { src: 'img/Mario Roman - Zlatibor, Serbia 2.jpg', description: 'Mario Roman - Zlatibor, Serbia' },
        { src: 'img/Mario Roman - Zlatibor, Serbia 3.jpg', description: 'Mario Roman - Zlatibor, Serbia' },
        { src: 'img/Matt Minyard - Oludeniz, Turkey 1.jpg', description: 'Matt Minyard - Oludeniz, Turkey' },
        { src: 'img/Matt Minyard - Oludeniz, Turkey 2.jpg', description: 'Matt Minyard - Oludeniz, Turkey' },
        { src: 'img/Mattia Toccafondi & Peter Menghetti - Tara National Park, Serbia.jpg', description: 'Mattia Toccafondi & Peter Menghetti - Tara National Park, Serbia' },
        { src: 'img/Michael Walkner - Zlatibor, Serbia 1.jpg', description: 'Michael Walkner - Zlatibor, Serbia' },
        { src: 'img/Michael Walkner - Zlatibor, Serbia 2.jpg', description: 'Michael Walkner - Zlatibor, Serbia' },
        { src: 'img/Michael Walkner - Zlatibor, Serbia 3.jpg', description: 'Michael Walkner - Zlatibor, Serbia' },
        { src: 'img/Milan Avic - Albania.jpg', description: 'Milan Avic - Albania' },
        { src: 'img/Milan Avic - Durmitor National Park, Montenegro.jpg', description: 'Milan Avic - Durmitor National Park, Montenegro' },
        { src: 'img/Milan Avic - Oludeniz, Turkey.jpg', description: 'Milan Avic - Oludeniz, Turkey' },
        { src: 'img/Milan Avic - Turkey.jpg', description: 'Milan Avic - Turkey' },
        { src: 'img/Milan Avic - Zlatibor, Serbia 2.jpg', description: 'Milan Avic - Zlatibor, Serbia' },
        { src: 'img/Milan Avic - Zlatibor, Serbia.jpg', description: 'Milan Avic - Zlatibor, Serbia' },
        { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 1.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 2.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 3.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 4.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 5.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 6.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Mountain Rescue Service - Kopaonik, Serbia 7.jpg', description: 'Mountain Rescue Service - Kopaonik, Serbia' },
    { src: 'img/Nenad Mitrovic - Oludeniz, Turkey 1.jpg', description: 'Nenad Mitrovic - Oludeniz, Turkey' },
    { src: 'img/Nenad Mitrovic - Oludeniz, Turkey 2.jpg', description: 'Nenad Mitrovic - Oludeniz, Turkey' },
    { src: 'img/Nenad Stojic - Llogara, Albania 1.jpg', description: 'Nenad Stojic - Llogara, Albania' },
    { src: 'img/Nenad Stojic - Llogara, Albania 2.jpg', description: 'Nenad Stojic - Llogara, Albania' },
    { src: 'img/Nenad Stojic - Oludeniz, Turkey.jpg', description: 'Nenad Stojic - Oludeniz, Turkey' },
    { src: 'img/Nenad Stojic - Zlatibor, Serbia.jpg', description: 'Nenad Stojic - Zlatibor, Serbia' },
    { src: 'img/Nikola Vuckovic - Durmitor National Park, Montenegro 1.jpg', description: 'Nikola Vuckovic - Durmitor National Park, Montenegro' },
    { src: 'img/No Limits Triathlon - Montenegro 1.jpg', description: 'No Limits Triathlon - Montenegro' },
    { src: 'img/No Limits Triathlon - Montenegro 3.jpg', description: 'No Limits Triathlon - Montenegro' },
    { src: 'img/No Limits Triathlon - Montenegro 4.jpg', description: 'No Limits Triathlon - Montenegro' },
    { src: 'img/No Limits Triathlon - Montenegro 6.jpg', description: 'No Limits Triathlon - Montenegro' },
    { src: 'img/No Limits Triathlon - Montenegro 7.jpg', description: 'No Limits Triathlon - Montenegro' },
    { src: 'img/Ognjen Puzovic - Kopaonik, Serbia 1.jpg', description: 'Ognjen Puzovic - Kopaonik, Serbia' },
    { src: 'img/Ognjen Puzovic - Kopaonik, Serbia 2.jpg', description: 'Ognjen Puzovic - Kopaonik, Serbia' },
    { src: 'img/Paragliding - Oludeniz, Turkey 1.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 10.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 2.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 3.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 4.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 6.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 7.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 8.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Oludeniz, Turkey 9.jpg', description: 'Paragliding - Oludeniz, Turkey' },
    { src: 'img/Paragliding - Rtanj Mountain, Serbia.jpg', description: 'Paragliding - Rtanj Mountain, Serbia' },
    { src: 'img/Paragliding - Turkey.jpg', description: 'Paragliding - Turkey' },
    { src: 'img/Paragliding - Vlore, Albania.jpg', description: 'Paragliding - Vlore, Albania' },
    { src: 'img/Pavle Rakovic - Kopaonik, Serbia.jpg', description: 'Pavle Rakovic - Kopaonik, Serbia' },
    { src: 'img/Petar Loncar - Durmitor National Park, Montenegro.jpg', description: 'Petar Loncar - Durmitor National Park, Montenegro' },
    { src: 'img/Petar Loncar - Ohrid Lake, Macedonia.jpg', description: 'Petar Loncar - Ohrid Lake, Macedonia' },
    { src: 'img/Petar Loncar - Oludeniz, Turkey 1.jpg', description: 'Petar Loncar - Oludeniz, Turkey' },
    { src: 'img/Petar Loncar - Oludeniz, Turkey 3.jpg', description: 'Petar Loncar - Oludeniz, Turkey' },
    { src: 'img/Petar Loncar - Oludeniz, Turkey 4.jpg', description: 'Petar Loncar - Oludeniz, Turkey' },
    { src: 'img/Petar Loncar - Oludeniz, Turkey 5.jpg', description: 'Petar Loncar - Oludeniz, Turkey' },
    { src: 'img/Petar Loncar - Zlatibor, Serbia 1.jpg', description: 'Petar Loncar - Zlatibor, Serbia' },
    { src: 'img/Petar Loncar - Zlatibor, Serbia 2.jpg', description: 'Petar Loncar - Zlatibor, Serbia' },
    { src: 'img/Petar Loncar - Zlatibor, Serbia 3.jpg', description: 'Petar Loncar - Zlatibor, Serbia' },
    { src: 'img/Petar Loncar - Zlatibor, Serbia 4.jpg', description: 'Petar Loncar - Zlatibor, Serbia' },
    { src: 'img/Pool Seshn - Kopaonik, Serbia 1.jpg', description: 'Pool Seshn - Kopaonik, Serbia' },
    { src: 'img/Pool Seshn - Kopaonik, Serbia 2.jpg', description: 'Pool Seshn - Kopaonik, Serbia' },
    { src: 'img/Pool Seshn - Kopaonik, Serbia 3.jpg', description: 'Pool Seshn - Kopaonik, Serbia' },
    { src: 'img/Pool Seshn - Kopaonik, Serbia 4.jpg', description: 'Pool Seshn - Kopaonik, Serbia' },
    { src: 'img/Portarit.jpg', description: 'Portarit' },
    { src: 'img/Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina 1.jpg', description: 'Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina 2.jpg', description: 'Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina 3.jpg', description: 'Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina 4.jpg', description: 'Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina 5.jpg', description: 'Red Bull Cliff Diving - Mostar, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Driftbrothers & Aras Gibieza - Sarajevo, Bosnia & Herzegovina.jpg', description: 'Red Bull Driftbrothers & Aras Gibieza - Sarajevo, Bosnia & Herzegovina' },
    { src: 'img/Red Bull Driftbrothers - Sarajevo, Bosnia & Herzegovina 1.jpg', description: 'Red Bull Driftbrothers - Sarajevo, Bosnia & Herzegovina' },
    { src: 'img/Rtanj Vertikal - Rtanj Mountain, Serbia.jpg', description: 'Rtanj Vertikal - Rtanj Mountain, Serbia' },
    { src: 'img/Serbian Trophy - Kopaonik, Serbia 1.jpg', description: 'Serbian Trophy - Kopaonik, Serbia' },
    { src: 'img/Serbian Trophy - Kopaonik, Serbia 2.jpg', description: 'Serbian Trophy - Kopaonik, Serbia' },
    { src: 'img/Serbian Trophy - Kopaonik, Serbia 3.jpg', description: 'Serbian Trophy - Kopaonik, Serbia' },
    { src: 'img/Serbian Trophy - Kopaonik, Serbia 4.jpg', description: 'Serbian Trophy - Kopaonik, Serbia' },
    { src: 'img/Skiing - Kopaonik, Serbia.jpg', description: 'Skiing - Kopaonik, Serbia' },
    { src: 'img/Snowmobile - Kopaonik, Serbia.jpg', description: 'Snowmobile - Kopaonik, Serbia' },
    { src: 'img/Teodor Kabakchiev - Zlatibor, Serbia.jpg', description: 'Teodor Kabakchiev - Zlatibor, Serbia' },
    { src: 'img/Trail Race Kopaonik - Kopaonik, Serbia.jpg', description: 'Trail Race Kopaonik - Kopaonik, Serbia' },
    { src: 'img/Tri Strane Kopa - Kopaonik, Serbia.jpg', description: 'Tri Strane Kopa - Kopaonik, Serbia' },
    { src: 'img/Triathlon - France.jpg', description: 'Triathlon - France' },
    { src: 'img/Uros Petkovic - Kopaonik, Serbia 1.jpg', description: 'Uros Petkovic - Kopaonik, Serbia' },
    { src: 'img/Uros Petkovic - Kopaonik, Serbia 2.jpg', description: 'Uros Petkovic - Kopaonik, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Golija, Serbia.jpg', description: 'Vladimir Vilimonovic - Golija, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Kopaonik, Serbia 1.jpg', description: 'Vladimir Vilimonovic - Kopaonik, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Kopaonik, Serbia 2.jpg', description: 'Vladimir Vilimonovic - Kopaonik, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Kopaonik, Serbia 3.jpg', description: 'Vladimir Vilimonovic - Kopaonik, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Kopaonik, Serbia 4.jpg', description: 'Vladimir Vilimonovic - Kopaonik, Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia 2.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia 3.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia 4.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia 5.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia 6.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladimir Vilimonovic - Serbia.jpg', description: 'Vladimir Vilimonovic - Serbia' },
    { src: 'img/Vladislav Mandic - Kopaonik, Serbia.jpg', description: 'Vladislav Mandic - Kopaonik, Serbia' },
    { src: 'img/Wade Young - Zlatibor, Serbia 1.jpg', description: 'Wade Young - Zlatibor, Serbia' },
    { src: 'img/Wade Young - Zlatibor, Serbia 2.jpg', description: 'Wade Young - Zlatibor, Serbia' },
    { src: 'img/Wild Bear MTB - Tara National Park, Serbia 1.jpg', description: 'Wild Bear MTB - Tara National Park, Serbia' },
    { src: 'img/Wild Bear MTB - Tara National Park, Serbia 3.jpg', description: 'Wild Bear MTB - Tara National Park, Serbia' },
    { src: 'img/Wild Bear MTB - Tara National Park, Serbia 4.jpg', description: 'Wild Bear MTB - Tara National Park, Serbia' },
    { src: 'img/Wild Bear MTB - Tara National Park, Serbia 5.jpg', description: 'Wild Bear MTB - Tara National Park, Serbia' },
    { src: 'img/Wild Bear MTB - Tara National Park, Serbia 6.jpg', description: 'Wild Bear MTB - Tara National Park, Serbia' },
    { src: 'img/Wild Horses - Albania 1.jpg', description: 'Wild Horses - Albania' },
    { src: 'img/Wild Horses - Serbia.jpg', description: 'Wild Horses - Serbia' },
    { src: 'img/XRoss Hard Enduro Rally - Zlatibor, Serbia 1.jpg', description: 'XRoss Hard Enduro Rally - Zlatibor, Serbia' },
    { src: 'img/XRoss Hard Enduro Rally - Zlatibor, Serbia 2.jpg', description: 'XRoss Hard Enduro Rally - Zlatibor, Serbia' },
    { src: 'img/XRoss Hard Enduro Rally - Zlatibor, Serbia 3.jpg', description: 'XRoss Hard Enduro Rally - Zlatibor, Serbia' },
    { src: 'img/XRoss Hard Enduro Rally - Zlatibor, Serbia 4.jpg', description: 'XRoss Hard Enduro Rally - Zlatibor, Serbia' },
    { src: 'img/XRoss Hard Enduro Rally - Zlatibor, Serbia 5.jpg', description: 'XRoss Hard Enduro Rally - Zlatibor, Serbia' }

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
    bgImg.src = 'img/pozadina.jpg';
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

    $('.read-more-btn').click(function () {
        const moreText = $('.more-text');
        if (moreText.is(':visible')) {
            moreText.slideUp(300);
            $(this).text('Read More');
        } else {
            moreText.slideDown(300);
            $(this).text('Read Less');
        }
    });
});
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const body = this.nextElementSibling;


        if (body.style.display === 'block') {
            body.style.display = 'none';
            this.classList.remove('active');
        } else {

            document.querySelectorAll('.accordion-body').forEach(body => body.style.display = 'none');
            document.querySelectorAll('.accordion-header').forEach(header => header.classList.remove('active'));


            body.style.display = 'block';
            this.classList.add('active');
        }
    });
});

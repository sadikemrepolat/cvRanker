document.addEventListener("DOMContentLoaded", function () {
    const ilanfileInput = document.getElementById('ilanfile-input');
    const ilanfileDroparea = document.getElementById('ilanfile-droparea');

    const cvfileInput = document.getElementById('cvfile-input');
    const cvfileDroparea = document.getElementById('cvfile-droparea');

    ilanfileDroparea.addEventListener('click', function () {
        ilanfileInput.click();
    });

    ilanfileDroparea.addEventListener('dragover', function (event) {
        event.preventDefault();
        ilanfileDroparea.style.backgroundColor = '#f0f0f0';
    });

    ilanfileDroparea.addEventListener('dragleave', function () {
        ilanfileDroparea.style.backgroundColor = '';
    });

    ilanfileDroparea.addEventListener('drop', function (event) {
        event.preventDefault();
        ilanfileDroparea.style.backgroundColor = '';
        ilanfileInput.files = event.dataTransfer.files;
    });

    cvfileDroparea.addEventListener('click', function () {
        cvfileInput.click();
    });

    cvfileDroparea.addEventListener('dragover', function (event) {
        event.preventDefault();
        cvfileDroparea.style.backgroundColor = '#f0f0f0';
    });

    cvfileDroparea.addEventListener('dragleave', function () {
        cvfileDroparea.style.backgroundColor = '';
    });

    cvfileDroparea.addEventListener('drop', function (event) {
        event.preventDefault();
        cvfileDroparea.style.backgroundColor = '';
        cvfileInput.files = event.dataTransfer.files;
    });
});

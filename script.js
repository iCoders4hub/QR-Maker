function generateQRCode() {
    const inputText = document.getElementById('qr-input').value;
    const qrSize = document.getElementById('size').value;
    const qrColor = document.getElementById('color').value;
    const qrBgColor = document.getElementById('bg-color').value;

    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!inputText) {
        errorMessage.style.display = 'flex';
        errorMessage.classList.remove('hide');

        setTimeout(() => {
            errorMessage.classList.add('hide');
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 500);
        }, 800);

        return;
    }

    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = "";

    let finalBgColor = qrBgColor === "#ffffff" ? "transparent" : qrBgColor; 

    const qrCode = new QRCode(qrcodeContainer, {
        text: inputText,
        width: parseInt(qrSize),
        height: parseInt(qrSize),
        colorDark: qrColor,
        colorLight: finalBgColor, 
        correctLevel: QRCode.CorrectLevel.H
    });

    const downloadLink = document.getElementById("download-link");
    downloadLink.style.display = "block";

    const canvas = qrcodeContainer.querySelector('canvas');
    downloadLink.href = canvas.toDataURL("image/png");

    successMessage.style.display = 'flex';
    successMessage.classList.remove('hide');

    setTimeout(() => {
        successMessage.classList.add('hide');
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 500);
    }, 800);
}

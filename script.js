const qrInput = document.getElementById("qr-input");
const generateButton = document.getElementById("generate-button");
const qrCodeDiv = document.getElementById("qr-code");

generateButton.addEventListener("click", generateQRCode);

function generateQRCode() {
  const qrText = qrInput.value;
  if (qrText.trim() === "") {
    alert("Please enter some text or URL.");
    return;
  }

  // Clear previous QR code
  qrCodeDiv.innerHTML = "";

  // Create a new QRCode image element
  const qrImage = document.createElement("img");

  // Set the QR code source to a data URL generated using Google Charts API
  qrImage.src = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(qrText)}`;

  // Append the QR code image to the QR code div
  qrCodeDiv.appendChild(qrImage);
}

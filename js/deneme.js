const form = document.getElementById('dataForm');
const display = document.getElementById('dataDisplay');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taxiNumber = document.getElementById('taxiNumber').value;
  const driverName = document.getElementById('driverName').value;

  // LocalStorage'a veri ekleme
  const currentData = JSON.parse(localStorage.getItem('taxiData')) || [];
  currentData.push({ taxiNumber, driverName });
  localStorage.setItem('taxiData', JSON.stringify(currentData));

  displayData();
  form.reset();
});

function displayData() {
  const storedData = JSON.parse(localStorage.getItem('taxiData')) || [];
  display.innerHTML = storedData
    .map(data => `<p>Taksi No: ${data.taxiNumber}, Şoför: ${data.driverName}</p>`)
    .join('');
}

displayData(); // Sayfa yüklendiğinde verileri göster

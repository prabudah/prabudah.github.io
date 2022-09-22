const scriptURL = 'https://script.google.com/macros/s/AKfycbweqplmqHXlXHziSfkR60qcCZAyD1az62eMSUg7K_HDCjYbjKdVNUYn4UXppJr9Tdz4/exec';
const form = document.forms['visitor_message'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   tampilkan btnLoading
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // hilangkan btnLoading ubah btnKirim
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //   alert pesan telah masuk
      Swal.fire('Terkirim !!', 'Pesan Kamu sudah dibaca. Sehat selalu :)', 'success');
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

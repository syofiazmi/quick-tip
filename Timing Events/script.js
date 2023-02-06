// setTimeout() - ini akan menjalankan program kita setelah kita menunggu beberapa waktu, tergantung waktu yang kita tuliskan di function nanti.

// const tes = setTimeout(function(){
//     console.log('ok');
// }, 5000);


// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function(){
//     clearTimeout(tes);
//     console.log('selesai');
// });


// setInterval() - melakukan sesuatu berulang-ulang dengan interval waktu tertentu.

// const tes = setInterval(function () {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearInterval(tes);
//     console.log('selesai');
// });



// Program hitung mundur
const tanggalTujuan = new Date('Feb 6, 2023 17:40:00').getTime();

const hitungMundur = setInterval(function () {

    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu Anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    if ( selisih < 0 ) {
        clearInterval(hitungMundur);
        teks.innerHTML = 'Waktu Anda HABIS!';
    }

}, 1000);





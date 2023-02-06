// setTimeout() - ini akan menjalankan program kita setelah kita menunggu beberapa waktu, tergantung waktu yang kita tuliskan di function nanti.

// setInterval()


const tes = setTimeout(function(){
    console.log('ok');
}, 5000);


const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function(){
    clearTimeout(tes);
    console.log('selesai');
});
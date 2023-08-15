document.addEventListener('DOMContentLoaded', function () {
    // Luas Segitiga
    const alasInput = document.getElementById('alas-input');
    const tinggiInput = document.getElementById('tinggi-input');
    const luasResultInput = document.getElementById('luas-input');
    const luasBtn = document.getElementById('luasBtn');
    const resetLuasBtn = document.getElementById('resetBtn');

    luasBtn.addEventListener('click', function () {
        const alas = parseFloat(alasInput.value);
        const tinggi = parseFloat(tinggiInput.value);
        const luas = 0.5 * alas * tinggi;

        if (!isNaN(luas)) {
            luasResultInput.value = luas;
        } else {
            luasResultInput.value = 'Masukkan nilai yang valid';
        }
    });

    resetLuasBtn.addEventListener('click', function () {
        alasInput.value = '';
        tinggiInput.value = '';
        luasResultInput.value = '';
    });

    // Keliling Segitiga
    const aInput = document.getElementById('A-input');
    const bInput = document.getElementById('B-input');
    const cInput = document.getElementById('C-input');
    const kelilingResultInput = document.getElementById('keliling-input');
    const kelilingBtn = document.getElementById('kelilingBtn');
    const hapusBtn = document.getElementById('hapusBtn');

    kelilingBtn.addEventListener('click', function () {
        const a = parseFloat(aInput.value);
        const b = parseFloat(bInput.value);
        const c = parseFloat(cInput.value);
        const keliling = a + b + c;

        if (!isNaN(keliling)) {
            kelilingResultInput.value = keliling;
        } else {
            kelilingResultInput.value = 'Masukkan nilai yang valid';
        }
    });

    hapusBtn.addEventListener('click', function () {
        aInput.value = '';
        bInput.value = '';
        cInput.value = '';
        kelilingResultInput.value = '';
    });
});

function calculateDiscount() {
    // Harga terdefinisi untuk setiap produk
    const prices = {
        kalung: 50000, // Harga untuk Kalung
        gelang: 30000, // Harga untuk Gelang
        cincin: 20000  // Harga untuk Cincin
    };

    // Ambil nilai dari input
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    // Validasi input
    if (isNaN(quantity) || quantity <= 0) {
        alert("Tolong masukkan jumlah yang valid!");
        return;
    }

    // Tentukan harga barang
    const price = prices[product];

    // Tentukan diskon berdasarkan jumlah produk
    let discount = 0;
    if (quantity >= 10) {
        discount = 10;
    } else if (quantity >= 5) {
        discount = 5;
    }

    // Hitung jumlah diskon dan harga akhir
    const totalPrice = price * quantity;
    const discountAmount = (totalPrice * discount) / 100;
    const finalPrice = totalPrice - discountAmount;

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        Barang: ${product.charAt(0).toUpperCase() + product.slice(1)} <br>
        Harga Satuan: Rp ${price.toFixed(2)} <br>
        Jumlah Produk: ${quantity} <br>
        Jumlah Diskon: Rp ${discountAmount.toFixed(2)} (${discount}%) <br>
        Harga Setelah Diskon: Rp ${finalPrice.toFixed(2)}
    `;
}

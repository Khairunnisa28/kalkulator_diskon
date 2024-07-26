const prices = {
    kalung: 50000,
    gelang: 30000,
    cincin: 20000
};

let cart = [];

function addToCart() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Tolong masukkan jumlah yang valid!");
        return;
    }

    cart.push({ product, quantity });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = `
        <h3>Keranjang Belanja</h3>
        <table>
            <tr>
                <th>Barang</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Subtotal</th>
            </tr>
            ${cart.map(item => `
                <tr>
                    <td>${item.product.charAt(0).toUpperCase() + item.product.slice(1)}</td>
                    <td>${item.quantity}</td>
                    <td>Rp ${prices[item.product].toFixed(2)}</td>
                    <td>Rp ${(prices[item.product] * item.quantity).toFixed(2)}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

function calculateTotal() {
    let totalPrice = 0;
    let totalDiscount = 0;

    cart.forEach(item => {
        const price = prices[item.product];
        const quantity = item.quantity;
        const subtotal = price * quantity;

        let discount = 0;
        if (quantity >= 10) {
            discount = 10;
        } else if (quantity >= 5) {
            discount = 5;
        }

        const discountAmount = (subtotal * discount) / 100;
        totalDiscount += discountAmount;
        totalPrice += subtotal - discountAmount;
    });

    document.getElementById('result').innerHTML = `
        Total Harga: Rp ${totalPrice.toFixed(2)} <br>
        Total Diskon: Rp ${totalDiscount.toFixed(2)}
    `;
}

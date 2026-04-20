const API_URL = 'http://localhost:5000/api/parts';
const ORDER_API_URL = 'http://localhost:5000/api/orders';

//lấy danh sách linh kiện
async function fetchParts() {
    try {
        const res = await fetch(API_URL);
        const parts = await res.json();
        const list = document.getElementById('part-list');
        
        if(list) {
            list.innerHTML = parts.map(part => `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <img src="${part.imageUrl || 'https://via.placeholder.com/150'}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${part.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate">${part.name}</h5>
                            <p class="text-muted small mb-1">Vật liệu: ${part.material}</p>
                            <p class="text-muted small mb-2">Thời gian in: ${part.printTime} phút</p>
                            <p class="fw-bold text-danger fs-5">${part.price.toLocaleString()} VNĐ</p>
                            
                            <div class="mt-auto">
                                <a href="detail.html?id=${part._id}" class="btn btn-outline-info btn-sm w-100 mb-2">Xem chi tiết & Đánh giá</a>
                                <button onclick="placeOrder('${part.name}', ${part.price})" class="btn btn-success btn-sm w-100">🛒 Đặt hàng ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error("Lỗi khi tải danh sách linh kiện:", error);
    }
}

// placeOrder
function placeOrder(name, price) {
    // Chuyển hướng sang trang checkout và truyền dữ liệu qua Query String
    window.location.href = `checkout.html?name=${encodeURIComponent(name)}&price=${price}`;
}

fetchParts();
class Product {
    constructor(maSanPham, tenMay, tenHang, giaBan, soLuong, viTri) {
        this.maSanPham = maSanPham;
        this.tenMay = tenMay;
        this.tenHang = tenHang;
        this.giaBan = giaBan;
        this.soLuong = soLuong;
        this.viTri = viTri;
    }
}
const sanPham1 = new Product("vn-001", "legion", "lenovo", "17000000", "100", "A1.01");
const sanPham2 = new Product("vn-002", "Thinkbook", "lenovo", "27000000", "100", "A1.02");
const sanPham3 = new Product("vn-003", "Thinhpad", "lenovo", "37000000", "100", "A1.03");
const sanPham4 = new Product("vn-004", "Tuf A14", "Asus", "41000000", "100", "A1.01");
const productList = [];
let productIndexItem = -1;
productList.push(sanPham1, sanPham2, sanPham3, sanPham4);
function displayProduct() {
    const tableData = document.getElementById("tableData");
    let data = '';
    for (let i = 0; i < productList.length; i++) {
        data += `<tr>
        <td class="table-cell">${productList[i].maSanPham}</td>
        <td class="table-cell">${productList[i].tenMay}</td>
        <td class="table-cell">${productList[i].tenHang}</td>
        <td class="table-cell">${productList[i].giaBan}</td>
        <td class="table-cell">${productList[i].soLuong}</td>
        <td class="table-cell">${productList[i].viTri}</td>
        <td class="border border-slate-300">
             <button class="toolbutton" onclick="editProduct(${i})">Sửa</button>
             <button class="toolbutton" onclick="deleteProduct(${i})">Xóa</button>
         </td>
        </tr>
        `
    }
    tableData.innerHTML = data;
}
displayProduct();
function addProduct() {
    const maSanPham = document.getElementById("maSanPham").value;
    const tenMay = document.getElementById("tenMay").value;
    const tenHang = document.getElementById("tenHang").value;
    const giaBan = document.getElementById("giaBan").value;
    const soLuong = document.getElementById("soLuong").value;
    const viTri = document.getElementById("viTri").value;
    if (productIndexItem !== -1) {
        productList[productIndexItem].maSanPham = maSanPham;
        productList[productIndexItem].tenMay = tenMay;
        productList[productIndexItem].tenHang = tenHang;
        productList[productIndexItem].giaBan = giaBan;
        productList[productIndexItem].soLuong = soLuong;
        productList[productIndexItem].viTri = viTri;

    } else {
        const newProduct = new Product(maSanPham, tenMay, tenHang, giaBan, soLuong, viTri);
        productList.push(newProduct);
    }
    if (maSanPham === '' || tenHang === '' || giaBan === '' || tenMay === '' || soLuong === '' || viTri === '') {
        displayToast("Vui lòng nhập dữ liệu");
        return;
    }
    displayProduct();
    document.getElementById("maSanPham").value = "";
    document.getElementById("tenMay").value = "";
    document.getElementById("tenHang").value = "";
    document.getElementById("giaBan").value = "";
    document.getElementById("soLuong").value = "";
    document.getElementById("viTri").value = "";
    displayToast("thành công");

}
function displayToast(message) {
    var toastEl = document.getElementById('liveToast');
    document.getElementById('mess-toast').innerText = message;
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}
let productToDelete = null;
function deleteProduct (item) {
    productToDelete = item;
    const myModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    myModal.show();
}
document.getElementById('confirmDeleteBtn').addEventListener('click',function(){
    if (productToDelete !== null) {
        productList.splice(productToDelete, 1);
        displayProduct();
    }
    const myModal = bootstrap.Modal.getInstance( document.getElementById('confirmModal'));
    myModal.hide();
    productToDelete = null;
});

function editProduct (item) {
    document.getElementById("maSanPham").value = productList[item].maSanPham;
    document.getElementById("tenMay").value = productList[item].tenMay;
    document.getElementById("tenHang").value = productList[item].tenHang;
    document.getElementById("giaBan").value = productList[item].giaBan;
    document.getElementById("soLuong").value = productList[item].soLuong;
    document.getElementById("viTri").value = productList[item].viTri;
    productIndexItem = item;
}


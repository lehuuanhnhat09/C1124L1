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
const productList = [];
productList.push(sanPham1);
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
    const newProduct = new Product(maSanPham, tenMay, tenHang, giaBan, soLuong, viTri);
    productList.push(newProduct);
    displayProduct();
    document.getElementById("maSanPham").value = "";
    document.getElementById("tenMay").value = "";
    document.getElementById("tenHang").value = "";
    document.getElementById("giaBan").value = "0";
    document.getElementById("soLuong").value = "0";
    document.getElementById("viTri").value = "";
}
function addproduct(pname, pprice, pimage) {
    let html = 
        '<div class="products">' +
            '<img src="' + pimage + '">' +
            '<div class="details">' +
                '<p class="name">' + pname + '</p>' +
                '<p class="price">₹' + pprice + '</p>' +
            '</div>' +
        '</div>';

    document.querySelector(".productbox").innerHTML += html;
}
let pname=document.getElementById("productname")
let pprice=document.getElementById("productprice")
let pimage=document.getElementById("productimg")
let addproductb=document.getElementById("addproductbtn")


addproductb.addEventListener("click",()=>{
    addproduct(pname.value,pprice.value,pimage.value)
    pname.value=" "
    pprice.value=" "
    pimage.value=" "
})
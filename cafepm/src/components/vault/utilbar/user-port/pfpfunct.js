let UPI = document.getElementById("user-pfp-img");
let IPFP = document.getElementById("input-pfp");

IPFP.onchange = function() {
    UPI.src = URL.createObjectURL(IPFP.files[0]);
}
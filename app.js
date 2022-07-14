const inputEncodeSelect = document.querySelector(".wrapper .input .text");
const inputDecodeSelect = document.querySelector(".wrapper .input .text1");
const encodebtn = document.querySelector(".wrapper .btns .encode");
const decodebtn = document.querySelector(".wrapper .btns .decode");
const Decoderesult = document.querySelector(".wrapper .output .DecodeResult");
const Encoderesult = document.querySelector(".wrapper .output .encodeResult");

const encode = () => {
    let text = inputEncodeSelect.value;
    let encode = window.btoa(text);
    Encoderesult.innerHTML = encode;
}

const decode = () => {
    let text = inputDecodeSelect.value;
    let decode = window.atob(text);
    Decoderesult.innerHTML = decode;
}

encodebtn.addEventListener("click", encode);
decodebtn.addEventListener("click", decode);
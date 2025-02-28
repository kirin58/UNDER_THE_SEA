document.querySelectorAll(".inputBanner input[type='file'], .pictprice input[type='file'], .pictprice1 input[type='file'], .pictprice2 input[type='file'], .inputpromo input[type='file']").forEach(input => { 
    input.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const maxSize = 5 * 1024 * 1024; 

        const label = input.closest("label");
        const previewImage = label.querySelector(".previewImage");
        const uploadText = label.querySelector(".uploadText");
        const errorText = label.querySelector(".errorText");

        if (file) {
            if (file.size > maxSize) {
                if (errorText) {
                    errorText.textContent = "The file size must not exceed 5 MB!";
                    errorText.style.display = "block";
                } else {
                    alert("The file size must not exceed 5 MB!");
                }
                event.target.value = "";            
                previewImage.style.display = "none"; 
                uploadText.style.display = "block";  
            } else {
                if (errorText) {
                    errorText.style.display = "none";
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = "block";
                    uploadText.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        }
    });
});

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage");
    const uploadText = document.getElementById("uploadText");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("fileInput1").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage1");
    const uploadText = document.getElementById("uploadText1");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileInput2").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage2");
    const uploadText = document.getElementById("uploadText2");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileInput3").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage3");
    const uploadText = document.getElementById("uploadText3");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileInput4").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage4");
    const uploadText = document.getElementById("uploadText4");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileInput5").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewImage5");
    const uploadText = document.getElementById("uploadText5");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});

// price
document.getElementById("fileprice").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewprice");
    const uploadText = document.getElementById("uploadprice");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileprice1").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewprice1");
    const uploadText = document.getElementById("uploadprice1");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileprice2").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewprice2");
    const uploadText = document.getElementById("uploadprice2");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileprice3").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewprice3");
    const uploadText = document.getElementById("uploadprice3");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("fileprice4").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("previewprice4");
    const uploadText = document.getElementById("uploadprice4");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});


// promotion
function previewImage(event) {
    const input = event.target;
    const file = input.files[0];
    const preview = document.getElementById("previewpromo");
    const promoText = document.getElementById("promoText");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            promoText.style.display = "none"; // ซ่อนข้อความ
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
        promoText.style.display = "block";
    }
}
function previewImage1(event) {
    const input = event.target;
    const file = input.files[0];
    const preview = document.getElementById("previewpromo1");
    const promoText = document.getElementById("promoText1");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            promoText.style.display = "none"; // ซ่อนข้อความ
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
        promoText.style.display = "block";
    }
}
function previewImage2(event) {
    const input = event.target;
    const file = input.files[0];
    const preview = document.getElementById("previewpromo2");
    const promoText = document.getElementById("promoText2");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            promoText.style.display = "none"; // ซ่อนข้อความ
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
        promoText.style.display = "block";
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 2000);
}
function showPrice() {
    document.getElementById("priceLink").classList.add("activeLink");
    document.getElementById("promotionLink").classList.remove("activeLink");
    document.getElementById("promotionTitle").innerText = "Price";
    document.getElementById("promotionContent").innerHTML = `
    <div class="content" id="promotionContent">
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <div class="head-price">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                        </div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <label class="pictprice">
                        <input type="file" id="fileprice" accept="image/*">
                        <img id="previewprice" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; height: 100%;">
                        <span id="uploadprice">Choose Image</span>
                        <span class="errorText" style="display: none; color: red;">The file size must not exceed 5 MB!</span>
                    </label>
                    <label class="pictprice">
                        <input type="file" id="fileprice1" accept="image/*">
                        <img id="previewprice1" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; height: 100%;">
                        <span id="uploadprice1">Choose Image</span>
                        <span class="errorText" style="display: none; color: red;">The file size must not exceed 5 MB!</span>
                    </label>
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <div class="head-price">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                        </div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <label class="pictprice1">
                        <input type="file" id="fileprice2" accept="image/*">
                        <img id="previewprice2" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; height: 100%;">
                        <span id="uploadprice2">Choose Image</span>
                        <span class="errorText" style="display: none; color: red;">The file size must not exceed 5 MB!</span>
                    </label>
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <div class="head-price">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                        </div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                    <div class="pricedescription">
                        <div class="head-price">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                        </div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <label class="pictprice2">
                        <input type="file" id="fileprice3" accept="image/*">
                        <img id="previewprice3" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; height: 100%;">
                        <span id="uploadprice3">Choose Image</span>
                        <span class="errorText" style="display: none; color: red;">The file size must not exceed 5 MB!</span>
                    </label>
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <div class="head-price">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                        </div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <div class="input-price">
                                    <input type="text" id="Priceinput" name="Priceinput" placeholder="Price">
                                </div>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <label class="pictprice1">
                        <input type="file" id="fileprice4" accept="image/*">
                        <img id="previewprice4" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; height: 100%;">
                        <span id="uploadprice4">Choose Image</span>
                        <span class="errorText" style="display: none; color: red;">The file size must not exceed 5 MB!</span>
                    </label>
                </div>
            </div>
        </div>
    `;
}
function showPromotion() {
    document.getElementById("promotionLink").classList.add("activeLink");
    document.getElementById("priceLink").classList.remove("activeLink")
    document.getElementById("promotionTitle").innerText = "Promotion";
    document.getElementById("promotionContent").innerHTML = `
    <div class="Promotion_column">
        <div class="Promotion1">
            <div class="promo-box">
                <label class="inputpromo">
                    <input type="file" id="promoInput" accept="image/*" onchange="previewImage(event)">
                    <img id="previewpromo" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; border-radius: 10px;">
                    <span id="promoText">Choose Image</span>
                    <span class="errorText" style="display: none; color: red;">ไฟล์ต้องมีขนาดไม่เกิน 5MB!</span>
                </label>
                <div class="promo-text">
                    <div class="head-promo">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                    </div>
                    <div class="input-promo">
                        <input type="text" id="Priceinput" name="Priceinput" placeholder="Description">
                    </div>
                </div>
            </div>

            <div class="promo-box">
                <label class="inputpromo">
                    <input type="file" id="promoInput1" accept="image/*" onchange="previewImage1(event)">
                    <img id="previewpromo1" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; border-radius: 10px;">
                    <span id="promoText1">Choose Image</span>
                    <span class="errorText" style="display: none; color: red;">ไฟล์ต้องมีขนาดไม่เกิน 5MB!</span>
                </label>
                <div class="promo-text">
                    <div class="head-promo">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                    </div>
                    <div class="input-promo">
                        <input type="text" id="Priceinput" name="Priceinput" placeholder="Description">
                    </div>
                </div>
            </div>

            <div class="promo-box">
                <label class="inputpromo">
                    <input type="file" id="promoInput2" accept="image/*" onchange="previewImage2(event)">
                    <img id="previewpromo2" src="" alt="รูปตัวอย่างเล็บ" 
                        style="display: none; width: 100%; border-radius: 10px;">
                    <span id="promoText2">Choose Image</span>
                    <span class="errorText" style="display: none; color: red;">ไฟล์ต้องมีขนาดไม่เกิน 5MB!</span>
                </label>
                <div class="promo-text">
                    <div class="head-promo">
                            <input type="text" id="Pricehead" name="Priceinput" placeholder="Head">
                    </div>
                    <div class="input-promo">
                        <input type="text" id="Priceinput" name="Priceinput" placeholder="Description">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="Home.js"></script>
    `;
}

function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}


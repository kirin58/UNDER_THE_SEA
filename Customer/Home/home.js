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
    <div class="content" id="PriceContent">
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <h4>NAIL CARE</h4>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังมือ + ทาสี (Manicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿450</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังเท้า + ทาสี (Pedicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿450</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังมือและเท้า + ทาสี (Manicure and Pedicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿750</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>สปามือ + ทาสี (Hand Spa + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>สปามือ + ทาสี (Hand Spa + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿650</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>สปาชุด มือเท้า + ทาสี (Hand and Foot Spa + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿1000</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>พาราฟินมือ (Hand Paraffin)</p>
                            </div>
                            <div class="price">
                                <p>฿500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>พาราฟินเท้า (Foot Paraffin)</p>
                            </div>
                            <div class="price">
                                <p>฿500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>พาราฟิน มือเท้า (Hand and Foot Paraffin)</p>
                            </div>
                            <div class="price">
                                <p>฿900</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>สปาเท้า Footlogix Pro-Pedicure + ทาสี(Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿700</p>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <img src="/photo/35.jpg">
                    <img src="/photo/36.jpg">
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <h4>NAIL EXTENSION</h4>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ต่อเล็บอะคริลิค (Acrylic Extension)</p>
                            </div>
                            <div class="price">
                                <p>฿1500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>เติมโคนอะคริลิค (Acrylic Fill-in)</p>
                            </div>
                            <div class="price">
                                <p>฿800</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ถอดเล็บอะคริลิค (Remove Acrylic)</p>
                            </div>
                            <div class="price">
                                <p>฿500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <img src="/photo/37.jpg">
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <h4>NAIL DESIGN</h4>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีเจลมือ / เท้า (Gel Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿500</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีเจลมือและเท้า (Gel Nail Polish Hand and Foot)</p>
                            </div>
                            <div class="price">
                                <p>฿900</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ถอดสีเจล (Gel Nail Remove)</p>
                            </div>
                            <div class="price">
                                <p>฿100</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสี (Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿200</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีแบบเฟรนซ์ (French Nail)</p>
                            </div>
                            <div class="price">
                                <p>฿200</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ไล่สี (Shading)</p>
                            </div>
                            <div class="price">
                                <p>฿200</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>เพนท์ลาย เริ่มต้นนิ้วละ (Nail Art Start From)</p>
                            </div>
                            <div class="price">
                                <p>฿50</p>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                    <div class="pricedescription">
                        <h4>NAIL SET</h4>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังมือ + ทาสีเจลมือ (Manicure + Gel Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿850</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังเท้า + ทาสีเจลเท้า (Pedicure + Gel Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿850</p>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <img src="/photo/38.jpg">
                </div>
            </div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="line" style="background-color: #B87C55; margin-top: 1%;"></div>
            <div class="pricebox">
                <div class="priceleft">
                    <div class="pricedescription">
                        <h4>KID</h4>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังมือ + ทาสี (Manicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿350</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังเท้า + ทาสี (Pedicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿350</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ตัดหนังมือและเท้า + ทาสี (Manicure and Pedicure + Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿550</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีธรรมดา (Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿150</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีเจล มือ/เท้า (Gel Nail Polish)</p>
                            </div>
                            <div class="price">
                                <p>฿400</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="pricecolumn">
                            <div class="service">
                                <p>ทาสีเจลมือและเท้า (Gel Nail Polish hand and foot)</p>
                            </div>
                            <div class="price">
                                <p>฿700</p>
                            </div>
                        </div>
                        <div class="line" style="margin-bottom: 5%;"></div>
                    </div>
                </div>
                <div class="priceimg">
                    <img src="/photo/39.jpg">
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
            <a href="../reservation/booking.html"><div class="promo-box">
                <img src="/photo/12.jpg" alt="เล็บสวยทุกวัน">
                <div class="promo-text">
                    <h3>“เล็บสวยทุกวัน”</h3>
                    <p>ทุกวันจันทร์และวันอังคาร รับส่วนลด <strong>30%</strong> สำหรับบริการทำเล็บทุกชนิด บริการฟรี!
                        สมาชิกไม่ต้องใช้บริการทำเล็บเจล</p>
                </div>
            </div></a>

            <a href="../reservation/booking.html"><div class="promo-box">
                <img src="/photo/13.jpg" alt="สมาชิก VIP">
                <div class="promo-text">
                    <h3>สมาชิก VIP</h3>
                    <p>สมัครสมาชิก VIP วันนี้ รับสิทธิพิเศษ เช่น ส่วนลด <strong>10%</strong> ตลอดทั้งปี
                        และโปรโมชั่นพิเศษในวันหยุดทุกการใช้บริการครบ 10 ครั้ง รับบริการทำเล็บฟรี 1 ครั้ง
                    </p>
                </div>
            </div></a>

            <a href="../reservation/booking.html"><div class="promo-box">
                <img src="/photo/29.jpg" alt="โปรโมชั่นวันเกิด">
                <div class="promo-text">
                    <h3>โปรโมชั่นวันเกิด</h3>
                    <p>ลูกค้าที่มาใช้บริการในเดือนเกิด รับส่วนลด <strong>20%</strong> สำหรับบริการทุกชนิด
                        แถมฟรี! เพ้นท์เล็บลายพิเศษ 1 นิ้ว</p>
                </div>
            </div></a>
        </div>
    </div>
    `;
}


function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}



/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/images/visa.svg
const visa_namespaceObject = __webpack_require__.p + "954d13c8a2c9f61057a7.svg";
;// CONCATENATED MODULE: ./src/app/images/mastercard-4.svg
const mastercard_4_namespaceObject = __webpack_require__.p + "4777e33d0c47ecef0bf2.svg";
;// CONCATENATED MODULE: ./src/app/images/american-express-1.svg
const american_express_1_namespaceObject = __webpack_require__.p + "ececc2212f1e995a1126.svg";
;// CONCATENATED MODULE: ./src/app/images/maestro-2.svg
const maestro_2_namespaceObject = __webpack_require__.p + "6417c42207619a141014.svg";
;// CONCATENATED MODULE: ./src/app/images/jcb-emblem-logo.svg
const jcb_emblem_logo_namespaceObject = __webpack_require__.p + "f9fd9a385d324c36c310.svg";
;// CONCATENATED MODULE: ./src/app/images/diners-club-international-3.svg
const diners_club_international_3_namespaceObject = __webpack_require__.p + "d11452adee435d33062b.svg";
;// CONCATENATED MODULE: ./src/app/images/mir.svg
const mir_namespaceObject = __webpack_require__.p + "803bfd6e3b41e54f76a1.svg";
;// CONCATENATED MODULE: ./src/app/images/union-pay.svg
const union_pay_namespaceObject = __webpack_require__.p + "5d5e238a74f4627252fa.svg";
;// CONCATENATED MODULE: ./src/app/images/visa-electron.svg
const visa_electron_namespaceObject = __webpack_require__.p + "ba919da0fb9cea1666eb.svg";
;// CONCATENATED MODULE: ./src/app/images/checkmark.png
const checkmark_namespaceObject = __webpack_require__.p + "83d4bf3a8c5bb395c19e.png";
;// CONCATENATED MODULE: ./src/app/images/cross.png
const cross_namespaceObject = __webpack_require__.p + "39fb112c8dc7d775998b.png";
;// CONCATENATED MODULE: ./src/app/js/card-types.js
const cardTypes = [{
  alias: "visa",
  lengths: [13, 16, 19],
  pattern: /^(?!4026|4175|4405|4508|4844|4913|4917)(4){1}\d*$/,
  logo: "@images/visa.svg"
}, {
  alias: "master",
  lengths: [16],
  pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,
  logo: "@images/mastercard-4.svg"
}, {
  alias: "amex",
  lengths: [15],
  pattern: /^3[47]\d*$/,
  logo: "@images/american-express-1.svg"
}, {
  alias: "diners_club",
  lengths: [14],
  pattern: /^3(0[0-5]|[689])\d*$/,
  logo: "@images/diners-club-international-3.svg"
}, {
  alias: "jcb",
  lengths: [16, 17, 18, 19],
  pattern: /^(2131|1800|35)\d*$/,
  logo: "@images/jcb-emblem-logo.svg"
}, {
  alias: "unionpay",
  lengths: [16, 17, 18, 19],
  pattern: /^62[0-5]\d*$/,
  logo: "@images/union-pay.svg"
}, {
  alias: "maestro",
  lengths: [16, 17, 18, 19],
  pattern: /^(5[0678]|6304|6390|6054|6271|67)\d*$/,
  logo: "@images/maestro-2.svg"
}, {
  alias: "mir",
  lengths: [16, 17, 18, 19],
  pattern: /^22\d*$/,
  logo: "@images/mir.svg"
}, {
  alias: "visa_electron",
  lengths: [16],
  pattern: /^(4026|4175|4405|4508|4844|4913|4917)\d*$/,
  logo: "@images/visa-electron.svg"
}];
/* harmony default export */ const card_types = (cardTypes);
;// CONCATENATED MODULE: ./src/app/js/utils.js

function isValid(number) {
  const arr = `${number}`.split("").reverse().map(x => Number.parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce((acc, val, i) => i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
  // eslint-disable-next-line prettier/prettier
  0);
  sum += lastDigit;
  return sum % 10 === 0;
}
function getBrand(number) {
  let types = [];
  for (let i = 0; i < card_types.length; i++) {
    if (card_types[i].lengths.includes(String(number).length) && card_types[i].pattern.test(number)) {
      types.push(card_types[i]);
    }
  }
  if (types.length === 1) return types[0].alias;
}
;// CONCATENATED MODULE: ./src/app/js/app.js












class Widget {
  constructor(element) {
    if (typeof element === "string") {
      this._element = document.querySelector(element);
      //ВОПРОС!!! как сформировать блок динамически из card-types с подгрузкой картинок?
      this._element.innerHTML = `
              <h3>Check your credit card number</h3>
              <ul class="cards list-unstyled">
                <li><img class="card visa" src=${visa_namespaceObject}></img></li>
                <li><img class="card master" src=${mastercard_4_namespaceObject}></img></li>
                <li><img class="card amex" src=${american_express_1_namespaceObject}></img></li>
                <li><img class="card maestro" src=${maestro_2_namespaceObject}></img></li>
                <li><img class="card jcb" src=${jcb_emblem_logo_namespaceObject}></img></li>
                <li><img class="card diners_club" src=${diners_club_international_3_namespaceObject}></img></li>
                <li><img class="card mir" src=${mir_namespaceObject}></img></li>
                <li><img class="card unionpay" src=${union_pay_namespaceObject}></img></li>
                <li><img class="card visa_electron" src=${visa_electron_namespaceObject}></img></li>
              </ul>
              <form id="form" class="form-inline" novalidate="novalidate">
                <div class="form-group">
                  <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
                  <button type="submit" class="btn btn-success">Click to Validate</>
                </div>
              </form>
              <div class="valid">
                <img class = "check checkmark" src=${checkmark_namespaceObject}></img>
                <img class = "check cross" src=${cross_namespaceObject}></img>
              </div>`;
    }
    this.input = this._element.querySelector("input");
    this.checkmarkEl = this._element.querySelector(".checkmark");
    this.crossEl = this._element.querySelector(".cross");
    this.checkmarkEl.style.display = "none";
    this.crossEl.style.display = "none";
    this.onClickBtn = this.onClickBtn.bind(this);
    this._element.addEventListener("submit", this.onClickBtn);
  }
  onClickBtn(e) {
    e.preventDefault();
    this.checkmarkEl.style.display = "none";
    this.crossEl.style.display = "none";
    const activeCards = this._element.querySelectorAll(".active_card");
    for (let card of activeCards) {
      card.classList.remove("active_card");
    }
    if (isValid(this.input.value)) {
      const cardElementClassName = getBrand(this.input.value);
      this._element.querySelector(`.${cardElementClassName}`).classList.add("active_card");
      this.checkmarkEl.style.display = "block";
    } else {
      this.crossEl.style.display = "block";
    }
  }
}
;// CONCATENATED MODULE: ./src/licenses.txt
/* harmony default export */ const licenses = (__webpack_require__.p + "5886e6a5e2da9c97a20a199013954d2a.txt");
;// CONCATENATED MODULE: ./src/index.js



new Widget(".widget-container");
/******/ })()
;
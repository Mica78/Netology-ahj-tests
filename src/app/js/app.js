import visa from "@images/visa.svg";
import mastercard from "@images/mastercard-4.svg";
import amx from "@images/american-express-1.svg";
import maestro from "@images/maestro-2.svg";
import jcb from "@images/jcb-emblem-logo.svg";
import diners from "@images/diners-club-international-3.svg";
import mir from "@images/mir.svg";
import union from "@images/union-pay.svg";
import electron from "@images/visa-electron.svg";
import checkmark from "@images/checkmark.png";
import cross from "@images/cross.png";
import { isValid, getBrand } from "./utils";

export default class Widget {
  constructor(element) {
    if (typeof element === "string") {
      this._element = document.querySelector(element);
      //ВОПРОС!!! как сформировать блок динамически из card-types с подгрузкой картинок?
      this._element.innerHTML = `
              <h3>Check your credit card number</h3>
              <ul class="cards list-unstyled">
                <li><img class="card visa" src=${visa}></img></li>
                <li><img class="card master" src=${mastercard}></img></li>
                <li><img class="card amex" src=${amx}></img></li>
                <li><img class="card maestro" src=${maestro}></img></li>
                <li><img class="card jcb" src=${jcb}></img></li>
                <li><img class="card diners_club" src=${diners}></img></li>
                <li><img class="card mir" src=${mir}></img></li>
                <li><img class="card unionpay" src=${union}></img></li>
                <li><img class="card visa_electron" src=${electron}></img></li>
              </ul>
              <form id="form" class="form-inline" novalidate="novalidate">
                <div class="form-group">
                  <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
                  <button type="submit" class="btn btn-success">Click to Validate</>
                </div>
              </form>
              <div class="valid">
                <img class = "check checkmark" src=${checkmark}></img>
                <img class = "check cross" src=${cross}></img>
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
      this._element
        .querySelector(`.${cardElementClassName}`)
        .classList.add("active_card");
      this.checkmarkEl.style.display = "block";
    } else {
      this.crossEl.style.display = "block";
    }
  }
}

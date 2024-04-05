/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import App from "../app";

describe("testing App", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.widget = new App("body");
  });
  test("create HTML", () => {
    expect(document.getElementsByTagName("li").length).toEqual(9);
  });
  test("testing correct event on click button", () => {
    document.querySelector("input").value = "4913556870358867";
    const MouseEvent = window.MouseEvent;
    const button = document.querySelector("button");
    button.dispatchEvent(new MouseEvent("click"));
    const res = document
      .getElementsByClassName("active_card")[0]
      .classList.contains("visa_electron");
    expect(res).toBe(true);
  });
  test("testing correct event on click Enter", () => {
    document.querySelector("input").value = "4913556870358867";
    const KeyboardEvent = window.KeyboardEvent;
    document.widget.onClickBtn(new KeyboardEvent("keydown", { key: "Enter" }));
    const res = document.getElementsByClassName("active_card").length;
    expect(res).toBe(1);
  });
  test("testing correct event and remove active cart", () => {
    document.querySelector("input").value = "4913556870358867";
    const KeyboardEvent = window.KeyboardEvent;
    document.widget.onClickBtn(new KeyboardEvent("keydown", { key: "Enter" }));
    document.querySelector("input").value = "11111";
    const KeyboardEvent1 = window.KeyboardEvent;
    document.widget.onClickBtn(new KeyboardEvent1("keydown", { key: "Enter" }));
    const res = document.getElementsByClassName("active_card").length;
    expect(res).toBe(0);
  });
  test("testing noncorrect event", () => {
    document.querySelector("input").value = "11111";
    const MouseEvent = window.MouseEvent;
    const button = document.querySelector("button");
    button.dispatchEvent(new MouseEvent("click"));
    const res = document.getElementsByClassName("active_card").length;
    expect(res).toBe(0);
  });
});

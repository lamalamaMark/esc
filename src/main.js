import "./style.css";
import simplyCountdown from "simplycountdown.js";

document.addEventListener("DOMContentLoaded", () => {
  new Esc();
});

class Esc {
  constructor() {
    this.bindEvents();
    this.init();
  }

  bindEvents() {
    document.addEventListener("contextmenu", (e) => {
      // e.preventDefault();
      return false;
    });

    document
      .querySelector(".ajqqekfqakefjeaef")
      .addEventListener("click", (e) => {
        e.preventDefault();
        alert();
        return false;
      });
  }

  init() {
    this.start();
  }

  start() {
    simplyCountdown(".iqowefhadsvnadsldc", {
      year: 2025,
      month: 1,
      day: 20,
      hours: 17,
      minutes: 0,
      seconds: 0,
      words: {
        // Custom labels, with lambda for plurals
        days: { root: "", lambda: (root, n) => root },
        hours: {
          root: "",
          lambda: (root, n) => root,
        },
        minutes: {
          root: "",
          lambda: (root, n) => root,
        },
        seconds: {
          root: "",
          lambda: (root, n) => root,
        },
      },
      plural: false, // Use plurals for labels
      inline: true, // Inline format: e.g., "24 days, 4 hours, 2 minutes"
      inlineSeparator: ":", // Separator for inline format, default: ", "
      inlineClass: "simply-countdown-inline", // CSS class for inline countdown
      enableUtc: true, // Use UTC time if true
      refresh: 1000, // Refresh interval in ms, default: 1000
      sectionClass: "simply-section", // CSS class for each countdown section
      amountClass: "simply-amount", // CSS class for numeric values
      wordClass: "simply-word", // CSS class for unit labels
      zeroPad: true, // Pad numbers with leading zero
      removeZeroUnits: true, // Remove units with zero value
      countUp: false, // Count up after reaching zero
      onEnd: () => {}, // Callback when countdown ends
      onStop: () => {}, // Callback when countdown is stopped
      onResume: () => {}, // Callback when countdown is resumed
      onUpdate: (params) => {}, // Callback when countdown is updated
    });
  }
}

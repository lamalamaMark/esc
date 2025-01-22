import "./style.css";
import axios from "axios";
import simplyCountdown from "simplycountdown.js";

document.addEventListener("DOMContentLoaded", () => {
  new Esc();
});

class Esc {
  constructor() {
    this.bindEvents();
    this.startSmoke();
  }

  bindEvents() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });

    document
      .querySelector(".adfjadejejfadlmv")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.uiSoundClick();
        this.uiSoundTransition();
        document.querySelector(".hahjsadfhjadfslk").classList.add("hidden");
        document.querySelector(".iwerewirqoewajf").classList.remove("hidden");
        this.start();
        return false;
      });

    document
      .querySelector(".ajqqekfqakefjeaef")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.uiSoundClick();
        this.uiSoundTransition();
        document.querySelector(".iwerewirqoewajf").classList.add("hidden");
        document.querySelector(".jadsfiofadkss").classList.remove("hidden");
        return false;
      });

    document.querySelectorAll(".iefiaalsdf").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        this.uiSoundTransition();
        this.uiSoundClick();
        const currentNum = parseInt(el.textContent);
        el.textContent = currentNum === 9 ? 0 : currentNum + 1;
        return false;
      });
    });

    document
      .querySelector(".oiewrfajsafmsss")
      .addEventListener("click", (e) => {
        e.preventDefault();

        this.uiSoundClick();

        const code = Array.from(document.querySelectorAll(".iefiaalsdf"))
          .map((el) => el.textContent)
          .join("");

        let endpoint = import.meta.env.DEV
          ? "http://api.weekender.test"
          : "https://api.88425.lamalama.nl";

        axios
          .post(endpoint, {
            code: code,
          })
          .then(({ data }) => {
            console.log(data);

            if (data.ok) {
              document.querySelector(".jadsfiofadkss").classList.add("hidden");
              document
                .querySelector(".ytregsfgdfasgf")
                .classList.remove("hidden");

              document.querySelector(".tqergsfdgsfda").innerHTML = `
              <div class="text-center text-[140px]">
                  ${data.message}
              </div>
            `;
            }
          });

        return false;
      });
  }

  start() {
    this.startAudio();
    this.startCountdown();
  }

  startAudio() {
    const audio = new Audio("tune.mp3");
    audio.loop = true;
    audio.play();
  }

  uiSoundClick() {
    const audio = new Audio("click.mp3");
    audio.play();
  }

  uiSoundHover() {
    const audio = new Audio("hover.mp3");
    audio.play();
  }

  uiSoundTransition() {
    const audio = new Audio("transition.mp3");
    audio.play();
  }

  startSmoke() {}

  startCountdown() {
    const tenMinutesFromNow = new Date(Date.now() + 10 * 60 * 1000);

    simplyCountdown(".iqowefhadsvnadsldc", {
      year: tenMinutesFromNow.getFullYear(),
      month: tenMinutesFromNow.getMonth() + 1, // getMonth() is 0-based
      day: tenMinutesFromNow.getDate(),
      hours: tenMinutesFromNow.getHours(),
      minutes: tenMinutesFromNow.getMinutes(),
      seconds: tenMinutesFromNow.getSeconds(),
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
      enableUtc: false, // Use UTC time if true
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

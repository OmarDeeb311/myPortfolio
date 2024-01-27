document.addEventListener("DOMContentLoaded", () => {
  //! Randomize The Cover Image
  const randomizeImages = () => {
    let imgs = [
      "https://omardeeb311.github.io/myPortfolio/imgs/img-1.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-2.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-3.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-4.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-5.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-6.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-7.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-8.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-9.jpg",
      "https://omardeeb311.github.io/myPortfolio/imgs/img-10.jpg",
    ];
    setInterval(() => {
      let index = Math.floor(Math.random() * imgs.length);
      let src = imgs[index];

      let image = document.querySelector(".cover-img img");
      image.classList.remove("in");
      image.classList.add("out");
      setTimeout(() => {
        image.classList.remove("out");
        image.setAttribute("src", src);
        image.classList.add("in");
      }, 500);
    }, 5000);
  };
  randomizeImages();

  //! Control The Switch
  const controlTheMenu = () => {
    const switches = document.querySelectorAll(".switch .box");
    switches.forEach((button) => {
      button.addEventListener("click", () => {
        switches.forEach((button) => {
          button.classList.remove("active");
        });
        button.classList.add("active");

        const prevMenu = document.querySelector(".right .show");
        const newButton = document.querySelector(".switch .box.active");
        prevMenu.classList.remove("show");
        prevMenu.classList.add("hide");

        if (newButton.classList.contains("about")) {
          const about = document.querySelector(".right .about");
          about.classList.remove("hide");
          about.classList.add("show");
        } else if (newButton.classList.contains("resume")) {
          const resume = document.querySelector(".right .resume");
          resume.classList.remove("hide");
          resume.classList.add("show");
        } else if (newButton.classList.contains("projects")) {
          const projects = document.querySelector(".right .projects");
          projects.classList.remove("hide");
          projects.classList.add("show");
        } else {
          const contact = document.querySelector(".right .contact");
          contact.classList.remove("hide");
          contact.classList.add("show");
        }
      });
    });
  };
  controlTheMenu();

  //! Handle Contact Me Button
  let contactButton = document.querySelector(".contact-button");
  contactButton.addEventListener("click", () => {
    document.querySelector(".contact").click();
  });

  //! Handle Projects Links
  let demoLinks = document.querySelectorAll(".projects .left-box");
  demoLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const websiteLink = link.getAttribute("data-link");
      window.open(`https://omardeeb311.github.io/${websiteLink}`, "_blank");
    });
  });

  let codeLinks = document.querySelectorAll(".projects .right-box");
  codeLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const websiteLink = link.getAttribute("data-link");
      window.open(`https://github.com/OmarDeeb311/${websiteLink}`, "_blank");
    });
  });
});

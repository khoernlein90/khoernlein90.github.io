$(document)
  .ready(function () {
    $(".navbar-brand")
      .mouseover(function () {
        $(".first-name").removeClass("red");
        $(".first-name").addClass("white");
      })
      .mouseout(function () {
        $(".first-name").addClass("red");
        $(".first-name").removeClass("white");
      });

    const images = [{
      imageName: "react-clicky-game",
      img: "./assets/images/clicky.png",
      info: "A React game where the user has their memory tested! The user clicks an image, a" +
        "nd then needs to keep clicking images that they haven't clicked yet.",
      githubLink: "https://github.com/khoernlein90/react-click-game",
      deployedLink: "https://rocky-beach-84769.herokuapp.com/",
      technologies: ["React", "JavaScript", "CSS"]
    }, {
      imageName: "nyt-react",
      img: "./assets/images/NYTReact.png",
      info: "A Fullstack React application where the user can search the New York Times for a" +
        "rticles of their choosing. The user can also save articles of interest to a data" +
        "base.",
      githubLink: "https://github.com/khoernlein90/NYT_React",
      deployedLink: "https://safe-oasis-63865.herokuapp.com/",
      technologies: [
        "React",
        "React Router",
        "JavaScript",
        "Axios",
        "APIs",
        "Express",
        "Mongo"
      ]
    },{
      imageName: "mongo-scraper",
      img:"./assets/images/mongoScraper.png",
      info: "A Full Stack app that scrapes the League of Legends page of reddit. The user also has the ability to save articles of interest to MongoDB. The user can also add comments on the articles that they save.",
      githubLink: "https://github.com/khoernlein90/webScrape",
      deployedLink: "https://enigmatic-peak-65650.herokuapp.com/",
      technologies: ["HTML, CSS, Express, Handlebars, Mongo, Mongoose, Axios, Cheerio"]
    }, {
      imageName: "react-burger-builder",
      img: "./assets/images/burger.png",
      info: "A React app that uses Google Firebase to store orders that a customer makes.",
      githubLink: "https://github.com/khoernlein90/react-burger-builder",
      deployedLink: "https://pacific-retreat-11922.herokuapp.com/",
      technologies: ["React", "React Router", "JavaScript", "Firebase", "Axios"]
    }, {
      imageName: "react-youtube",
      img: "./assets/images/youtube.png",
      info: "A React app that takes the user input and automatically searches the Youtube API" +
        " whenever the user types.",
      githubLink: "https://github.com/khoernlein90/react-youtube",
      deployedLink: "",
      technologies: ["React", "JavaScript", "Bootstrap", "Youtube API"]
    }, {
      imageName: "giphy-movie-search",
      img: "./assets/images/giphy.png",
      info: "A web app which uses the Giphy API to search for movie GIFs (or any GIF for that" +
        " matter). Entering a search term will add a new GIF button. Clicking on the GIFs" +
        " will play/pause them! Enjoy!",
      githubLink: "https://github.com/khoernlein90/GifTastic",
      deployedLink: "https://khoernlein90.github.io/GifTastic/",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "jQuery",
        "Giphy",
        "API",
        "Ajax"
      ]
    }, {
      imageName: "hangman",
      img: "./assets/images/hangman.png",
      info: "A basic Hangman game where the user will have 10 guesses to try and figure out t" +
        "he word in this animal themed game!",
      githubLink: "https://github.com/khoernlein90/Hangman-Game",
      deployedLink: "https://khoernlein90.github.io/Hangman-Game/",
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript"]
    }, {
      imageName: "crystal-collector",
      img: "./assets/images/crystal.png",
      info: "A fun browser game where the user has to try and make their score match the rand" +
        "om number! ",
      githubLink: "https://github.com/khoernlein90/CrystalCollector",
      deployedLink: "https://khoernlein90.github.io/CrystalCollector/",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"]
    }, {
      imageName: "train-scheduler",
      img: "./assets/images/train.png",
      info: "A web app where the user can schedule mock trains. The trains are timed and stor" +
        "ed using Google Firebase.",
      githubLink: "",
      deployedLink: "",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "jQuery",
        "Google",
        "Firebase"
      ]
    }];
    for (let image of images) {
      const img = $("<img>");
      const a = $("<a>")
        .addClass("portfolio-image " + image.imageName)
        .attr("data-modal", image.imageName);
      img.attr({
        src: image.img,
        "data-modal": image.imageName,
        class: "the-image"
      });
      a.append(img);
      $(".my-apps").append(a);

      const modalDiv = $("<div>").attr({
        id: image.imageName,
        class: "modal"
      });
      const modalContent = $("<div>").addClass("modal-content");
      const modalHeader = $("<div>")
        .addClass("modal-header")
        .text(image.imageName);
      const span = $("<span>")
        .addClass("close")
        .text("X");
      modalHeader.append(span);
      const modalBody = $("<div>").addClass("modal-body");
      const modalImg = $("<img>").attr("src", image.img);
      const modalInfo = $("<p>").html("<span class='description'>Description: </span>" + image.info);
      const techList = $("<ul>").html("<span class='description'>Technologies Used: </span>");
      for (let tech of image.technologies) {
        const listItem = $("<li>").text(tech);
        techList.append(listItem);
      }
      modalBody.append(modalImg, modalInfo, techList);
      const modalFooter = $("<div>").addClass("modal-footer");
      const githubLink = $("<a>")
        .attr({
          href: image.githubLink,
          target: "_blank",
          class: "modal-footer-button"
        })
        .append('<i class="fab fa-github"></i> Github Repo');
      const deployedLink = $("<a>")
        .attr({
          href: image.deployedLink,
          target: "_blank",
          class: "modal-footer-button"
        })
        .append('<i class="fas fa-arrow-right"></i> Deployed App');
      modalFooter.append(githubLink, deployedLink);
      modalContent.append(modalHeader, modalBody, modalFooter);
      modalDiv.append(modalContent);
      $("body").append(modalDiv);
    }

    $(document)
      .on("click", ".the-image", function () {
        const modal = $(this).attr("data-modal");
        document
          .getElementById(modal)
          .style
          .display = "block";
      });

    $(window).on("click", function (event) {
      const displayedModal = event.target;
      if (event.target.className === "modal") {
        displayedModal.style.display = "none";
      }
    });

    $(".close").on("click", function (event) {
      const element = event.target.parentElement.parentElement.parentElement;
      element.style.display = "none";
    });

    if ($(window).width() < 500) {
      $(".about-me")
        .waypoint(function (dir) {
          $(".react-clicky-game").addClass("animated bounceInLeft");
          $(".nyt-react").addClass("animated bounceInDown");
          $(".mongo-scraper").addClass("animated bounceInRight")
          $(".react-burger-builder").addClass("animated bounceInLeft");
          $(".react-youtube").addClass("animated bounceInDown");
          $(".giphy-movie-search").addClass("animated bounceInRight");
          $(".hangman").addClass("animated bounceInLeft");
          $(".crystal-collector").addClass("animated bounceInUp");
          $(".train-scheduler").addClass("animated bounceInRight");
        }, {
          offset: "-600px"
        });
    } else {
      $(".about-me")
        .waypoint(function (dir) {
          $(".react-clicky-game").addClass("animated bounceInLeft");
          $(".nyt-react").addClass("animated bounceInDown");
          $(".mongo-scraper").addClass("animated bounceInRight")
          $(".react-burger-builder").addClass("animated bounceInLeft");
          $(".react-youtube").addClass("animated bounceInDown");
          $(".giphy-movie-search").addClass("animated bounceInRight");
          $(".hangman").addClass("animated bounceInLeft");
          $(".crystal-collector").addClass("animated bounceInUp");
          $(".train-scheduler").addClass("animated bounceInRight");

        });
    }

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ?
            target :
            $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate({
              scrollTop: target
                .offset()
                .top
            }, 1000, function () {
              // Callback after animation Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
  });
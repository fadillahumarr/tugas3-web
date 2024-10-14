import LocomotiveScroll from "locomotive-scroll";

// Tambahkan elemen-elemen HTML menggunakan JavaScript
document.getElementById('app').innerHTML = `
  <header class="header-container">
    <nav class="navbar-container">
      <ul class="navbar-link-container">
        <li class="navbar-list">ABOUT</li>
        <li class="navbar-list">HOBBY</li>
        <li class="navbar-list">CONTACT</li>
      </ul>
    </nav>
  </header>
  <main class="main-container" data-scroll-container>
    <section class="home-container" data-scroll-section>
      <div class="image-container">
        <img
          class="hero-image"
          src="/hero-image.jpg"
          alt="hero-image"
          data-scroll
        />
      </div>
      <div class="text-container">
        <h1
          class="hero-text"
          data-scroll
          data-scroll-speed="3"
          data-scroll-css-progress="progressEvent"
        >
          It's me, <br />
          Nurfadillah <br />
          Umar
        </h1>
      </div>
    </section>
    <section class="about-container" data-scroll-section>
      <div class="about-heading-container">
        <div class="line"></div>
        <h1 class="about-me heading-style" data-scroll data-scroll-speed="1">
          About Me
        </h1>
      </div>
      <div class="about-content">
        <p>
          I’m a student at Hasanuddin University, majoring in Informatics
          Engineering. Lately, I’ve been really getting into web development
          and focusing on databases. At the same time, I’m working on my
          problem-solving skills by diving into algorithms and data
          structures.
        </p>
      </div>
    </section>
    <section class="hobby-container" data-scroll-section>
      <div class="hobby-heading-container">
        <h1 class="my-hobby heading-style">My Hobby</h1>
        <div class="line"></div>
      </div>
      <div class="hobby-content">
        <div class="sub-heading">
          <h2>Take a random photo</h2>
        </div>
        <div class="image-collection-container">
          <div class="left-image">
            <div class="box-image" data-scroll data-scroll-speed="1">
              <img
                class="image-collection"
                src="/image1.jpg"
                alt="image1"
              />
            </div>
            <div class="box-image" data-scroll data-scroll-speed="1">
              <img
                class="image-collection"
                src="/image2.jpg"
                alt="image2"
              />
            </div>
          </div>
          <div class="right-image">
            <div class="box-image" data-scroll data-scroll-speed="3">
              <img
                class="image-collection"
                src="/image3.jpg"
                alt="image3"
              />
            </div>
            <div class="box-image" data-scroll data-scroll-speed="3">
              <img
                class="image-collection"
                src="/image4.jpg"
                alt="image4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

// Locomotive Scroll setup
document.addEventListener("DOMContentLoaded", function () {
  var scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  const textProgress = document.querySelector(".hero-text");
  scroll.on("scroll", (e) => {
    const scrollY = e.scroll.y;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    textProgress.style.opacity = 1 - scrollProgress;
  });

  const homeSection = document.querySelector(".image-container");
  scroll.on("scroll", (instance) => {
    const lastSection = homeSection.getBoundingClientRect();
    if (lastSection.bottom < 0) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  });
});

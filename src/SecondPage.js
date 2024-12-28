import React from 'react';
import './SecondPage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function SecondPage() {
  return (
    <>
      <nav className="navbar">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>


      <section id="about">
        <h1>About</h1>
        <p> Motivated ReactJS Developer with a strong foundation in front-end development through comprehensive ReactJS
          certification and hands-on project work. Proficient in JavaScript, React, HTML, CSS, and modern web development

          tools. Passionate about building interactive, responsive, and user-friendly applications. Seeking an entry-level op-
          portunity to apply my skills, grow professionally, and contribute to a dynamic development team while continuously

          learning and enhancing my expertise in ReactJS and modern web technologies </p>

      </section>

      <section id="projects">
        <h1>Projects</h1>
        <div className="row">
          <div className="card text-bg-light mb-4 ms-5 " style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card text-bg-light mb-4 ms-5" style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card text-bg-light mb-4 ms-5 " style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card text-bg-light mb-4 ms-5" style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card text-bg-light mb-4 ms-5" style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card text-bg-light mb-4 ms-5" style={{ maxWidth: "18rem" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>In his portfolio, the front-end engineer Adeola Adeoti presents his accomplishments and areas of expertise in a visually appealing way. One of the highlights is the project section, where each work is displayed in the form of playing cards with animation effects.</p>
      </section>
    </>
  );
}

export default SecondPage;

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ecclesia</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <div className="scroll-up-btn show">
          <i className="fas fa-angle-up" />
        </div>
        <nav className="navbar sticky">
          <div className="max-width">
            <div className="logo" />
            <ul className="menu active">
              <li><a href="#home" className="menu-btn">Home</a></li>
              <li><a href="#about" className="menu-btn">About</a></li>
              <li><a href="#services" className="menu-btn">Services</a></li>
              <li><a href="#skills" className="menu-btn">Stack</a></li>
              <li><a href="#teams" className="menu-btn">Teams</a></li>
              <li><a href="#contact" className="menu-btn">Contact</a></li>
              <li />
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars active" />
            </div>
          </div>
        </nav>
        {/* home section start */}
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">System Architecture</div>
              <div className="text-2">Ecclesia</div>
              <div className="text-3" />
            </div>
          </div>
        </section>
        {/* about section start */}
        <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">About Ecclesia</h2>
            <div className="about-content">
              <div className="column right">
                <div className="text">Ecclesia is A gathering of summoned citizens.</div>
                <p>It consists of 5 software engineering students.</p>
                <p />
                <p>201935043 문희상</p>
                <p>201935082 우태경</p>
                <p>201935085 유인재</p>
                <p>201935123 장형권</p>
                <p>201935125 정규원</p>
                <p />
                <p>We aim to improve our skills through this team project.</p>
              </div>
            </div>
          </div>
        </section>
        {/* services section start */}
        <section className="services" id="services">
          <div className="max-width">
            <h2 className="title">Our services</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fas -solid fa-desktop" />
                  <div className="text">Frontend</div>
                  <p>The presentation layer is primarily a layer visible to the user.</p><p />Web presentations are usually developed using various languages such as HTML, CSS, and JavaScript that everyone is familiar with.<p />
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas -solid fa-server" />
                  <div className="text">Backend</div>
                  <p>This layer is at the core of the application, where the data sent from the presentation is processed. I'm using Spring Framework a lot.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas -solid fa-database" />
                  <div className="text">Database</div>
                  <p>A data layer is a layer that manages the reading and writing of data by accessing a database. They include PostgreSQL, MySQL, MariaDB, Oracle, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* skills section start */}
        <section className="skills" id="skills">
          <div className="max-width">
            <h2 className="title">Stack</h2>
            <div className="skills-content">
              <div className="column left">
                <p>HTML, CSS, JavaScript, Spring Boot, and MySQL are widely used for web development and provide a variety of capabilities and tools needed for front-end and back-end development.
                  HTML, CSS, and JavaScript are used for client-side development, while Spring Boot and MySQL are used for server-side development and data management. 
                  Combining these technologies will allow you to develop and operate web applications.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                  </div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                  </div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                  </div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Spring Boot</span>
                  </div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* teams section start */}
        {/* teams section start */}
        <section className="teams" id="teams">
          <div className="max-width">
            <h2 className="title">My teams</h2>
            <div className="carousel owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{width: '1100px'}}>
                  {/* Owl Carousel Item 1 */}
                  <div className="owl-item">
                    <div className="card">
                      <div className="box">
                        <div className="text">Someone name 1</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  {/* Owl Carousel Item 2 */}
                  <div className="owl-item">
                    <div className="card">
                      <div className="box">
                        <div className="text">Someone name 2</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  {/* Owl Carousel Item 3 */}
                  <div className="owl-item">
                    <div className="card">
                      <div className="box">
                        <div className="text">Someone name 3</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  {/* Owl Carousel Item 4 */}
                  <div className="owl-item">
                    <div className="card">
                      <div className="box">
                        <div className="text">Someone name 4</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  {/* Owl Carousel Item 5 */}
                  <div className="owl-item">
                    <div className="card">
                      <div className="box">
                        <div className="text">Someone name 5</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact section start */}
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact us</h2>
            <div className="contact-content">
              <div className="column right">
                <div className="text">Message me</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Name" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="field textarea">
                    <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                  </div>
                  <div className="button-area">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* footer section start */}
        <footer>
          <span>Created By Ecclesia | <a href="https://www.codingnepalweb.com"><span className="far fa-copyright" /></a> </span> 2023 All rights reserved.
        </footer>
        <style type="text/css" data-typed-js-css="true" dangerouslySetInnerHTML={{__html: "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      " }} />
      </div>
    );
  }
}
export default App;

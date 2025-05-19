import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <span className="logo">Rishi</span>
      </h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

function App() {
  return (
    <>
      <div className="container">
        <Navbar />

        <section className="hero">
          <div className="herocon">
            <h1 className="hi green-gradient">Hi</h1>
            <h1 className="name green-gradient">I'm Rishi Sivaraju</h1>
          </div>
          <div className="hero-card">
            <div className="card-glow"></div>
            <img
              src="https://res.cloudinary.com/drpgvnojt/image/upload/v1747627303/Non-Formal-Pic_xf2lje.png"
              alt="Rishi"
              className="hero-img"
            />
          </div>


        </section>

        <section id="about" className="section dark-bg">
          <h2 className="section-title blue">About Me</h2>
          <p>Provide a short bio, educational background, and your passion or mission statement here.</p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title green">Projects</h2>
          <p>List 2–3 key projects with a title, brief description, tech used, and a link to GitHub or live demo.</p>
        </section>

        <section id="skills" className="section dark-bg">
          <h2 className="section-title blue">Skills</h2>
          <p>Mention frontend/backend languages, frameworks, tools, and technologies you’re confident in.</p>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title green">Contact</h2>
          <p>Email, LinkedIn, GitHub links or a contact form can go here.</p>
        </section>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #0f0f0f;
          color: #f5f5f5;
        }

        .container {
          width: 100vw;
          overflow-x: hidden;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #0f0f0f;
          color: #f5f5f5;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .logo {
          font-size: 2rem;
          margin: 0;
          background: linear-gradient(to right, rgb(25, 227, 109), rgb(39, 213, 8));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          font-size: 1rem;
        }

        .nav-links a {
          color: #f5f5f5;
          text-decoration: none;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 5vw;
          column-gap: 5vw;
          margin-top: 5vw;
        }

        .herocon {
          display: block;
        }

        .hi {
          margin-bottom: -3vw;
        }

        .heroimage {
          width: 100%;
          height: auto;
        }

.hero-card {
  position: relative;
  width: 30vw;
  height: 30vw;
  border-radius: 20px;
  overflow: visible; /* allow glow to overflow */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  z-index: 10;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 20px rgba(0,0,0,0.3); /* optional shadow */
}

/* Glowing animated border */
.card-glow {
  position: absolute;
  top: -5px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border-radius: 25px;
  background: linear-gradient(-45deg, #e81cff, #40c9ff, #fc00ff, #00dbde);
  background-size: 400% 400%;
  animation: glowAnim 10s ease infinite;
  z-index: 1;
  filter: blur(40px);
  opacity: 0.9;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.hero-card:hover .card-glow {
  filter: blur(50px);
  opacity: 1;
}

@keyframes glowAnim {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}




        .green-gradient {
          background: linear-gradient(to right, rgb(10, 247, 108), rgb(42, 137, 7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-text {
          background: linear-gradient(to right, #00FF85, #1E90FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section {
          padding: 4rem 2rem;
        }

        .dark-bg {
          background-color: #101010;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .section-title.blue {
          color: #1E90FF;
        }

        .section-title.green {
          color: #00FF85;
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .heroimage img {
            margin-top: 2rem;
            max-width: 80vw;
          }
        }
      `}</style>
    </>
  );
}

export default App;





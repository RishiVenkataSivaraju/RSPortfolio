import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        {/* <span className="logo-blue">R</span> */}
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
          <h1 className="hi">Hi</h1>
          <h1 className="name">I'm Rishi Sivaraju</h1>
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
 .logo {
    background: linear-gradient(to right,rgb(25, 227, 109),rgb(39, 213, 8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
.hero{
margin-top: 20vw;
margin-left:5vw;
min-height: 60vh;}
.hi{
margin-bottom:-3vw;}
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
      `}</style>
    </>
  );
}

export default App;




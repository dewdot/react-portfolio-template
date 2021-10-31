const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
          <p className="width70">I'm a full stack Developer with over 6 years of experience. I'm from India. I code and create web elements for amazing people around the world. </p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src="/images/me.jpg" alt="myphoto" />
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">Ravi Shekhar</span></h2>
              <p>I'm a full stack developer with over 8 years of experience. I code and create stylish, modern websites, web services, mobile apps and online stores. My passion is to design digital user experiences through meaningful interactions.</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong> Ravi Shekhar</p>
                <p><strong>Age:</strong> 28 years</p>
                <p><strong>Language:</strong> English, Hindi</p>
                <p><strong>Address:</strong> 73 New Geern Mount, Bihar, India, 2032</p>
                <p><strong>Freelance:</strong> Available</p>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Skills</span></h2>
            <section>HTML5, CSS3, SASS</section>
            <hr />
            <section>JavaScript, ReactJS, Express</section>
            <hr />
            <section>PHP, Python, MongoDB, Nodejs</section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Experience</span></h2>
            <section><p>Full Stack Developer<br />dewdot, 2018 - current</p></section>
            <hr />
            <section><p>Frontend Developer<br />Drupar, 2012-1018</p></section>
            <hr />
            <section><p>UX / UI Designer<br />Goaled, 2008-2012</p></section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Education</span></h2>
            <section><p>MSc in CSE<br />University of Mehna, NY (2007 - 2008)</p>
            </section>
            <hr />
            <section><p>BSc in CSE<br />University of Mehna, NY (2003 - 2006)</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
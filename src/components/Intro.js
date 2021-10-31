const Intro = () => {
  return(
<div id="intro" className="section dark1">
  <div className="container">
    <div className="section-flex intro">
      <div className="section-left">
        <img src="/images/intro.svg" alt="intro" />
      </div>
      <div className="section-right">
        <p className="weight-light">Hello, My name is</p>
        <h1 className="color-primary">Ravi Shekhar</h1>
        <h3 className="color-white">Full Stack Developer</h3>
        <p><span className="color-primary">#</span>MongoDB <span className="color-primary">#</span>Express <span className="color-primary">#</span>React <span className="color-primary">#</span>Node</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Intro;
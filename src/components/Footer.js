const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div id="footer" className="dark1">
      <div className="container">
        <div className="footer-container">
          &copy; copyright dewdot.com {year}
        </div>
      </div>
    </div>
  )
}

export default Footer;
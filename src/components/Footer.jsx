function Footer() {
  return (
    <footer className="footer-part">
      <img
        src= "/images/spotify.png"
        alt="spotify logo"
        width="140px"
        height="80px"
      />
      <ul>
        <label>compony</label>
        <li>about</li>
        <li>jobs</li>
        <li>for the record</li>
      </ul>
      <ul>
        <label>communities</label>
        <li>for artists</li>
        <li>developers</li>
        <li>advertising</li>
        <li>investors</li>
        <li>vendors</li>
      </ul>
      <ul>
        <label>useful links</label>
        <li>support</li>
        <li>web player</li>
        <li>free mobile app</li>
      </ul>

      <div>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
<div className="footer-last-div">
      <div>
        <ul>
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>India(English)</li>
          <li> 2023 spotify AB</li>
        </ul>
      </div>
      </div>
    </footer>
  );
}
export default Footer;

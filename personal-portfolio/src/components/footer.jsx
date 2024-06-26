import "./footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul className="footer-box">
          <li>
            <a href="tel:+919050080006">
              <i class="fa-solid fa-phone"></i>
            </a>
          </li>
          <li>
            <a href="mailto:khushivashisth.im@gmail.com">
              {" "}
              <i class="fa-solid fa-envelope"></i>{" "}
            </a>
          </li>

          <li>
            <a href="https://github.com/Khushi-Vashisth">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/Khushi_vashisth">
              {" "}
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+919050080006">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small bg-secondary">
          <div className="container">
            <hr className="rgba-white-light" style={{ margin: "0 15%" }} />

            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
              <div className="col-md-8 col-12 mt-5">
                <p style={{ lineHeight: "1.7rem" }}>
                  Created by{" "}
                  <a
                    style={{ color: "lightblue" }}
                    href="https://www.linkedin.com/in/yhan1205/"
                  >
                    Young Chan Han
                  </a>
                </p>
                <hr />
                <p>
                  Having trouble? contact{" "}
                  <a
                    style={{ color: "lightblue" }}
                    href="mailto:yhan1205@gmail.com"
                  >
                    Go Park
                  </a>
                </p>
              </div>
            </div>

            <hr
              className="clearfix d-md-none rgba-white-light"
              style={{ margin: "10% 15% 5%" }}
            />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

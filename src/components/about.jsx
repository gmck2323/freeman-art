import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/yellow-phone-mockup.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <p>{this.props.data ? this.props.data.subparagraph : 'loading...'}</p>
                <a
                    href="#contact"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about

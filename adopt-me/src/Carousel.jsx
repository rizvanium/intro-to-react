import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleImgClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photoUrl, idx) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleImgClick}
              data-index={idx}
              key={photoUrl}
              src={photoUrl}
              alt="animal thumbnail"
              className={idx === active ? "active" : ""}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

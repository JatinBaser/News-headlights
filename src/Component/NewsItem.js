import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card border border-dark">
          <img
            src={
              !imgUrl
                ? "https://th.bing.com/th/id/R.01c16ea3f8f97fec2925eb4f909b13a2?rik=d9NAI%2b4ZYVir2w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fNewspaper-Free-Download-PNG.png&ehk=GZWjvwbiF77E505d9T6vwg8QANTvkyMR0c1qsfrmwzU%3d&risl=&pid=ImgRaw&r=0"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

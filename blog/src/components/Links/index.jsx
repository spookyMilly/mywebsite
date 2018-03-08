import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      email: author.email,
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.twitter.com/spookyMilly`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/spookyMilly`} target="_blank" >
              <i className="icon-github-circled" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.codepen.io/spookyMilly`} target="_blank" >
              <i className="icon-codepen" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.instagram.com/elvenglitter`} target="_blank">
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.medium.com/@spooky.`} target="_blank">
              <i className="icon-medium" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail-squared" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;

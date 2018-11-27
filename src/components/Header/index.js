import React from 'react';
import './index.scss';
import logo from '../../logo.png';

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <a href="https://github.com/hyejin2351" target="_blank">
            <img className="logo" src={logo} />
          </a>
          <span>Hyejin's 심플노트</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>추가</button>
          <button onClick={onDeleteNote}>삭제</button>
        </div>
      </div>
    );
  }
}
export default Header;
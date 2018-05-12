import React from 'react';

const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h5>{props.subtitle}</h5>}
    </div>
  );
}
Header.defaultProps = {
  title : 'Sapient Games Arena',
  subtitle : 'HackerEarth Challenge'
};

export default Header;

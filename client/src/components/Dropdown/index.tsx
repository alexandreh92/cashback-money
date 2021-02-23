import React, { useRef, useEffect, useState } from 'react';

import Item from './Item';
import Menu from './Menu';
import Header from './Header';

import { Container } from './styles';

interface Props {}

type SectionProps<P> = React.FC<P> & {
  Item: typeof Item;
  Menu: typeof Menu;
  Header: typeof Header;
};

const Dropdown: SectionProps<Props> = ({ children, ...props }) => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const OutsideListner = (ref: any) => {
    const handleClickOutside = (event: any) => {
      if (ref.current && active && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  };

  const clonedChildren = React.Children.map(children, (child: any) => {
    return React.cloneElement(child, {
      active: active,
    });
  });

  OutsideListner(dropdownRef);

  return (
    <Container
      {...props}
      ref={dropdownRef}
      onClick={() => {
        setActive(true);
      }}
    >
      {clonedChildren}
    </Container>
  );
};

Dropdown.Menu = Menu;
Dropdown.Header = Header;
Dropdown.Item = Item;

export default Dropdown;

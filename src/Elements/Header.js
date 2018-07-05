import React from 'react';
import { Card } from 'Elements';

const Header = styles => (
  <Card
    elevation={4}
    style={{ opacity: styles.opacity, background: styles.bg, height: styles.height, overflow: 'hidden' }}
  >
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

export default Header;

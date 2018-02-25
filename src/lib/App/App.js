import React from 'react';

import { Provider as ThemeProvider, Relative, Banner, Heading } from 'rebass';

const App = (props) => {
  return (
    <ThemeProvider
      theme={{
        fonts: {
          sans: 'Futura, sans-serif',
          mono: "'Andale Mono', monospace",
        },
      }}
    >
      <Relative style={{ textAlign: 'center' }}>
        <Banner backgroundImage="https://source.unsplash.com/6LkJpiEPl58/1800x800" style={{ height: '100vh' }}>
          <Heading fontSize={8} style={{ textShadow: '0 0 6px #000000' }}>
            Hello World!
          </Heading>
        </Banner>
      </Relative>
    </ThemeProvider>
  );
};

export default App;

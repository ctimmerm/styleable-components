import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet } from 'aphrodite';
import merge from 'deepmerge';

import Button, { buttonStyles } from './components/button';

const App = () => (
  <div>
    <Button>Default</Button>
    <br /><br />
    <Button styles={styles}>Styled</Button>
    <br /><br />
    <Button disabled={true} styles={wide}>Woohoo</Button>
  </div>
);

const styles = StyleSheet.create({
  button: {
    ...buttonStyles.base,
    border: '2px solid lightskyblue',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: 'pink'
    },

    ':active': {
      backgroundColor: 'red'
    }
  }
});

const wide = StyleSheet.create(merge(buttonStyles, {
  button: { width: 400 }
}));

ReactDOM.render(<App />, document.getElementById('main'));

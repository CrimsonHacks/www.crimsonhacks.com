import React from 'react';
import createStory from '../../createStory';

import CheckBoxREADME from './CheckBox.README.md';
import CheckBox from '../CheckBox';

class TestCheckBox extends React.Component {
  state = {
    checked: true,
  };

  toggle = () => {
    this.setState (prevState => ({
      checked: !prevState.checked,
    }));
  };

  render () {
    return (
      <CheckBox
        checked={this.state.checked}
        onChange={this.toggle}
        label="Hello"
      />
    );
  }
}

createStory ('CheckBox', 'normal', CheckBoxREADME, () => <TestCheckBox />);

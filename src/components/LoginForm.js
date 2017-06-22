import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    <Card>
      <CardSection>
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
      </CardSection>

      <CardSection></CardSection>

      <CardSection>
        <Button>
          Log In
        </Button>
      </CardSection>
    </Card>
  }
}

export default LoginForm;

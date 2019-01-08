import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <TextInput
                            value={this.state.text}
                            onChangeText={text => this.setState({ text: text })}
                            style={{ height: 20, width: 100 }}
                        />
                    </CardSection>
                    <CardSection />

                    <CardSection>
                        <Button>
                            Log in
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
};

export default LoginForm;

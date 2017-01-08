import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input, List, ListItem } from 'native-base';

import Foot from '../Components/FooterTab';

export default class SubmitHours extends Component {
  // <View style={{margin: 128}}>
  //   <Text onPress={Actions.pageTwo}>This is PageTwo!</Text>
  //   <Text>{this.props.text}</Text>
  // </View>
  render() {
    return (
      <Container>
      <Header>
          <Button transparent>
              <Icon name='ios-arrow-back' />
          </Button>
          <Title>SubmitHours</Title>
      </Header>

      <Footer>
        <Foot />
      </Footer>
      </Container>
    )
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input, List, ListItem } from 'native-base';

import Foot from '../Components/FooterTab';

export default class FindEvents extends Component {
  // const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
  render() {
    // <View>
    // <Text onPress={goToPageTwo}>This is PageOne!!</Text>
    // </View>
    return (
      <Container>
          <Header searchBar rounded>
              <InputGroup>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                  <Icon name="ios-people" />
              </InputGroup>
              <Button transparent>
                  Search
              </Button>
          </Header>

        <Content>
            <List>
                <ListItem >
                    <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                    <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem>
            </List>
        </Content>

        <Footer>
          <Foot />
        </Footer>

      </Container>
    )

  }
}

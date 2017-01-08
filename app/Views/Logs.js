import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input, List, ListItem } from 'native-base';

import Foot from '../Components/FooterTab';

export default class Logs extends Component {
  // const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
  // <Thumbnail source={require('../img/NB-logo.png')} />
  render() {
    return (
      <Container>
      <Header>
          <Button transparent>
              <Icon name='ios-arrow-back' />
          </Button>
          <Title>Logs</Title>
          <Button transparent>
              <Icon name='ios-add' />
          </Button>
      </Header>

        <Content>
            <List>
                <ListItem >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text style={{fontWeight: 'bold'}}>Ederly Home</Text>
                        <Text style={{color: 'grey'}}>Lions Club</Text>
                        <Text style={{fontSize: 13, color: 'grey'}}>April 15, 2016</Text>
                      </View>
                      <Badge info>2 hours</Badge>
                      <Button bordered small> Incomplete </Button>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text style={{fontWeight: 'bold'}}>Ederly Home</Text>
                        <Text style={{color: 'grey'}}>Lions Club</Text>
                        <Text style={{fontSize: 13, color: 'grey'}}>April 15, 2016</Text>
                      </View>
                      <Badge info>2 hours</Badge>
                      <Button bordered success small> Approved </Button>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text>Ederly Home</Text>
                        <Text note>April 15, 2016</Text>
                      </View>
                      <Button bordered info small> Pending </Button>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text>Ederly Home</Text>
                        <Text note>April 15, 2016</Text>
                      </View>
                      <Button bordered warning small> Adjusted </Button>
                    </View>
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

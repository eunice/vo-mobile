import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

export default class Foot extends Component {
  render() {
    return (
           <FooterTab>
               <Button onPress={Actions.FindEvents}>
                   Find events
                   <Icon name='ios-apps-outline' />
               </Button>
               <Button active onPress={Actions.Logs}>
                 Logs
                 <Icon name='ios-compass' />
               </Button>
               <Button onPress={Actions.Messages}>
                  <Badge>2</Badge>
                   Messages
                   <Icon name='ios-compass' />
               </Button>
               <Button onPress={Actions.Profile}>
                   Profile
                   <Icon name='ios-contact-outline' />
               </Button>
           </FooterTab>
    );
  }
}

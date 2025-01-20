import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {darkTextColor} from '../../Constants/Colours';

const ContactUs = () => {
  const openEmail = () => {
    Linking.openURL('mailto:support@yourapp.com');
  };

  const openPhone = () => {
    Linking.openURL('tel:+1234567890');
  };

  const openMap = () => {
    Linking.openURL('https://www.google.com/maps/place/Your+Address');
  };

  return (
    <View style={styles.container}>
      <Header>Contact Us</Header>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Email</Text>
        <TouchableOpacity onPress={openEmail}>
          <Text style={styles.link}>support@yourapp.com</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Phone</Text>
        <TouchableOpacity onPress={openPhone}>
          <Text style={styles.link}>+1 (234) 567-890</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Address</Text>
        <TouchableOpacity onPress={openMap}>
          <Text style={styles.link}>1234 Main Street, Anytown, USA</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Social Media</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://facebook.com/yourapp')}>
          <Text style={styles.link}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com/yourapp')}>
          <Text style={styles.link}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://instagram.com/yourapp')}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: darkTextColor,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
});

export default ContactUs;

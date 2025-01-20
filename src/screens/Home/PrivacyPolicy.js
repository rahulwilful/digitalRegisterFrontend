import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {darkTextColor} from '../../Constants/Colours';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <Header>Privacy Policy</Header>
      <View style={s.container}>
        <Text style={s.sectionTitle}>1. Introduction</Text>
        <Text style={s.text}>
          Welcome to [Your App Name]. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our mobile application (the "Service"). Please read this Privacy
          Policy carefully.
        </Text>

        <Text style={s.sectionTitle}>2. Information We Collect</Text>
        <Text style={s.text}>
          We may collect several different types of information for various
          purposes to provide and improve our Service to you.
        </Text>

        <Text style={s.subsectionTitle}>2.1 Personal Data</Text>
        <Text style={s.text}>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </Text>
        <Text style={s.text}>
          - Email address - First name and last name - Phone number - Address,
          State, Province, ZIP/Postal code, City - Cookies and Usage Data
        </Text>

        <Text style={s.subsectionTitle}>2.2 Usage Data</Text>
        <Text style={s.text}>
          We may also collect information that your browser sends whenever you
          visit our Service or when you access the Service by or through a
          mobile device ("Usage Data").
        </Text>
        <Text style={s.text}>
          This Usage Data may include information such as your computer's
          Internet Protocol address (e.g. IP address), browser type, browser
          version, the pages of our Service that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data.
        </Text>

        <Text style={s.sectionTitle}>3. Use of Data</Text>
        <Text style={s.text}>
          [Your App Name] uses the collected data for various purposes:
        </Text>
        <Text style={s.text}>
          - To provide and maintain the Service - To notify you about changes to
          our Service - To allow you to participate in interactive features of
          our Service when you choose to do so - To provide customer care and
          support - To provide analysis or valuable information so that we can
          improve the Service - To monitor the usage of the Service - To detect,
          prevent and address technical issues
        </Text>

        <Text style={s.sectionTitle}>4. Transfer of Data</Text>
        <Text style={s.text}>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
        </Text>

        <Text style={s.sectionTitle}>5. Disclosure of Data</Text>
        <Text style={s.text}>
          [Your App Name] may disclose your Personal Data in the good faith
          belief that such action is necessary to:
        </Text>
        <Text style={s.text}>
          - To comply with a legal obligation - To protect and defend the rights
          or property of [Your App Name] - To prevent or investigate possible
          wrongdoing in connection with the Service - To protect the personal
          safety of users of the Service or the public - To protect against
          legal liability
        </Text>

        <Text style={s.sectionTitle}>6. Security of Data</Text>
        <Text style={s.text}>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </Text>

        <Text style={s.sectionTitle}>7. Service Providers</Text>
        <Text style={s.text}>
          We may employ third party companies and individuals to facilitate our
          Service ("Service Providers"), to provide the Service on our behalf,
          to perform Service-related services or to assist us in analyzing how
          our Service is used.
        </Text>

        <Text style={s.sectionTitle}>8. Links to Other Sites</Text>
        <Text style={s.text}>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </Text>

        <Text style={s.sectionTitle}>9. Children's Privacy</Text>
        <Text style={s.text}>
          Our Service does not address anyone under the age of 18 ("Children").
        </Text>
        <Text style={s.text}>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </Text>

        <Text style={s.sectionTitle}>10. Changes to This Privacy Policy</Text>
        <Text style={s.text}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </Text>
        <Text style={s.text}>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </Text>

        <Text style={s.sectionTitle}>11. Contact Us</Text>
        <Text style={s.text}>
          If you have any questions about this Privacy Policy, please contact
          us:
        </Text>
        <Text style={s.text}>
          - By email: [your email] - By visiting this page on our website: [your
          website URL]
        </Text>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
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
  subsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: darkTextColor,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default PrivacyPolicy;

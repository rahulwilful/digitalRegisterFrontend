import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {darkTextColor} from '../../Constants/Colours';

const TermsAndConditions = () => {
  return (
    <ScrollView>
      <Header>Terms and Conditions</Header>
      <View style={s.container}>
        <Text style={s.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={s.text}>
          By accessing and using the [Your App Name] mobile application (the
          "Service"), you accept and agree to be bound by the terms and
          provisions of this agreement. Additionally, you acknowledge that you
          have read, understood, and agreed to our Privacy Policy.
        </Text>

        <Text style={s.sectionTitle}>2. Changes to Terms</Text>
        <Text style={s.text}>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will provide at
          least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </Text>

        <Text style={s.sectionTitle}>3. Access to the Service</Text>
        <Text style={s.text}>
          We reserve the right to withdraw or amend our Service, and any service
          or material we provide via the Service, in our sole discretion without
          notice. We will not be liable if for any reason all or any part of the
          Service is unavailable at any time or for any period.
        </Text>

        <Text style={s.sectionTitle}>4. Intellectual Property</Text>
        <Text style={s.text}>
          The Service and its entire contents, features, and functionality
          (including but not limited to all information, software, text,
          displays, images, video, and audio, and the design, selection, and
          arrangement thereof), are owned by the Company, its licensors, or
          other providers of such material and are protected by United States
          and international copyright, trademark, patent, trade secret, and
          other intellectual property or proprietary rights laws.
        </Text>

        <Text style={s.sectionTitle}>5. User Contributions</Text>
        <Text style={s.text}>
          The Service may contain message boards, chat rooms, personal web pages
          or profiles, forums, bulletin boards, and other interactive features
          (collectively, "Interactive Services") that allow users to post,
          submit, publish, display, or transmit to other users or other persons
          (hereinafter, "post") content or materials (collectively, "User
          Contributions") on or through the Service.
        </Text>

        <Text style={s.sectionTitle}>6. Prohibited Uses</Text>
        <Text style={s.text}>
          You may use the Service only for lawful purposes and in accordance
          with these Terms of Service. You agree not to use the Service:
        </Text>
        <Text style={s.text}>
          - In any way that violates any applicable federal, state, local, or
          international law or regulation (including, without limitation, any
          laws regarding the export of data or software to and from the US or
          other countries). - For the purpose of exploiting, harming, or
          attempting to exploit or harm minors in any way by exposing them to
          inappropriate content, asking for personally identifiable information,
          or otherwise. - To send, knowingly receive, upload, download, use, or
          re-use any material which does not comply with the Content Standards
          set out in these Terms of Service. - To transmit, or procure the
          sending of, any advertising or promotional material, including any
          "junk mail," "chain letter," "spam," or any other similar
          solicitation. - To impersonate or attempt to impersonate the Company,
          a Company employee, another user, or any other person or entity
          (including, without limitation, by using email addresses or screen
          names associated with any of the foregoing). - To engage in any other
          conduct that restricts or inhibits anyone's use or enjoyment of the
          Service, or which, as determined by us, may harm the Company or users
          of the Service, or expose them to liability.
        </Text>

        <Text style={s.sectionTitle}>7. Termination</Text>
        <Text style={s.text}>
          We may terminate or suspend your account and bar access to the Service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason and without limitation, including but not
          limited to a breach of the Terms.
        </Text>

        <Text style={s.sectionTitle}>8. Disclaimer of Warranties</Text>
        <Text style={s.text}>
          You understand that we cannot and do not guarantee or warrant that
          files available for downloading from the internet or the Service will
          be free of viruses or other destructive code. You are responsible for
          implementing sufficient procedures and checkpoints to satisfy your
          particular requirements for anti-virus protection and accuracy of data
          input and output, and for maintaining a means external to our site for
          any reconstruction of any lost data.
        </Text>

        <Text style={s.sectionTitle}>9. Limitation of Liability</Text>
        <Text style={s.text}>
          In no event will the Company, its affiliates, or their licensors,
          service providers, employees, agents, officers, or directors be liable
          for damages of any kind, under any legal theory, arising out of or in
          connection with your use, or inability to use, the Service, any
          websites linked to it, any content on the Service or such other
          websites or any services or items obtained through the Service or such
          other websites, including any direct, indirect, special, incidental,
          consequential, or punitive damages, including but not limited to,
          personal injury, pain and suffering, emotional distress, loss of
          revenue, loss of profits, loss of business, or any other damages
          whatsoever, even if the Company has been advised of the possibility of
          such damages.
        </Text>

        <Text style={s.sectionTitle}>10. Indemnification</Text>
        <Text style={s.text}>
          You agree to defend, indemnify, and hold harmless the Company, its
          affiliates, licensors, and service providers, and its and their
          respective officers, directors, employees, contractors, agents,
          licensors, suppliers, successors, and assigns from and against any
          claims, liabilities, damages, judgments, awards, losses, costs,
          expenses, or fees (including reasonable attorneys' fees) arising out
          of or relating to your violation of these Terms of Service or your use
          of the Service.
        </Text>

        <Text style={s.sectionTitle}>11. Governing Law</Text>
        <Text style={s.text}>
          All matters relating to the Service and these Terms of Service and any
          dispute or claim arising therefrom or related thereto (in each case,
          including non-contractual disputes or claims), shall be governed by
          and construed in accordance with the internal laws of the State of
          [Your State] without giving effect to any choice or conflict of law
          provision or rule (whether of the State of [Your State] or any other
          jurisdiction).
        </Text>

        <Text style={s.sectionTitle}>12. Arbitration</Text>
        <Text style={s.text}>
          At Company's sole discretion, it may require You to submit any
          disputes arising from the use of these Terms of Service or the
          Service, including disputes arising from or concerning their
          interpretation, violation, invalidity, non-performance, or
          termination, to final and binding arbitration under the Rules of
          Arbitration of the American Arbitration Association applying [Your
          State] law.
        </Text>

        <Text style={s.sectionTitle}>13. Waiver and Severability</Text>
        <Text style={s.text}>
          No waiver by the Company of any term or condition set out in these
          Terms of Service shall be deemed a further or continuing waiver of
          such term or condition or a waiver of any other term or condition, and
          any failure of the Company to assert a right or provision under these
          Terms of Service shall not constitute a waiver of such right or
          provision.
        </Text>
        <Text style={s.text}>
          If any provision of these Terms of Service is held by a court or other
          tribunal of competent jurisdiction to be invalid, illegal, or
          unenforceable for any reason, such provision shall be eliminated or
          limited to the minimum extent such that the remaining provisions of
          the Terms of Service will continue in full force and effect.
        </Text>

        <Text style={s.sectionTitle}>14. Entire Agreement</Text>
        <Text style={s.text}>
          The Terms of Service and our Privacy Policy constitute the sole and
          entire agreement between you and [Your App Name] with respect to the
          Service and supersede all prior and contemporaneous understandings,
          agreements, representations, and warranties, both written and oral,
          with respect to the Service.
        </Text>

        <Text style={s.sectionTitle}>15. Your Comments and Concerns</Text>
        <Text style={s.text}>
          This mobile application is operated by [Your Company Name]. All other
          feedback, comments, requests for technical support, and other
          communications relating to the Service should be directed to: [Your
          Contact Information].
        </Text>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 16,
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

export default TermsAndConditions;

import {StyleSheet, Dimensions} from 'react-native';
import {ScreenContentWrapper} from 'react-native-screens';

const screenHeight = Dimensions.get('window').height;
const sceenWidth = Dimensions.get('window').width;

const ES = StyleSheet.create({
  screenHeight: {
    height: screenHeight * 0.82,
  },
  minScreenHeight: {
    minHeight: screenHeight,
  },
  ScreenWidth: {
    width: sceenWidth,
  },
  minScreenWidth: {
    minWidth: sceenWidth,
  },
  main: {
    backgroundColor: '#6443AF',
    width: '100%',
    height: screenHeight,
  },

  productTitleColor: {
    color: '#431A70',
  },

  headingText: {
    color: '#451B6D',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  subHeadingText: {
    color: '#451B6D',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  modalHeadingText: {
    color: '#451B6D',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  textBlue: {
    color: '#6443AF',
  },
  textGreen: {
    color: '#00603C',
  },

  textBlueCoin: {
    color: '#683CAC',
  },

  bgBlue: {
    backgroundColor: '#6443AF',
  },

  bgDarkGreen: {
    backgroundColor: '#008282',
  },

  bgLightGreen: {
    backgroundColor: '#25D366',
  },

  bgLightTea: {
    backgroundColor: '#FFEBD6',
  },

  bgGradientBlue: {
    backgroundImage: 'linear-gradient(90deg, #602A9A, #3F1869)',
  },

  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dBlock: {
    display: 'block',
  },
  dNone: {
    display: 'none',
  },

  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  textTransformNone: {
    textTransform: 'none',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  uppercase: {
    textTransform: 'uppercase',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  drop_shadow: {
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  card_drop_shadow_light: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  card_drop_shadow_dark: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  relative: {
    position: 'relative',
  },

  absolute: {
    position: 'absolute',
  },

  sticky: {
    position: 'sticky',
  },

  static: {
    position: 'static',
  },

  fixed: {
    position: 'fixed',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  z1: {
    zIndex: 1,
  },
  z2: {
    zIndex: 2,
  },
  z3: {
    zIndex: 3,
  },
  z4: {
    zIndex: 4,
  },
  z5: {
    zIndex: 5,
  },
  z6: {
    zIndex: 6,
  },
  z7: {
    zIndex: 7,
  },
  z10: {
    zIndex: 10,
  },
  z11: {
    zIndex: 11,
  },
  z12: {
    zIndex: 12,
  },
  z13: {
    zIndex: 13,
  },
  z14: {
    zIndex: 14,
  },
  z15: {
    zIndex: 15,
  },
  z16: {
    zIndex: 16,
  },
  z17: {
    zIndex: 17,
  },
  z18: {
    zIndex: 18,
  },
  z19: {
    zIndex: 19,
  },
  z20: {
    zIndex: 20,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  right0: {
    right: 0,
  },
  right10: {
    right: 10,
  },
  right20: {
    right: 20,
  },
  right30: {
    right: 30,
  },
  right40: {
    right: 40,
  },
  right50: {
    right: 50,
  },
  right60: {
    right: 60,
  },
  right70: {
    right: 70,
  },
  right80: {
    right: 80,
  },
  right90: {
    right: 90,
  },
  right100: {
    right: 100,
  },

  left0: {
    left: 0,
  },
  left10: {
    left: 10,
  },
  left20: {
    left: 20,
  },
  left30: {
    left: 30,
  },
  left40: {
    left: 40,
  },
  left50: {
    left: 50,
  },
  left60: {
    left: 60,
  },
  left70: {
    left: 70,
  },
  left80: {
    left: 80,
  },
  left90: {
    left: 90,
  },
  left100: {
    left: 100,
  },

  top1: {
    top: '1%',
  },
  top2: {
    top: '2%',
  },
  top3: {
    top: '3%',
  },
  top4: {
    top: '4%',
  },
  top5: {
    top: '5%',
  },
  top6: {
    top: '6%',
  },
  top7: {
    top: '7%',
  },
  top8: {
    top: '8%',
  },
  top9: {
    top: '9%',
  },
  top10: {
    top: '10%',
  },
  top11: {
    top: '11%',
  },
  top12: {
    top: '12%',
  },
  top13: {
    top: '13%',
  },
  top14: {
    top: '14%',
  },
  top15: {
    top: '15%',
  },
  top16: {
    top: '16%',
  },
  top17: {
    top: '17%',
  },
  top18: {
    top: '18%',
  },
  top19: {
    top: '19%',
  },
  top20: {
    top: '20%',
  },
  top21: {
    top: '21%',
  },
  top22: {
    top: '22%',
  },
  top23: {
    top: '23%',
  },
  top24: {
    top: '24%',
  },
  top25: {
    top: '25%',
  },
  top26: {
    top: '26%',
  },
  top27: {
    top: '27%',
  },
  top28: {
    top: '28%',
  },
  top29: {
    top: '29%',
  },
  top30: {
    top: '30%',
  },
  top31: {
    top: '31%',
  },
  top32: {
    top: '32%',
  },
  top33: {
    top: '33%',
  },
  top34: {
    top: '34%',
  },
  top35: {
    top: '35%',
  },
  top36: {
    top: '36%',
  },
  top37: {
    top: '37%',
  },
  top38: {
    top: '38%',
  },
  top39: {
    top: '39%',
  },
  top40: {
    top: '40%',
  },
  top41: {
    top: '41%',
  },
  top42: {
    top: '42%',
  },
  top43: {
    top: '43%',
  },
  top44: {
    top: '44%',
  },
  top45: {
    top: '45%',
  },
  top46: {
    top: '46%',
  },
  top47: {
    top: '47%',
  },
  top48: {
    top: '48%',
  },
  top49: {
    top: '49%',
  },
  top50: {
    top: '50%',
  },
  top51: {
    top: '51%',
  },
  top52: {
    top: '52%',
  },
  top53: {
    top: '53%',
  },
  top54: {
    top: '54%',
  },
  top55: {
    top: '55%',
  },
  top56: {
    top: '56%',
  },
  top57: {
    top: '57%',
  },
  top58: {
    top: '58%',
  },
  top59: {
    top: '59%',
  },
  top60: {
    top: '60%',
  },
  top61: {
    top: '61%',
  },
  top62: {
    top: '62%',
  },
  top63: {
    top: '63%',
  },
  top64: {
    top: '64%',
  },
  top65: {
    top: '65%',
  },
  top66: {
    top: '66%',
  },
  top67: {
    top: '67%',
  },
  top68: {
    top: '68%',
  },
  top69: {
    top: '69%',
  },
  top70: {
    top: '70%',
  },
  top71: {
    top: '71%',
  },
  top72: {
    top: '72%',
  },
  top73: {
    top: '73%',
  },
  top74: {
    top: '74%',
  },
  top75: {
    top: '75%',
  },
  top76: {
    top: '76%',
  },
  top77: {
    top: '77%',
  },
  top78: {
    top: '78%',
  },
  top79: {
    top: '79%',
  },
  top80: {
    top: '80%',
  },
  top81: {
    top: '81%',
  },
  top82: {
    top: '82%',
  },
  top83: {
    top: '83%',
  },
  top84: {
    top: '84%',
  },
  top85: {
    top: '85%',
  },
  top86: {
    top: '86%',
  },
  top87: {
    top: '87%',
  },
  top88: {
    top: '88%',
  },
  top89: {
    top: '89%',
  },
  top90: {
    top: '90%',
  },
  top91: {
    top: '91%',
  },
  top92: {
    top: '92%',
  },
  top93: {
    top: '93%',
  },
  top94: {
    top: '94%',
  },
  top95: {
    top: '95%',
  },
  top96: {
    top: '96%',
  },
  top97: {
    top: '97%',
  },
  top98: {
    top: '98%',
  },
  top99: {
    top: '99%',
  },
  top100: {
    top: '100%',
  },

  bottom0: {
    bottom: 0,
  },
  bottom1: {
    bottom: '1%',
  },
  bottom2: {
    bottom: '2%',
  },
  bottom3: {
    bottom: '3%',
  },
  bottom4: {
    bottom: '4%',
  },
  bottom5: {
    bottom: '5%',
  },
  bottom6: {
    bottom: '6%',
  },
  bottom7: {
    bottom: '7%',
  },
  bottom8: {
    bottom: '8%',
  },
  bottom9: {
    bottom: '9%',
  },
  bottom10: {
    bottom: '10%',
  },
  bottom11: {
    bottom: '11%',
  },
  bottom12: {
    bottom: '12%',
  },
  bottom13: {
    bottom: '13%',
  },
  bottom14: {
    bottom: '14%',
  },
  bottom15: {
    bottom: '15%',
  },
  bottom16: {
    bottom: '16%',
  },
  bottom17: {
    bottom: '17%',
  },
  bottom18: {
    bottom: '18%',
  },
  bottom19: {
    bottom: '19%',
  },
  bottom20: {
    bottom: '20%',
  },
  bottom21: {
    bottom: '21%',
  },
  bottom22: {
    bottom: '22%',
  },
  bottom23: {
    bottom: '23%',
  },
  bottom24: {
    bottom: '24%',
  },
  bottom25: {
    bottom: '25%',
  },
  bottom26: {
    bottom: '26%',
  },
  bottom27: {
    bottom: '27%',
  },
  bottom28: {
    bottom: '28%',
  },
  bottom29: {
    bottom: '29%',
  },
  bottom30: {
    bottom: '30%',
  },
  bottom31: {
    bottom: '31%',
  },
  bottom32: {
    bottom: '32%',
  },
  bottom33: {
    bottom: '33%',
  },
  bottom34: {
    bottom: '34%',
  },
  bottom35: {
    bottom: '35%',
  },
  bottom36: {
    bottom: '36%',
  },
  bottom37: {
    bottom: '37%',
  },
  bottom38: {
    bottom: '38%',
  },
  bottom39: {
    bottom: '39%',
  },
  bottom40: {
    bottom: '40%',
  },
  bottom41: {
    bottom: '41%',
  },
  bottom42: {
    bottom: '42%',
  },
  bottom43: {
    bottom: '43%',
  },
  bottom44: {
    bottom: '44%',
  },
  bottom45: {
    bottom: '45%',
  },
  bottom46: {
    bottom: '46%',
  },
  bottom47: {
    bottom: '47%',
  },
  bottom48: {
    bottom: '48%',
  },
  bottom49: {
    bottom: '49%',
  },
  bottom50: {
    bottom: '50%',
  },
  bottom51: {
    bottom: '51%',
  },
  bottom52: {
    bottom: '52%',
  },
  bottom53: {
    bottom: '53%',
  },
  bottom54: {
    bottom: '54%',
  },
  bottom55: {
    bottom: '55%',
  },
  bottom56: {
    bottom: '56%',
  },
  bottom57: {
    bottom: '57%',
  },
  bottom58: {
    bottom: '58%',
  },
  bottom59: {
    bottom: '59%',
  },
  bottom60: {
    bottom: '60%',
  },
  bottom61: {
    bottom: '61%',
  },
  bottom62: {
    bottom: '62%',
  },
  bottom63: {
    bottom: '63%',
  },
  bottom64: {
    bottom: '64%',
  },
  bottom65: {
    bottom: '65%',
  },
  bottom66: {
    bottom: '66%',
  },
  bottom67: {
    bottom: '67%',
  },
  bottom68: {
    bottom: '68%',
  },
  bottom69: {
    bottom: '69%',
  },
  bottom70: {
    bottom: '70%',
  },
  bottom71: {
    bottom: '71%',
  },
  bottom72: {
    bottom: '72%',
  },
  bottom73: {
    bottom: '73%',
  },
  bottom74: {
    bottom: '74%',
  },
  bottom75: {
    bottom: '75%',
  },
  bottom76: {
    bottom: '76%',
  },
  bottom77: {
    bottom: '77%',
  },
  bottom78: {
    bottom: '78%',
  },
  bottom79: {
    bottom: '79%',
  },
  bottom80: {
    bottom: '80%',
  },
  bottom81: {
    bottom: '81%',
  },
  bottom82: {
    bottom: '82%',
  },
  bottom83: {
    bottom: '83%',
  },
  bottom84: {
    bottom: '84%',
  },
  bottom85: {
    bottom: '85%',
  },
  bottom86: {
    bottom: '86%',
  },
  bottom87: {
    bottom: '87%',
  },
  bottom88: {
    bottom: '88%',
  },
  bottom89: {
    bottom: '89%',
  },
  bottom90: {
    bottom: '90%',
  },
  bottom91: {
    bottom: '91%',
  },
  bottom92: {
    bottom: '92%',
  },
  bottom93: {
    bottom: '93%',
  },
  bottom94: {
    bottom: '94%',
  },
  bottom95: {
    bottom: '95%',
  },
  bottom96: {
    bottom: '96%',
  },
  bottom97: {
    bottom: '97%',
  },
  bottom98: {
    bottom: '98%',
  },
  bottom99: {
    bottom: '99%',
  },
  bottom100: {
    bottom: '100%',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  shadow1: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Offset in x and y directions
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 3.84, // How blurred the shadow is
    elevation: 3,
  },
  shadow2: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 1.41, // How blurred the shadow is
    elevation: 3,
  },
  shadow3: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.2, // Opacity of the shadow
    shadowRadius: 2.82, // How blurred the shadow is
    elevation: 4,
  },
  shadow4: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 4.24, // How blurred the shadow is
    elevation: 5,
  },
  shadow5: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.4, // Opacity of the shadow
    shadowRadius: 5.65, // How blurred the shadow is
    elevation: 6,
  },
  shadow6: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.5, // Opacity of the shadow
    shadowRadius: 6.27, // How blurred the shadow is
    elevation: 8,
  },
  shadow7: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.6, // Opacity of the shadow
    shadowRadius: 7.08, // How blurred the shadow is
    elevation: 9,
  },
  shadow8: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.7, // Opacity of the shadow
    shadowRadius: 8.17, // How blurred the shadow is
    elevation: 10,
  },
  shadow9: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.8, // Opacity of the shadow
    shadowRadius: 9.26, // How blurred the shadow is
    elevation: 11,
  },
  shadow10: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.9, // Opacity of the shadow
    shadowRadius: 10, // How blurred the shadow is
    elevation: 12,
  },

  insetShadow1: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Offset in x and y directions
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 3.84, // How blurred the shadow is
    elevation: 1,
  },

  insetShadow2: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 1.41, // How blurred the shadow is
    elevation: 3,
  },

  insetShadow3: {
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Offset in x and y directions
    shadowOpacity: 0.2, // Opacity of the shadow
    shadowRadius: 2.82, // How blurred the shadow is
    elevation: 4,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  bgLight: {
    backgroundColor: '#ffffff',
  },
  bgPrimary: {
    backgroundColor: '#007bff',
  },
  bgWarning: {
    backgroundColor: '#ffc107',
  },
  bgSuccess: {
    backgroundColor: '#28a745',
  },
  bgInfo: {
    backgroundColor: '#17a2b8',
  },
  bgDark: {
    backgroundColor: '#343a40',
  },
  bgSecondary: {
    backgroundColor: '#6c757d',
  },
  bgDanger: {
    backgroundColor: '#dc3545',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  borderTopPrimary: {
    borderColor: '#007bff',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  objectFitCover: {
    objectFit: 'cover',
  },

  objectFitContain: {
    objectFit: 'contain',
  },

  onjectFitNone: {
    objectFit: 'none',
  },

  objectFitScaleDown: {
    objectFit: 'scale-down',
  },

  objectFitFill: {
    objectFit: 'fill',
  },

  objectFitScaleUp: {
    objectFit: 'scale-up',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  bex: {},

  overflowHidden: {
    overflow: 'hidden',
  },

  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textStart: {
    textAlign: 'left', // For LTR languages, use 'right' for RTL languages
  },
  textEnd: {
    textAlign: 'right', // For LTR languages, use 'left' for RTL languages
  },

  letterSpace1: {
    letterSpacing: 1,
  },
  letterSpace2: {
    letterSpacing: 2,
  },
  letterSpace3: {
    letterSpacing: 3,
  },
  letterSpace4: {
    letterSpacing: 4,
  },
  letterSpace5: {
    letterSpacing: 5,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  bRadius5: {
    borderRadius: 5,
  },

  bRadius8: {
    borderRadius: 8,
  },

  bRadius10: {
    borderRadius: 10,
  },

  bRadius12: {
    borderRadius: 12,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  xCenter: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  yCenter: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  capitalize: {
    textTransform: 'capitalize',
  },

  lowercase: {
    textTransform: 'lowercase',
  },

  uppercase: {
    textTransform: 'uppercase',
  },

  lineThrough: {
    textDecorationLine: 'line-through',
  },

  textLight: {
    color: 'white',
  },

  textDark: {
    color: 'black',
  },
  textDanger: {
    color: '#dc3545',
  },
  textPrimary: {
    color: '#007bff',
  },
  textSuccess: {
    color: '#28a745',
  },
  textInfo: {
    color: '#17a2b8',
  },
  textWarning: {
    color: '#ffc107',
  },
  textSecondary: {
    color: '#6c757d',
  },
  placeHolderText: {
    color: '#919191',
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  tempBorder: {
    borderWidth: 1,
    borderColor: '#007bff',
  },
  tempBorder2: {
    borderWidth: 1,
    borderColor: '#dc3545',
  },
  border1: {
    borderWidth: 1,
  },
  border2: {
    borderWidth: 2,
  },
  border3: {
    borderWidth: 3,
  },
  border4: {
    borderWidth: 4,
  },
  border5: {
    borderWidth: 5,
  },

  borderTopWidth1: {
    borderTopWidth: 1,
  },
  borderTopWidth2: {
    borderTopWidth: 2,
  },
  borderTopWidth3: {
    borderTopWidth: 3,
  },
  borderTopWidth4: {
    borderTopWidth: 4,
  },

  borderEndWidth1: {
    borderEndWidth: 1,
  },
  borderEndWidth2: {
    borderEndWidth: 2,
  },
  borderEndWidth3: {
    borderEndWidth: 3,
  },
  borderEndWidth4: {
    borderEndWidth: 4,
  },

  borderStartWidth1: {
    borderStartWidth: 1,
  },
  borderStartWidth2: {
    borderStartWidth: 2,
  },
  borderStartWidth3: {
    borderStartWidth: 3,
  },
  borderStartWidth4: {
    borderStartWidth: 4,
  },

  borderBottomWidth1: {
    borderBottomWidth: 1,
  },
  borderBottomWidth2: {
    borderBottomWidth: 2,
  },
  borderBottomWidth3: {
    borderBottomWidth: 3,
  },
  borderBottomWidth4: {
    borderBottomWidth: 4,
  },

  borderTop: {
    borderTopStyle: 'solid',
  },
  borderEnd: {
    borderEndStyle: 'solid',
  },
  borderStart: {
    borderStartStyle: 'solid',
  },
  borderBottom: {
    borderBottomStyle: 'solid',
  },

  borderPrimary: {
    borderColor: '#007bff', // Blue
    /*   borderWidth: 2, */
  },
  borderLight: {
    borderColor: '#ffffff', // Blue
    /*   borderWidth: 2, */
  },
  borderDark: {
    borderColor: '#000000', // Blue
    /*   borderWidth: 2, */
  },
  borderSecondary: {
    borderColor: '#6c757d', // Gray
    /*   borderWidth: 2, */
  },
  borderSuccess: {
    borderColor: '#28a745', // Green
    /*   borderWidth: 2, */
  },
  borderDanger: {
    borderColor: '#dc3545', // Red
    /*   borderWidth: 2, */
  },
  borderWarning: {
    borderColor: '#ffc107', // Yellow
    /*   borderWidth: 2, */
  },

  borerOpacity25: {
    opacity: 0.25,
  },
  borerOpacity50: {
    opacity: 0.5,
  },
  borerOpacity75: {
    opacity: 0.75,
  },
  borerOpacity100: {
    opacity: 1,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  borderTop: {},

  wfull: {
    width: '100%',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  p02: {
    padding: 2,
  },

  p04: {
    padding: 4,
  },

  p06: {
    padding: 6,
  },
  p08: {
    padding: 8,
  },

  p1: {
    padding: 10,
  },
  p2: {
    padding: 20,
  },
  p3: {
    padding: 30,
  },
  p4: {
    padding: 40,
  },
  p5: {
    padding: 50,
  },

  px02: {
    paddingHorizontal: 2,
  },
  px04: {
    paddingHorizontal: 4,
  },
  px06: {
    paddingHorizontal: 6,
  },
  px08: {
    paddingHorizontal: 8,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },

  // Padding Y (Vertical)
  py02: {
    paddingVertical: 2,
  },
  py04: {
    paddingVertical: 4,
  },
  py06: {
    paddingVertical: 6,
  },
  py08: {
    paddingVertical: 8,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  py3: {
    paddingVertical: 30,
  },
  py4: {
    paddingVertical: 40,
  },
  py5: {
    paddingVertical: 50,
  },

  // Padding Start
  ps02: {
    paddingStart: 2,
  },
  ps04: {
    paddingStart: 4,
  },
  ps06: {
    paddingStart: 6,
  },
  ps08: {
    paddingStart: 8,
  },

  ps1: {
    paddingStart: 10,
  },
  ps2: {
    paddingStart: 20,
  },
  ps3: {
    paddingStart: 30,
  },
  ps4: {
    paddingStart: 40,
  },
  ps5: {
    paddingStart: 50,
  },

  // Padding End
  pe02: {
    paddingEnd: 2,
  },
  pe04: {
    paddingEnd: 4,
  },
  pe06: {
    paddingEnd: 6,
  },
  pe08: {
    paddingEnd: 8,
  },
  pe1: {
    paddingEnd: 10,
  },
  pe2: {
    paddingEnd: 20,
  },
  pe3: {
    paddingEnd: 30,
  },
  pe4: {
    paddingEnd: 40,
  },
  pe5: {
    paddingEnd: 50,
  },

  // Padding Top
  pt02: {
    paddingTop: 2,
  },
  pt04: {
    paddingTop: 4,
  },
  pt06: {
    paddingTop: 6,
  },
  pt08: {
    paddingTop: 8,
  },
  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pt5: {
    paddingTop: 50,
  },

  // Padding Bottom
  pb02: {
    paddingBottom: 2,
  },
  pb04: {
    paddingBottom: 4,
  },
  pb06: {
    paddingBottom: 6,
  },
  pb08: {
    paddingBottom: 8,
  },

  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  pb3: {
    paddingBottom: 30,
  },
  pb4: {
    paddingBottom: 40,
  },
  pb5: {
    paddingBottom: 50,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  m02: {
    margin: 2,
  },
  m04: {
    margin: 4,
  },
  m06: {
    margin: 6,
  },
  m08: {
    margin: 8,
  },
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  m3: {
    margin: 30,
  },
  m4: {
    margin: 40,
  },
  m5: {
    margin: 50,
  },

  // Margin X (Horizontal)
  mx02: {
    marginHorizontal: 2,
  },
  mx04: {
    marginHorizontal: 4,
  },
  mx06: {
    marginHorizontal: 6,
  },
  mx08: {
    marginHorizontal: 8,
  },

  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  mx3: {
    marginHorizontal: 30,
  },
  mx4: {
    marginHorizontal: 40,
  },
  mx5: {
    marginHorizontal: 50,
  },

  // Margin Y (Vertical)
  my02: {
    marginVertical: 2,
  },
  my04: {
    marginVertical: 4,
  },
  my06: {
    marginVertical: 6,
  },
  my08: {
    marginVertical: 8,
  },

  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
  my3: {
    marginVertical: 30,
  },
  my4: {
    marginVertical: 40,
  },
  my5: {
    marginVertical: 50,
  },

  // Margin Start
  ms02: {
    marginStart: 2,
  },
  ms04: {
    marginStart: 4,
  },
  ms06: {
    marginStart: 6,
  },
  ms08: {
    marginStart: 8,
  },

  ms1: {
    marginStart: 10,
  },
  ms2: {
    marginStart: 20,
  },
  ms3: {
    marginStart: 30,
  },
  ms4: {
    marginStart: 40,
  },
  ms5: {
    marginStart: 50,
  },

  // Margin End
  me02: {
    marginEnd: 2,
  },
  me04: {
    marginEnd: 4,
  },
  me06: {
    marginEnd: 6,
  },
  me08: {
    marginEnd: 8,
  },

  me1: {
    marginEnd: 10,
  },
  me2: {
    marginEnd: 20,
  },
  me3: {
    marginEnd: 30,
  },
  me4: {
    marginEnd: 40,
  },
  me5: {
    marginEnd: 50,
  },

  // Margin Top
  mt02: {
    marginTop: 2,
  },
  mt04: {
    marginTop: 4,
  },
  mt06: {
    marginTop: 6,
  },
  mt08: {
    marginTop: 8,
  },

  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mt5: {
    marginTop: 50,
  },

  // Margin Bottom
  mb02: {
    marginBottom: 2,
  },
  mb04: {
    marginBottom: 4,
  },
  mb06: {
    marginBottom: 6,
  },
  mb08: {
    marginBottom: 8,
  },

  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  fwR: {
    fontWeight: 'regular',
  },
  fwM: {
    fontWeight: 'medium',
  },
  fwB: {
    fontWeight: 'bold',
  },
  fwSB: {
    fontWeight: 600,
  },
  fw100: {
    fontWeight: 100,
  },
  fw100: {
    fontWeight: 100,
  },
  fw200: {
    fontWeight: 200,
  },
  fw300: {
    fontWeight: 300,
  },
  fw400: {
    fontWeight: 400,
  },
  fw500: {
    fontWeight: 500,
  },
  fw600: {
    fontWeight: 600,
  },
  fw700: {
    fontWeight: 700,
  },
  fw800: {
    fontWeight: 800,
  },
  fw900: {
    fontWeight: 900,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  f10: {
    fontSize: 10,
  },

  f12: {
    fontSize: 12,
  },

  f14: {
    fontSize: 14,
  },

  f16: {
    fontSize: 16,
  },

  f18: {
    fontSize: 18,
  },

  f20: {
    fontSize: 20,
  },

  f22: {
    fontSize: 22,
  },

  f24: {
    fontSize: 24,
  },

  f26: {
    fontSize: 26,
  },
  f28: {
    fontSize: 28,
  },
  f30: {
    fontSize: 30,
  },
  f32: {
    fontSize: 32,
  },
  f34: {
    fontSize: 34,
  },
  f36: {
    fontSize: 36,
  },
  f38: {
    fontSize: 38,
  },
  f40: {
    fontSize: 40,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  gap1: {
    gap: 5,
  },

  gap2: {
    gap: 10,
  },

  gap3: {
    gap: 15,
  },

  gap4: {
    gap: 20,
  },

  gap5: {
    gap: 25,
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemsStart: {
    alignItems: 'start',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignItemsStretch: {
    alignItems: 'stretch',
  },

  alignItemsBaseline: {
    alignItems: 'baseline',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  justifyContentStart: {
    justifyContent: 'start',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },

  justifyContentStretch: {
    justifyContent: 'stretch',
  },

  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },

  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },

  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  flexRow: {
    flexDirection: 'row',
  },

  flexColumn: {
    flexDirection: 'column',
  },

  flexRowReverse: {
    flexDirection: 'row-reverse',
  },

  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },

  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  fx0: {
    flex: 0,
  },

  fx1: {
    flex: 1,
  },
  fx2: {
    flex: 2,
  },
  fx3: {
    flex: 3,
  },
  fx4: {
    flex: 4,
  },
  fx5: {
    flex: 5,
  },
  fx6: {
    flex: 6,
  },
  fx7: {
    flex: 7,
  },
  fx8: {
    flex: 8,
  },
  fx9: {
    flex: 9,
  },
  fx10: {
    flex: 10,
  },

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  wAuto: {
    width: 'auto',
  },
  w1: {
    width: '1%',
  },
  w2: {
    width: '2%',
  },
  w3: {
    width: '3%',
  },
  w4: {
    width: '4%',
  },
  w5: {
    width: '5%',
  },
  w6: {
    width: '6%',
  },
  w7: {
    width: '7%',
  },
  w8: {
    width: '8%',
  },
  w9: {
    width: '9%',
  },
  w10: {
    width: '10%',
  },
  w11: {
    width: '11%',
  },
  w12: {
    width: '12%',
  },
  w13: {
    width: '13%',
  },
  w14: {
    width: '14%',
  },
  w15: {
    width: '15%',
  },
  w16: {
    width: '16%',
  },
  w17: {
    width: '17%',
  },
  w18: {
    width: '18%',
  },
  w19: {
    width: '19%',
  },
  w20: {
    width: '20%',
  },
  w21: {
    width: '21%',
  },
  w22: {
    width: '22%',
  },
  w23: {
    width: '23%',
  },
  w24: {
    width: '24%',
  },
  w25: {
    width: '25%',
  },
  w26: {
    width: '26%',
  },
  w27: {
    width: '27%',
  },
  w28: {
    width: '28%',
  },
  w29: {
    width: '29%',
  },
  w30: {
    width: '30%',
  },
  w31: {
    width: '31%',
  },
  w32: {
    width: '32%',
  },
  w33: {
    width: '33%',
  },
  w34: {
    width: '34%',
  },
  w35: {
    width: '35%',
  },
  w36: {
    width: '36%',
  },
  w37: {
    width: '37%',
  },
  w38: {
    width: '38%',
  },
  w39: {
    width: '39%',
  },
  w40: {
    width: '40%',
  },
  w41: {
    width: '41%',
  },
  w42: {
    width: '42%',
  },
  w43: {
    width: '43%',
  },
  w44: {
    width: '44%',
  },
  w45: {
    width: '45%',
  },
  w46: {
    width: '46%',
  },
  w47: {
    width: '47%',
  },
  w48: {
    width: '48%',
  },
  w49: {
    width: '49%',
  },
  w50: {
    width: '50%',
  },
  w51: {
    width: '51%',
  },
  w52: {
    width: '52%',
  },
  w53: {
    width: '53%',
  },
  w54: {
    width: '54%',
  },
  w55: {
    width: '55%',
  },
  w56: {
    width: '56%',
  },
  w57: {
    width: '57%',
  },
  w58: {
    width: '58%',
  },
  w59: {
    width: '59%',
  },
  w60: {
    width: '60%',
  },
  w61: {
    width: '61%',
  },
  w62: {
    width: '62%',
  },
  w63: {
    width: '63%',
  },
  w64: {
    width: '64%',
  },
  w65: {
    width: '65%',
  },
  w66: {
    width: '66%',
  },
  w67: {
    width: '67%',
  },
  w68: {
    width: '68%',
  },
  w69: {
    width: '69%',
  },
  w70: {
    width: '70%',
  },
  w71: {
    width: '71%',
  },
  w72: {
    width: '72%',
  },
  w73: {
    width: '73%',
  },
  w74: {
    width: '74%',
  },
  w75: {
    width: '75%',
  },
  w76: {
    width: '76%',
  },
  w77: {
    width: '77%',
  },
  w78: {
    width: '78%',
  },
  w79: {
    width: '79%',
  },
  w80: {
    width: '80%',
  },
  w81: {
    width: '81%',
  },
  w82: {
    width: '82%',
  },
  w83: {
    width: '83%',
  },
  w84: {
    width: '84%',
  },
  w85: {
    width: '85%',
  },
  w86: {
    width: '86%',
  },
  w87: {
    width: '87%',
  },
  w88: {
    width: '88%',
  },
  w89: {
    width: '89%',
  },
  w90: {
    width: '90%',
  },
  w91: {
    width: '91%',
  },
  w92: {
    width: '92%',
  },
  w93: {
    width: '93%',
  },
  w94: {
    width: '94%',
  },
  w95: {
    width: '95%',
  },
  w96: {
    width: '96%',
  },
  w97: {
    width: '97%',
  },
  w98: {
    width: '98%',
  },
  w99: {
    width: '99%',
  },
  w100: {
    width: '100%',
  },

  hAuto: {height: 'auto'},
  h1: {height: '1%'},
  h2: {height: '2%'},
  h3: {height: '3%'},
  h4: {height: '4%'},
  h5: {height: '5%'},
  h6: {height: '6%'},
  h7: {height: '7%'},
  h8: {height: '8%'},
  h9: {height: '9%'},
  h10: {height: '10%'},
  h11: {height: '11%'},
  h12: {height: '12%'},
  h13: {height: '13%'},
  h14: {height: '14%'},
  h15: {height: '15%'},
  h16: {height: '16%'},
  h17: {height: '17%'},
  h18: {height: '18%'},
  h19: {height: '19%'},
  h20: {height: '20%'},
  h21: {height: '21%'},
  h22: {height: '22%'},
  h23: {height: '23%'},
  h24: {height: '24%'},
  h25: {height: '25%'},
  h26: {height: '26%'},
  h27: {height: '27%'},
  h28: {height: '28%'},
  h29: {height: '29%'},
  h30: {height: '30%'},
  h31: {height: '31%'},
  h32: {height: '32%'},
  h33: {height: '33%'},
  h34: {height: '34%'},
  h35: {height: '35%'},
  h36: {height: '36%'},
  h37: {height: '37%'},
  h38: {height: '38%'},
  h39: {height: '39%'},
  h40: {height: '40%'},
  h41: {height: '41%'},
  h42: {height: '42%'},
  h43: {height: '43%'},
  h44: {height: '44%'},
  h45: {height: '45%'},
  h46: {height: '46%'},
  h47: {height: '47%'},
  h48: {height: '48%'},
  h49: {height: '49%'},
  h50: {height: '50%'},
  h51: {height: '51%'},
  h52: {height: '52%'},
  h53: {height: '53%'},
  h54: {height: '54%'},
  h55: {height: '55%'},
  h56: {height: '56%'},
  h57: {height: '57%'},
  h58: {height: '58%'},
  h59: {height: '59%'},
  h60: {height: '60%'},
  h61: {height: '61%'},
  h62: {height: '62%'},
  h63: {height: '63%'},
  h64: {height: '64%'},
  h65: {height: '65%'},
  h66: {height: '66%'},
  h67: {height: '67%'},
  h68: {height: '68%'},
  h69: {height: '69%'},
  h70: {height: '70%'},
  h71: {height: '71%'},
  h72: {height: '72%'},
  h73: {height: '73%'},
  h74: {height: '74%'},
  h75: {height: '75%'},
  h76: {height: '76%'},
  h77: {height: '77%'},
  h78: {height: '78%'},
  h79: {height: '79%'},
  h80: {height: '80%'},
  h81: {height: '81%'},
  h82: {height: '82%'},
  h83: {height: '83%'},
  h84: {height: '84%'},
  h85: {height: '85%'},
  h86: {height: '86%'},
  h87: {height: '87%'},
  h88: {height: '88%'},
  h89: {height: '89%'},
  h90: {height: '90%'},
  h91: {height: '91%'},
  h92: {height: '92%'},
  h93: {height: '93%'},
  h94: {height: '94%'},
  h95: {height: '95%'},
  h96: {height: '96%'},
  h97: {height: '97%'},
  h98: {height: '98%'},
  h99: {height: '99%'},
  h100: {height: '100%'},

  hs1: {height: 1},
  hs2: {height: 2},
  hs3: {height: 3},
  hs4: {height: 4},
  hs5: {height: 5},
  hs6: {height: 6},
  hs7: {height: 7},
  hs8: {height: 8},
  hs9: {height: 9},
  hs10: {height: 10},
  hs11: {height: 11},
  hs12: {height: 12},
  hs13: {height: 13},
  hs14: {height: 14},
  hs15: {height: 15},
  hs16: {height: 16},
  hs17: {height: 17},
  hs18: {height: 18},
  hs19: {height: 19},
  hs20: {height: 20},
  hs21: {height: 21},
  hs22: {height: 22},
  hs23: {height: 23},
  hs24: {height: 24},
  hs25: {height: 25},
  hs26: {height: 26},
  hs27: {height: 27},
  hs28: {height: 28},
  hs29: {height: 29},
  hs30: {height: 30},
  hs31: {height: 31},
  hs32: {height: 32},
  hs33: {height: 33},
  hs34: {height: 34},
  hs35: {height: 35},
  hs36: {height: 36},
  hs37: {height: 37},
  hs38: {height: 38},
  hs39: {height: 39},
  hs40: {height: 40},
  hs41: {height: 41},
  hs42: {height: 42},
  hs43: {height: 43},
  hs44: {height: 44},
  hs45: {height: 45},
  hs46: {height: 46},
  hs47: {height: 47},
  hs48: {height: 48},
  hs49: {height: 49},
  hs50: {height: 50},
  hs51: {height: 51},
  hs52: {height: 52},
  hs53: {height: 53},
  hs54: {height: 54},
  hs55: {height: 55},
  hs56: {height: 56},
  hs57: {height: 57},
  hs58: {height: 58},
  hs59: {height: 59},
  hs60: {height: 60},
  hs61: {height: 61},
  hs62: {height: 62},
  hs63: {height: 63},
  hs64: {height: 64},
  hs65: {height: 65},
  hs66: {height: 66},
  hs67: {height: 67},
  hs68: {height: 68},
  hs69: {height: 69},
  hs70: {height: 70},
  hs71: {height: 71},
  hs72: {height: 72},
  hs73: {height: 73},
  hs74: {height: 74},
  hs75: {height: 75},
  hs76: {height: 76},
  hs77: {height: 77},
  hs78: {height: 78},
  hs79: {height: 79},
  hs80: {height: 80},
  hs81: {height: 81},
  hs82: {height: 82},
  hs83: {height: 83},
  hs84: {height: 84},
  hs85: {height: 85},
  hs86: {height: 86},
  hs87: {height: 87},
  hs88: {height: 88},
  hs89: {height: 89},
  hs90: {height: 90},
  hs91: {height: 91},
  hs92: {height: 92},
  hs93: {height: 93},
  hs94: {height: 94},
  hs95: {height: 95},
  hs96: {height: 96},
  hs97: {height: 97},
  hs98: {height: 98},
  hs99: {height: 99},
  hs100: {height: 100},
  hs101: {height: 101},
  hs102: {height: 102},
  hs103: {height: 103},
  hs104: {height: 104},
  hs105: {height: 105},
  hs106: {height: 106},
  hs107: {height: 107},
  hs108: {height: 108},
  hs109: {height: 109},
  hs110: {height: 110},
  hs111: {height: 111},
  hs112: {height: 112},
  hs113: {height: 113},
  hs114: {height: 114},
  hs115: {height: 115},
  hs116: {height: 116},
  hs117: {height: 117},
  hs118: {height: 118},
  hs119: {height: 119},
  hs120: {height: 120},
  hs121: {height: 121},
  hs122: {height: 122},
  hs123: {height: 123},
  hs124: {height: 124},
  hs125: {height: 125},
  hs126: {height: 126},
  hs127: {height: 127},
  hs128: {height: 128},
  hs129: {height: 129},
  hs130: {height: 130},
  hs131: {height: 131},
  hs132: {height: 132},
  hs133: {height: 133},
  hs134: {height: 134},
  hs135: {height: 135},
  hs136: {height: 136},
  hs137: {height: 137},
  hs138: {height: 138},
  hs139: {height: 139},
  hs140: {height: 140},
  hs141: {height: 141},
  hs142: {height: 142},
  hs143: {height: 143},
  hs144: {height: 144},
  hs145: {height: 145},
  hs146: {height: 146},
  hs147: {height: 147},
  hs148: {height: 148},
  hs149: {height: 149},
  hs150: {height: 150},
  hs151: {height: 151},
  hs152: {height: 152},
  hs153: {height: 153},
  hs154: {height: 154},
  hs155: {height: 155},
  hs156: {height: 156},
  hs157: {height: 157},
  hs158: {height: 158},
  hs159: {height: 159},
  hs160: {height: 160},
  hs161: {height: 161},
  hs162: {height: 162},
  hs163: {height: 163},
  hs164: {height: 164},
  hs165: {height: 165},
  hs166: {height: 166},
  hs167: {height: 167},
  hs168: {height: 168},
  hs169: {height: 169},
  hs170: {height: 170},
  hs171: {height: 171},
  hs172: {height: 172},
  hs173: {height: 173},
  hs174: {height: 174},
  hs175: {height: 175},
  hs176: {height: 176},
  hs177: {height: 177},
  hs178: {height: 178},
  hs179: {height: 179},
  hs180: {height: 180},
  hs181: {height: 181},
  hs182: {height: 182},
  hs183: {height: 183},
  hs184: {height: 184},
  hs185: {height: 185},
  hs186: {height: 186},
  hs187: {height: 187},
  hs188: {height: 188},
  hs189: {height: 189},
  hs190: {height: 190},
  hs191: {height: 191},
  hs192: {height: 192},
  hs193: {height: 193},
  hs194: {height: 194},
  hs195: {height: 195},
  hs196: {height: 196},
  hs197: {height: 197},
  hs198: {height: 198},
  hs199: {height: 199},
  hs200: {height: 200},
  hs201: {height: 201},
  hs202: {height: 202},
  hs203: {height: 203},
  hs204: {height: 204},
  hs205: {height: 205},
  hs206: {height: 206},
  hs207: {height: 207},
  hs208: {height: 208},
  hs209: {height: 209},
  hs210: {height: 210},
  hs211: {height: 211},
  hs212: {height: 212},
  hs213: {height: 213},
  hs214: {height: 214},
  hs215: {height: 215},
  hs216: {height: 216},
  hs217: {height: 217},
  hs218: {height: 218},
  hs219: {height: 219},
  hs220: {height: 220},
  hs221: {height: 221},
  hs222: {height: 222},
  hs223: {height: 223},
  hs224: {height: 224},
  hs225: {height: 225},
  hs226: {height: 226},
  hs227: {height: 227},
  hs228: {height: 228},
  hs229: {height: 229},
  hs230: {height: 230},
  hs231: {height: 231},
  hs232: {height: 232},
  hs233: {height: 233},
  hs234: {height: 234},
  hs235: {height: 235},
  hs236: {height: 236},
  hs237: {height: 237},
  hs238: {height: 238},
  hs239: {height: 239},
  hs240: {height: 240},
  hs241: {height: 241},
  hs242: {height: 242},
  hs243: {height: 243},
  hs244: {height: 244},
  hs245: {height: 245},
  hs246: {height: 246},
  hs247: {height: 247},
  hs248: {height: 248},
  hs249: {height: 249},
  hs250: {height: 250},
  hs251: {height: 251},
  hs252: {height: 252},
  hs253: {height: 253},
  hs254: {height: 254},
  hs255: {height: 255},
  hs256: {height: 256},
  hs257: {height: 257},
  hs258: {height: 258},
  hs259: {height: 259},
  hs260: {height: 260},
  hs261: {height: 261},
  hs262: {height: 262},
  hs263: {height: 263},
  hs264: {height: 264},
  hs265: {height: 265},
  hs266: {height: 266},
  hs267: {height: 267},
  hs268: {height: 268},
  hs269: {height: 269},
  hs270: {height: 270},
  hs271: {height: 271},
  hs272: {height: 272},
  hs273: {height: 273},
  hs274: {height: 274},
  hs275: {height: 275},
  hs276: {height: 276},
  hs277: {height: 277},
  hs278: {height: 278},
  hs279: {height: 279},
  hs280: {height: 280},
  hs281: {height: 281},
  hs282: {height: 282},
  hs283: {height: 283},
  hs284: {height: 284},
  hs285: {height: 285},
  hs286: {height: 286},
  hs287: {height: 287},
  hs288: {height: 288},
  hs289: {height: 289},
  hs290: {height: 290},
  hs291: {height: 291},
  hs292: {height: 292},
  hs293: {height: 293},
  hs294: {height: 294},
  hs295: {height: 295},
  hs296: {height: 296},
  hs297: {height: 297},
  hs298: {height: 298},
  hs299: {height: 299},
  hs300: {height: 300},

  minHs1: {minHeight: 1},
  minHs2: {minHeight: 2},
  minHs3: {minHeight: 3},
  minHs4: {minHeight: 4},
  minHs5: {minHeight: 5},
  minHs6: {minHeight: 6},
  minHs7: {minHeight: 7},
  minHs8: {minHeight: 8},
  minHs9: {minHeight: 9},
  minHs10: {minHeight: 10},
  minHs11: {minHeight: 11},
  minHs12: {minHeight: 12},
  minHs13: {minHeight: 13},
  minHs14: {minHeight: 14},
  minHs15: {minHeight: 15},
  minHs16: {minHeight: 16},
  minHs17: {minHeight: 17},
  minHs18: {minHeight: 18},
  minHs19: {minHeight: 19},
  minHs20: {minHeight: 20},
  minHs21: {minHeight: 21},
  minHs22: {minHeight: 22},
  minHs23: {minHeight: 23},
  minHs24: {minHeight: 24},
  minHs25: {minHeight: 25},
  minHs26: {minHeight: 26},
  minHs27: {minHeight: 27},
  minHs28: {minHeight: 28},
  minHs29: {minHeight: 29},
  minHs30: {minHeight: 30},
  minHs31: {minHeight: 31},
  minHs32: {minHeight: 32},
  minHs33: {minHeight: 33},
  minHs34: {minHeight: 34},
  minHs35: {minHeight: 35},
  minHs36: {minHeight: 36},
  minHs37: {minHeight: 37},
  minHs38: {minHeight: 38},
  minHs39: {minHeight: 39},
  minHs40: {minHeight: 40},
  minHs41: {minHeight: 41},
  minHs42: {minHeight: 42},
  minHs43: {minHeight: 43},
  minHs44: {minHeight: 44},
  minHs45: {minHeight: 45},
  minHs46: {minHeight: 46},
  minHs47: {minHeight: 47},
  minHs48: {minHeight: 48},
  minHs49: {minHeight: 49},
  minHs50: {minHeight: 50},
  minHs51: {minHeight: 51},
  minHs52: {minHeight: 52},
  minHs53: {minHeight: 53},
  minHs54: {minHeight: 54},
  minHs55: {minHeight: 55},
  minHs56: {minHeight: 56},
  minHs57: {minHeight: 57},
  minHs58: {minHeight: 58},
  minHs59: {minHeight: 59},
  minHs60: {minHeight: 60},
  minHs61: {minHeight: 61},
  minHs62: {minHeight: 62},
  minHs63: {minHeight: 63},
  minHs64: {minHeight: 64},
  minHs65: {minHeight: 65},
  minHs66: {minHeight: 66},
  minHs67: {minHeight: 67},
  minHs68: {minHeight: 68},
  minHs69: {minHeight: 69},
  minHs70: {minHeight: 70},
  minHs71: {minHeight: 71},
  minHs72: {minHeight: 72},
  minHs73: {minHeight: 73},
  minHs74: {minHeight: 74},
  minHs75: {minHeight: 75},
  minHs76: {minHeight: 76},
  minHs77: {minHeight: 77},
  minHs78: {minHeight: 78},
  minHs79: {minHeight: 79},
  minHs80: {minHeight: 80},
  minHs81: {minHeight: 81},
  minHs82: {minHeight: 82},
  minHs83: {minHeight: 83},
  minHs84: {minHeight: 84},
  minHs85: {minHeight: 85},
  minHs86: {minHeight: 86},
  minHs87: {minHeight: 87},
  minHs88: {minHeight: 88},
  minHs89: {minHeight: 89},
  minHs90: {minHeight: 90},
  minHs91: {minHeight: 91},
  minHs92: {minHeight: 92},
  minHs93: {minHeight: 93},
  minHs94: {minHeight: 94},
  minHs95: {minHeight: 95},
  minHs96: {minHeight: 96},
  minHs97: {minHeight: 97},
  minHs98: {minHeight: 98},
  minHs99: {minHeight: 99},
  minHs100: {minHeight: 100},
  minHs101: {minHeight: 101},
  minHs102: {minHeight: 102},
  minHs103: {minHeight: 103},
  minHs104: {minHeight: 104},
  minHs105: {minHeight: 105},
  minHs106: {minHeight: 106},
  minHs107: {minHeight: 107},
  minHs108: {minHeight: 108},
  minHs109: {minHeight: 109},
  minHs110: {minHeight: 110},
  minHs111: {minHeight: 111},
  minHs112: {minHeight: 112},
  minHs113: {minHeight: 113},
  minHs114: {minHeight: 114},
  minHs115: {minHeight: 115},
  minHs116: {minHeight: 116},
  minHs117: {minHeight: 117},
  minHs118: {minHeight: 118},
  minHs119: {minHeight: 119},
  minHs120: {minHeight: 120},
  minHs121: {minHeight: 121},
  minHs122: {minHeight: 122},
  minHs123: {minHeight: 123},
  minHs124: {minHeight: 124},
  minHs125: {minHeight: 125},
  minHs126: {minHeight: 126},
  minHs127: {minHeight: 127},
  minHs128: {minHeight: 128},
  minHs129: {minHeight: 129},
  minHs130: {minHeight: 130},
  minHs131: {minHeight: 131},
  minHs132: {minHeight: 132},
  minHs133: {minHeight: 133},
  minHs134: {minHeight: 134},
  minHs135: {minHeight: 135},
  minHs136: {minHeight: 136},
  minHs137: {minHeight: 137},
  minHs138: {minHeight: 138},
  minHs139: {minHeight: 139},
  minHs140: {minHeight: 140},
  minHs141: {minHeight: 141},
  minHs142: {minHeight: 142},
  minHs143: {minHeight: 143},
  minHs144: {minHeight: 144},
  minHs145: {minHeight: 145},
  minHs146: {minHeight: 146},
  minHs147: {minHeight: 147},
  minHs148: {minHeight: 148},
  minHs149: {minHeight: 149},
  minHs150: {minHeight: 150},
  minHs151: {minHeight: 151},
  minHs152: {minHeight: 152},
  minHs153: {minHeight: 153},
  minHs154: {minHeight: 154},
  minHs155: {minHeight: 155},
  minHs156: {minHeight: 156},
  minHs157: {minHeight: 157},
  minHs158: {minHeight: 158},
  minHs159: {minHeight: 159},
  minHs160: {minHeight: 160},
  minHs161: {minHeight: 161},
  minHs162: {minHeight: 162},
  minHs163: {minHeight: 163},
  minHs164: {minHeight: 164},
  minHs165: {minHeight: 165},
  minHs166: {minHeight: 166},
  minHs167: {minHeight: 167},
  minHs168: {minHeight: 168},
  minHs169: {minHeight: 169},
  minHs170: {minHeight: 170},
  minHs171: {minHeight: 171},
  minHs172: {minHeight: 172},
  minHs173: {minHeight: 173},
  minHs174: {minHeight: 174},
  minHs175: {minHeight: 175},
  minHs176: {minHeight: 176},
  minHs177: {minHeight: 177},
  minHs178: {minHeight: 178},
  minHs179: {minHeight: 179},
  minHs180: {minHeight: 180},
  minHs181: {minHeight: 181},
  minHs182: {minHeight: 182},
  minHs183: {minHeight: 183},
  minHs184: {minHeight: 184},
  minHs185: {minHeight: 185},
  minHs186: {minHeight: 186},
  minHs187: {minHeight: 187},
  minHs188: {minHeight: 188},
  minHs189: {minHeight: 189},
  minHs190: {minHeight: 190},
  minHs191: {minHeight: 191},
  minHs192: {minHeight: 192},
  minHs193: {minHeight: 193},
  minHs194: {minHeight: 194},
  minHs195: {minHeight: 195},
  minHs196: {minHeight: 196},
  minHs197: {minHeight: 197},
  minHs198: {minHeight: 198},
  minHs199: {minHeight: 199},
  minHs200: {minHeight: 200},
  minHs201: {minHeight: 201},
  minHs202: {minHeight: 202},
  minHs203: {minHeight: 203},
  minHs204: {minHeight: 204},
  minHs205: {minHeight: 205},
  minHs206: {minHeight: 206},
  minHs207: {minHeight: 207},
  minHs208: {minHeight: 208},
  minHs209: {minHeight: 209},
  minHs210: {minHeight: 210},
  minHs211: {minHeight: 211},
  minHs212: {minHeight: 212},
  minHs213: {minHeight: 213},
  minHs214: {minHeight: 214},
  minHs215: {minHeight: 215},
  minHs216: {minHeight: 216},
  minHs217: {minHeight: 217},
  minHs218: {minHeight: 218},
  minHs219: {minHeight: 219},
  minHs220: {minHeight: 220},
  minHs221: {minHeight: 221},
  minHs222: {minHeight: 222},
  minHs223: {minHeight: 223},
  minHs224: {minHeight: 224},
  minHs225: {minHeight: 225},
  minHs226: {minHeight: 226},
  minHs227: {minHeight: 227},
  minHs228: {minHeight: 228},
  minHs229: {minHeight: 229},
  minHs230: {minHeight: 230},
  minHs231: {minHeight: 231},
  minHs232: {minHeight: 232},
  minHs233: {minHeight: 233},
  minHs234: {minHeight: 234},
  minHs235: {minHeight: 235},
  minHs236: {minHeight: 236},
  minHs237: {minHeight: 237},
  minHs238: {minHeight: 238},
  minHs239: {minHeight: 239},
  minHs240: {minHeight: 240},
  minHs241: {minHeight: 241},
  minHs242: {minHeight: 242},
  minHs243: {minHeight: 243},
  minHs244: {minHeight: 244},
  minHs245: {minHeight: 245},
  minHs246: {minHeight: 246},
  minHs247: {minHeight: 247},
  minHs248: {minHeight: 248},
  minHs249: {minHeight: 249},
  minHs250: {minHeight: 250},
  minHs251: {minHeight: 251},
  minHs252: {minHeight: 252},
  minHs253: {minHeight: 253},
  minHs254: {minHeight: 254},
  minHs255: {minHeight: 255},
  minHs256: {minHeight: 256},
  minHs257: {minHeight: 257},
  minHs258: {minHeight: 258},
  minHs259: {minHeight: 259},
  minHs260: {minHeight: 260},
  minHs261: {minHeight: 261},
  minHs262: {minHeight: 262},
  minHs263: {minHeight: 263},
  minHs264: {minHeight: 264},
  minHs265: {minHeight: 265},
  minHs266: {minHeight: 266},
  minHs267: {minHeight: 267},
  minHs268: {minHeight: 268},
  minHs269: {minHeight: 269},
  minHs270: {minHeight: 270},
  minHs271: {minHeight: 271},
  minHs272: {minHeight: 272},
  minHs273: {minHeight: 273},
  minHs274: {minHeight: 274},
  minHs275: {minHeight: 275},
  minHs276: {minHeight: 276},
  minHs277: {minHeight: 277},
  minHs278: {minHeight: 278},
  minHs279: {minHeight: 279},
  minHs280: {minHeight: 280},
  minHs281: {minHeight: 281},
  minHs282: {minHeight: 282},
  minHs283: {minHeight: 283},
  minHs284: {minHeight: 284},
  minHs285: {minHeight: 285},
  minHs286: {minHeight: 286},
  minHs287: {minHeight: 287},
  minHs288: {minHeight: 288},
  minHs289: {minHeight: 289},
  minHs290: {minHeight: 290},
  minHs291: {minHeight: 291},
  minHs292: {minHeight: 292},
  minHs293: {minHeight: 293},
  minHs294: {minHeight: 294},
  minHs295: {minHeight: 295},
  minHs296: {minHeight: 296},
  minHs297: {minHeight: 297},
  minHs298: {minHeight: 298},
  minHs299: {minHeight: 299},
  minHs300: {minHeight: 300},

  maxHs1: {maxHeight: 1},
  maxHs2: {maxHeight: 2},
  maxHs3: {maxHeight: 3},
  maxHs4: {maxHeight: 4},
  maxHs5: {maxHeight: 5},
  maxHs6: {maxHeight: 6},
  maxHs7: {maxHeight: 7},
  maxHs8: {maxHeight: 8},
  maxHs9: {maxHeight: 9},
  maxHs10: {maxHeight: 10},
  maxHs11: {maxHeight: 11},
  maxHs12: {maxHeight: 12},
  maxHs13: {maxHeight: 13},
  maxHs14: {maxHeight: 14},
  maxHs15: {maxHeight: 15},
  maxHs16: {maxHeight: 16},
  maxHs17: {maxHeight: 17},
  maxHs18: {maxHeight: 18},
  maxHs19: {maxHeight: 19},
  maxHs20: {maxHeight: 20},
  maxHs21: {maxHeight: 21},
  maxHs22: {maxHeight: 22},
  maxHs23: {maxHeight: 23},
  maxHs24: {maxHeight: 24},
  maxHs25: {maxHeight: 25},
  maxHs26: {maxHeight: 26},
  maxHs27: {maxHeight: 27},
  maxHs28: {maxHeight: 28},
  maxHs29: {maxHeight: 29},
  maxHs30: {maxHeight: 30},
  maxHs31: {maxHeight: 31},
  maxHs32: {maxHeight: 32},
  maxHs33: {maxHeight: 33},
  maxHs34: {maxHeight: 34},
  maxHs35: {maxHeight: 35},
  maxHs36: {maxHeight: 36},
  maxHs37: {maxHeight: 37},
  maxHs38: {maxHeight: 38},
  maxHs39: {maxHeight: 39},
  maxHs40: {maxHeight: 40},
  maxHs41: {maxHeight: 41},
  maxHs42: {maxHeight: 42},
  maxHs43: {maxHeight: 43},
  maxHs44: {maxHeight: 44},
  maxHs45: {maxHeight: 45},
  maxHs46: {maxHeight: 46},
  maxHs47: {maxHeight: 47},
  maxHs48: {maxHeight: 48},
  maxHs49: {maxHeight: 49},
  maxHs50: {maxHeight: 50},
  maxHs51: {maxHeight: 51},
  maxHs52: {maxHeight: 52},
  maxHs53: {maxHeight: 53},
  maxHs54: {maxHeight: 54},
  maxHs55: {maxHeight: 55},
  maxHs56: {maxHeight: 56},
  maxHs57: {maxHeight: 57},
  maxHs58: {maxHeight: 58},
  maxHs59: {maxHeight: 59},
  maxHs60: {maxHeight: 60},
  maxHs61: {maxHeight: 61},
  maxHs62: {maxHeight: 62},
  maxHs63: {maxHeight: 63},
  maxHs64: {maxHeight: 64},
  maxHs65: {maxHeight: 65},
  maxHs66: {maxHeight: 66},
  maxHs67: {maxHeight: 67},
  maxHs68: {maxHeight: 68},
  maxHs69: {maxHeight: 69},
  maxHs70: {maxHeight: 70},
  maxHs71: {maxHeight: 71},
  maxHs72: {maxHeight: 72},
  maxHs73: {maxHeight: 73},
  maxHs74: {maxHeight: 74},
  maxHs75: {maxHeight: 75},
  maxHs76: {maxHeight: 76},
  maxHs77: {maxHeight: 77},
  maxHs78: {maxHeight: 78},
  maxHs79: {maxHeight: 79},
  maxHs80: {maxHeight: 80},
  maxHs81: {maxHeight: 81},
  maxHs82: {maxHeight: 82},
  maxHs83: {maxHeight: 83},
  maxHs84: {maxHeight: 84},
  maxHs85: {maxHeight: 85},
  maxHs86: {maxHeight: 86},
  maxHs87: {maxHeight: 87},
  maxHs88: {maxHeight: 88},
  maxHs89: {maxHeight: 89},
  maxHs90: {maxHeight: 90},
  maxHs91: {maxHeight: 91},
  maxHs92: {maxHeight: 92},
  maxHs93: {maxHeight: 93},
  maxHs94: {maxHeight: 94},
  maxHs95: {maxHeight: 95},
  maxHs96: {maxHeight: 96},
  maxHs97: {maxHeight: 97},
  maxHs98: {maxHeight: 98},
  maxHs99: {maxHeight: 99},
  maxHs100: {maxHeight: 100},
  maxHs101: {maxHeight: 101},
  maxHs102: {maxHeight: 102},
  maxHs103: {maxHeight: 103},
  maxHs104: {maxHeight: 104},
  maxHs105: {maxHeight: 105},
  maxHs106: {maxHeight: 106},
  maxHs107: {maxHeight: 107},
  maxHs108: {maxHeight: 108},
  maxHs109: {maxHeight: 109},
  maxHs110: {maxHeight: 110},
  maxHs111: {maxHeight: 111},
  maxHs112: {maxHeight: 112},
  maxHs113: {maxHeight: 113},
  maxHs114: {maxHeight: 114},
  maxHs115: {maxHeight: 115},
  maxHs116: {maxHeight: 116},
  maxHs117: {maxHeight: 117},
  maxHs118: {maxHeight: 118},
  maxHs119: {maxHeight: 119},
  maxHs120: {maxHeight: 120},
  maxHs121: {maxHeight: 121},
  maxHs122: {maxHeight: 122},
  maxHs123: {maxHeight: 123},
  maxHs124: {maxHeight: 124},
  maxHs125: {maxHeight: 125},
  maxHs126: {maxHeight: 126},
  maxHs127: {maxHeight: 127},
  maxHs128: {maxHeight: 128},
  maxHs129: {maxHeight: 129},
  maxHs130: {maxHeight: 130},
  maxHs131: {maxHeight: 131},
  maxHs132: {maxHeight: 132},
  maxHs133: {maxHeight: 133},
  maxHs134: {maxHeight: 134},
  maxHs135: {maxHeight: 135},
  maxHs136: {maxHeight: 136},
  maxHs137: {maxHeight: 137},
  maxHs138: {maxHeight: 138},
  maxHs139: {maxHeight: 139},
  maxHs140: {maxHeight: 140},
  maxHs141: {maxHeight: 141},
  maxHs142: {maxHeight: 142},
  maxHs143: {maxHeight: 143},
  maxHs144: {maxHeight: 144},
  maxHs145: {maxHeight: 145},
  maxHs146: {maxHeight: 146},
  maxHs147: {maxHeight: 147},
  maxHs148: {maxHeight: 148},
  maxHs149: {maxHeight: 149},
  maxHs150: {maxHeight: 150},
  maxHs151: {maxHeight: 151},
  maxHs152: {maxHeight: 152},
  maxHs153: {maxHeight: 153},
  maxHs154: {maxHeight: 154},
  maxHs155: {maxHeight: 155},
  maxHs156: {maxHeight: 156},
  maxHs157: {maxHeight: 157},
  maxHs158: {maxHeight: 158},
  maxHs159: {maxHeight: 159},
  maxHs160: {maxHeight: 160},
  maxHs161: {maxHeight: 161},
  maxHs162: {maxHeight: 162},
  maxHs163: {maxHeight: 163},
  maxHs164: {maxHeight: 164},
  maxHs165: {maxHeight: 165},
  maxHs166: {maxHeight: 166},
  maxHs167: {maxHeight: 167},
  maxHs168: {maxHeight: 168},
  maxHs169: {maxHeight: 169},
  maxHs170: {maxHeight: 170},
  maxHs171: {maxHeight: 171},
  maxHs172: {maxHeight: 172},
  maxHs173: {maxHeight: 173},
  maxHs174: {maxHeight: 174},
  maxHs175: {maxHeight: 175},
  maxHs176: {maxHeight: 176},
  maxHs177: {maxHeight: 177},
  maxHs178: {maxHeight: 178},
  maxHs179: {maxHeight: 179},
  maxHs180: {maxHeight: 180},
  maxHs181: {maxHeight: 181},
  maxHs182: {maxHeight: 182},
  maxHs183: {maxHeight: 183},
  maxHs184: {maxHeight: 184},
  maxHs185: {maxHeight: 185},
  maxHs186: {maxHeight: 186},
  maxHs187: {maxHeight: 187},
  maxHs188: {maxHeight: 188},
  maxHs189: {maxHeight: 189},
  maxHs190: {maxHeight: 190},
  maxHs191: {maxHeight: 191},
  maxHs192: {maxHeight: 192},
  maxHs193: {maxHeight: 193},
  maxHs194: {maxHeight: 194},
  maxHs195: {maxHeight: 195},
  maxHs196: {maxHeight: 196},
  maxHs197: {maxHeight: 197},
  maxHs198: {maxHeight: 198},
  maxHs199: {maxHeight: 199},
  maxHs200: {maxHeight: 200},
  maxHs201: {maxHeight: 201},
  maxHs202: {maxHeight: 202},
  maxHs203: {maxHeight: 203},
  maxHs204: {maxHeight: 204},
  maxHs205: {maxHeight: 205},
  maxHs206: {maxHeight: 206},
  maxHs207: {maxHeight: 207},
  maxHs208: {maxHeight: 208},
  maxHs209: {maxHeight: 209},
  maxHs210: {maxHeight: 210},
  maxHs211: {maxHeight: 211},
  maxHs212: {maxHeight: 212},
  maxHs213: {maxHeight: 213},
  maxHs214: {maxHeight: 214},
  maxHs215: {maxHeight: 215},
  maxHs216: {maxHeight: 216},
  maxHs217: {maxHeight: 217},
  maxHs218: {maxHeight: 218},
  maxHs219: {maxHeight: 219},
  maxHs220: {maxHeight: 220},
  maxHs221: {maxHeight: 221},
  maxHs222: {maxHeight: 222},
  maxHs223: {maxHeight: 223},
  maxHs224: {maxHeight: 224},
  maxHs225: {maxHeight: 225},
  maxHs226: {maxHeight: 226},
  maxHs227: {maxHeight: 227},
  maxHs228: {maxHeight: 228},
  maxHs229: {maxHeight: 229},
  maxHs230: {maxHeight: 230},
  maxHs231: {maxHeight: 231},
  maxHs232: {maxHeight: 232},
  maxHs233: {maxHeight: 233},
  maxHs234: {maxHeight: 234},
  maxHs235: {maxHeight: 235},
  maxHs236: {maxHeight: 236},
  maxHs237: {maxHeight: 237},
  maxHs238: {maxHeight: 238},
  maxHs239: {maxHeight: 239},
  maxHs240: {maxHeight: 240},
  maxHs241: {maxHeight: 241},
  maxHs242: {maxHeight: 242},
  maxHs243: {maxHeight: 243},
  maxHs244: {maxHeight: 244},
  maxHs245: {maxHeight: 245},
  maxHs246: {maxHeight: 246},
  maxHs247: {maxHeight: 247},
  maxHs248: {maxHeight: 248},
  maxHs249: {maxHeight: 249},
  maxHs250: {maxHeight: 250},
  maxHs251: {maxHeight: 251},
  maxHs252: {maxHeight: 252},
  maxHs253: {maxHeight: 253},
  maxHs254: {maxHeight: 254},
  maxHs255: {maxHeight: 255},
  maxHs256: {maxHeight: 256},
  maxHs257: {maxHeight: 257},
  maxHs258: {maxHeight: 258},
  maxHs259: {maxHeight: 259},
  maxHs260: {maxHeight: 260},
  maxHs261: {maxHeight: 261},
  maxHs262: {maxHeight: 262},
  maxHs263: {maxHeight: 263},
  maxHs264: {maxHeight: 264},
  maxHs265: {maxHeight: 265},
  maxHs266: {maxHeight: 266},
  maxHs267: {maxHeight: 267},
  maxHs268: {maxHeight: 268},
  maxHs269: {maxHeight: 269},
  maxHs270: {maxHeight: 270},
  maxHs271: {maxHeight: 271},
  maxHs272: {maxHeight: 272},
  maxHs273: {maxHeight: 273},
  maxHs274: {maxHeight: 274},
  maxHs275: {maxHeight: 275},
  maxHs276: {maxHeight: 276},
  maxHs277: {maxHeight: 277},
  maxHs278: {maxHeight: 278},
  maxHs279: {maxHeight: 279},
  maxHs280: {maxHeight: 280},
  maxHs281: {maxHeight: 281},
  maxHs282: {maxHeight: 282},
  maxHs283: {maxHeight: 283},
  maxHs284: {maxHeight: 284},
  maxHs285: {maxHeight: 285},
  maxHs286: {maxHeight: 286},
  maxHs287: {maxHeight: 287},
  maxHs288: {maxHeight: 288},
  maxHs289: {maxHeight: 289},
  maxHs290: {maxHeight: 290},
  maxHs291: {maxHeight: 291},
  maxHs292: {maxHeight: 292},
  maxHs293: {maxHeight: 293},
  maxHs294: {maxHeight: 294},
  maxHs295: {maxHeight: 295},
  maxHs296: {maxHeight: 296},
  maxHs297: {maxHeight: 297},
  maxHs298: {maxHeight: 298},
  maxHs299: {maxHeight: 299},
  maxHs300: {maxHeight: 300},

  ws1: {width: 1},
  ws2: {width: 2},
  ws3: {width: 3},
  ws4: {width: 4},
  ws5: {width: 5},
  ws6: {width: 6},
  ws7: {width: 7},
  ws8: {width: 8},
  ws9: {width: 9},
  ws10: {width: 10},
  ws11: {width: 11},
  ws12: {width: 12},
  ws13: {width: 13},
  ws14: {width: 14},
  ws15: {width: 15},
  ws16: {width: 16},
  ws17: {width: 17},
  ws18: {width: 18},
  ws19: {width: 19},
  ws20: {width: 20},
  ws21: {width: 21},
  ws22: {width: 22},
  ws23: {width: 23},
  ws24: {width: 24},
  ws25: {width: 25},
  ws26: {width: 26},
  ws27: {width: 27},
  ws28: {width: 28},
  ws29: {width: 29},
  ws30: {width: 30},
  ws31: {width: 31},
  ws32: {width: 32},
  ws33: {width: 33},
  ws34: {width: 34},
  ws35: {width: 35},
  ws36: {width: 36},
  ws37: {width: 37},
  ws38: {width: 38},
  ws39: {width: 39},
  ws40: {width: 40},
  ws41: {width: 41},
  ws42: {width: 42},
  ws43: {width: 43},
  ws44: {width: 44},
  ws45: {width: 45},
  ws46: {width: 46},
  ws47: {width: 47},
  ws48: {width: 48},
  ws49: {width: 49},
  ws50: {width: 50},
  ws51: {width: 51},
  ws52: {width: 52},
  ws53: {width: 53},
  ws54: {width: 54},
  ws55: {width: 55},
  ws56: {width: 56},
  ws57: {width: 57},
  ws58: {width: 58},
  ws59: {width: 59},
  ws60: {width: 60},
  ws61: {width: 61},
  ws62: {width: 62},
  ws63: {width: 63},
  ws64: {width: 64},
  ws65: {width: 65},
  ws66: {width: 66},
  ws67: {width: 67},
  ws68: {width: 68},
  ws69: {width: 69},
  ws70: {width: 70},
  ws71: {width: 71},
  ws72: {width: 72},
  ws73: {width: 73},
  ws74: {width: 74},
  ws75: {width: 75},
  ws76: {width: 76},
  ws77: {width: 77},
  ws78: {width: 78},
  ws79: {width: 79},
  ws80: {width: 80},
  ws81: {width: 81},
  ws82: {width: 82},
  ws83: {width: 83},
  ws84: {width: 84},
  ws85: {width: 85},
  ws86: {width: 86},
  ws87: {width: 87},
  ws88: {width: 88},
  ws89: {width: 89},
  ws90: {width: 90},
  ws91: {width: 91},
  ws92: {width: 92},
  ws93: {width: 93},
  ws94: {width: 94},
  ws95: {width: 95},
  ws96: {width: 96},
  ws97: {width: 97},
  ws98: {width: 98},
  ws99: {width: 99},
  ws100: {width: 100},
  ws101: {width: 101},
  ws102: {width: 102},
  ws103: {width: 103},
  ws104: {width: 104},
  ws105: {width: 105},
  ws106: {width: 106},
  ws107: {width: 107},
  ws108: {width: 108},
  ws109: {width: 109},
  ws110: {width: 110},
  ws111: {width: 111},
  ws112: {width: 112},
  ws113: {width: 113},
  ws114: {width: 114},
  ws115: {width: 115},
  ws116: {width: 116},
  ws117: {width: 117},
  ws118: {width: 118},
  ws119: {width: 119},
  ws120: {width: 120},
  ws121: {width: 121},
  ws122: {width: 122},
  ws123: {width: 123},
  ws124: {width: 124},
  ws125: {width: 125},
  ws126: {width: 126},
  ws127: {width: 127},
  ws128: {width: 128},
  ws129: {width: 129},
  ws130: {width: 130},
  ws131: {width: 131},
  ws132: {width: 132},
  ws133: {width: 133},
  ws134: {width: 134},
  ws135: {width: 135},
  ws136: {width: 136},
  ws137: {width: 137},
  ws138: {width: 138},
  ws139: {width: 139},
  ws140: {width: 140},
  ws141: {width: 141},
  ws142: {width: 142},
  ws143: {width: 143},
  ws144: {width: 144},
  ws145: {width: 145},
  ws146: {width: 146},
  ws147: {width: 147},
  ws148: {width: 148},
  ws149: {width: 149},
  ws150: {width: 150},
  ws151: {width: 151},
  ws152: {width: 152},
  ws153: {width: 153},
  ws154: {width: 154},
  ws155: {width: 155},
  ws156: {width: 156},
  ws157: {width: 157},
  ws158: {width: 158},
  ws159: {width: 159},
  ws160: {width: 160},
  ws161: {width: 161},
  ws162: {width: 162},
  ws163: {width: 163},
  ws164: {width: 164},
  ws165: {width: 165},
  ws166: {width: 166},
  ws167: {width: 167},
  ws168: {width: 168},
  ws169: {width: 169},
  ws170: {width: 170},
  ws171: {width: 171},
  ws172: {width: 172},
  ws173: {width: 173},
  ws174: {width: 174},
  ws175: {width: 175},
  ws176: {width: 176},
  ws177: {width: 177},
  ws178: {width: 178},
  ws179: {width: 179},
  ws180: {width: 180},
  ws181: {width: 181},
  ws182: {width: 182},
  ws183: {width: 183},
  ws184: {width: 184},
  ws185: {width: 185},
  ws186: {width: 186},
  ws187: {width: 187},
  ws188: {width: 188},
  ws189: {width: 189},
  ws190: {width: 190},
  ws191: {width: 191},
  ws192: {width: 192},
  ws193: {width: 193},
  ws194: {width: 194},
  ws195: {width: 195},
  ws196: {width: 196},
  ws197: {width: 197},
  ws198: {width: 198},
  ws199: {width: 199},
  ws200: {width: 200},
  ws201: {width: 201},
  ws202: {width: 202},
  ws203: {width: 203},
  ws204: {width: 204},
  ws205: {width: 205},
  ws206: {width: 206},
  ws207: {width: 207},
  ws208: {width: 208},
  ws209: {width: 209},
  ws210: {width: 210},
  ws211: {width: 211},
  ws212: {width: 212},
  ws213: {width: 213},
  ws214: {width: 214},
  ws215: {width: 215},
  ws216: {width: 216},
  ws217: {width: 217},
  ws218: {width: 218},
  ws219: {width: 219},
  ws220: {width: 220},
  ws221: {width: 221},
  ws222: {width: 222},
  ws223: {width: 223},
  ws224: {width: 224},
  ws225: {width: 225},
  ws226: {width: 226},
  ws227: {width: 227},
  ws228: {width: 228},
  ws229: {width: 229},
  ws230: {width: 230},
  ws231: {width: 231},
  ws232: {width: 232},
  ws233: {width: 233},
  ws234: {width: 234},
  ws235: {width: 235},
  ws236: {width: 236},
  ws237: {width: 237},
  ws238: {width: 238},
  ws239: {width: 239},
  ws240: {width: 240},
  ws241: {width: 241},
  ws242: {width: 242},
  ws243: {width: 243},
  ws244: {width: 244},
  ws245: {width: 245},
  ws246: {width: 246},
  ws247: {width: 247},
  ws248: {width: 248},
  ws249: {width: 249},
  ws250: {width: 250},
  ws251: {width: 251},
  ws252: {width: 252},
  ws253: {width: 253},
  ws254: {width: 254},
  ws255: {width: 255},
  ws256: {width: 256},
  ws257: {width: 257},
  ws258: {width: 258},
  ws259: {width: 259},
  ws260: {width: 260},
  ws261: {width: 261},
  ws262: {width: 262},
  ws263: {width: 263},
  ws264: {width: 264},
  ws265: {width: 265},
  ws266: {width: 266},
  ws267: {width: 267},
  ws268: {width: 268},
  ws269: {width: 269},
  ws270: {width: 270},
  ws271: {width: 271},
  ws272: {width: 272},
  ws273: {width: 273},
  ws274: {width: 274},
  ws275: {width: 275},
  ws276: {width: 276},
  ws277: {width: 277},
  ws278: {width: 278},
  ws279: {width: 279},
  ws280: {width: 280},
  ws281: {width: 281},
  ws282: {width: 282},
  ws283: {width: 283},
  ws284: {width: 284},
  ws285: {width: 285},
  ws286: {width: 286},
  ws287: {width: 287},
  ws288: {width: 288},
  ws289: {width: 289},
  ws290: {width: 290},
  ws291: {width: 291},
  ws292: {width: 292},
  ws293: {width: 293},
  ws294: {width: 294},
  ws295: {width: 295},
  ws296: {width: 296},
  ws297: {width: 297},
  ws298: {width: 298},
  ws299: {width: 299},
  ws300: {width: 300},

  minWs1: {minWidth: 1},
  minWs2: {minWidth: 2},
  minWs3: {minWidth: 3},
  minWs4: {minWidth: 4},
  minWs5: {minWidth: 5},
  minWs6: {minWidth: 6},
  minWs7: {minWidth: 7},
  minWs8: {minWidth: 8},
  minWs9: {minWidth: 9},
  minWs10: {minWidth: 10},
  minWs11: {minWidth: 11},
  minWs12: {minWidth: 12},
  minWs13: {minWidth: 13},
  minWs14: {minWidth: 14},
  minWs15: {minWidth: 15},
  minWs16: {minWidth: 16},
  minWs17: {minWidth: 17},
  minWs18: {minWidth: 18},
  minWs19: {minWidth: 19},
  minWs20: {minWidth: 20},
  minWs21: {minWidth: 21},
  minWs22: {minWidth: 22},
  minWs23: {minWidth: 23},
  minWs24: {minWidth: 24},
  minWs25: {minWidth: 25},
  minWs26: {minWidth: 26},
  minWs27: {minWidth: 27},
  minWs28: {minWidth: 28},
  minWs29: {minWidth: 29},
  minWs30: {minWidth: 30},
  minWs31: {minWidth: 31},
  minWs32: {minWidth: 32},
  minWs33: {minWidth: 33},
  minWs34: {minWidth: 34},
  minWs35: {minWidth: 35},
  minWs36: {minWidth: 36},
  minWs37: {minWidth: 37},
  minWs38: {minWidth: 38},
  minWs39: {minWidth: 39},
  minWs40: {minWidth: 40},
  minWs41: {minWidth: 41},
  minWs42: {minWidth: 42},
  minWs43: {minWidth: 43},
  minWs44: {minWidth: 44},
  minWs45: {minWidth: 45},
  minWs46: {minWidth: 46},
  minWs47: {minWidth: 47},
  minWs48: {minWidth: 48},
  minWs49: {minWidth: 49},
  minWs50: {minWidth: 50},
  minWs51: {minWidth: 51},
  minWs52: {minWidth: 52},
  minWs53: {minWidth: 53},
  minWs54: {minWidth: 54},
  minWs55: {minWidth: 55},
  minWs56: {minWidth: 56},
  minWs57: {minWidth: 57},
  minWs58: {minWidth: 58},
  minWs59: {minWidth: 59},
  minWs60: {minWidth: 60},
  minWs61: {minWidth: 61},
  minWs62: {minWidth: 62},
  minWs63: {minWidth: 63},
  minWs64: {minWidth: 64},
  minWs65: {minWidth: 65},
  minWs66: {minWidth: 66},
  minWs67: {minWidth: 67},
  minWs68: {minWidth: 68},
  minWs69: {minWidth: 69},
  minWs70: {minWidth: 70},
  minWs71: {minWidth: 71},
  minWs72: {minWidth: 72},
  minWs73: {minWidth: 73},
  minWs74: {minWidth: 74},
  minWs75: {minWidth: 75},
  minWs76: {minWidth: 76},
  minWs77: {minWidth: 77},
  minWs78: {minWidth: 78},
  minWs79: {minWidth: 79},
  minWs80: {minWidth: 80},
  minWs81: {minWidth: 81},
  minWs82: {minWidth: 82},
  minWs83: {minWidth: 83},
  minWs84: {minWidth: 84},
  minWs85: {minWidth: 85},
  minWs86: {minWidth: 86},
  minWs87: {minWidth: 87},
  minWs88: {minWidth: 88},
  minWs89: {minWidth: 89},
  minWs90: {minWidth: 90},
  minWs91: {minWidth: 91},
  minWs92: {minWidth: 92},
  minWs93: {minWidth: 93},
  minWs94: {minWidth: 94},
  minWs95: {minWidth: 95},
  minWs96: {minWidth: 96},
  minWs97: {minWidth: 97},
  minWs98: {minWidth: 98},
  minWs99: {minWidth: 99},
  minWs100: {minWidth: 100},
  minWs101: {minWidth: 101},
  minWs102: {minWidth: 102},
  minWs103: {minWidth: 103},
  minWs104: {minWidth: 104},
  minWs105: {minWidth: 105},
  minWs106: {minWidth: 106},
  minWs107: {minWidth: 107},
  minWs108: {minWidth: 108},
  minWs109: {minWidth: 109},
  minWs110: {minWidth: 110},
  minWs111: {minWidth: 111},
  minWs112: {minWidth: 112},
  minWs113: {minWidth: 113},
  minWs114: {minWidth: 114},
  minWs115: {minWidth: 115},
  minWs116: {minWidth: 116},
  minWs117: {minWidth: 117},
  minWs118: {minWidth: 118},
  minWs119: {minWidth: 119},
  minWs120: {minWidth: 120},
  minWs121: {minWidth: 121},
  minWs122: {minWidth: 122},
  minWs123: {minWidth: 123},
  minWs124: {minWidth: 124},
  minWs125: {minWidth: 125},
  minWs126: {minWidth: 126},
  minWs127: {minWidth: 127},
  minWs128: {minWidth: 128},
  minWs129: {minWidth: 129},
  minWs130: {minWidth: 130},
  minWs131: {minWidth: 131},
  minWs132: {minWidth: 132},
  minWs133: {minWidth: 133},
  minWs134: {minWidth: 134},
  minWs135: {minWidth: 135},
  minWs136: {minWidth: 136},
  minWs137: {minWidth: 137},
  minWs138: {minWidth: 138},
  minWs139: {minWidth: 139},
  minWs140: {minWidth: 140},
  minWs141: {minWidth: 141},
  minWs142: {minWidth: 142},
  minWs143: {minWidth: 143},
  minWs144: {minWidth: 144},
  minWs145: {minWidth: 145},
  minWs146: {minWidth: 146},
  minWs147: {minWidth: 147},
  minWs148: {minWidth: 148},
  minWs149: {minWidth: 149},
  minWs150: {minWidth: 150},
  minWs151: {minWidth: 151},
  minWs152: {minWidth: 152},
  minWs153: {minWidth: 153},
  minWs154: {minWidth: 154},
  minWs155: {minWidth: 155},
  minWs156: {minWidth: 156},
  minWs157: {minWidth: 157},
  minWs158: {minWidth: 158},
  minWs159: {minWidth: 159},
  minWs160: {minWidth: 160},
  minWs161: {minWidth: 161},
  minWs162: {minWidth: 162},
  minWs163: {minWidth: 163},
  minWs164: {minWidth: 164},
  minWs165: {minWidth: 165},
  minWs166: {minWidth: 166},
  minWs167: {minWidth: 167},
  minWs168: {minWidth: 168},
  minWs169: {minWidth: 169},
  minWs170: {minWidth: 170},
  minWs171: {minWidth: 171},
  minWs172: {minWidth: 172},
  minWs173: {minWidth: 173},
  minWs174: {minWidth: 174},
  minWs175: {minWidth: 175},
  minWs176: {minWidth: 176},
  minWs177: {minWidth: 177},
  minWs178: {minWidth: 178},
  minWs179: {minWidth: 179},
  minWs180: {minWidth: 180},
  minWs181: {minWidth: 181},
  minWs182: {minWidth: 182},
  minWs183: {minWidth: 183},
  minWs184: {minWidth: 184},
  minWs185: {minWidth: 185},
  minWs186: {minWidth: 186},
  minWs187: {minWidth: 187},
  minWs188: {minWidth: 188},
  minWs189: {minWidth: 189},
  minWs190: {minWidth: 190},
  minWs191: {minWidth: 191},
  minWs192: {minWidth: 192},
  minWs193: {minWidth: 193},
  minWs194: {minWidth: 194},
  minWs195: {minWidth: 195},
  minWs196: {minWidth: 196},
  minWs197: {minWidth: 197},
  minWs198: {minWidth: 198},
  minWs199: {minWidth: 199},
  minWs200: {minWidth: 200},
  minWs201: {minWidth: 201},
  minWs202: {minWidth: 202},
  minWs203: {minWidth: 203},
  minWs204: {minWidth: 204},
  minWs205: {minWidth: 205},
  minWs206: {minWidth: 206},
  minWs207: {minWidth: 207},
  minWs208: {minWidth: 208},
  minWs209: {minWidth: 209},
  minWs210: {minWidth: 210},
  minWs211: {minWidth: 211},
  minWs212: {minWidth: 212},
  minWs213: {minWidth: 213},
  minWs214: {minWidth: 214},
  minWs215: {minWidth: 215},
  minWs216: {minWidth: 216},
  minWs217: {minWidth: 217},
  minWs218: {minWidth: 218},
  minWs219: {minWidth: 219},
  minWs220: {minWidth: 220},
  minWs221: {minWidth: 221},
  minWs222: {minWidth: 222},
  minWs223: {minWidth: 223},
  minWs224: {minWidth: 224},
  minWs225: {minWidth: 225},
  minWs226: {minWidth: 226},
  minWs227: {minWidth: 227},
  minWs228: {minWidth: 228},
  minWs229: {minWidth: 229},
  minWs230: {minWidth: 230},
  minWs231: {minWidth: 231},
  minWs232: {minWidth: 232},
  minWs233: {minWidth: 233},
  minWs234: {minWidth: 234},
  minWs235: {minWidth: 235},
  minWs236: {minWidth: 236},
  minWs237: {minWidth: 237},
  minWs238: {minWidth: 238},
  minWs239: {minWidth: 239},
  minWs240: {minWidth: 240},
  minWs241: {minWidth: 241},
  minWs242: {minWidth: 242},
  minWs243: {minWidth: 243},
  minWs244: {minWidth: 244},
  minWs245: {minWidth: 245},
  minWs246: {minWidth: 246},
  minWs247: {minWidth: 247},
  minWs248: {minWidth: 248},
  minWs249: {minWidth: 249},
  minWs250: {minWidth: 250},
  minWs251: {minWidth: 251},
  minWs252: {minWidth: 252},
  minWs253: {minWidth: 253},
  minWs254: {minWidth: 254},
  minWs255: {minWidth: 255},
  minWs256: {minWidth: 256},
  minWs257: {minWidth: 257},
  minWs258: {minWidth: 258},
  minWs259: {minWidth: 259},
  minWs260: {minWidth: 260},
  minWs261: {minWidth: 261},
  minWs262: {minWidth: 262},
  minWs263: {minWidth: 263},
  minWs264: {minWidth: 264},
  minWs265: {minWidth: 265},
  minWs266: {minWidth: 266},
  minWs267: {minWidth: 267},
  minWs268: {minWidth: 268},
  minWs269: {minWidth: 269},
  minWs270: {minWidth: 270},
  minWs271: {minWidth: 271},
  minWs272: {minWidth: 272},
  minWs273: {minWidth: 273},
  minWs274: {minWidth: 274},
  minWs275: {minWidth: 275},
  minWs276: {minWidth: 276},
  minWs277: {minWidth: 277},
  minWs278: {minWidth: 278},
  minWs279: {minWidth: 279},
  minWs280: {minWidth: 280},
  minWs281: {minWidth: 281},
  minWs282: {minWidth: 282},
  minWs283: {minWidth: 283},
  minWs284: {minWidth: 284},
  minWs285: {minWidth: 285},
  minWs286: {minWidth: 286},
  minWs287: {minWidth: 287},
  minWs288: {minWidth: 288},
  minWs289: {minWidth: 289},
  minWs290: {minWidth: 290},
  minWs291: {minWidth: 291},
  minWs292: {minWidth: 292},
  minWs293: {minWidth: 293},
  minWs294: {minWidth: 294},
  minWs295: {minWidth: 295},
  minWs296: {minWidth: 296},
  minWs297: {minWidth: 297},
  minWs298: {minWidth: 298},
  minWs299: {minWidth: 299},
  minWs300: {minWidth: 300},

  maxWs1: {maxWidth: 1},
  maxWs2: {maxWidth: 2},
  maxWs3: {maxWidth: 3},
  maxWs4: {maxWidth: 4},
  maxWs5: {maxWidth: 5},
  maxWs6: {maxWidth: 6},
  maxWs7: {maxWidth: 7},
  maxWs8: {maxWidth: 8},
  maxWs9: {maxWidth: 9},
  maxWs10: {maxWidth: 10},
  maxWs11: {maxWidth: 11},
  maxWs12: {maxWidth: 12},
  maxWs13: {maxWidth: 13},
  maxWs14: {maxWidth: 14},
  maxWs15: {maxWidth: 15},
  maxWs16: {maxWidth: 16},
  maxWs17: {maxWidth: 17},
  maxWs18: {maxWidth: 18},
  maxWs19: {maxWidth: 19},
  maxWs20: {maxWidth: 20},
  maxWs21: {maxWidth: 21},
  maxWs22: {maxWidth: 22},
  maxWs23: {maxWidth: 23},
  maxWs24: {maxWidth: 24},
  maxWs25: {maxWidth: 25},
  maxWs26: {maxWidth: 26},
  maxWs27: {maxWidth: 27},
  maxWs28: {maxWidth: 28},
  maxWs29: {maxWidth: 29},
  maxWs30: {maxWidth: 30},
  maxWs31: {maxWidth: 31},
  maxWs32: {maxWidth: 32},
  maxWs33: {maxWidth: 33},
  maxWs34: {maxWidth: 34},
  maxWs35: {maxWidth: 35},
  maxWs36: {maxWidth: 36},
  maxWs37: {maxWidth: 37},
  maxWs38: {maxWidth: 38},
  maxWs39: {maxWidth: 39},
  maxWs40: {maxWidth: 40},
  maxWs41: {maxWidth: 41},
  maxWs42: {maxWidth: 42},
  maxWs43: {maxWidth: 43},
  maxWs44: {maxWidth: 44},
  maxWs45: {maxWidth: 45},
  maxWs46: {maxWidth: 46},
  maxWs47: {maxWidth: 47},
  maxWs48: {maxWidth: 48},
  maxWs49: {maxWidth: 49},
  maxWs50: {maxWidth: 50},
  maxWs51: {maxWidth: 51},
  maxWs52: {maxWidth: 52},
  maxWs53: {maxWidth: 53},
  maxWs54: {maxWidth: 54},
  maxWs55: {maxWidth: 55},
  maxWs56: {maxWidth: 56},
  maxWs57: {maxWidth: 57},
  maxWs58: {maxWidth: 58},
  maxWs59: {maxWidth: 59},
  maxWs60: {maxWidth: 60},
  maxWs61: {maxWidth: 61},
  maxWs62: {maxWidth: 62},
  maxWs63: {maxWidth: 63},
  maxWs64: {maxWidth: 64},
  maxWs65: {maxWidth: 65},
  maxWs66: {maxWidth: 66},
  maxWs67: {maxWidth: 67},
  maxWs68: {maxWidth: 68},
  maxWs69: {maxWidth: 69},
  maxWs70: {maxWidth: 70},
  maxWs71: {maxWidth: 71},
  maxWs72: {maxWidth: 72},
  maxWs73: {maxWidth: 73},
  maxWs74: {maxWidth: 74},
  maxWs75: {maxWidth: 75},
  maxWs76: {maxWidth: 76},
  maxWs77: {maxWidth: 77},
  maxWs78: {maxWidth: 78},
  maxWs79: {maxWidth: 79},
  maxWs80: {maxWidth: 80},
  maxWs81: {maxWidth: 81},
  maxWs82: {maxWidth: 82},
  maxWs83: {maxWidth: 83},
  maxWs84: {maxWidth: 84},
  maxWs85: {maxWidth: 85},
  maxWs86: {maxWidth: 86},
  maxWs87: {maxWidth: 87},
  maxWs88: {maxWidth: 88},
  maxWs89: {maxWidth: 89},
  maxWs90: {maxWidth: 90},
  maxWs91: {maxWidth: 91},
  maxWs92: {maxWidth: 92},
  maxWs93: {maxWidth: 93},
  maxWs94: {maxWidth: 94},
  maxWs95: {maxWidth: 95},
  maxWs96: {maxWidth: 96},
  maxWs97: {maxWidth: 97},
  maxWs98: {maxWidth: 98},
  maxWs99: {maxWidth: 99},
  maxWs100: {maxWidth: 100},
  maxWs101: {maxWidth: 101},
  maxWs102: {maxWidth: 102},
  maxWs103: {maxWidth: 103},
  maxWs104: {maxWidth: 104},
  maxWs105: {maxWidth: 105},
  maxWs106: {maxWidth: 106},
  maxWs107: {maxWidth: 107},
  maxWs108: {maxWidth: 108},
  maxWs109: {maxWidth: 109},
  maxWs110: {maxWidth: 110},
  maxWs111: {maxWidth: 111},
  maxWs112: {maxWidth: 112},
  maxWs113: {maxWidth: 113},
  maxWs114: {maxWidth: 114},
  maxWs115: {maxWidth: 115},
  maxWs116: {maxWidth: 116},
  maxWs117: {maxWidth: 117},
  maxWs118: {maxWidth: 118},
  maxWs119: {maxWidth: 119},
  maxWs120: {maxWidth: 120},
  maxWs121: {maxWidth: 121},
  maxWs122: {maxWidth: 122},
  maxWs123: {maxWidth: 123},
  maxWs124: {maxWidth: 124},
  maxWs125: {maxWidth: 125},
  maxWs126: {maxWidth: 126},
  maxWs127: {maxWidth: 127},
  maxWs128: {maxWidth: 128},
  maxWs129: {maxWidth: 129},
  maxWs130: {maxWidth: 130},
  maxWs131: {maxWidth: 131},
  maxWs132: {maxWidth: 132},
  maxWs133: {maxWidth: 133},
  maxWs134: {maxWidth: 134},
  maxWs135: {maxWidth: 135},
  maxWs136: {maxWidth: 136},
  maxWs137: {maxWidth: 137},
  maxWs138: {maxWidth: 138},
  maxWs139: {maxWidth: 139},
  maxWs140: {maxWidth: 140},
  maxWs141: {maxWidth: 141},
  maxWs142: {maxWidth: 142},
  maxWs143: {maxWidth: 143},
  maxWs144: {maxWidth: 144},
  maxWs145: {maxWidth: 145},
  maxWs146: {maxWidth: 146},
  maxWs147: {maxWidth: 147},
  maxWs148: {maxWidth: 148},
  maxWs149: {maxWidth: 149},
  maxWs150: {maxWidth: 150},
  maxWs151: {maxWidth: 151},
  maxWs152: {maxWidth: 152},
  maxWs153: {maxWidth: 153},
  maxWs154: {maxWidth: 154},
  maxWs155: {maxWidth: 155},
  maxWs156: {maxWidth: 156},
  maxWs157: {maxWidth: 157},
  maxWs158: {maxWidth: 158},
  maxWs159: {maxWidth: 159},
  maxWs160: {maxWidth: 160},
  maxWs161: {maxWidth: 161},
  maxWs162: {maxWidth: 162},
  maxWs163: {maxWidth: 163},
  maxWs164: {maxWidth: 164},
  maxWs165: {maxWidth: 165},
  maxWs166: {maxWidth: 166},
  maxWs167: {maxWidth: 167},
  maxWs168: {maxWidth: 168},
  maxWs169: {maxWidth: 169},
  maxWs170: {maxWidth: 170},
  maxWs171: {maxWidth: 171},
  maxWs172: {maxWidth: 172},
  maxWs173: {maxWidth: 173},
  maxWs174: {maxWidth: 174},
  maxWs175: {maxWidth: 175},
  maxWs176: {maxWidth: 176},
  maxWs177: {maxWidth: 177},
  maxWs178: {maxWidth: 178},
  maxWs179: {maxWidth: 179},
  maxWs180: {maxWidth: 180},
  maxWs181: {maxWidth: 181},
  maxWs182: {maxWidth: 182},
  maxWs183: {maxWidth: 183},
  maxWs184: {maxWidth: 184},
  maxWs185: {maxWidth: 185},
  maxWs186: {maxWidth: 186},
  maxWs187: {maxWidth: 187},
  maxWs188: {maxWidth: 188},
  maxWs189: {maxWidth: 189},
  maxWs190: {maxWidth: 190},
  maxWs191: {maxWidth: 191},
  maxWs192: {maxWidth: 192},
  maxWs193: {maxWidth: 193},
  maxWs194: {maxWidth: 194},
  maxWs195: {maxWidth: 195},
  maxWs196: {maxWidth: 196},
  maxWs197: {maxWidth: 197},
  maxWs198: {maxWidth: 198},
  maxWs199: {maxWidth: 199},
  maxWs200: {maxWidth: 200},
  maxWs201: {maxWidth: 201},
  maxWs202: {maxWidth: 202},
  maxWs203: {maxWidth: 203},
  maxWs204: {maxWidth: 204},
  maxWs205: {maxWidth: 205},
  maxWs206: {maxWidth: 206},
  maxWs207: {maxWidth: 207},
  maxWs208: {maxWidth: 208},
  maxWs209: {maxWidth: 209},
  maxWs210: {maxWidth: 210},
  maxWs211: {maxWidth: 211},
  maxWs212: {maxWidth: 212},
  maxWs213: {maxWidth: 213},
  maxWs214: {maxWidth: 214},
  maxWs215: {maxWidth: 215},
  maxWs216: {maxWidth: 216},
  maxWs217: {maxWidth: 217},
  maxWs218: {maxWidth: 218},
  maxWs219: {maxWidth: 219},
  maxWs220: {maxWidth: 220},
  maxWs221: {maxWidth: 221},
  maxWs222: {maxWidth: 222},
  maxWs223: {maxWidth: 223},
  maxWs224: {maxWidth: 224},
  maxWs225: {maxWidth: 225},
  maxWs226: {maxWidth: 226},
  maxWs227: {maxWidth: 227},
  maxWs228: {maxWidth: 228},
  maxWs229: {maxWidth: 229},
  maxWs230: {maxWidth: 230},
  maxWs231: {maxWidth: 231},
  maxWs232: {maxWidth: 232},
  maxWs233: {maxWidth: 233},
  maxWs234: {maxWidth: 234},
  maxWs235: {maxWidth: 235},
  maxWs236: {maxWidth: 236},
  maxWs237: {maxWidth: 237},
  maxWs238: {maxWidth: 238},
  maxWs239: {maxWidth: 239},
  maxWs240: {maxWidth: 240},
  maxWs241: {maxWidth: 241},
  maxWs242: {maxWidth: 242},
  maxWs243: {maxWidth: 243},
  maxWs244: {maxWidth: 244},
  maxWs245: {maxWidth: 245},
  maxWs246: {maxWidth: 246},
  maxWs247: {maxWidth: 247},
  maxWs248: {maxWidth: 248},
  maxWs249: {maxWidth: 249},
  maxWs250: {maxWidth: 250},
  maxWs251: {maxWidth: 251},
  maxWs252: {maxWidth: 252},
  maxWs253: {maxWidth: 253},
  maxWs254: {maxWidth: 254},
  maxWs255: {maxWidth: 255},
  maxWs256: {maxWidth: 256},
  maxWs257: {maxWidth: 257},
  maxWs258: {maxWidth: 258},
  maxWs259: {maxWidth: 259},
  maxWs260: {maxWidth: 260},
  maxWs261: {maxWidth: 261},
  maxWs262: {maxWidth: 262},
  maxWs263: {maxWidth: 263},
  maxWs264: {maxWidth: 264},
  maxWs265: {maxWidth: 265},
  maxWs266: {maxWidth: 266},
  maxWs267: {maxWidth: 267},
  maxWs268: {maxWidth: 268},
  maxWs269: {maxWidth: 269},
  maxWs270: {maxWidth: 270},
  maxWs271: {maxWidth: 271},
  maxWs272: {maxWidth: 272},
  maxWs273: {maxWidth: 273},
  maxWs274: {maxWidth: 274},
  maxWs275: {maxWidth: 275},
  maxWs276: {maxWidth: 276},
  maxWs277: {maxWidth: 277},
  maxWs278: {maxWidth: 278},
  maxWs279: {maxWidth: 279},
  maxWs280: {maxWidth: 280},
  maxWs281: {maxWidth: 281},
  maxWs282: {maxWidth: 282},
  maxWs283: {maxWidth: 283},
  maxWs284: {maxWidth: 284},
  maxWs285: {maxWidth: 285},
  maxWs286: {maxWidth: 286},
  maxWs287: {maxWidth: 287},
  maxWs288: {maxWidth: 288},
  maxWs289: {maxWidth: 289},
  maxWs290: {maxWidth: 290},
  maxWs291: {maxWidth: 291},
  maxWs292: {maxWidth: 292},
  maxWs293: {maxWidth: 293},
  maxWs294: {maxWidth: 294},
  maxWs295: {maxWidth: 295},
  maxWs296: {maxWidth: 296},
  maxWs297: {maxWidth: 297},
  maxWs298: {maxWidth: 298},
  maxWs299: {maxWidth: 299},
  maxWs300: {maxWidth: 300},

  hws1: {height: 1, width: 1},
  hws2: {height: 2, width: 2},
  hws3: {height: 3, width: 3},
  hws4: {height: 4, width: 4},
  hws5: {height: 5, width: 5},
  hws6: {height: 6, width: 6},
  hws7: {height: 7, width: 7},
  hws8: {height: 8, width: 8},
  hws9: {height: 9, width: 9},
  hws10: {height: 10, width: 10},
  hws11: {height: 11, width: 11},
  hws12: {height: 12, width: 12},
  hws13: {height: 13, width: 13},
  hws14: {height: 14, width: 14},
  hws15: {height: 15, width: 15},
  hws16: {height: 16, width: 16},
  hws17: {height: 17, width: 17},
  hws18: {height: 18, width: 18},
  hws19: {height: 19, width: 19},
  hws20: {height: 20, width: 20},
  hws21: {height: 21, width: 21},
  hws22: {height: 22, width: 22},
  hws23: {height: 23, width: 23},
  hws24: {height: 24, width: 24},
  hws25: {height: 25, width: 25},
  hws26: {height: 26, width: 26},
  hws27: {height: 27, width: 27},
  hws28: {height: 28, width: 28},
  hws29: {height: 29, width: 29},
  hws30: {height: 30, width: 30},
  hws31: {height: 31, width: 31},
  hws32: {height: 32, width: 32},
  hws33: {height: 33, width: 33},
  hws34: {height: 34, width: 34},
  hws35: {height: 35, width: 35},
  hws36: {height: 36, width: 36},
  hws37: {height: 37, width: 37},
  hws38: {height: 38, width: 38},
  hws39: {height: 39, width: 39},
  hws40: {height: 40, width: 40},
  hws41: {height: 41, width: 41},
  hws42: {height: 42, width: 42},
  hws43: {height: 43, width: 43},
  hws44: {height: 44, width: 44},
  hws45: {height: 45, width: 45},
  hws46: {height: 46, width: 46},
  hws47: {height: 47, width: 47},
  hws48: {height: 48, width: 48},
  hws49: {height: 49, width: 49},
  hws50: {height: 50, width: 50},
  hws51: {height: 51, width: 51},
  hws52: {height: 52, width: 52},
  hws53: {height: 53, width: 53},
  hws54: {height: 54, width: 54},
  hws55: {height: 55, width: 55},
  hws56: {height: 56, width: 56},
  hws57: {height: 57, width: 57},
  hws58: {height: 58, width: 58},
  hws59: {height: 59, width: 59},
  hws60: {height: 60, width: 60},
  hws61: {height: 61, width: 61},
  hws62: {height: 62, width: 62},
  hws63: {height: 63, width: 63},
  hws64: {height: 64, width: 64},
  hws65: {height: 65, width: 65},
  hws66: {height: 66, width: 66},
  hws67: {height: 67, width: 67},
  hws68: {height: 68, width: 68},
  hws69: {height: 69, width: 69},
  hws70: {height: 70, width: 70},
  hws71: {height: 71, width: 71},
  hws72: {height: 72, width: 72},
  hws73: {height: 73, width: 73},
  hws74: {height: 74, width: 74},
  hws75: {height: 75, width: 75},
  hws76: {height: 76, width: 76},
  hws77: {height: 77, width: 77},
  hws78: {height: 78, width: 78},
  hws79: {height: 79, width: 79},
  hws80: {height: 80, width: 80},
  hws81: {height: 81, width: 81},
  hws82: {height: 82, width: 82},
  hws83: {height: 83, width: 83},
  hws84: {height: 84, width: 84},
  hws85: {height: 85, width: 85},
  hws86: {height: 86, width: 86},
  hws87: {height: 87, width: 87},
  hws88: {height: 88, width: 88},
  hws89: {height: 89, width: 89},
  hws90: {height: 90, width: 90},
  hws91: {height: 91, width: 91},
  hws92: {height: 92, width: 92},
  hws93: {height: 93, width: 93},
  hws94: {height: 94, width: 94},
  hws95: {height: 95, width: 95},
  hws96: {height: 96, width: 96},
  hws97: {height: 97, width: 97},
  hws98: {height: 98, width: 98},
  hws99: {height: 99, width: 99},
  hws100: {height: 100, width: 100},
  hws101: {height: 101, width: 101},
  hws102: {height: 102, width: 102},
  hws103: {height: 103, width: 103},
  hws104: {height: 104, width: 104},
  hws105: {height: 105, width: 105},
  hws106: {height: 106, width: 106},
  hws107: {height: 107, width: 107},
  hws108: {height: 108, width: 108},
  hws109: {height: 109, width: 109},
  hws110: {height: 110, width: 110},
  hws111: {height: 111, width: 111},
  hws112: {height: 112, width: 112},
  hws113: {height: 113, width: 113},
  hws114: {height: 114, width: 114},
  hws115: {height: 115, width: 115},
  hws116: {height: 116, width: 116},
  hws117: {height: 117, width: 117},
  hws118: {height: 118, width: 118},
  hws119: {height: 119, width: 119},
  hws120: {height: 120, width: 120},
  hws121: {height: 121, width: 121},
  hws122: {height: 122, width: 122},
  hws123: {height: 123, width: 123},
  hws124: {height: 124, width: 124},
  hws125: {height: 125, width: 125},
  hws126: {height: 126, width: 126},
  hws127: {height: 127, width: 127},
  hws128: {height: 128, width: 128},
  hws129: {height: 129, width: 129},
  hws130: {height: 130, width: 130},
  hws131: {height: 131, width: 131},
  hws132: {height: 132, width: 132},
  hws133: {height: 133, width: 133},
  hws134: {height: 134, width: 134},
  hws135: {height: 135, width: 135},
  hws136: {height: 136, width: 136},
  hws137: {height: 137, width: 137},
  hws138: {height: 138, width: 138},
  hws139: {height: 139, width: 139},
  hws140: {height: 140, width: 140},
  hws141: {height: 141, width: 141},
  hws142: {height: 142, width: 142},
  hws143: {height: 143, width: 143},
  hws144: {height: 144, width: 144},
  hws145: {height: 145, width: 145},
  hws146: {height: 146, width: 146},
  hws147: {height: 147, width: 147},
  hws148: {height: 148, width: 148},
  hws149: {height: 149, width: 149},
  hws150: {height: 150, width: 150},
  hws151: {height: 151, width: 151},
  hws152: {height: 152, width: 152},
  hws153: {height: 153, width: 153},
  hws154: {height: 154, width: 154},
  hws155: {height: 155, width: 155},
  hws156: {height: 156, width: 156},
  hws157: {height: 157, width: 157},
  hws158: {height: 158, width: 158},
  hws159: {height: 159, width: 159},
  hws160: {height: 160, width: 160},
  hws161: {height: 161, width: 161},
  hws162: {height: 162, width: 162},
  hws163: {height: 163, width: 163},
  hws164: {height: 164, width: 164},
  hws165: {height: 165, width: 165},
  hws166: {height: 166, width: 166},
  hws167: {height: 167, width: 167},
  hws168: {height: 168, width: 168},
  hws169: {height: 169, width: 169},
  hws170: {height: 170, width: 170},
  hws171: {height: 171, width: 171},
  hws172: {height: 172, width: 172},
  hws173: {height: 173, width: 173},
  hws174: {height: 174, width: 174},
  hws175: {height: 175, width: 175},
  hws176: {height: 176, width: 176},
  hws177: {height: 177, width: 177},
  hws178: {height: 178, width: 178},
  hws179: {height: 179, width: 179},
  hws180: {height: 180, width: 180},
  hws181: {height: 181, width: 181},
  hws182: {height: 182, width: 182},
  hws183: {height: 183, width: 183},
  hws184: {height: 184, width: 184},
  hws185: {height: 185, width: 185},
  hws186: {height: 186, width: 186},
  hws187: {height: 187, width: 187},
  hws188: {height: 188, width: 188},
  hws189: {height: 189, width: 189},
  hws190: {height: 190, width: 190},
  hws191: {height: 191, width: 191},
  hws192: {height: 192, width: 192},
  hws193: {height: 193, width: 193},
  hws194: {height: 194, width: 194},
  hws195: {height: 195, width: 195},
  hws196: {height: 196, width: 196},
  hws197: {height: 197, width: 197},
  hws198: {height: 198, width: 198},
  hws199: {height: 199, width: 199},
  hws200: {height: 200, width: 200},
  hws201: {height: 201, width: 201},
  hws202: {height: 202, width: 202},
  hws203: {height: 203, width: 203},
  hws204: {height: 204, width: 204},
  hws205: {height: 205, width: 205},
  hws206: {height: 206, width: 206},
  hws207: {height: 207, width: 207},
  hws208: {height: 208, width: 208},
  hws209: {height: 209, width: 209},
  hws210: {height: 210, width: 210},
  hws211: {height: 211, width: 211},
  hws212: {height: 212, width: 212},
  hws213: {height: 213, width: 213},
  hws214: {height: 214, width: 214},
  hws215: {height: 215, width: 215},
  hws216: {height: 216, width: 216},
  hws217: {height: 217, width: 217},
  hws218: {height: 218, width: 218},
  hws219: {height: 219, width: 219},
  hws220: {height: 220, width: 220},
  hws221: {height: 221, width: 221},
  hws222: {height: 222, width: 222},
  hws223: {height: 223, width: 223},
  hws224: {height: 224, width: 224},
  hws225: {height: 225, width: 225},
  hws226: {height: 226, width: 226},
  hws227: {height: 227, width: 227},
  hws228: {height: 228, width: 228},
  hws229: {height: 229, width: 229},
  hws230: {height: 230, width: 230},
  hws231: {height: 231, width: 231},
  hws232: {height: 232, width: 232},
  hws233: {height: 233, width: 233},
  hws234: {height: 234, width: 234},
  hws235: {height: 235, width: 235},
  hws236: {height: 236, width: 236},
  hws237: {height: 237, width: 237},
  hws238: {height: 238, width: 238},
  hws239: {height: 239, width: 239},
  hws240: {height: 240, width: 240},
  hws241: {height: 241, width: 241},
  hws242: {height: 242, width: 242},
  hws243: {height: 243, width: 243},
  hws244: {height: 244, width: 244},
  hws245: {height: 245, width: 245},
  hws246: {height: 246, width: 246},
  hws247: {height: 247, width: 247},
  hws248: {height: 248, width: 248},
  hws249: {height: 249, width: 249},
  hws250: {height: 250, width: 250},
  hws251: {height: 251, width: 251},
  hws252: {height: 252, width: 252},
  hws253: {height: 253, width: 253},
  hws254: {height: 254, width: 254},
  hws255: {height: 255, width: 255},
  hws256: {height: 256, width: 256},
  hws257: {height: 257, width: 257},
  hws258: {height: 258, width: 258},
  hws259: {height: 259, width: 259},
  hws260: {height: 260, width: 260},
  hws261: {height: 261, width: 261},
  hws262: {height: 262, width: 262},
  hws263: {height: 263, width: 263},
  hws264: {height: 264, width: 264},
  hws265: {height: 265, width: 265},
  hws266: {height: 266, width: 266},
  hws267: {height: 267, width: 267},
  hws268: {height: 268, width: 268},
  hws269: {height: 269, width: 269},
  hws270: {height: 270, width: 270},
  hws271: {height: 271, width: 271},
  hws272: {height: 272, width: 272},
  hws273: {height: 273, width: 273},
  hws274: {height: 274, width: 274},
  hws275: {height: 275, width: 275},
  hws276: {height: 276, width: 276},
  hws277: {height: 277, width: 277},
  hws278: {height: 278, width: 278},
  hws279: {height: 279, width: 279},
  hws280: {height: 280, width: 280},
  hws281: {height: 281, width: 281},
  hws282: {height: 282, width: 282},
  hws283: {height: 283, width: 283},
  hws284: {height: 284, width: 284},
  hws285: {height: 285, width: 285},
  hws286: {height: 286, width: 286},
  hws287: {height: 287, width: 287},
  hws288: {height: 288, width: 288},
  hws289: {height: 289, width: 289},
  hws290: {height: 290, width: 290},
  hws291: {height: 291, width: 291},
  hws292: {height: 292, width: 292},
  hws293: {height: 293, width: 293},
  hws294: {height: 294, width: 294},
  hws295: {height: 295, width: 295},
  hws296: {height: 296, width: 296},
  hws297: {height: 297, width: 297},
  hws298: {height: 298, width: 298},
  hws299: {height: 299, width: 299},
  hws300: {height: 300, width: 300},
});

export default ES;

import {Dimensions, Platform} from 'react-native';

export function isIphoneX() {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height > 896 ||
      dimen.width > 896)
  );
}

// FOR IPHONE 12 PRO MAX EXCLUSIVELY
export function isIphone12() {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height > 896 || // FOR IPHONE 12 PRO MAX
      dimen.width > 896) // FOR IPHONE 12 PRO MAX
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }

  return regularStyle;
}

export function getSafelyScrollNode(scrollNode) {
  // RN >0.62
  if (scrollNode && scrollNode.scrollTo) return scrollNode;

  // RN <0.62
  return scrollNode.getNode();
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}

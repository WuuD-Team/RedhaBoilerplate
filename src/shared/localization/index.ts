import LocalizedStrings from 'react-native-localization';

export const localStrings = new LocalizedStrings({
  en: {
    noLocationService: 'Location Service Not Available',
    logout: 'Logout',
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    areYouSure: 'Are you sure?',
    logoutDesc: 'You are about to log out, confirm?',
    noInternet: 'No Internet Connection',
  },
});
// ? Set the language manually
localStrings.setLanguage('en');

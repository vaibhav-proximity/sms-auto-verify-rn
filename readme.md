### Install


```
$ yarn add react-native-sms-user-consent
```


## Install dependencies

Include the Play Services auth component in your app's build.gradle file:

```
implementation 'com.google.android.gms:play-services-auth:17.0.0'
implementation 'com.google.android.gms:play-services-auth-api-phone:17.4.0'
```

## Usage


### Import

```js
import SMSUserConsent from 'react-native-sms-user-consent';
```

### Start listen SMS and get message

```tsx
interface SMSMessage {
  receivedOtpMessage: string
}

getSMSMessage = async () => {
  try {
    const message: SMSMessage = await SMSUserConsent.listenOTP()
  } catch (e) {
    // error
  }
}

```

### Remove listener

```tsx

removeSmsListener = () => {
  try {
    SMSUserConsent.removeOTPListener()
  } catch(e) {
    // error
  }
}

```

```

```

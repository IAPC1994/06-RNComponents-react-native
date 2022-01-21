import React from 'react';
import { Alert, Button, View } from 'react-native';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';



export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "Alert Message",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Button Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => console.log("OK Button Pressed")
                }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log("OnDismiss")
            }
        );
    }

    
    const showPrompt = () => {
        /*ONLY IOS*/ 
        // Alert.prompt(
        //     "Prompt Title",
        //     "Prompt message",
        //     ( value: string ) => console.log('Info: ', value),
        //     'default',
        //     'Hello World',
        //     'number-pad'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
             { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Alerts" />

            <Button 
                title="Show Alert"
                onPress={ showAlert }
            />
            <View style={{ height: 10 }}/>

            <Button 
                    title="Show Prompt"
                    onPress={ showPrompt }
                />
            </View>
    
    );
};

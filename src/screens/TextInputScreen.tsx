import React, { useState} from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform,ScrollView, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title="Text Inputs" />
                    <TextInput 
                        style={ stylesTextInput.inputStyle }
                        placeholder='Your Name'
                        autoCorrect = { false }
                        autoCapitalize='words'
                        onChangeText={( value ) => onChange(value, 'name') }
                    />
                    <TextInput 
                        style={ stylesTextInput.inputStyle }
                        placeholder='Your Email'
                        autoCorrect = { false }
                        autoCapitalize='none'
                        onChangeText={( value ) => onChange(value, 'email') }
                        keyboardType='email-address'
                        keyboardAppearance='dark'
                    />
                    <TextInput 
                        style={ stylesTextInput.inputStyle }
                        placeholder='Your Phone'
                        onChangeText={( value ) => onChange(value, 'phone') }
                        keyboardType='phone-pad'
                    />

                    <View style={ stylesTextInput.switchRow }>
                        <Text style={ stylesTextInput.switchText }>Subscribe</Text>
                        <CustomSwitch isOn={ isSubscribed } onChange={ (value) => onChange( value, 'isSubscribed' ) } />
                    </View>

                    <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesTextInput = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText:{
        fontSize: 25
    },
});
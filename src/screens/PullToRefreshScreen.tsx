import React, { useContext, useState } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [ refreshing, setRefreshing ] = useState(false);
    const [ data, setData ] = useState<string>();

    const { top } = useSafeAreaInsets();

    const { theme: { colors, dark } } = useContext( ThemeContext );

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout( () => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 1500);
    }

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }} // Only IOS device
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor= { colors.text }
                    colors={ [colors.primary] }
                    // style={{ backgroundColor: '#5856D6' }}
                    tintColor={ dark ? 'white' : 'black'}
                    // title="Refreshing..."
                    // titleColor="white"
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull To Refresh'/>
                {
                    data && <HeaderTitle title={ data }></HeaderTitle>
                }
            </View>
        </ScrollView>
    );
};

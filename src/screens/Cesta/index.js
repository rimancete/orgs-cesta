import { StyleSheet, View } from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

export default function Cesta({ header, body}) {

    return (
        <>
            <Header {...header}/>
            
            <View style={styles.contentView}>
                <Body {...body} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contentView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});
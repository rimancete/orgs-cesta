import { FlatList, StyleSheet, View } from 'react-native';
import Body from './components/Body';
import CustomText from '../../components/CustomText';
import Header from './components/Header';
import Item from './components/Item';

export default function Cesta({ header, body, items}) {

    return (
        <>
            <FlatList 
                data={items.list}
                renderItem={Item}
                keyExtractor={({name}) => name}
                ListHeaderComponent={() => {
                    return <>
                        <Header {...header}/>

                        <View style={styles.contentView}>
                            <Body {...body} />
                            <CustomText style={styles.itemTitle}>{items.title}</CustomText>
                        </View>
                    </>
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    contentView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    itemTitle: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});
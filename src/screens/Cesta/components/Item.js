import { FlatList, Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";

export default function Item({ item: { name, image } }) {
    return <View style={styles.item}>
        <Image source={image} style={styles.image}/>
        <CustomText style={styles.name}>{name}</CustomText>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth:  1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }

});
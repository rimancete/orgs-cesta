import { Image, StyleSheet, View } from "react-native"
import CustomButton from "../../../components/CustomButton";

import CustomText from "../../../components/CustomText"

export default function Body({ logo, name, farmName, description, price, button }) {
    return <>
        <CustomText style={styles.name}>{name}</CustomText>
        <View style={styles.farmView}>
            <Image source={logo} style={styles.farmImage} />
            <CustomText style={styles.farmName}>{farmName}</CustomText>
        </View>
        <CustomText style={styles.description}>{description}</CustomText>
        <CustomText style={styles.price}>{price}</CustomText>
        <CustomButton title={button} style={{marginTop: 16}} />
    </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    farmView: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    farmImage: {
        width: 32,
        height: 32
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
        
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});
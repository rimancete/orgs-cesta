import { Image, StyleSheet, Dimensions } from "react-native";
import topImage from '../../../../assets/topo.png';
import CustomText from "../../../components/CustomText";

const width = Dimensions.get('screen').width

export default function Header({ title }) {
    return (
        <>
            <Image source={topImage} style={styles.header} />
            <CustomText style={styles.title}>{title}</CustomText>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 578 / 768 * width // dimensões da imagem vezes largura do aparelho
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
});
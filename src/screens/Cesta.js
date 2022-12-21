import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import topImage from '../../assets/topo.png';

const width = Dimensions.get('screen').width
export default function Cesta() {

    return (
        <>
            <Image source={topImage} style={styles.header} />
            <Text style={styles.title}>Detalhe da cesta</Text>
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
    }
});
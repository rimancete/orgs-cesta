import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topImage from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width
export default function Cesta() {

    return (
        <>
            <Image source={topImage} style={styles.header} />
            <Text style={styles.title}>Detalhe da cesta</Text>
            <View style={styles.contentView}>
                <Text style={styles.name}>Cesta de verduras</Text>
                <View style={styles.farmView}>
                    <Image source={logo} style={styles.farmImage} />
                    <Text style={styles.farmName}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.description}>
                    Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda
                    para sua cozinha
                </Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
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
    contentView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontserratBold'
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
        marginLeft: 12,
        fontFamily: 'MontserratRegular'
        
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
    }
});
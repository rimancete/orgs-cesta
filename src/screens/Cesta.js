import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topImage from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import CustomText from '../components/CustomText';

const width = Dimensions.get('screen').width
export default function Cesta() {

    return (
        <>
            <Image source={topImage} style={styles.header} />
            <CustomText style={styles.title}>Detalhe da cesta</CustomText>
            <View style={styles.contentView}>
                <CustomText style={styles.name}>Cesta de verduras</CustomText>
                <View style={styles.farmView}>
                    <Image source={logo} style={styles.farmImage} />
                    <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
                </View>
                <CustomText style={styles.description}>
                    Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda
                    para sua cozinha
                </CustomText>
                <CustomText style={styles.price}>R$ 40,00</CustomText>
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
    }
});
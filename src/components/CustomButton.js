import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, style, onPress }) {
    let defaultButtonStyle = styles.button;
    

    return <TouchableOpacity onPress={onPress} style={[style, defaultButtonStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})
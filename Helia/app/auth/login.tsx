import { StyleSheet, Text, View } from "react-native";

    export default function Login() {
        return(
        <View style={styles.container}>
            <Text> Login</Text>
        </View>
        );
    }
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

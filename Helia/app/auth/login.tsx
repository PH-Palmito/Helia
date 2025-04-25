import { ArrowLeft, EnvelopeSimple, LockKey } from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

    export default function Login() {
        return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.header}>
           <ArrowLeft size={32} color="#f4f4f4" weight="regular"/>
        </TouchableOpacity>
            <Text style={styles.wellcome}>Faça login na sua conta</Text>

            <View style={styles.content}>
                <View style={styles.contentInput}>
                    <EnvelopeSimple size={32} color="#757575"/>
                    <TextInput placeholder="Seu e-mail" placeholderTextColor="#757575" style={styles.input}/>
                </View>

                <View style={styles.contentInput}>
                    <LockKey size={32} color="#757575"/>
                    <TextInput placeholder="Sua Senha" placeholderTextColor="#757575" style={styles.input}/>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonSingIn} >
                <Text style={styles.buttonSingInText}>Entar</Text>
            </TouchableOpacity>
            <View style={styles.containerSeparator}>
                <View style={styles.separator}></View>
                <Text style={styles.separatorText}>ou conecte-se com</Text>
                <View style={styles.separator}></View>
            </View>
        </View>
        );
    }


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181a20",
        alignItems: "center",
        paddingHorizontal: 20,

    },
    header:{
        alignSelf: "flex-start",
        marginTop: 50,
    },
    wellcome: {
        color: "#f4f4f4",
        marginTop: 50,
        fontSize: 24,
        fontWeight: "600",
    },
    content: {
        width: "100%",
        marginTop: 50,
        alignItems: "center",
        gap: 20,
    },
    contentInput:{
        width: "100%",
        height: 56,
        backgroundColor: "#1f222a",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        gap: 10,

    },
    input:{
        flex: 1,
        color: "#757575",
    },
    buttonSingIn:{
        backgroundColor: "#1ab55c",
        width: "100%",
        height: 56,
        borderRadius: 332,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    buttonSingInText:{},
    containerSeparator: {
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: "#757575",
    },
    separatorText: {
        color: "#f4f4f4",
        fontSize: 16,
        fontWeight: "400",
    }
})

import { ArrowLeft, BookBookmark, DotsThreeCircle, FileX } from "phosphor-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Details() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image  style={styles.headerImage} source={require("../assets/images/acomodacoes.jpg")} />

          <View style={styles.headerinfoButtons}>
            <ArrowLeft size={32} color="#f4f4f4" />

          <View style={styles.headerinfoButtonsRight}>
            <BookBookmark size={32} color="#f4f4f4"/>
            <DotsThreeCircle size={32} color="#f4f4f4" />
          </View>
        </View>

        </View>
    </View>
    );
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181a20",
    },
    header: {
        width: "100%",
        height: "40%",
    },
    headerImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    headerinfoButtons:{
        marginTop: 40,
        paddingHorizontal: 40,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    headerinfoButtonsRight:{
        flexDirection: "row",
        gap: 10,

    },
});
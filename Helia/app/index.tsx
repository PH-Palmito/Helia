import { Text, View, StyleSheet,} from "react-native";
import {StatusBar} from "expo-status-bar";
import { Bookmark, ChatsTeardrop } from "phosphor-react-native";
import { BellRinging } from "phosphor-react-native";

export default function Index() {
  return (
  <View style={styles.container}>
      <StatusBar />

    <View style={styles.header}>
      <View style={styles.headerLeft}><ChatsTeardrop  size={30}
      color="1ab65c" weight="duotone"
      />
        <text style={styles.headerLeftText}>Helia</text>
      </View>
     <View style={styles.headerRight}>
     <BellRinging  size={30} color="f4f4f4" weight="duotone"/>
     <Bookmark size={30} color="f4f4f4" weight="duotone"/>
     </View>
    </View>
  </View>


  );
    }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header:{
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft:{},
  headerLeftText:{},
  headerRight:{},
});

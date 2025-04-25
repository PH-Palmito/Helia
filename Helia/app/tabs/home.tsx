import { Text, View, StyleSheet, TextInput, Pressable, Image,} from "react-native";
import {StatusBar} from "expo-status-bar";
import { Bookmark, ChatsTeardrop, MagnifyingGlass, SlidersHorizontal, TextIndent, X } from "phosphor-react-native";
import { BellRinging } from "phosphor-react-native";

export default function Home() {
  return (
  <View style={styles.container}>
      <StatusBar />

    <View style={styles.header}>
      <View style={styles.headerLeft}><ChatsTeardrop  size={30}
      color="#1ab65c" weight="duotone"
      />
        <Text style={styles.headerLeftText}>Helia</Text>
      </View>
     <View style={styles.headerRight}>
     <BellRinging  size={30} color="#f4f4f4" weight="duotone"/>
     <Bookmark size={30} color="#f4f4f4" weight="duotone"/>
     </View>
    </View>

    <Text style={styles.userName}>Ola, Pedro H</Text>
    <View style={styles.inputcontainer}>
      <MagnifyingGlass size={30} color="#757575"
      weight="duotone"/>
      <TextInput
      style={styles.input} placeholder="Busque uma casa aqui" placeholderTextColor="#757575"/>
      <SlidersHorizontal size={30} color="#1ab65c"
      weight="duotone"/>
    </View>
    <View style={styles.content}>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
          <Image
           style={styles.cardImage} source = {require("../assets/images/hotel.jpg")}
           />

          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
            <Text style={styles.cardSubTitle}>Salvador, Bahia</Text>
          </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style= {styles.cardInfoBuyText}> R$450,00 </Text>

            <Bookmark size={30} color="#f4f4f4" weight="fill"/>

          </View>

        </View>


    </View>
  </View>



  );
    }



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a28",
    paddingHorizontal: 20,
  },
  header:{
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
    headerLeft:{
    flexDirection: "row",
    alignItems: "center" ,
    gap: 10,

  },
  headerRight:{
    flexDirection: "row",
    alignItems: "center" ,
    gap: 10,
  },
  headerLeftText:{
    color: "#ffff",
    fontSize: 24,
    fontWeight: "800",
  },
  userName:{
   paddingTop: 30,
   paddingBottom: 30,
   color: "#f4f4f4",
   fontSize: 25,
   fontWeight: "800",
  },
  inputcontainer:{
    width	: "100%",
    height:56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection:"row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,

  },
  input:{
    flex: 1,
    color: "#f4f4f4",
  },
  content:{
    width: "100%",
    gap: 20,
  },
  card:{
    width: "100%",
    height: 120,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  cardButton:{
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,

  },
  cardImage:{
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  cardinfo:{
    height: "100%",
    gap: 10,
  },
  cardTitle:{
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  cardSubTitle:{
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
  },
  cardInfoBuy:{
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",


  },
  cardInfoBuyText:{
  color:"#1ab65c",
  fontSize: 20,
  fontWeight: "900",
  },
});

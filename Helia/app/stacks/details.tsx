import { ArrowLeft, BookBookmark, DotsThreeCircle, FileX, MapPin } from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <Text style={styles.infoNameText}>Hotel Nova Vista</Text>

         <View style={styles.contentAddress}>
            <MapPin size={32} color="#1ab65c" />
            <Text style={styles.contentAddressText}>Avenida Paralela, 123</Text>
         </View>
         <View style={styles.separator}/>
         <View style={styles.containerGalleryPhotos}>
            <Text style={styles.containerGalleryPhotosText}>Galeria de Fotos</Text>
            <Text style={styles.containerGalleryPhotosSeeAll}>Ver Todas</Text>

         </View>
         <ScrollView horizontal style={styles.contentPhotoContainer}>
            <Image style={styles.contentPhotoImage} source={require("../assets/images/hotel.jpg")}/>
            <Image style={styles.contentPhotoImage} source={require("../assets/images/hotel.jpg")}/>
            <Image style={styles.contentPhotoImage} source={require("../assets/images/hotel.jpg")}/>
            <Image style={styles.contentPhotoImage} source={require("../assets/images/hotel.jpg")}/>
         </ScrollView>
         <View style={styles.footer}>
            <View style={styles.footercontainerText}>
                    <Text style={styles.footercontainerTextMoney}>R$200</Text>
                    <Text style={styles.footercontainerTextMonth}>/Diaria</Text>
            </View>
              <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Reservar</Text>
             </TouchableOpacity>
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
        marginTop: 80,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    headerinfoButtonsRight:{
        flexDirection: "row",
        gap: 10,

    },
    infoNameText:{
        color: "#f4f4f4",
        fontSize:36,
        fontWeight: "bold",
        paddingHorizontal: 30,
       paddingTop: 20,

    },
    contentAddress:{
   flexDirection: "row",
   alignItems: "center",
   gap: 10,
   paddingHorizontal: 30,
   paddingTop: 15,
},
    contentAddressText:{

        color: "#f4f4f4",
        fontSize: 12,
},
    separator:{
    height: 1,
    backgroundColor: "#757575",
    marginHorizontal: 30,
    marginTop: 15,
},
    containerGalleryPhotos:{
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: "space-between",
},
    containerGalleryPhotosText:{
    color: "#f4f4f4",
    fontSize: 18,
    fontWeight: "bold",
},
    containerGalleryPhotosSeeAll:{
    fontSize: 12,
    color: "#1ab65c",
    fontWeight: "400",
},
contentPhotoContainer:{

    paddingHorizontal:30,
    paddingTop:15,

},
contentPhotoImage:{
    width: 100,
    height:100,
    borderRadius: 12,
    marginRight:10,
},
footer:{
    width:"100%",
    borderWidth:1,
    height:80,
    borderRightColor: "#757575",
    borderLeftColor:"#757575",
    borderTopColor:"#757575",

    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    flex:1,
    flexDirection:"row",
    paddingHorizontal:10,
    gap:10,

},
footercontainerText:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,

},
footercontainerTextMoney:{
fontSize:30,
fontWeight:"bold",
color:"#1ab65c",
},
footercontainerTextMonth:{
    fontSize:12,
    fontWeight:"400",
    color:"#f4f4f4",
},
button:{
    backgroundColor: "#1ab55c",
    flex: 1,
    height: 56,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
},
buttonText:{
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "800",
},
});
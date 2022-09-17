import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "#0A0A0A",
    paddingBottom: 20,
    paddingHorizontal: 20,
    },
    mainHeading:{
      color: "red",
     flex:1,
      fontSize: 30,
      fontWeight: '400',
      marginTop: 300,
      marginLeft: 55,  
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    }
  });
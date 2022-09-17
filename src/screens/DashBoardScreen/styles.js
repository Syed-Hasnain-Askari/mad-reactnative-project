import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0A0A0A",
  },
  imageRow: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    ...(Platform.OS === "web" ? { width: "100%" } : { flexShrink: 1 }),
    maxHeight: "100%",
  },
  image: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    margin: "3%",
    ...(Platform.OS === "web"
      ? { width: 300, height: 300 }
      : { flex: 1, aspectRatio: 1 }),
  },
  buttonRow: {
    width: "100%",
    minHeight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  topButtonRow: {
    height:  '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  topButton: {
    backgroundColor: "transparent",
    // height: 48,
    elevation: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 4,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    textAlign: "center",
  },
  topButtonText: {
    color: '#fff',
    marginTop: 3,
    fontSize: 15,
    fontWeight: "500"
  },
  button: {
    backgroundColor: "#fff",
    // height: 48,
    elevation: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  buttonText: {
    color: "#788eec",
    textAlign: "center",
  },
  placeholderSection: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text:{
    color:"white"
  },
  camera: {
    position: "absolute",
    display: "flex",
    width,
    height,
    backgroundColor: "#f0F",
    zIndex: 1,
  },
  fullScreenModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shutterbutton: {
    position: "absolute",
    bottom: 50,
    zIndex: 2,
    height: 80,
    width: 80,
    backgroundColor: "white",
    borderRadius: 40,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  frontbutton:{
    margin:17
  },
  flipbutton:{
    // backgroundColor: "white",
    // borderRadius: 40,
    // height: 50,
    // width: 50,
    // marginLeft: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:20,
    marginLeft:10
  },
  closebutton:{
    flexDirection:"column",
    alignItems: "flex-start",
    justifyContent:"flex-end"
  },
  filterSelectionRow: {
    position: "absolute",
    bottom: 70,
    width: '100%',
    backgroundColor: 'black'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    backgroundColor:"red",
    color:"red"
  },
  exit:{
    color:"white",
    marginTop: -20,
    zIndex: 2,
  },
});
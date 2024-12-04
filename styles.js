import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },

  item: {
    margin: 10,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
  },

  textInputContainer: {
    marginTop: 10
  },

  textInput: {
    backgroundColor: "#FFFFFF",
    height: 30,
    fontSize: 15,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalInner: {
    backgroundColor: "black",
    padding: 20,
    borderWidth: 5,
    borderColor: "lightsteelblue",
    borderRadius: 5,
    alignItems: "center",
  },

  modalText: {
    fontSize: 16,
    margin: 5,
    color: "white",
  },

  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "white",
  },
});

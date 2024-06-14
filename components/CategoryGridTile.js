import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: color },
            { borderRadius: 8 },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    // fontFamily: "myFont",
    fontSize: 18,
  },
});

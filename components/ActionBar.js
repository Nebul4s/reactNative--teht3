import { StyleSheet } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar } from "react-native-paper";

export default function ActionBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={styles.header}>
      {back && <Appbar.BackAction onPress={navigation.goBack} color="#fff" />}
      <Appbar.Content title={title} titleStyle={styles.txt} />
      {!back && (
        <Appbar.Action
          icon="arrow-right"
          color="#fff"
          style={styles.txt}
          onPress={() => navigation.navigate("second")}
        />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#555",
  },
  txt: {
    color: "#fff",
    fontWeight: "600",
  },
});

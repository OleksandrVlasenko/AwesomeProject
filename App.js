import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<PostsScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "teal",
		// alignItems: "center",
		justifyContent: "flex-end",
	},
});

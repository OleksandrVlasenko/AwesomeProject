import { Image, Pressable, StyleSheet, View } from "react-native";

import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function UserPhoto() {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<View style={styles.container}>
			<Image style={styles.image} />
			<Pressable
				style={styles.addPhotoBtn}
				onPress={() => setIsLoaded(!isLoaded)}
			>
				<AntDesign
					name={isLoaded ? "pluscircleo" : "closecircleo"}
					size={25}
					color={isLoaded ? "#FF6C00" : "#E8E8E8"}
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: -60,
	},
	image: {
		width: 120,
		height: 120,

		backgroundColor: "#F6F6F6",

		borderRadius: 16,
	},
	addPhotoBtn: {
		position: "absolute",
		bottom: 14,
		right: -12.5,

		backgroundColor: "#FFFFFF",

		borderRadius: 50,
	},
});

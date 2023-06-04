import { Image, Pressable, StyleSheet, View } from "react-native";

import AddUserPhoto from "../../Images/AddUserPhoto.png";
import RemoveUserPhoto from "../../Images/RemoveUserPhoto.png";
import { useState } from "react";

export default function UserPhoto() {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<View style={styles.container}>
			<Image style={styles.image} />
			<Pressable
				style={[styles.addPhotoBtn, isLoaded && { borderColor: "#E8E8E8" }]}
				onPress={() => setIsLoaded(!isLoaded)}
			>
				<Image source={!isLoaded ? AddUserPhoto : RemoveUserPhoto} />
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

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		width: 25,
		height: 25,

		backgroundColor: "#FFFFFF",

		borderWidth: 1,
		borderColor: "#FF6C00",
		borderRadius: 50,
	},
});

import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonChangeAuthorization({ title }) {
	const [onPress, setOnPress] = useState(false);
	return (
		<Pressable
			onPressIn={() => setOnPress(!onPress)}
			onPressOut={() => setOnPress(!onPress)}
		>
			<Text style={[styles.textChangeAuthorization, onPress && styles.onPress]}>
				{title}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	textChangeAuthorization: {
		fontFamily: "Roboto-Regular",

		fontSize: 16,
		color: "#1B4371",
	},
	onPress: {
		textDecorationColor: "#1B4371",
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
});

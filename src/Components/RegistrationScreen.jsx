import { useState } from "react";
import {
	Button,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function RegistrationScreen() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<View style={styles.container}>
        <Image style={styles.image} />
				<Text style={styles.title}>Реєстрація</Text>
				<View style={styles.inputsList}>
					<TextInput
						style={styles.input}
						placeholder="Логін"
						onChangeText={setLogin}
						value={login}
					/>
					<TextInput
						style={styles.input}
						placeholder="Адреса електронної пошти"
						onChangeText={setEmail}
						value={email}
					/>
					<TextInput
						style={styles.input}
						placeholder="Пароль"
						onChangeText={setPassword}
						value={password}
					/>
				</View>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Зареєстуватися</Text>
				</Pressable>

				<Pressable>
					<Text style={styles.textIsLogin}>Вже є акаунт? Увійти</Text>
				</Pressable>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
  container: {
    // position: "relative",

		display: "flex",
    alignItems: "center",
    
    paddingTop: 92,
    paddingBottom: 78,
		paddingLeft: 16,
    paddingRight: 16,
    
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
	},

  image: {
    position: "absolute",
    top: -60,

		width: 120,
		height: 120,

    backgroundColor: "#F6F6F6",
    
    borderRadius: 16,
	},

	title: {
		fontWeight: 500,
		color: "#212121",
		fontSize: 30,
		marginBottom: 32,
	},

	inputsList: {
		display: "flex",
		alignItems: "stretch",
		gap: 16,

		marginBottom: 43,

		width: "100%",
	},

	input: {
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#E8E8E8",

		padding: 16,

		backgroundColor: "#F6F6F6",
	},

	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		marginBottom: 16,

		width: "100%",
		height: 51,

		backgroundColor: "#FF6C00",

		borderRadius: 100,
	},

	buttonText: {
		fontSize: 16,
		color: "#FFFFFF",
	},

	textIsLogin: {
		fontSize: 16,
		color: "#1B4371",
	},
});

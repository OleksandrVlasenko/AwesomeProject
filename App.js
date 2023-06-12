import { StatusBar } from "expo-status-bar";
import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from "react-native";

// import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View>
				{/* <LoginScreen /> */}
				<RegistrationScreen />
				<PostsScreen />
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
}

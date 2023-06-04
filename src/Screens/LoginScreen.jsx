import { useState } from "react";

import AuthorizationForm from "../Components/Authorization/AuthorizationForm";
import Input from "../Components/Authorization/Input";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<AuthorizationForm
				title="Увійти"
				buttonTitle="Увійти"
				changeAuthorizationTitle="Немає акаунту? Зареєструватися"
			>
				<Input
					placeholder="Адреса електронної пошти"
					onChangeText={setEmail}
					value={email}
				/>
				<Input
					placeholder="Пароль"
					onChangeText={setPassword}
					value={password}
				/>
			</AuthorizationForm>
		</>
	);
}

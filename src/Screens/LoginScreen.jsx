import { useState } from "react";

import AuthorizationForm from "../Components/Authorization/AuthorizationForm";
import Input from "../Components/Authorization/Input";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		console.log({ email, password });
		resetForm();
	};

	const resetForm = () => {
		setEmail("");
		setPassword("");
	};
	return (
		<AuthorizationForm
			title="Увійти"
			buttonTitle="Увійти"
			changeAuthorizationTitle="Немає акаунту? Зареєструватися"
			onSubmit={onSubmit}
		>
			<Input
				placeholder="Адреса електронної пошти"
				onChangeText={setEmail}
				value={email}
			/>
			<Input placeholder="Пароль" onChangeText={setPassword} value={password} />
		</AuthorizationForm>
	);
}

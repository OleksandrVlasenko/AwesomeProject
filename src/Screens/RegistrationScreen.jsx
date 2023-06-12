import { useState } from "react";

import AuthorizationForm from "../Components/Authorization/AuthorizationForm";
import Input from "../Components/Authorization/Input";

export default function RegistrationScreen() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		console.log({ login, email, password });

		resetForm();
	};

	const resetForm = () => {
		setLogin("");
		setEmail("");
		setPassword("");
	};
	return (
		<AuthorizationForm
			title="Реєстрація"
			buttonTitle="Зареєстуватися"
			changeAuthorizationTitle="Вже є акаунт? Увійти"
			onSubmit={onSubmit}
		>
			<Input placeholder="Логін" onChangeText={setLogin} value={login} />
			<Input
				placeholder="Адреса електронної пошти"
				onChangeText={setEmail}
				value={email}
			/>
			<Input placeholder="Пароль" onChangeText={setPassword} value={password} />
		</AuthorizationForm>
	);
}

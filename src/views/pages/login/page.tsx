import type { Metadata } from "next";
import Image from "next/image";

import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
	title: "Login",
	description: "Authentication forms built using the components.",
};

export default function LoginPage() {
	return (
		<div className="lg:p-8">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<Image
						src={"/logo.png"}
						width={180}
						height={80}
						alt="Logo Henry Ricoboni"
						className="mx-auto"
					/>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}

import {
	EyeIcon,
	EyeSlashIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline";
import { forwardRef, useState } from "react";

import { cn } from "../../utils/cn";

type PasswordProps = "password" | "text";
export interface InputProps extends React.ComponentProps<"input"> {
	error?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
	({ className, error, ...props }, ref) => {
		const [isPwdVisible, setIsPwdVisible] = useState<PasswordProps>("password");

		return (
			<div className="relative flex flex-1 flex-col">
				<div className="relative">
					<input
						type={isPwdVisible}
						className={cn(
							"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-orange500 focus-visible:border-none",
							className,
						)}
						ref={ref}
						{...props}
					/>

					<button
						type="button"
						onClick={() =>
							setIsPwdVisible(isPwdVisible === "password" ? "text" : "password")
						}
						className={cn(
							"absolute right-[2px] top-0 p-1.5 cursor-pointer focus-visible:ring-orange500 focus-visible:ring-1 focus-visible:outline-none focus-visible:rounded-md focus-visible:border-none",
							props.disabled &&
								"disabled:opacity-50 disabled:pointer-events-none",
						)}
						disabled={props.disabled}
					>
						{isPwdVisible === "password" ? (
							<EyeIcon
								className={cn("size-6 text-zinc-900", error && "text-red-600")}
								strokeWidth={1}
							/>
						) : (
							<EyeSlashIcon
								className={cn("size-6 text-zinc-900", error && "text-red-600")}
								strokeWidth={1}
							/>
						)}
					</button>
				</div>

				{error && (
					<div className="mb-2 mt-2 flex items-center gap-1.5 text-red-600">
						<div>
							<XCircleIcon className="h-5" />
						</div>
						<span className="text-xs">{error}</span>
					</div>
				)}
			</div>
		);
	},
);

InputPassword.displayName = "InputPassword";

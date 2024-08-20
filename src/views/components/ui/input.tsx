import { XCircleIcon } from "@heroicons/react/24/outline";
import { forwardRef, type ComponentProps } from "react";

import { cn } from "../../utils/cn";

export interface InputProps extends ComponentProps<"input"> {
	error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error, ...props }, ref) => {
		return (
			<div className="relative flex flex-1 flex-col">
				<input
					type={type}
					className={cn(
						"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-orange500 focus-visible:border-none",
						className,
					)}
					ref={ref}
					{...props}
				/>

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
Input.displayName = "Input";

export { Input };

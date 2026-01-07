"use client";

import * as React from "react";
import { Palette } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Palette className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-48">
				<DropdownMenuLabel>Temas Claros</DropdownMenuLabel>
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("rose")}>Rose</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("stone")}>Stone</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("violet")}>
					Violet
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("yellow")}>
					Yellow
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("green")}>Green</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuLabel>Temas Escuros</DropdownMenuLabel>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("roseDark")}>
					Rose Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("stoneDark")}>
					Stone Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("violetDark")}>
					Violet Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("yellowDark")}>
					Yellow Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("greenDark")}>
					Green Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

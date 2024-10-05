"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the interface for the context type
interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

// Create the ThemeContext with default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState<string>("light"); // Set default theme as light

	// Function to handle manual theme switching
	const handleThemeChange = () => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setMode("dark");
			document.documentElement.classList.add("dark");
		} else {
			setMode("light");
			document.documentElement.classList.remove("dark");
		}
	};
	useEffect(() => {
		handleThemeChange();
	}, [mode]);
	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

// Hook to use the ThemeContext
export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

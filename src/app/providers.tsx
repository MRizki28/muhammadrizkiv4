import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='ligth' enableSystem>{children}</ThemeProvider>
}
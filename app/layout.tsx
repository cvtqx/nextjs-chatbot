import './index.css'

export const metadata = {
    title: 'YinYoga Bot',
    description: 'Get recommendations of yin yoga sequences based on the weather in your location'
}

const RootLayout = ({ children }) => {
    return (
        <html lang = 'en'>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
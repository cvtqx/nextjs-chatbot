import './index.css'

export const metadata = {
    title: 'ActivityBot',
    description: 'Get recommendations of activities based on the weather in your location'
}

const RootLayout = ({ children }) => {
    return (
        <html lang = 'en'>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
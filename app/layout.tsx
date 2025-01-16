import './index.css'

export const metadata = {
    title: 'YinYoga Bot',
    description: 'Get recommendations of yin yoga sequences based on the weather in your location'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en' data-theme="nord">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" type="image/x-icon"
                    href="/icon.ico" />
            </head>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
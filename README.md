## Yin Yoga Chatbot

A calm and soothing Yin Yoga chatbot built with Next.js and TypeScript. This chatbot helps you create a gentle Yin Yoga practice by suggesting poses based on your mood and current weather. Whether you're looking to unwind, relieve tension, or deepen your practice, this tool generates personalized lesson plans and yoga pose recommendations to suit your needs.

### Features

  **Yin Yoga Guidance**: Get personalized Yin Yoga sessions tailored to your needs.

  **Weather-based Recommendations**: The chatbot adjusts its recommendations based on the current weather conditions, helping you align your practice with nature’s rhythm.

  **Interactive Chat**: Type in your question or mood, and the chatbot will generate a calming lesson plan and pose suggestions.

### Tech Stack

**Next.js**: React framework for server-side rendering (SSR) and static site generation (SSG).
**TypeScript**: Superset of JavaScript for type safety and better developer experience.
**Tailwind CSS**: A utility-first CSS framework for rapid UI development.
**OpenAI**: Used to generate yoga pose suggestions based on user input and weather data.
**React Hooks**: Used to manage the state and handle user input.
**Weather API**: Fetches the current weather to tailor the suggestions.
**OpenCage Geocoding API**: Fetches the user location and reverses it to a city name.


### Installation

1. Clone the Repository
2. Install Dependencies
   `npm install`
3. Environment Variables

>OPENAI_API_KEY=your-openai-api-key  
>NEXT_PUBLIC_WEATHER_API_KEY=your-weather-api-key  
>NEXT_PUBLIC_OPENCAGEDATA_API_KEY=your-weather-api-key

4. Run the Development Server

   `npm run dev`
   
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Architecture Diagram
![Architecture Diagram](public/images/architectureDiagram.png)

Can also be veiwed via a code editor: [here](https://github.com/cvtqx/nextjs-chatbot/blob/main/architecture.excalidraw)

### Usage

  - Visit the homepage.
  - Type in your question or share how you're feeling.
  - The chatbot will create a personalized Yin Yoga lesson- plan and recommend poses based on the current weather.
  - Follow the suggestions and enjoy your practice!

### Acknowledgements
[Next.js](https://nextjs.org/) - React framework for SSR and SSG.
[Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
[DaisyUI](https://daisyui.com) - open-source component library for Tailwind CSS
[WeatherAPI](https://www.weatherapi.com)
[OpenAI](https://openai.com/)
[Geolocation API](https://opencagedata.com)
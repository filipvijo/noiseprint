# NosePrint

NosePrint is an interactive web application that helps users discover their unique scent profile and find their perfect fragrance match.

![scentprint](https://github.com/user-attachments/assets/69f651b3-b210-490c-98a3-16eb84b67d29)


## Features

- **Scent Preference Discovery**: Swipe through different scent ingredients to indicate your preferences
- **Personalized Scent Profile**: Get a visual representation of your scent preferences across different fragrance families
- **AI-Generated Descriptions**: Receive a personalized description of your scent personality
- **Tailored Recommendations**: Get perfume recommendations based on your preferences, gender choice, and price range
- **Fragrance Details**: View detailed information about recommended fragrances with links to purchase

## Technology Stack

- React.js
- Tailwind CSS
- Framer Motion for animations
- Chart.js for data visualization
- OpenAI API for personalized descriptions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/noseprint.git
cd noseprint
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the development server
```bash
npm start
# or
yarn start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Deployment

This application can be easily deployed using Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Future Enhancements

- More scent ingredients to choose from
- User accounts to save preferences
- Integration with more fragrance retailers
- Mobile app version



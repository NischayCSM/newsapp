# 📰 React News App

This is a simple yet powerful **News App** built using **React** and the [News API](https://newsapi.org). It allows users to access the latest headlines from around the world for free.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses **class-based components** throughout.

---

## 🚀 Getting Started

### Prerequisites
To run this app locally, you need:
- Node.js and npm installed
- A valid News API key from [NewsAPI.org](https://newsapi.org)

### Installation

```bash
git clone https://github.com/your-username/react-news-app.git
cd react-news-app
npm install
```
## Set up the API Key
Create a .env file in the root directory and add your News API key like this:

```code
REACT_APP_NEWS_API_KEY=your_api_key_here
```
Then start the app:
```powershell
npm run start
```
## About the App
This News App fetches the latest headlines across various categories and countries. You can easily customize the number of articles shown and the country you're fetching news from by adjusting props in App.js.

## Features
✅ Responsive Navigation Bar
✅ Category-based News browsing
✅ Clickable News Cards that open full articles
✅ Loading Spinner while data is being fetched
✅ Infinite Scroll
✅ Fully class-based components

## Customization
pageSize: Set the number of news articles per page in App.js
country: Change the country by setting the country prop (default is us)
Note: Some countries (like in for India) may not return results depending on your API plan or key restrictions.

## Technologies Used
React (Class Components)
JavaScript (ES6)
Bootstrap (for styling)
NewsAPI.org 

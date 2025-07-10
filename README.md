# SpaceX Dashboard

A modern, responsive React dashboard for exploring SpaceX launches, rockets, and mission data using the official SpaceX API.

## 🚀 Features

- **Launch Overview**: Browse all SpaceX launches with comprehensive details
- **Advanced Filtering**: Filter launches by status (Upcoming, Successful, Failed) and time range
- **Detailed Mission View**: Click on any launch to view detailed mission information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Data**: Fetches live data from the SpaceX API
- **Pagination**: Navigate through launches with easy-to-use pagination
- **Status Indicators**: Visual badges for launch status (Success, Upcoming, Failed)

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Modern icon library
- **SpaceX API v4** - Official SpaceX REST API

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.js          # Application header with SpaceX logo
│   ├── LaunchTable.js     # Main data table component
│   ├── LaunchModal.js     # Detailed launch information modal
│   ├── Pagination.js      # Pagination controls
│   ├── Dropdown.js        # Filter dropdown component
│   ├── StatusBadge.js     # Status indicator badges
│   └── Spinner.js         # Loading spinner component
├── hooks/
│   └── useDashboardData.js # Custom hook for data fetching
├── pages/
│   └── Dashboard.js       # Main dashboard page
├── utils/
│   ├── api.js            # API utility functions
│   └── format.js         # Date formatting utilities
└── assets/
    └── Logo.png          # SpaceX logo
```

## ⚡ Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spacex-dashboard.git
cd spacex-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App configuration

## 🔧 Features in Detail

### Launch Filtering
- **Status Filter**: Filter by All Launches, Upcoming, Successful, or Failed launches
- **Time Range Filter**: Filter by time periods (Past Week, Month, 3 Months, 6 Months, Year, 2 Years)

### Launch Table
- Serial number, launch date (UTC), location, mission name
- Orbit information, launch status, and rocket name
- Click any row to view detailed information

### Launch Modal
- Mission patch image and detailed launch information
- Rocket specifications and payload details
- Launch pad information and external links
- Links to YouTube videos, Wikipedia, and official articles

### Responsive Design
- Mobile-friendly interface
- Responsive table with horizontal scrolling on small screens
- Adaptive pagination controls

## 🌐 API Integration

The application integrates with the SpaceX API v4 to fetch:
- Launch data (`/launches`)
- Rocket information (`/rockets`)
- Launch pad details (`/launchpads`)
- Payload information (`/payloads`)

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Custom blue color scheme
- Responsive breakpoints
- Hover effects and transitions
- Modern card-based layouts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [SpaceX API](https://github.com/r-spacex/SpaceX-API) for providing the data
- [Create React App](https://github.com/facebook/create-react-app) for the project setup
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide React](https://lucide.dev/) for the icon library

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# NBA Spurs Broadcast - Next.js Project

A live Next.js application displaying NBA Spurs game broadcasts and schedules with a modular, component-based architecture.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.14.2 or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
broadcast/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout component
│   ├── page.js                   # Main page component
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── BroadcastRefactored.js    # Main broadcast component
│   ├── NextGame.js              # Featured game display
│   ├── NextGames.js             # Grid of upcoming games
│   ├── ProviderTable.js         # Provider table logic
│   ├── Card.js                  # Team card component
│   ├── Tabs.js                  # Region selection
│   ├── MyButton.js              # Reusable button
│   ├── HomeAwayBorder.js        # Home/Away indicator
│   └── index.js                 # Component exports
├── utils/                       # Utility functions
│   ├── constants.js             # Static data & URLs
│   ├── gameUtils.js             # Date/time formatting
│   ├── providerUtils.js         # Provider logic
│   └── ticketUtils.js           # Ticket & stream functions
├── styles/                      # CSS modules
│   └── broadcastRefactored.module.css
├── package.json                 # Dependencies & scripts
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## 🎯 Features

- **Live Game Data**: Fetches real-time NBA game schedules
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Regional Support**: Different broadcast providers for San Antonio, Austin, and other regions
- **Interactive Components**: Tabs, buttons, and dynamic content
- **Modern Architecture**: Built with Next.js 13+ App Router and React 18

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

The app uses Next.js 13+ with the App Router. Key configurations:

- **CSS Modules**: Enabled for component-scoped styling
- **Client Components**: Uses "use client" directive for interactive components
- **External Scripts**: NBA analytics and embed scripts included

## 📱 Responsive Behavior

- **Mobile (< 500px)**: 5 games displayed, smaller card sizes
- **Tablet (500-900px)**: 6 games displayed, medium card sizes  
- **Desktop (≥ 900px)**: 6 games displayed, larger card sizes

## 🎨 Styling

- Uses CSS Modules for component-scoped styles
- Responsive design with breakpoints
- Bootstrap-compatible classes available
- Custom styling in `broadcastRefactored.module.css`

## 🔌 API Integration

- Fetches data from NBA API endpoint
- Handles loading states and error cases
- Real-time game filtering and processing

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes.

## 🆘 Troubleshooting

### Common Issues

1. **Node.js Version**: Ensure you're using Node.js 18.14.2 or higher
2. **Port Conflicts**: If port 3000 is busy, Next.js will automatically use the next available port
3. **API Errors**: Check network connectivity and NBA API availability

### Getting Help

- Check the browser console for error messages
- Verify all dependencies are installed correctly
- Ensure the development server is running on the correct port 
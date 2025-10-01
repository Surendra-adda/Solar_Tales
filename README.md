# Solar Tales - Interactive Space Weather Story

An educational interactive storybook that teaches kids about space weather through the adventures of Sunny (the Sun), Flarey (a Solar Flare), Nani (a charged particle), and Astronaut Maya.

## 🌟 Features

- **Interactive Storytelling**: Seven sequential scenes with engaging characters
- **Educational Content**: NASA-backed facts about space weather phenomena
- **Interactive Quiz**: Five questions testing knowledge from the story
- **Data Visualization**: Chart.js integration showing space weather data
- **Responsive Design**: Works on all devices from mobile to desktop
- **Animated Background**: Beautiful starfield with aurora effects
- **Scoring System**: Badge rewards based on quiz performance

## 🚀 Live Demo

[View Live Demo](https://your-netlify-url.netlify.app)

## 📚 Educational Goals

This story teaches children about:
- Solar flares and their formation
- Earth's magnetosphere protection
- Aurora formation and causes
- Space weather effects on technology
- The importance of space weather monitoring

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Fonts**: Google Fonts (Poppins)
- **Hosting**: Netlify
- **Assets**: Custom SVG illustrations

## 📁 File Structure

```
/
├── index.html              # Main HTML file
├── style.css              # All CSS styles
├── app.js                 # Main application controller
├── scenes.js              # Story scene data
├── quiz.js                # Quiz questions and answers
├── data/
│   └── sample-data.json   # NASA space weather sample data
├── assets/
│   ├── icons/             # Character and object SVGs
│   │   ├── sun.svg
│   │   ├── flarey.svg
│   │   ├── earth.svg
│   │   └── iss.svg
│   ├── bg/                # Background assets
│   │   └── aurora-overlay.svg
│   └── images/            # Additional images
├── README.md              # This file
└── .gitignore
```

## 🎮 User Experience Flow

1. **Landing Page**: Welcome screen with "Start Journey" and "About" buttons
2. **Story Scenes**: Seven sequential scenes with next navigation
3. **Quiz**: Appears only after completing all scenes
4. **Scoreboard**: Shows final score and achievement badge
5. **Credits**: Lists resources and NASA references
6. **Data Explorer**: Modal with Chart.js visualization

## 📊 Data Sources

All educational content is based on official NASA resources:

- [NASA: Solar Storms and Flares](https://science.nasa.gov/sun/solar-storms-and-flares/)
- [NASA: Space Weather Focus Areas](https://science.nasa.gov/heliophysics/focus-areas/space-weather/)
- [NASA: Space Weather Centers of Excellence](https://science.nasa.gov/space-weather-centers-of-excellence/)
- [NASA Solar Dynamics Observatory](https://www.nasa.gov/image-feature/goddard/2023/nasa-captures-stunning-solar-images/)

## 🎨 Design Features

- **Color System**: Space-themed palette with cosmic purples, nebula pinks, and star gold
- **Typography**: Poppins font family with proper hierarchy
- **Spacing**: 8px-based spacing system for consistency
- **Animations**: Subtle hover effects, floating elements, and smooth transitions
- **Accessibility**: High contrast support, reduced motion options, keyboard navigation

## 🏗️ Development Setup

1. Clone the repository
2. Open `index.html` in a modern web browser
3. For development server:
   ```bash
   npm run dev
   ```

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences
- Screen reader compatible
- Focus indicators

## 🧪 Testing Checklist

- [x] Story navigation (7 scenes)
- [x] Quiz appears only after final scene
- [x] Answer selection disables other options
- [x] Score tracking accuracy
- [x] Responsive design (320px - 1440px)
- [x] NASA citations present
- [x] Chart.js data visualization
- [x] Keyboard accessibility
- [x] Mobile touch interactions

## 🚀 Deployment

### Netlify Deployment

1. Fork this repository
2. Connect to Netlify
3. Deploy from main branch
4. Site will be available at your Netlify URL

### Manual Deployment

1. Build the project (if using build tools)
2. Upload all files to your web server
3. Ensure proper MIME types for SVG files

## 📄 License

This project is created for educational purposes. NASA resources are in the public domain.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or suggestions about this educational project, please open an issue.

---

**Made with 🌟 for space weather education**
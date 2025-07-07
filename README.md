# ✅ Task Manager - React Native
A modern **Task Management app** built using **React Native CLI** with smooth animations and modular architecture.

---

## 🚀 Setup Instructions

### 📦 Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)
- React Native CLI (`npm install -g react-native-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development - Mac only)
- A code editor (e.g., VS Code)
- Android emulator or iOS simulator

---

## 🛠 Installation

```bash
git clone https://github.com/santhosh46v/wingsfly-task.git
cd wingsfly-task
npm install
# or
yarn install
```

### For iOS (Mac only):
```bash
cd ios && pod install && cd ..
```

## ▶️ Running the App

### Android:
```bash
npx react-native run-android
```

### iOS:
```bash
npx react-native run-ios
```

## 🧪 App Features

-  **Horizontal Date Picker**: Static date display (15-21) with selected date highlighting
-  **Today's Quote**: Quote section with progress bar display
-  **Task List**: Static task information display with icons, titles, times, and tags
-  **Floating Action Button**: Bottom-right positioned "+" button
-  **Bottom Drawer Modal**: Slide-up animation with 4 task creation options
-  **Smooth Animations**: React Native Animated API implementation
-  **Modular Architecture**: Clean, reusable component structure

## 📁 Folder Structure

```
task-manager-app/
├── android/                    # Android-specific files
├── ios/                       # iOS-specific files
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── BottomDrawer.jsx   # Bottom modal drawer component
│   │   ├── DatePicker.jsx     # Horizontal date picker
│   │   ├── FloatingButton.jsx # Floating action button
│   │   ├── QuoteCard.jsx      # Today's quote component
│   │   └── TaskList.jsx       # Task list component
│   ├── screens/               # Screen components
│   │   └── HomeScreen.jsx     # Main home screen
│   ├── assets/                # Static assets
│   │   ├── icons/             # App icons
│   │   └── images/            # Image assets
│   └── utils/                 # Utility functions
├── App.tsx                    # Main app component
├── index.jsx                  # Entry point
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎥 Demo Video

Watch the app in action:

👉 [View Demo](https://www.loom.com/share/dac465fd37b24fce8b83d8826393b771?sid=1a27a6c6-ae38-4149-a93f-2d79836e7ead)

## ✨ License

This project is open source and free to use.

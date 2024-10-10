## Overview
This is a simple mobile app built with React Native that fetches data from the JSONPlaceholder API and displays a list of users and their posts. The app includes infinite scrolling and error handling features.
## Features
- Fetch and display users from the JSONPlaceholder API.
- Navigate to a User Posts Screen to fetch posts for a selected user.
- Infinite scroll for both users and posts (loads 5 at a time).
- Graceful error handling with a message in case of an API failure (e.g., 500 internal server error).
- Loading indicators while data is being fetched.
- Simple and responsive design optimized for mobile devices.
## Installation & Setup
### Prerequisites
- Node.js (version >= 12)
- npm or Yarn
- React Native CLI
- Android Studio (for Android emulator) or a physical Android device
- Java Development Kit (JDK)
### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/JebinGJ/pemsAccessment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pemsAccessment
   ```
3. Install the dependencies:
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```
4. Run the project on an Android emulator or device:
   Using Yarn:
   ```bash
   yarn start
   ```
   Then, in the Metro Bundler terminal, press `a` to run the app on Android.
   Or using npx:
   ```bash
   npx react-native start
   ```
   In another terminal window, run:
   ```bash
   npx react-native run-android
   ```
## Usage
- **Browsing Users**: On launching the app, a list of users is displayed. Scroll down to load more users.
- **Viewing User Posts**: Tap on a user to navigate to the User Posts Screen, which displays posts by that user.
- **Infinite Scrolling**: Scroll down in the users or posts list to load more items.
- **Error Handling**: If an error occurs while fetching data, an error message will be displayed.
## Challenges Encountered
- **Infinite Scroll**: Implementing the infinite scroll logic required careful management of state to ensure that data loaded in chunks and did not overload the UI.

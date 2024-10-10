
 Overview: This is a simple mobile app built with React Native that fetches data from the JSONPlaceholder API and displays a list of users and their posts. The app includes infinite scrolling and error handling features.

Features:
 - Fetch and display users from JSONPlaceholder API.
 - Navigate to a User Posts Screen and fetch posts for a selected user.
 - Infinite scroll for both users and posts (loads 5 at a time).
 - Graceful error handling with a message in case of an API failure (e.g., 500      internal server error).
 - Loading indicators while data is being fetched.
 - Simple and responsive design.

Installation & Setup:

 clones the repository:
  git clone https://github.com/your-username/your-repository-name.git

Navigate to the project directory:
cd your-repository-name

Install the dependencies:
 npm install or npm i
 Yarn install or yarn 


Run the project on an Android emulator or device:
Yarn start
click a to run android
      (or)
npx react-native start
npx react-native run-android

Challenges Encountered:
Infinite Scroll: Implementing the infinite scroll logic required careful management of  state to ensure that data loaded in chunks and did not overload the UI.
// Your web app's Firebase configuration
// REPLACE THE BELOW WITH YOUR ACTUAL FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAI3_F-z3IiG1Odlv8nKk1jKQSxvONl-pg",
  authDomain: "tests-a9a99.firebaseapp.com",
  databaseURL: "https://tests-a9a99-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tests-a9a99",
  storageBucket: "tests-a9a99.firebasestorage.app",
  messagingSenderId: "93269607598",
  appId: "1:93269607598:web:1c1f871fb51d7c161f193f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Registration
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Registration successful!');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Handle Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login successful!');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Handle Logout
function logout() {
    auth.signOut().then(() => {
        alert('Logged out!');
        window.location.reload();
    });
}

// Auth State Observer
auth.onAuthStateChanged((user) => {
    const authStatus = document.getElementById('auth-status');
    if (authStatus) {
        if (user) {
            authStatus.innerHTML = `
                <span>Welcome, ${user.email}</span>
                <button onclick="logout()" style="color: white; background: #ff4444; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Logout</button>
            `;
        } else {
            authStatus.innerHTML = `
                <a href="login.html" style="color: white; text-decoration: none; background: #555; padding: 5px 15px; border-radius: 5px;">Login</a>
            `;
        }
    }
});

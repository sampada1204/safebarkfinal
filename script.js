const loginBtn = document.getElementById('login-btn');
const nextBtn = document.getElementById('next-btn');
const connectWatchBtn = document.getElementById('connect-watch-btn');
const backBtn = document.getElementById('back-btn');
const bacBtn = document.getElementById('bac-btn');
const instBtn = document.getElementById('inst-btn');



const loginScreen = document.getElementById('login-screen');
const fearLevelScreen = document.getElementById('fear-level-screen');
const familyMemberDetailsScreen = document.getElementById('family-member-details-screen');
const connectWatch = document.getElementById('connect-watch');
const safeb = document.getElementById('safe-bark');

const fearRatingInput = document.getElementById('fear-rating');
const fearRatingValueSpan = document.getElementById('fear-rating-value');

fearRatingInput.addEventListener('input', () => {
    fearRatingValueSpan.textContent = fearRatingInput.value;
});

loginBtn.addEventListener('click', () => {
    loginScreen.style.display = 'none';
    fearLevelScreen.style.display = 'block';
});

nextBtn.addEventListener('click', () => {
    fearLevelScreen.style.display = 'none';
    familyMemberDetailsScreen.style.display = 'block';
});

connectWatchBtn.addEventListener('click', () => {
    // Handle connecting to the smartwatch here
    familyMemberDetailsScreen.style.display = 'none';
    connectWatch.style.display = 'block';
    
});
backBtn.addEventListener('click', () => {
    // Handle connecting to the smartwatch here
    familyMemberDetailsScreen.style.display = 'block';
    connectWatch.style.display = 'none';
    
});
bacBtn.addEventListener('click', () => {
    // Handle connecting to the smartwatch here
    familyMemberDetailsScreen.style.display = 'block';
    safeb.style.display = 'none';
    
});

instBtn.addEventListener('click', () => {
    // Handle connecting to the smartwatch here
    familyMemberDetailsScreen.style.display = 'none';
    safeb.style.display = 'block';
    
});
function connectToWatch() {
    // Implement watch connection logic here
    alert('Connecting to watch...');
}

function enableCamera() {
    // Implement camera access logic here
    alert('Enabling camera...');
}

const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  if (username === '' || password === '') {
    alert('Please enter your username and password.');
  } 
  
});


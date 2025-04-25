 const userData = {
    "users": [
        {
            "id": 1,
            "name": "Anna Jhone",
            "email": "john@example.com",
            "location": "California",
            "photo": "./assets/profile2.jpg" 
        }
    ],
    "currentUser": {
        "id": 1, 
        "isLoggedIn": true
    }
};


function loadUserData() {
    const currentUserId = userData.currentUser.id;
    const userInfo = userData.users.find(user => user.id === currentUserId);
    
    if (userInfo && userData.currentUser.isLoggedIn) {
        document.getElementById('userPinImage').src = userInfo.photo;
        document.getElementById('userName').textContent = "You";
        
        document.getElementById('userDetailPhoto').src = userInfo.photo;
        document.getElementById('userDetailName').textContent = userInfo.name;
        document.getElementById('userDetailEmail').textContent = userInfo.email;
        document.getElementById('userDetailLocation').textContent = userInfo.location;
    }
}

document.getElementById('userMarker').addEventListener('click', function() {
    const userDetails = document.getElementById('userDetails');
    userDetails.classList.toggle('active');
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();

});




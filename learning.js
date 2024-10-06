// scripts.js

// Array of playlist objects
const playlists = [
    {
        title: "Time Space",
        url: "https://www.youtube.com/playlist?list=PLsPUh22kYmNDRYfImV3BzNZ6yTwhIpe0k"
    },
    {
        title: "Crash course Astronomy",
        url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL"
    },
    {
        title: "Nasa hubble telescope ",
        url: "https://www.youtube.com/playlist?list=PL2aBZuCeDwlQTMjNAeDU5wVqqm4KPECIT"
    },
    {
        title: "Nasa Documentries",
        url: "https://www.youtube.com/playlist?list=PL2aBZuCeDwlQAGW6uo18_FMl0eIhkeOOv"
    }
];

// Function to display playlists
function displayPlaylists() {
    const container = document.getElementById('playlist-container');
    
    playlists.forEach(playlist => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = playlist.url;
        a.target = "_blank"; // Open in new tab
        a.textContent = playlist.title;
        
        li.appendChild(a);
        container.appendChild(li);
    });
}

// Call the function to display playlists when the page loads
//window.onload = displayPlaylists;
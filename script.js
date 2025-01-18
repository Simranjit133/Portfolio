document.getElementById('reveal-fact').addEventListener('click', () => {  
    const fact = document.getElementById('fact');  
    if (fact.style.display === "none") {  
        fact.style.display = "block";  
        // Add 'show' class after changing display to block  
        setTimeout(() => fact.classList.add('show'), 10);  
    } else {  
        fact.classList.remove('show');  
        // Remove the fact after the animation finishes  
        setTimeout(() => fact.style.display = "none", 500);  
    }  
});
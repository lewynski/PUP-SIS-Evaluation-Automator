// Coded: Jon Lewyn Tanggaro
// Instruction: Applicable only for PC (Open Console - fn + f12 or directly f12) 
// In order to see the total percentage change 1 answer to another choices. 
let yourRating = 5; // Change this to 1, 2, 3, 4, or 5

(function(rating) {
    // 1. Find all radio buttons that match the chosen value
    let selector = input[type="radio"][value="${rating}"];
    let buttons = document.querySelectorAll(selector);
    
    if (buttons.length === 0) {
        console.error(No radio buttons found with value "${rating}".);
        return;
    }

    // 2. Click every button found
    buttons.forEach((btn) => {
        btn.checked = true;
    });

    console.log(Successfully checked ${buttons.length} questions with rating ${rating}.);

    // 3. Click the Submit button
    // Since 'btnsubmit' failed, we'll find it by its class and text
    setTimeout(() => {
        let submitBtn = document.querySelector('button.btn-success') || 
                        document.querySelector('button[type="submit"]') ||
                        Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Submit'));
        
        if (submitBtn) {
            console.log("Submit button found! Clicking...");
            submitBtn.click();
        } else {
            console.warn("Could not auto-click Submit. Please click the green button manually.");
        }
    }, 500);
})(yourRating);

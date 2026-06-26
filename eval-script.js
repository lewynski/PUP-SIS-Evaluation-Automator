// Coded: Jon Lewyn Tanggaro
// Instruction: Applicable only for PC (Open Console - fn + f12 or directly f12) 
// In order to see the total percentage change 1 answer to another choices. 
(function() {
    // ================= CONFIGURATION =================
    const DESIRED_RATING = 5;  // Change this to 5, 4, 3, 2, or 1
    const COMMENT_TEXT = "none";
    // =================================================

    console.log(`%c[PUP Eval Auto-Filler] Running automation for rating: ${DESIRED_RATING}...`, 'color: #800000; font-weight: bold;');

    // 1. Automate Radio Buttons
    const radios = Array.from(document.querySelectorAll('input[type="radio"]'));
    let clickCount = 0;

    if (radios.length > 0) {
        // Strategy A: Match by explicit value attribute (e.g., value="5")
        let targets = radios.filter(r => r.value == DESIRED_RATING);

        // Strategy B: Fallback if values are unique hashes/IDs instead of numbers
        if (targets.length === 0) {
            const groups = {};
            radios.forEach(r => {
                if (!groups[r.name]) groups[r.name] = [];
                groups[r.name].push(r);
            });

            Object.values(groups).forEach(group => {
                // If the UI lists choices as 5 down to 1: rating 5 is index 0
                // If the UI lists choices as 1 up to 5: rating 5 is index 4
                let targetIndex = (group[0].value == '5' || group[0].innerText?.includes('5')) ? (5 - DESIRED_RATING) : (DESIRED_RATING - 1);
                if (group[targetIndex]) {
                    targets.push(group[targetIndex]);
                }
            });
        }

        // Execute clicks and dispatch events to ensure the page registers the input
        targets.forEach(radio => {
            radio.checked = true;
            radio.dispatchEvent(new Event('click', { bubbles: true }));
            radio.dispatchEvent(new Event('change', { bubbles: true }));
            clickCount++;
        });
        console.log(`%c[Success] Filled ${clickCount} rating fields.`, 'color: green;');
    } else {
        console.log('%c[Error] No radio buttons found. Make sure you are on the actual rating page.', 'color: red;');
    }

    // 2. Automate Comment Box
    const textareas = document.querySelectorAll('textarea, input[type="text"]');
    let commentFilled = false;

    textareas.forEach(field => {
        const identifier = `${field.id} ${field.name} ${field.placeholder}`.toLowerCase();
        if (identifier.includes('comment') || identifier.includes('suggestion') || textareas.length === 1) {
            field.value = COMMENT_TEXT;
            field.dispatchEvent(new Event('input', { bubbles: true }));
            field.dispatchEvent(new Event('change', { bubbles: true }));
            commentFilled = true;
        }
    });

    if (commentFilled) {
        console.log('%c[Success] Comment box filled with "none".', 'color: green;');
    } else {
        console.log('%c[Notice] Could not identify comment box automatically. Please check manually.', 'color: orange;');
    }
})();

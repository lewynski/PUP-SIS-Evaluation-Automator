# PUP-SIS-Evaluation-Automator
Tired of clicking dozens of radio buttons for every evaluation? This lightweight JavaScript snippet automates the PUP SIS survey process. It intelligently identifies rating values (1-5) and handles the submission process for you.

* Disclaimer: For educational purposes only. Always review your answers before submitting.


## Quick Start
1. Grab the script by clicking [here](https://raw.githubusercontent.com/leitusxnm/PUP-SIS-Evaluation-Automator/refs/heads/main/eval-script.js) then press Ctrl+A to select everything and Ctrl+C to copy it to your clipboard.
2. Log in to the PUP SIS Portal and navigate to your survey.
3. Select a faculty member by clicking the "Evaluate Now" button next to their name.
4. Open your browser's developer tools by pressing F12, then click on the Console tab.
5. If prompted, type allow pasting and press Enter to enable the console.
6. Paste the script you copied in the previous step.
7. Find the line rating = 5 then change and replace  with your chosen score (1 to 5).
8. Press Enter to run the script and finalize your form.

Key Features:
1. Universal Selection: Works by value rather than static IDs to ensure compatibility across different survey sections.
2. Auto-Submit: Includes a fallback search to find and click the green Submit button automatically.
3. Error Handling: Designed to bypass missing questions without crashing the script.

   



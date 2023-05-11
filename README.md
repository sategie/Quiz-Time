# Quiz-Time

Quiz-Time is a quiz game with a list of 10 questions spanning different fields - sports, entertainment, science, history etc - which tests one's general knowledge skills. The questions appear at random after each round and the correct answer is provided to the user when a wrong answer is selected. The game is created for devices with a minimum screen width of 320px.

![Image of Quiz-Time app on different screen sizes and showing the different screens of the app](/documentation/quiz-time.png)

<!-- Add contents here -->

## Features

- **Landing Page**

    - The page that appears as soon as the URL loads is the 'Start Quiz' page.
    - As soon as the user clicks on 'Start Quiz', the first random question is displayed along with the choices and question number.

    ![Image of main page showing the 'Start Quiz' button](/documentation/start-quiz.png)

    ![Image showing the page which appears after the 'Start Quiz' button is clicked](/documentation/quiz-questions.png)

- **Alert Dialog Box**

    - When a user selects the correct choice, a dialog box appears showing 'Correct Answer!' with a green check mark and the 'Next Question' button is displayed
    - When a user selects the incorrect choice, a dialog box appears showing 'Wrong Answer!' with a red X sign. The correct answer displays in green below the alert and the 'Next Question' button is also displayed.
    - When the last question is reached, the alert dialog box displays the corresponding 'Correct Answer!' or 'Incorrect Answer!' message, but instead of showing 'Next Question, it displays 'Finish Quiz'.

    ![Image showing dialog box when the correct answer is selected](/documentation/alert-correct.png)

    ![Image showing dialog box when the incorrect answer is selected](/documentation/alert-wrong.png)

    ![Image showing the 'Finish Quiz' button when the last question is answered](/documentation/alert-finish.png)

- **Score and Replay page**

    - When the game ends, the user is presented with the total score.
    - The user also has the option to replay the game by clicking on the 'Play Again' button.

    ![Image showing the Score and Replay page when the game ends](/documentation/score-replay.png)

## Technologies Used

- HTML5

- CSS3

- Google Fonts: This was used to import the Open Sans and Roboto fonts used throughout the project.

- Gitpod/CodeAnywhere/Github: This was used for the actual coding of the project and also provided version control as well as remote storage for the project.

- Sweet Alerts - This was used to create pop up alerts with a message depending on whether the answer is correct or incorrect.

- Contrast Finder (app.contrast-finder.org): This was used to compare different color contrasts and find the suitable color combinations for the page.

- Color Contrast Checker (coolors.co): This was also used to compare color contrasts to see how different text colors fit in with different background colors.

- Screenpresso - This was used to take screenshots/GIFs of the project's functionalities.

- Tables Generator: This was used to generate the table used in the Testing section.

- Beautifier: Used to remove extra unnecessary spaces and improve the indentation in the code.

- AM I Responsive: This was used to show the project's responsiveness on various screen sizes.

## Testing

- **Validators**

    - HTML
        - No errors were found using the official W3C validator.

    - CSS
        - No errors were found using the W3C CSS (jigsaw) validator.

    - Javascript
        - No errors were found in the Javascript using JSHint.

    - ![Screenshot of HTML validator showing no errors in HTML](/documentation/testing/html-validator.png)

    - ![Screenshot of CSS validator showing no erros in CSS](/documentation/testing/css-validator.png)

    - ![Screenshot of Javascript validator showing no erros in Javascript code](/documentation/testing/javascript-validator.png)

    The link to the full CSS validation results can be found here:

    http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fsategie.github.io%2FQuiz-Time%2F&usermedium=all&vextwarning=&warning=1

- **Browser Compatibility**

 - The project was tested on the browsers listed below. The project worked as expected on all three browsers without any significant differences noticed.

    - Google Chrome Version 112.0.5615.138 (Official Build) (64-Bit)

    - Microsoft Edge Version 113.0.1774.35 (Official build) (64-bit)

    - Firefox Version 113.0 (64-Bit)

- **Lighthouse**

    - Lighthouse was used to test the project based on the following criteria: Performance, Accessibility, Best Practices and SEO. Google Chrome (Incognito Mode) was used.

    ![Screenshot of Lighthouse testing results using Google Chrome Incognito Mode](/documentation/testing/lighthouse-testing.png)

- Testing Outcomes

\begin{table}[]
\begin{tabular}{llll}
Test                                                                                     & Test Action                          & Expected Outcome                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              & Result \\
\begin{tabular}[c]{@{}l@{}}Start Quiz Button:\\ Hover\end{tabular}                       & Hover on 'Start Quiz' button         & \begin{tabular}[c]{@{}l@{}}A shadow appears around the borders.\\ Button moves slightly up.\\ Background colour changes to green.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                                                & PASS   \\
\begin{tabular}[c]{@{}l@{}}Start Quiz Button:\\ Click\end{tabular}                       & Click on 'Start Quiz' button         & \begin{tabular}[c]{@{}l@{}}The game starts.\\ The first random question and corresponding choices appear.\\ The question number is displayed.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                                    & PASS   \\
\begin{tabular}[c]{@{}l@{}}Choice Buttons:\\ Hover\end{tabular}                          & Hover on the choice buttons          & \begin{tabular}[c]{@{}l@{}}A shadow appears around the borders.\\ Button moves slightly up.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                                                                                      & PASS   \\
\begin{tabular}[c]{@{}l@{}}Choice Buttons:\\ Click\end{tabular}                          & Click on a choice button             & \begin{tabular}[c]{@{}l@{}}Dotted lines appear around the border.\\ A dialog box appears alerting the user whether or not the answer is correct.\\ If the correct answer is chosen, a green checkmark with 'Correct Answer!' appears.\\ If the wrong answer is chosen, a red X mark appears with 'Wrong Answer!' and the correct answer is displayed in green.\\ The 'Next Question' button is displayed whether or not the correct answer is chosen.\\ On the last question, the 'Finish Quiz' button is displayed instead of  'Next Question'.\end{tabular} & PASS   \\
\begin{tabular}[c]{@{}l@{}}Dialog Box Alert Button:\\ Hover\end{tabular}                 & Hover on the dialog box alert button & A shadow appears around the borders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           & PASS   \\
\begin{tabular}[c]{@{}l@{}}Dialog Box Alert Button (Next Question):\\ Click\end{tabular} & Click on the 'Next Question' button  & \begin{tabular}[c]{@{}l@{}}The next question appears.\\ If any other area in the app is clicked on while the dialog box appears, nothing happens.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                                & PASS   \\
\begin{tabular}[c]{@{}l@{}}Dialog Box Alert Button (Finish Quiz):\\ Click\end{tabular}   & Click on the 'Finish Quiz' button    & \begin{tabular}[c]{@{}l@{}}The game ends and a page appears showing the total score and a 'Play Again' button.\\ If any other area in the app is clicked on while the dialog box appears, nothing happens.\end{tabular}                                                                                                                                                                                                                                                                                                                                       & PASS   \\
\begin{tabular}[c]{@{}l@{}}'Play Again' Button:\\ Hover\end{tabular}                     & Hover on the 'Play Again' button     & \begin{tabular}[c]{@{}l@{}}Button moves slightly up.\\ Background colour changes to green.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                                                                                       & PASS   \\
\begin{tabular}[c]{@{}l@{}}'Play Again' Button:\\ Click\end{tabular}                     & Click on the 'Play Again' button     & \begin{tabular}[c]{@{}l@{}}The game starts again.\\ The first random question and corresponding choices appear.\\ The question number is displayed.\end{tabular}                                                                                                                                                                                                                                                                                                                                                                                              & PASS  
\end{tabular}
\end{table}



















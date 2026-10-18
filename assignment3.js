//   javascript
// Assignment 3: Conditional Logic Implementation

// Step 1: Store the student's score
const score = 85;

// Step 2: Validate the score using if...else
if (!Number.isFinite(score) || score < 0 || score > 100) {
    console.log("Invalid score. Enter a number from 0 to 100.");
} else {

    // Step 3: Determine the grade category
    let gradeCategory;

    if (score >= 90) {
        gradeCategory = "A";
    } else if (score >= 80) {
        gradeCategory = "B";
    } else if (score >= 70) {
        gradeCategory = "C";
    } else if (score >= 60) {
        gradeCategory = "D";
    } else {
        gradeCategory = "F";
    }

    // Step 4: Use switch to determine the letter grade
    let grade;

    switch (gradeCategory) {
        case "A":
            grade = "A";
            break;

        case "B":
            grade = "B";
            break;

        case "C":
            grade = "C";
            break;

        case "D":
            grade = "D";
            break;

        case "F":
            grade = "F";
            break;

        default:
            grade = "Invalid";
    }

    // Step 5: Use the ternary operator
    const status = score >= 40 ? "Passed" : "Failed";

    // Step 6: Display the result
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
}

                  
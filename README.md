# Lime-Home

QA Tasks
# run
to run tests in headless mode
```
npm run cypress:open

```
to run tests in headed mode
```
npm run cypress:run 
```
Test Cases:

1\. Test Case: Validate Navigation and Calculator

`   `- Description: Verify that the user is able to navigate to the calculator app and the calculator component is displayed correctly.

`   `- Test Data: N/A

`   `- Expected Result:

`     `- The URL should be "http://juliemr.github.io/protractor-demo/"

`     `- The title of the page should be "Super Calculator"

`     `- The heading (h3) should be visible and display the text "Super Calculator"

`   `- Notes: This test case ensures that the initial page navigation and basic UI elements are functioning properly.

2\. Test Case: Validate All Components

`   `- Description: Verify that all components of the calculator are present and displayed correctly.

`   `- Test Data: N/A

`   `- Expected Result:

`     `- The heading (h3) should be visible and display the text "Super Calculator"

`     `- There should be two input fields within a form

`     `- There should be one select element within the form

`     `- There should be a "Go!" button within the form

`     `- The initial count should be zero (h2 element)

`     `- The history section (h4 and table) should be visible

`     `- The table headers should display "Time", "Expression", and "Result"

`   `- Notes: This test case ensures that all necessary components are present and properly rendered.

3-7. Test Case: Positive Numbers with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly performs calculations with positive numbers and the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 3, 60

`     `- Number 2: 5, 700

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers basic calculations with positive numbers.

8-12. Test Case: Negative Numbers with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly performs calculations with negative numbers and the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: -30000, -999

`     `- Number 2: -400000, -444

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers basic calculations with negative numbers.

13-17. Test Case: Positive and Negative Numbers with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly performs calculations with a positive and a negative number using the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 400000, -500

`     `- Number 2: -3, 3

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers calculations involving both positive and negative numbers.

18-22. Test Case: Number and Zero with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly handles calculations involving a number and zero using the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 2, 0

`     `- Number 2: 0, 888

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers calculations involving zero as one of the operands.

23-27. Test Case: Zero and Number with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly handles calculations involving zero and a number using the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 0, 999

`     `- Number 2: 899, 0

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers calculations involving zero as one of the operands.

28-32. Test Case: Integer and Decimal with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly handles calculations involving an integer and a decimal number using the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 799, 0.08

`     `- Number 2: 0.0003, 599

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers calculations involving a combination of integers and decimal numbers.

33-37. Test Case: Two Decimals with Operator (+, -, \*, /, %)

`   `- Description: Verify that the calculator correctly handles calculations involving two decimal numbers using the specified operator.

`   `- Test Data:

`     `- Operator: "+", "-", "\*", "/", "%"

`     `- Number 1: 0.4

`     `- Number 2: 0.009

`   `- Expected Result:

`     `- The calculated result should be displayed correctly in the form field.

`   `- Notes: This test case covers calculations involving two decimal numbers.

38-42. Test Case: Empty Characters with Operator (+, -, \*, /, %)

`    `- Description: Verify that the calculator handles empty characters as input and displays an appropriate result.

`    `- Test Data:

`      `- Operator: "+", "-", "\*", "/", "%"

`      `- Number 1: " "

`      `- Number 2: " "

`    `- Expected Result:

`      `- The calculated result should be displayed correctly in the form field.

`    `- Notes: This test case covers scenarios where the input is empty characters.

43-47. Test Case: Two Strings with Operator (+, -, \*, /, %)

`    `- Description: Verify that the calculator handles string inputs and displays an appropriate result.

`    `- Test Data:

`      `- Operator: "+", "-", "\*", "/", "%"

`      `- Number 1: "test"

`      `- Number 2: "test1"

`    `- Expected Result:

`      `- The calculated result should be displayed correctly in the form field.

`    `- Notes: This test case covers scenarios where the input is strings.

48-52. Test Case: A String and a Number with Operator (+, -, \*, /, %)

`    `- Description: Verify that the calculator handles a combination of a string and a number as input and displays an appropriate result.

`    `- Test Data:

`      `- Operator: "+", "-", "\*", "/", "%"

`      `- Number 1: "test2", 776

`      `- Number 2: 999, "test3"

`    `- Expected Result:

`      `- The calculated result should be displayed correctly in the form field.

`    `- Notes: This test case covers scenarios where one operand is a string and the other is a number.

53\. Test Case: Verify History Additions in Table

`    `- Description: Verify that the calculator history is correctly updated and displayed in the table.

`    `- Test Data: Random numbers for input1 and input2, and all available operators (+, -, \*, /, %)

`    `- Expected Result:

`      `- The calculated result should be displayed correctly in the form field.

`      `- The history table should be updated with the latest calculation, showing the correct time, expression, and result.

`    `- Notes: This test case covers the functionality of recording and displaying calculation history.

Test Report:

Test Cases Exec

uted:

\- Validate Navigation and Calculator

\- Validate All Components

\- Positive Numbers with Operator (+, -, \*, /, %)

\- Negative Numbers with Operator (+, -, \*, /, %)

\- Positive and Negative Numbers with Operator (+, -, \*, /, %)

\- Number and Zero with Operator (+, -, \*, /, %)

\- Zero and Number with Operator (+, -, \*, /, %)

\- Integer and Decimal with Operator (+, -, \*, /, %) - Failed ( in all 5 test cases for all operators)

\- Two Decimals with Operator (+, -, \*, /, %) - Failed ( in all 5 test cases for all operators)

\- Empty Characters with Operator (+, -, \*, /, %)

\- Two Strings with Operator (+, -, \*, /, %)

\- A String and a Number with Operator (+, -, \*, /, %)

\- Verify History Additions in Table

Test Results:

\- 53 test cases were executed out of which 10 test cases failed and 43 were successfull. 10 failed testcases included decimals in the test cases


Test Cases( Lime Api):

1\. Test Case: 

`   `- Description: verify that the API endpoint returns a 200 OK response status code 

`   `- Test Data: N/A

`   `- Expected Result:

`     `- the reponse should be 200 ok


2\. Test Case: 

`   `- Description: verify that the API endpoint returns the expected response body

`   `- Test Data:  
{
  "success": true,
  "message": "Successfully fetched property.",
  "payload": {
    "id": 129,
    "name": "aachen vereinsstraße",
    "city": "aachen",
    "city_id": 27,
    "street": "vereinsstraße",
    "location": {
      "lat": 50.7697713,
      "lng": 6.0931558,
      "city": "Aachen",
      "postalCode": "52062",
      "countryCode": "DE",
      "addressLine1": "Vereinsstraße 2",
      "countryName": "Germany"
    },
    "description": "In the middle of Aachen's city center you will find our limehome Aachen Vereinsstraße in a quiet side street. Due to the convenient location, you will find the perfect place to escape the hustle and bustle of the city center and start the day relaxed. The connection with public transport could not be better, as the main train station is only 270 m away.",
    "parking": "Unfortunately, there are no private parking spaces available in our limehome. However, with a little luck you will find a paid parking space in the surrounding streets. If you are looking for a covered parking space, you can also park your car in the nearest APAG parking garage Hauptbahnhof, which is only 400 meters away on foot.",
    "things_to_know": "Please note: in order to receive your personal access code, you have to complete our online check-in. You will receive the link and detailed instructions by email after your booking.",
    "house_rules": "Short and simple: no smoking, no parties or events and no pets. Quiet hours 10 p.m. - 7 a.m."
  }
}


`   `- Expected Result: The values of message, id, location, description, parking, things_to_know, house_rules in test data and response should be equal.

Test Report:

Test Cases Executed:

\- verify that the API endpoint returns a 200 OK response status code 

\- verify that the API endpoint returns the expected response body

Test Results:

\- 2 test were executed and all of them passed successfully

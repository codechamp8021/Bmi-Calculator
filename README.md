<<<<<<< HEAD
=======

>>>>>>> 11aa56511071120569561078114426e5c154bc63
# BMI Calculator

A simple BMI (Body Mass Index) Calculator built with React that calculates your BMI based on your weight and height inputs. The app categorizes your BMI and provides humorous feedback based on your health status.

## Features

- Accepts **weight** (in pounds) and **height** (in inches) as input.
- Calculates BMI using the formula:
  ```
  BMI = (weight / (height * height)) * 703
  ```
- Displays BMI value and categorizes it as:
  - Underweight
  - Normal
  - Overweight
  - Obesity
- Provides user-friendly and humorous feedback.
- Includes error handling for invalid inputs (e.g., non-positive numbers).
- Allows users to reset the inputs and start over.

## Technologies Used

- **React**: For building the UI and managing state.
- **CSS**: For styling the application.

## Installation

Follow these steps to run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/codechamp8021/bmi-calculator.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd bmi-calculator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to use the app.

## Usage

1. Enter your **weight** (in pounds) and **height** (in inches) in the input fields.
2. Click on the **Submit** button to calculate your BMI.
3. View your BMI result and the corresponding feedback message.
4. Use the **Reload** button to reset the inputs and perform another calculation.

## Project Structure

```
.
├── public
├── src
│   ├── App.css          # Styling for the app
│   ├── App.js           # Main component with BMI calculation logic
│   ├── index.js         # Entry point of the application
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
```

## Future Enhancements

- Add metric units (kilograms and meters) support.
- Improve UI/UX with better styling and animations.
- Save user history of BMI calculations.
- Add a dark mode toggle.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as per the license terms.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## Acknowledgments

- Formula reference: [BMI Calculation](https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html)
- Built with ❤️ using React.

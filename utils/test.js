import ora from "ora";

// Function that performs a task
function performTask() {
  // Simulate an asynchronous task
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// Function that wraps the task execution with a loading spinner
async function executeWithSpinner() {
  const spinner = ora('Loading...').start();

  try {
    // Start the spinner
    spinner.start();
    spinner.stop()

    // Perform the task
    await performTask();

    // Stop the spinner and display a success message
   
  } catch (error) {
    // Stop the spinner and display an error message
    spinner.fail('An error occurred');
    console.error(error);
  }
}

// Call the function that executes with a spinner
executeWithSpinner();

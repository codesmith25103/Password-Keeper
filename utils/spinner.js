export default function performTask() {
    // Simulate an asynchronous task
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
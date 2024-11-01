window.onerror = function (){
    localStorage.setItem('hasError', 'true');

    window.location.href = "errorhandler.html";
    return true;
}

function checkForErrorsOnLoad() {
    // Check if there was an error previously
    const hasError = localStorage.getItem('hasError');
  
    if (hasError === 'true') {
      // If an error was recorded, go to the error page
      window.location.href = "errorhandler.html"; // Change to the actual path of your error page
    } else {
      // If no error is recorded, stay on the main page
      window.location.href = "index.html";
      console.log("No error detected. Loading main page.");
    }
  }
  
  // Clear error state if the page loads without issues
  window.addEventListener('load', function() {
    // If the page loads without triggering window.onerror, clear the error flag
    localStorage.removeItem('error');
  });

  window.onload = function(){
    checkForErrorsOnLoad();
  }
  
  // Call the error-check function on page load

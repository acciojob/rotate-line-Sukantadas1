//your JS code here. If required.
  // Get the line element
  const line = document.getElementById('line');

  // Initial rotation angle
  let angle = 0;

  // Function to update the rotation angle every 20 milliseconds
  function rotateLine() {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
  }

  // Start the rotation
  rotateLine();

    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all grid items to transparent first
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }

      // Change background color of specified block
      const targetBlock = document.getElementById(blockId);
      if (targetBlock) {
        targetBlock.style.backgroundColor = color;
      } else {
        alert("Invalid block ID. Please enter a number between 1 and 9.");
      }
    });

    resetButton.addEventListener("click", () => {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }
    });
  
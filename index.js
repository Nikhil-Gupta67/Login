
      const togglePassword = document.getElementById("togglePassword");
      const passwordInput = document.getElementById("password");

      togglePassword.addEventListener("click", function () {
        const pupils = document.querySelectorAll(".pupil");
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;

        // Change icon depending on state
        this.textContent = type === "password" ? "👁️" : "🙈";

        if (type === "text") {
          // Pupils look away when password is shown
          pupils.forEach((pupil) => {
            pupil.style.transform = "translate(8px, 0px)";
          });
        } else {
          // Reset pupils to follow mouse again
          pupils.forEach((pupil) => {
            pupil.style.transform = "translate(0px, 0px)";
          });
        }
      });

      // Mouse tracking for pupils
      document.addEventListener("mousemove", function (e) {
        if (passwordInput.type === "password") {
          // Only track when password is hidden
          document.querySelectorAll(".pupil").forEach((pupil) => {
            let rect = pupil.getBoundingClientRect();
            let x = e.clientX - rect.left - rect.width / 2;
            let y = e.clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(y, x);
            let moveX = Math.cos(angle) * 5;
            let moveY = Math.sin(angle) * 5;

            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
        }
      });

document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll('.icon');
  const questions = document.querySelectorAll('.each_question');
  const contents = document.querySelectorAll('.content');

  // Function to toggle content visibility
  function toggleContent(index) {
      contents.forEach((content, i) => {
          if (i !== index) {
              content.classList.remove("show");
              const closeIcon = icons[i].querySelector('.close');
              const openIcon = icons[i].querySelector('.open');
              openIcon.classList.remove("hidden");
              closeIcon.classList.remove("show");
          }
      });

      // Toggle the "show" class on the clicked content element
      contents[index].classList.toggle("show");
      const openIcon = icons[index].querySelector('.open');
      const closeIcon = icons[index].querySelector('.close');
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("show");
  }

  // Attach event listeners to icons
  icons.forEach((icon, index) => {
      icon.addEventListener("click", () => {
          toggleContent(index);
      });
  });

  // Attach event listeners to questions
  questions.forEach((question, index) => {
      question.addEventListener("click", () => {
          toggleContent(index);
      });
  });
});

  
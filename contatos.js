document.addEventListener("DOMContentLoaded", () => {
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");
  
    phoneElement.addEventListener("mouseover", () => {
      phoneElement.style.color = "#0056b3";
      phoneElement.style.transition = "color 0.3s ease";
    });
  
    phoneElement.addEventListener("mouseout", () => {
      phoneElement.style.color = "#007bff";
    });
  
    emailElement.addEventListener("mouseover", () => {
      emailElement.style.color = "#0056b3";
      emailElement.style.transition = "color 0.3s ease";
    });
  
    emailElement.addEventListener("mouseout", () => {
      emailElement.style.color = "#007bff";
    });
  });
  
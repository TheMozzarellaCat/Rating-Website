document.addEventListener('DOMContentLoaded', function() {
    const ratingContainer = document.querySelector('#ratingContainer');
    const thanksContainer = document.querySelector('#thanksContainer');
    const submitBtn = document.querySelector('#submitBtn');
    const usersRating = document.querySelector('.users-rating');
  
    thanksContainer.style.display = 'none';
  
    ratingContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('choice')) {
        const rating = event.target.textContent;
        const activeButton = document.querySelector('.rating-buttons .choice.active');
        if (activeButton) {
          activeButton.classList.remove('active');
        }
        event.target.classList.add('active');
      }
    });
  

    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const activeButton = document.querySelector('.rating-buttons .choice.active');
      if (activeButton) {
        const rating = activeButton.textContent;
        ratingContainer.style.display = 'none';
        thanksContainer.style.display = 'flex';
        const ratingBg = document.getElementById("rating-bg")
        ratingBg.classList.add("active-bg")
        usersRating.innerHTML = `You selected ${rating} out of 5`;
      }
    });
  });
  
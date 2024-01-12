document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.checkbox');
    const winElements = document.querySelectorAll('.true');
  
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            winElements.forEach(function(element) {
                element.classList.add('yellow-background');
            });
        } else {
            winElements.forEach(function(element) {
                element.classList.remove('yellow-background');
            });
        }
    });
  });
  console.log("hello krok project");
  
    const searchInput = document.getElementById('searchInput');
    const resultList = document.getElementById('question');
    const listItems = resultList.getElementsByTagName('li');
  
    searchInput.addEventListener('input', function() {
      
      const searchTerm = searchInput.value.toLowerCase();
        for (let i = 0; i < listItems.length; i++) {
        const listItemText = listItems[i].textContent.toLowerCase();
        if (listItemText.includes(searchTerm)) {
          listItems[i].style.display = 'block';
        } else {
          listItems[i].style.display = 'none';
        }
      }
    });
  
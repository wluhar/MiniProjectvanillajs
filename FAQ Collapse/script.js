const toggleButton = document.querySelectorAll('.faq-toggle');

toggleButton.forEach((toggle)=>{
    toggle.addEventListener('click',()=>{
      toggle.parentNode.classList.toggle('active');
      
    })
})



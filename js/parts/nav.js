function nav() {
  // Nav Links
  let links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const id = link.dataset.id;
      const elmnt = document.getElementById(id);
      console.log(id, elmnt)
      elmnt.scrollIntoView({
        block: 'center',
      });
    })
  })

}

module.exports = nav;

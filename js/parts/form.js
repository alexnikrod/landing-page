function form() {
  // Form + JSON

  let message = {
    loading: "Loading...",
    success: "Thank you! We will soon call you back!",
    failure: "Something went wrong..."
  };

  let form = document.getElementsByClassName("main-form")[0],
    contact = document.getElementById("contact-form"),
    input = document.getElementsByTagName("input"),
    statusMessage = document.createElement("div");
  statusMessage.classList.add("status");

  function sendForm(elem) {
    elem.addEventListener("submit", function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);

      let formData = new FormData(elem);
      // Promise --->
      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open("POST", "server.php");
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(data);
        });
      } // End postData

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }

      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.success))
        .catch(() => (statusMessage.innerHTML = message.failure))
        .then(clearInput);
    });
  }

  sendForm(form);
  sendForm(contact);
}

module.exports = form;

function subscribe() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert("Thank you, for subscribing" + " " + name + "!");
}

let subscribeButton = document.querySelector("button");
subscribeButton.addEventListener("click", subscribe);

function submit() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you," +
      "  " +
      name +
      "  " +
      ". We will be in touch about your article being featured in the zine."
  );
}

let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", submit);

document.addEventListener('DOMContentLoaded', function() {
  var generator = document.getElementById('generator');
  generator.addEventListener('click', function() {

    var random = Math.floor((Math.random() * 6) + 1);
    var random1 = Math.floor((Math.random() * 2) + 1);
    var random2 = Math.floor((Math.random() * 3) + 1);

    var subject = ["My mom", "My cat", "A dog", "My sister", "My brother", "A bird", "A stray animal", "A baby"];

    var verb = ["vomitted on", "pooped on", "peed on"];

    var object = ["my computer", "my homework", "my phone", "my head"];

    document.write(subject[random] + "  " + verb[random1] + " " + object[random2]);

  }, false);
}, true);

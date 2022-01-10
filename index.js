console.log("Project on CV Screener");

// Array of objects

const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Anaconda",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Hrushi Jagtap",
    age: 20,
    city: "Mumbai",
    language: "Python",
    framework: "Gjango",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Natasha Malvankar",
    age: 22,
    city: "Beglooru",
    language: "JavaScript",
    framework: "reactJs",
    image: "https://randomuser.me/api/portraits/women/98.jpg",
  },
  {
    name: "Suyog Gawkar",
    age: 24,
    city: "Gujrat",
    language: "HTML",
    framework: "Emmet",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Surekha Inamdar",
    age: 30,
    city: "Rajastan",
    language: "CSS",
    framework: "Bootstrap",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
];

//CV Iterators

function cvIterators(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterators(data);

nextCv();

// Button listner for next button

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextCv);

function nextCv() {
  const currentCandidate = candidates.next().value;

  let image = document.getElementById("img");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}' >`;
    profile.innerHTML = `<ul class="list-group">
                         <li class="list-group-item"><b>Name : </b> ${currentCandidate.name}</li>
                         <li class="list-group-item"><b>Age : </b>  ${currentCandidate.age} years old</li>
                         <li class="list-group-item"><b>Lives in : </b>  ${currentCandidate.city}</li>
                         <li class="list-group-item"><b>Primarily works on : </b> ${currentCandidate.language}</li>
                         <li class="list-group-item"><b>With : </b> ${currentCandidate.framework} framework</li>
  
</ul>`;
  } else {
    alert("End of applications");
    window.location.reload();
  }
}

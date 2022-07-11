const form = document.getElementById("quiz-form")
const answer = Array.from(document.querySelectorAll(".answer"))
const questions = document.querySelectorAll(".question-item")
const alert = document.getElementById("alert")


form.addEventListener("submit", e => {

  e.preventDefault()

  questions.forEach(questionItem => {
    questionItem.classList.remove("correct")
    questionItem.classList.add("incorrect")
  })

  const filtered = answer.filter(answer => answer.checked)

  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i].value == "true") {
      console.log("true")
      let j = 3

      questions[i].classList.remove("incorrect")
      questions[i].classList.add("correct")
      console.log(j)
      if (j == questions.length) {
        alert.classList.add("active")

        setTimeout(() => {
          alert.classList.remove("active")
        }, 1000)
      }
    } else {
      console.log("false")
    }
  }
  setTimeout(() => {
    window.location.reload()
  }, 6000)
})
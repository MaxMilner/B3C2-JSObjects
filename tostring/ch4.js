// https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-initiate/chapters/JS_OBJECT_CREATE.md

const me = Object.create(null, {
  firstName: {
    value: "Max"
  },
  lastName: {
    value: "Milner"
  },
  birthdate: {
    value: "9/18/92"
  },
  birthplace: {
    value: "Illinois"
  },
  currentCity: {
    value: "Nashville",
    writable: true
  },
  currentState: {
    value: "Tennessee",
    writable: true
  },
  toString: {
    value: function () {
      return `
      ${me.firstName} ${me.lastName} was born in ${me.birthplace} on ${me.birthdate}. He currently lives in ${me.currentCity}, ${me.currentState}.`
    }
  }
})

console.log(me.toString())
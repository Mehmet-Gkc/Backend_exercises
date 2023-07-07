export function sanitizeName(req,res,next) {
    console.log("We are validating the object we received")
    const {firstName, lastName} = req.body

    req.body.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    req.body.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

    next()
}

export function stringsToNumber(req,res,next) {
    req.body.age = parseInt(req.body.age)
    req.body.fbw = parseInt(req.body.fbw)

    next()
}

export function sortBands(req,res,next) {
    req.body.favoriteBands.sort()

    next()
}
export function validateKeys(req,res,next) {
    console.log("We are validating the object we received.")
    const { firstName, lastName, age, fbw, email} = req.body

    if(!firstName || !lastName || !age || !fbw || !email) {
        const error = new Error(`Looks like you are missing required fields `)
        error.status = 400 || 500
        next(error)
    }
    next()
/* 
    if(!firstName) {
        const error = new Error(`Looks like you are missing firstName field. `)
        error.status = 400
        next(error)
    }

    next()

    if(!lastName) {
        const error = new Error(`Looks like you are missing lastName field. `)
        error.status = 400
        next(error)
    }
    
    next()

    if(!age) {
        const error = new Error(`Looks like you are missing age field. `)
        error.status = 400
        next(error)
    }
    
    next()

    if(!fbw) {
        const error = new Error(`Looks like you are missing fbw field. `)
        error.status = 400
        next(error)
    }
    
    next()

    if(!email) {
        const error = new Error(`Looks like you are missing email} field. `)
        error.status = 400
        next(error)
    }
    
    next()    
*/
}

export function isAdult(req,res,next) {
    console.log("We are checking the age.")
    const { age } = req.body

    if(parseInt(age) < 18) {
        const error = new Error(`Why are so young, get out of here...`)
        error.status = 400
        next(error)
    }

    next()
}


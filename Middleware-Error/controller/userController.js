export function validationResponse(req,res) {
    res.send({message: "This user is valid."})
}

export function sanitizationResponse(req,res) {
    res.send(req.body)
}

export const sendError = (res, code, message = "An error occured") => {
    return res.status(code).json({success: false, message})
}

export const sendSuccess = (res, code, message = "Operation Successful", data = null) => {
    return res.status(code).json({success: true, message, data})
}
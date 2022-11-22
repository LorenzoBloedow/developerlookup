const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export default function validateUsername(username: string | string[] | undefined) {
    if (!username) {
        return {
            success: false,
            message: "Missing username."
        }
    }

    if (typeof username !== "string") {
        return {
            success: false,
            message: "Malformed username."
        }
    }


    if (!usernameRegex.test(username)) {
        return {
            success: false,
            message: "Username contains illegal characters."
        }
    }

    return {
        success: true
    }
}
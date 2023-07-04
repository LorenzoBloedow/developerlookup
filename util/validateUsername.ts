import usernameRegex from "github-username-regex";

export default function validateUsername(username: string): {
    success: false;
    message: string;
} | {
    success: true;
} {
    if (username.search(/\w/) === -1) {
        return {
            success: false,
            message: "Missing username."
        }
    }

    if (typeof username !== "string") {
        return {
            success: false,
            message: "Unknown Error"
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
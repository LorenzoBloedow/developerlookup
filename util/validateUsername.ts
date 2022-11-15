const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export default function validateUsername(username: string | string[] | undefined) {
    if (!username) {
        return "Missing username.";
    }

    if (typeof username === "object") {
        return "Malformed username.";
    }


    if (!usernameRegex.test(username)) {
        return "Username contains illegal characters.";
    }

    return true;
}
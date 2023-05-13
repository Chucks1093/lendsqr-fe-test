

function changeStatusClass(value) {
    if (value == "active") {
        return "active";
    } else if (value == "blacklisted") {
        return "blacklisted";
    } else if (value == "pending") {
        return "pending";
    } else if (value == "inactive") {
        return "inactive";
    }
}

export default changeStatusClass;
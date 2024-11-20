export const isUserLoggedIn = () =>
{
    let loggedInUserEmail = localStorage.getItem("email");

    return loggedInUserEmail ? true : false;
}

export const logoutUser = () =>
{
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.reload();
}
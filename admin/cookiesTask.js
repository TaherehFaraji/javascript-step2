class CookieUtil {
    constructor(key, value, expiryDate = 1, path = "/") {
        this.key = key;
        this.value = value;
        this.expiryDate = expiryDate;
        this.path = path;
    }

    setCookie() {
        const date = new Date();
        date.setTime(date.getTime() + (this.expiryDate * 24 * 60 * 60 * 1000));

        document.cookie = `${this.key}=${this.value}; expires=${date.toUTCString()}; path=${this.path}`;
    }

    getCookie(name) {
        const allCookies = document.cookie.split("; ");
        const findCookie = allCookies.find(row => row.startsWith(`${name}=`));
        const findCookieValue = findCookie ? findCookie.split("=")[1] : console.log("This cookie does not exist");

        return findCookieValue;
    }

    deleteCookie(name) {
        document.cookie = `${name}=${this.value}; max-age=0; path=${this.path}`;
    }
}

const cookie1 = new CookieUtil("theme", "dark", 2);
const cookie2 = new CookieUtil("username", "Zahra", 3, "/admin");

cookie1.setCookie();
cookie2.setCookie();
console.log("cookie's value: ", cookie1.getCookie("theme"));
cookie2.deleteCookie("username");
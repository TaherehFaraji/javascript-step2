console.log(document.cookie); //چاپ کوکی ها
document.cookie = "username=Ali";
document.cookie = "theme=dark";
console.log(document.cookie); //username=Ali; theme=dark

document.cookie = "lastVisit=2026; expires=Thu, 18 Dec 2026 12:00:00 UTC";//hard coded

const expiryDate = new Date();
expiryDate.setFullYear(expiryDate.getFullYear() + 1);//one year from now

document.cookie = `password=12345678; expires=${expiryDate.toUTCString()}`;

document.cookie = "skin=classic; max-age=10";//s

//////////////////////////////////////////

const allCookies = document.cookie.split("; ");
const lastVisitCookie = allCookies.find(row => row.startsWith("lastVisit="));
const lastVisitValue = lastVisitCookie ? lastVisitCookie.split("=")[1] : null;
console.log(lastVisitValue);

///////////////////////////////////////

document.cookie = "userId=200; path=/admin";

document.cookie = "adminToken=secret; path=/admin; max-age=86400";

document.cookie = "username2=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

//////////////////////////////////////////


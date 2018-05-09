export default function getBaseUrl() {
    //if the query string useMockApi is true, it use fake data to display.
    //http://localhost:3000/?useMockApi=true
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
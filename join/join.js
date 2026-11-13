// The invitation is in the fragment (#invite=…&t=…), which the browser never
// sends to the server. Here it only becomes the campstack:// link that opens a
// version of the app without Universal Links. Nothing is stored or sent.
(function () {
  var params = new URLSearchParams(window.location.hash.slice(1));
  var invite = params.get("invite");
  var token = params.get("t");
  if (!invite || !token || !/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/.test(invite)) {
    return;
  }
  var link = "campstack://join?invite=" + encodeURIComponent(invite) + "&t=" + encodeURIComponent(token);
  document.querySelectorAll("[data-open-app]").forEach(function (anchor) {
    anchor.setAttribute("href", link);
  });
  document.querySelectorAll("[data-open-app-row]").forEach(function (row) {
    row.hidden = false;
  });
})();

const params = new URLSearchParams(window.location.search);

function show(id, value) {
  document.getElementById(id).textContent = value || "Not provided";
}

show("out-first", params.get("first-name"));
show("out-last", params.get("last-name"));
show("out-email", params.get("email"));
show("out-phone", params.get("phone"));
show("out-business", params.get("business"));

const time = params.get("timestamp");
show("out-time", time ? new Date(time).toLocaleString("en-US") : "");
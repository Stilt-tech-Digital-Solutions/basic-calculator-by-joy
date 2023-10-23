const modeSwitch = $("#modeSwitch");
const pageWrapper = $("#page-wrapper");

modeSwitch.on("change", function (e) {
  if ($(this).prop("checked")) {
    pageWrapper.removeClass("light-mode").addClass("dark-mode");
  } else {
    pageWrapper.removeClass("dark-mode").addClass("light-mode");
  }
});

"use strict";

// ẩn hiện thông tin cá nhân
document.querySelector(".sub-info").addEventListener("click", function () {
  const value = document.querySelector(".email-info").value;
  console.log(value);
  let result = value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  console.log(result);
  if (result == null) {
    document.querySelector(".smalltext").style.color = "red";
    document.querySelector(".smalltext").textContent =
      "*vui lòng nhập đúng cấu trúc email";
    alert("*vui lòng nhập đúng cấu trúc email");
  } else {
    document.querySelector(".show-info").classList.remove("hidden");
    document.querySelector(".form-group").classList.add("hidden");
  }
});

//ẩn hiện thông tin nghề nghiệp
const jobinfo = document.querySelectorAll(".contain");
const jobview = document.querySelectorAll(".view");
for (let i = 0; i < jobinfo.length; i++) {
  //di chuột
  jobinfo[i].addEventListener("mouseover", function () {
    jobview[i].classList.remove("hidden");
  });
  //thả chuột
  jobinfo[i].addEventListener("mouseout", function () {
    jobview[i].classList.add("hidden");
  });

  //ẩn hiện khi click button
  jobview[i].addEventListener("click", function () {
    const content = document.querySelectorAll(".content");

    for (let i = 0; i < content.length - 1; i++) {
      if (content[i].classList.contains("hdcontent")) {
        content[i].classList.remove("hdcontent");
        jobview[i].textContent = "VIEW LESS";
      } else {
        content[i].classList.add("hdcontent");
        jobview[i].textContent = "VIEW MORE";
      }
    }
  });
}

//click dự án
const project = document.querySelector(".project");
const items = document.querySelectorAll(".items");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function () {
    items[i].style.border = "1px solid red";
  });

  items[i].addEventListener("mouseout", function () {
    items[i].style.border = "none";
  });
}

project.addEventListener("click", function () {
  window.location.href = "digital-cv.html";
});

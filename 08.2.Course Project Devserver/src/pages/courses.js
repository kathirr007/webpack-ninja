import $ from 'jquery'
import _ from 'lodash'
import bootstrap from 'bootstrap'
import Typed from 'typed.js'
import validate from 'validate.js'
import toastr from 'toastr'

import '../_vendor.scss'
import '../index.css'

import courseData from "../data/courses.json";

//Validate the email id

$("#subscribeBtn").on("click", (e) => {
  e.preventDefault();
  const emailId = $("#newsletter1")[0].value;
  const isInvalid = validate.single(emailId, { presence: true, email: true });
  if (isInvalid === undefined) {
    console.log();
    toastr.success("You have been subscribed !");
  } else {
    toastr.error("Invalid email address is entered!");
  }
});

function loadCourses() {
  const courseListSection = $("#course-list")[0];

  let courseItems = "";
  _.each(courseData, (course) => {
    const courseItem =
      '<div class="card mb-3 rounded-3" style="max-width: 350px"><div class="row g-0 p-3"><div class="col-md-4"> <img src="' +
      course.imageUrl +
      '" class="img-fluid rounded-start"alt="css"/></div><div class="col-md-8"><div class="card-body"><h2 class="card-title">' +
      course.title +
      '</h2><p class="card-text">' +
      course.description +
      '</p><p class="card-text"><strong>Author: </strong><small class="text-muted">' +
      course.author +
      "</small></p></div></div></div> </div>";
    courseItems += courseItem;
  });

  courseListSection.innerHTML = courseItems;
}

loadCourses();

console.log("Hello", "Coffee lover");

let courseTitle = "Intro to Web Development";
let courseLength = "8 weeks";
let firstName = "Somadina";
let lastName = "Muojeke";
let age = 26;
let courseAttendees = ["Anskey", "Terri", "Kat", "Annagray"];
let skillSet = ["Python", "Java", "C++"];
skillSet[0] = "Ruby";
skillSet.push("Scala");
let course = {
    title: "Intro to data science",
    duration: "8 weeks",
    attendees: ["Anskey", "Terri", "Kat", "Annagray"]
}
let name = {
    firstName: "Somadina",
    lastName: "Muojeke",
    skillSet: ["Python", "Java", "C++"]
}
name.nickName = "Zuckerberg";
name.skillSet.push("Scala");


console.log(courseTitle);
console.log(courseLength);
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(courseAttendees);
console.log(courseAttendees[0]);
console.log(skillSet);
console.log(course);
console.log(course.title);
console.log(name);
var names_of_people = [];





function submit() {
    document.getElementById("Show_Guests").innerHTML = names_of_people;
    console.log(names_of_people);

    GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);

}

function show_guests_without_commas() {
  var i = names_of_people.join(" ");
  console.log(i);
  document.getElementById("Without_Commas").innerHTML = i;

}
function sorting() {
    names_of_people.sort();
    document.getElementById("Sorted_Names").innerHTML = names_of_people;
}

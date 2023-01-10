
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.Gender;
    document.getElementById('PatronomicOutput').innerText = initPerson.Patronomic;
    document.getElementById('birthYearOutput').innerText = initPerson.BirthYear;
   
};


const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("Calculate-btn");
const resultdiv = document.getElementById("result");

calculateBtn.addEventListener("click", function(){
    const dob = new Date(dobInput.value);
    const ageInMn = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMn);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    resultdiv.innerHTML = `Your Age Is ${age} Years`
})

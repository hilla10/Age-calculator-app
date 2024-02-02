function calculateAge() {
    var dayInput = document.querySelector("#day");
    var monthInput = document.querySelector("#month");
    var yearInput = document.querySelector("#year");

    var day = parseInt(dayInput.value);
    var month = parseInt(monthInput.value);
    var year = parseInt(yearInput.value);

    // Validate input values
    var isValid = true;
    var dayErrorMsg = "";
    var monthErrorMsg = "";
    var yearErrorMsg = "";

    if (isNaN(day) || day < 1 || day > 31) {
        isValid = false;
        if (day === 0 || isNaN(day)) {
            dayErrorMsg = "This field is required";
        } else {
            dayErrorMsg = "Must be a valid day";
        }
        dayInput.classList.add("day-error");
        dayInput.previousElementSibling.classList.add("error-label");
    } else {
        dayInput.classList.remove("day-error");
        dayInput.previousElementSibling.classList.remove("error-label");
    }

    if (isNaN(month) || month < 1 || month > 12) {
        isValid = false;
        if (month === 0 || isNaN(month)) {
            monthErrorMsg = "This field is required";
        } else {
            monthErrorMsg = "Must be a valid month";
        }
        monthInput.classList.add("month-error");
        monthInput.previousElementSibling.classList.add("error-label");
    } else {
        monthInput.classList.remove("month-error");
        monthInput.previousElementSibling.classList.remove("error-label");
    }

    if (isNaN(year) || year < 1 || year > 2024) {
        isValid = false;
        if (year === 0 || isNaN(year)) {
            yearErrorMsg = "This field is required";
        } else {
            yearErrorMsg = "Must be a valid year";
        }
        yearInput.classList.add("year-error");
        yearInput.previousElementSibling.classList.add("error-label");
    } else {
        yearInput.classList.remove("year-error");
        yearInput.previousElementSibling.classList.remove("error-label");
    }

    // Calculate age if input values are valid
    if (isValid) {
        var today = new Date();
        var currentYear = today.getFullYear();
        var currentMonth = today.getMonth() + 1;
        var currentDate = today.getDate();

        var ageYear = currentYear - year;
        var ageMonth = currentMonth - month;
        var ageDay = currentDate - day;

        if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
            ageYear--;
            ageMonth += 12;
        }

        if (ageDay < 0) {
            var daysInPrevMonth = new Date(year, month - 1, 0).getDate();
            ageMonth--;
            ageDay += daysInPrevMonth;
        }

        // Update Result section
        var yearsElement = document.querySelector("#years");
        yearsElement.innerHTML = "<span>" + ageYear + "</span> years";

        var monthsElement = document.querySelector("#months");
        monthsElement.innerHTML = "<span>" + ageMonth + "</span> months";

        var daysElement = document.querySelector("#days");
        daysElement.innerHTML = "<span>" + ageDay + "</span> days";

        // Clear error messages
        var dayErrorMsgElement = document.querySelector("#day-error");
        dayErrorMsgElement.textContent = "";

        var monthErrorMsgElement = document.querySelector("#month-error");
        monthErrorMsgElement.textContent = "";

        var yearErrorMsgElement = document.querySelector("#year-error");
        yearErrorMsgElement.textContent = "";
    } else {
        // Display error messages
        var dayErrorMsgElement = document.querySelector("#day-error");
        dayErrorMsgElement.textContent = dayErrorMsg;

        var monthErrorMsgElement = document.querySelector("#month-error");
        monthErrorMsgElement.textContent = monthErrorMsg;

        var yearErrorMsgElement = document.querySelector("#year-error");
        yearErrorMsgElement.textContent = yearErrorMsg;
    }
}
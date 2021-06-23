// Menu toggle
$('.toggle-btn').bind('click', showMenu);

function showMenu() {
    $('.menu').toggleClass("active");
    $(".navicon").toggleClass("active");
}

// Features Tabs
$(".btns button").bind("click", tabSwitcher);

function tabSwitcher() {
    $(".btns button").removeClass("active");
    this.classList.add("active");

    let currentTab = this.dataset.tab;
    let allTab = [...$(".tabs .tab")];

    allTab.forEach((el) => {
        el.classList.remove("active");
        if (currentTab == el.id) {
            el.classList.add("active");
        }
    });
}

// FAQ 
$(".question").bind("click", faqTabs);

function faqTabs() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
    [...$(this).find(".arr")][0].classList.toggle("active");
}

// Email Validate
$(".email-btn").bind("click", validate);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    event.preventDefault();
    const $result = $(".email");

    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text("");
        $(".alert").css("opacity", "0");
        $("#email").css("border", "1px solid hsl(246, 25%, 77%)");
        $result.css("opacity", "0");
    } else {
        $(".alert").css("opacity", "1");
        $result.css("opacity", "1");
        (email.length == 0) ? $result.text("Email can not be empty."): $result.text(email + " is not valid :(");

        $("#email").css("border", "3px solid hsl(0, 94%, 66%)");
    }
}
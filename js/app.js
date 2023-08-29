const items = document.querySelectorAll(".cm-showcase_item");
const menuDropDownPremium = document.querySelector(".nav__dropdown-premium");
const menuDropDownService = document.querySelector(".nav__dropdown-service");
const formBtn = document.querySelector(".form__submit");
const form = document.querySelector(".form");


items.forEach((item) => {
    item.addEventListener("click", (e) => {
        const content = document.querySelectorAll(".cm-visual");
        const parent = e.target.closest(".cm-showcase_item");
        const showContent = parent.querySelector(".cm-visual");
        const subMenuItems = document.querySelectorAll(".js-cm-sub-menu");

        content.forEach((contentItem) => {
            contentItem.style.display = "none";
        });
        showContent.style.display = "block";

        subMenuItems.forEach((item) => {
            item.classList.remove("cm-tab__opened");
        });

        parent.querySelector(".js-cm-sub-menu").classList.add("cm-tab__opened");
    });
});

menuDropDownPremium.addEventListener('click', (e) => {
    menuDropDownService.classList.remove('nav__item-active')
    menuDropDownService.querySelector('.drop-content-service').classList.remove('is-opened')

    const node = e.target
    const nodeContent = node.querySelector('.drop-content-premium')

    node.classList.toggle('nav__item-active')
    
    if (nodeContent) {
        nodeContent.classList.toggle('is-opened')
    }

})

menuDropDownService.addEventListener('click', (e) => {
    menuDropDownPremium.classList.remove('nav__item-active')
    menuDropDownPremium.querySelector('.drop-content-premium').classList.remove('is-opened')


    const node = e.target
    const nodeContent = node.querySelector('.drop-content-service')

    node.classList.toggle('nav__item-active')
    nodeContent.classList.toggle('is-opened')

})


function formHandler(e) {
    e.preventDefault();
    let error = true;
    const inputs = form.querySelectorAll(".form__input-box > input");

    inputs.forEach((input) => {
      
        if (input.value.length <= 4) {
            const errorMessage = form.querySelector(".message-error");
            errorMessage.style.display = "block";

            return error = true;
        }

        error = false;
    });

    if (!error) {
        form.submit();

    };

}

formBtn.addEventListener("click", formHandler);

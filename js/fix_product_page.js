window.addEventListener("DOMContentLoaded", (event) => {

    $(".product-search").val("")

    resetBtn()

    $('.product-search-btn').mousedown(function () {
        $('.cat_enfants').hide()
    })
    $('.product-search-btn').click(function(){

        // Récupération de l'id ciblé
        var ancre = $("#grid-layout-list");

        // Simple scroll
        $("html, body").animate({
            scrollTop : $(ancre).offset().top
        },'slow');
        return false;
    });
    $('.cat_enfants').click(function () {
        $(this).hide()
    });
});
function resetBtn(){
    let btn = document.createElement("a")
    let txtBtn = document.createTextNode("Réinitialiser")
    btn.appendChild(txtBtn)
    btn.setAttribute("href", "/produits/")
    btn.setAttribute("class", "btn")
    let form = document.querySelector(".product-search-form")
    form.appendChild(btn)
}
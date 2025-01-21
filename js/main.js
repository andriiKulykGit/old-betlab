"use strict"

$(document).ready(function () {
	$(document).on("click", ".table2__btn", function () {
		$(this).toggleClass("_active")
		$(this).closest(".table2__row").next(".table2__group").stop().slideToggle(300)
	})
})

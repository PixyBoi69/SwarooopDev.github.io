(function ($) {
	"use strict";

	// Theme
	let themeSwitch = document.getElementById('themeSwitch');
	if (!themeSwitch) {
		return;
	}

	function darkMode() {
		document.querySelectorAll('.bg-white').forEach((element) => {
			element.className = element.className.replace(/-white/g, '-dark');
		});

		document.querySelectorAll('.bg-white').forEach((element) => {
			element.className = element.className.replace(/-white/g, '-secondary');
		});

		document.querySelectorAll('.content').forEach((element) => {
			element.classList.add('bg-dark');
		});

		if (document.body.classList.contains('text-dark')) {
			document.body.classList.replace('text-dark', 'text-white');
		} else {
			document.body.classList.add('text-white');
		}

		// Tables
		var tables = document.querySelectorAll('table');
		for (var i = 0; i < tables.length; i++) {
			// add table-dark class to each table
			tables[i].classList.add('table-dark');
		}

		// set white switch input to true
		if (!themeSwitch.checked) {
			themeSwitch.checked = true;
		}
		localStorage.setItem('themeSwitch', 'dark');
	}

	function whiteMode() {
		document.querySelectorAll('.bg-dark').forEach((element) => {
			element.className = element.className.replace(/-dark/g, '-white');
		});

		document.querySelectorAll('.bg-secondary').forEach((element) => {
			element.className = element.className.replace(/-secondary/g, '-white');
		});

		document.querySelectorAll('.content').forEach((element) => {
			element.classList.add('bg-white');
		});

		if (document.body.classList.contains('text-white')) {
			document.body.classList.replace('text-white', 'text-dark');
		} else {
			document.body.classList.add('text-dark');
		}

		// Tables
		var tables = document.querySelectorAll('table');
		for (var i = 0; i < tables.length; i++) {
			if (tables[i].classList.contains('table-dark')) {
				tables[i].classList.remove('table-dark');
			}
		}

		if (themeSwitch.checked) {
			themeSwitch.checked = false;
		}
		localStorage.setItem('themeSwitch', 'white');
	}

	function onToggleMode() {
		if (themeSwitch.checked) {
			darkMode();
		} else {
			whiteMode();
		}
	}

	function getSystemDefaultTheme() {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
		if (darkThemeMq.matches) {
			return 'dark';
		}
		return 'white';
	}

	function setup() {
		var settings = getSystemDefaultTheme();

		if (settings == 'dark') {
			themeSwitch.checked = true;
		}

		themeSwitch.addEventListener('change', onToggleMode);
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			onToggleMode();
		});
		onToggleMode();
	}

	setup();

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($('#spinner').length > 0) {
				$('#spinner').removeClass('show');
			}
		},
			1);
	};
	spinner();


	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});


	// Sidebar Toggler
	$('.sidebar-toggler').click(function () {
		$('.sidebar, .content').toggleClass("open");
		return false;
	});


	// Progress Bar
	$('.pg-bar').waypoint(function () {
		$('.progress .progress-bar').each(function () {
			$(this).css("width", $(this).attr("aria-valuenow") + '%');
		});
	},
		{
			offset: '80%'
		});


	// Calender
	$('#calender').datetimepicker({
		inline: true,
		format: 'L'
	});


	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		items: 1,
		dots: true,
		loop: true,
		nav: false
	});


	// Chart Global Color
	Chart.defaults.color = "#6C7293";
	Chart.defaults.borderColor = "#000000";


	// Worldwide Sales Chart
	var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
	var myChart1 = new Chart(ctx1,
		{
			type: "bar",
			data: {
				labels: ["2016",
					"2017",
					"2018",
					"2019",
					"2020",
					"2021",
					"2022"],
				datasets: [{
					label: "USA",
					data: [15,
						30,
						55,
						65,
						60,
						80,
						95],
					backgroundColor: "rgba(235, 22, 22, .7)"
				},
					{
						label: "UK",
						data: [8,
							35,
							40,
							60,
							70,
							55,
							75],
						backgroundColor: "rgba(235, 22, 22, .5)"
					},
					{
						label: "AU",
						data: [12,
							25,
							45,
							55,
							65,
							70,
							60],
						backgroundColor: "rgba(235, 22, 22, .3)"
					}]
			},
			options: {
				responsive: true
			}
		});


	// Salse & Revenue Chart
	var ctx2 = $("#salse-revenue").get(0).getContext("2d");
	var myChart2 = new Chart(ctx2,
		{
			type: "line",
			data: {
				labels: ["2016",
					"2017",
					"2018",
					"2019",
					"2020",
					"2021",
					"2022"],
				datasets: [{
					label: "Salse",
					data: [15,
						30,
						55,
						45,
						70,
						65,
						85],
					backgroundColor: "rgba(235, 22, 22, .7)",
					fill: true
				},
					{
						label: "Revenue",
						data: [99,
							135,
							170,
							130,
							190,
							180,
							270],
						backgroundColor: "rgba(235, 22, 22, .5)",
						fill: true
					}]
			},
			options: {
				responsive: true
			}
		});



	// Single Line Chart
	var ctx3 = $("#line-chart").get(0).getContext("2d");
	var myChart3 = new Chart(ctx3,
		{
			type: "line",
			data: {
				labels: [50,
					60,
					70,
					80,
					90,
					100,
					110,
					120,
					130,
					140,
					150],
				datasets: [{
					label: "Salse",
					fill: false,
					backgroundColor: "rgba(235, 22, 22, .7)",
					data: [7,
						8,
						8,
						9,
						9,
						9,
						10,
						11,
						14,
						14,
						15]
				}]
			},
			options: {
				responsive: true
			}
		});


	// Single Bar Chart
	var ctx4 = $("#bar-chart").get(0).getContext("2d");
	var myChart4 = new Chart(ctx4,
		{
			type: "bar",
			data: {
				labels: ["Italy",
					"France",
					"Spain",
					"USA",
					"Argentina"],
				datasets: [{
					backgroundColor: [
						"rgba(235, 22, 22, .7)",
						"rgba(235, 22, 22, .6)",
						"rgba(235, 22, 22, .5)",
						"rgba(235, 22, 22, .4)",
						"rgba(235, 22, 22, .3)"
					],
					data: [55,
						49,
						44,
						24,
						15]
				}]
			},
			options: {
				responsive: true
			}
		});


	// Pie Chart
	var ctx5 = $("#pie-chart").get(0).getContext("2d");
	var myChart5 = new Chart(ctx5,
		{
			type: "pie",
			data: {
				labels: ["Italy",
					"France",
					"Spain",
					"USA",
					"Argentina"],
				datasets: [{
					backgroundColor: [
						"rgba(235, 22, 22, .7)",
						"rgba(235, 22, 22, .6)",
						"rgba(235, 22, 22, .5)",
						"rgba(235, 22, 22, .4)",
						"rgba(235, 22, 22, .3)"
					],
					data: [55,
						49,
						44,
						24,
						15]
				}]
			},
			options: {
				responsive: true
			}
		});


	// Doughnut Chart
	var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
	var myChart6 = new Chart(ctx6,
		{
			type: "doughnut",
			data: {
				labels: ["Italy",
					"France",
					"Spain",
					"USA",
					"Argentina"],
				datasets: [{
					backgroundColor: [
						"rgba(235, 22, 22, .7)",
						"rgba(235, 22, 22, .6)",
						"rgba(235, 22, 22, .5)",
						"rgba(235, 22, 22, .4)",
						"rgba(235, 22, 22, .3)"
					],
					data: [55,
						49,
						44,
						24,
						15]
				}]
			},
			options: {
				responsive: true
			}
		});


})(jQuery);

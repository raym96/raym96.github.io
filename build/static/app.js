(function () {
'use strict';

Object.prototype.hasOwnProperty = function(property) {
    return this[property] !== undefined;
};

var MS = {
	firm: "Morgan Stanley, NYC",
	time: "October 2019 - January 2020",
	title: "Internship: Fall Associate",
	content: ["Calibrated a double-exponential jump diffusion process on asset price dynamics using MLE methods",
	"Created a reverse repurchase agreement pricing model accounting for credit spread and Wrong Way Risk",
	"Designed an interactive dashboard for daily P&L tracking using JavaScript, HTML5 and CSS3",
	"Implemented an unsupervised record linkage algorithm to generate Machine Learning training dataset"],
	languages: "Python, Kdb+, HTML5/CSS3/Javascript, AngularJS",
	skills: "Data Analysis, Automation",
	type: "internship",
}

var Amazon = {
	firm: "Amazon, Paris",
	time: "January 2018 - July 2018",
	title: "Internship: Junior Data Analyst",
	content: ["Created procedures to improve pricing automation and competition monitoring",
	"Closely monitored the daily pricing procedure to ensure company policies are followed",
	"Automated and managed countrywide pricing performance dashboards using SQL and VBA"],
	languages: "Excel, VBA, Python",
	skills: "Data Analysis, Automation",
	type: "internship",
}

var Commerzbank = {
	firm: "Commerzbank, London",
	time: "July 2017 - December 2017",
	title: "Internship: Equity Derivatives SalesTrader",
	content: ["Conceived a structured product pricing interface using Excel VBA and C++",
	"Priced a wide range of products such as Phoenix-Autocalls for institutional clients",
	"Booked trades from Hong Kong, Korean and European offices on a daily basis"],
	languages: "Excel, VBA",
	skills: "Derivatives, Options pricing",
	type: "internship",
}

var MS2 = {
	firm: "Morgan Stanley, NYC",
	time: "May 2020 - Present",
	title: "Associate Quantitative Strategist, Fixed Income",
	content: [],
	empty_content: true,
	type: "fulltime",
}

var MFE = {
	firm: "University of California at Berkeley",
	time: "March 2019 - March 2020",
	title: "Master of Financial Engineering",
	empty_content: true,
	type: "education",
}

var Centrale = {
	firm: "CentraleSupélec (formerly Ecole Centrale Paris)",
	time: "September 2015 - June 2019",
	title: "Master of Science in Applied Mathematics",
	empty_content: true,
	type: "education",
}

var MICS = {
	firm: "Research Laboratory MICS",
	time: "September 2018 - March 2019",
	title: "Project: Creation of a market sentiment indicator",
	content: ["Implemented web-crawling algorithms to extract textual data from local newspapers",
	"Applied Natural Language Processing methods to compute daily topic distribution",
	"Created a Recurrent Neural Network based on topic distribution to predict market sentiment",
	"Designed an indicator to predict French stock market volatility"],
	type: "project",
	languages: "Python",
	skills: "Machine Learning, Web Crawling, Neural Networks, NLP",
}

var DataOpen = {
	firm: "Citadel / Citadel Securities, Correlation One",
	time: "January 2020",
	title: "Award: Citadel West Coast Data Open, 1st Place",
	content: ["Competed against 600 participants from top US universities",
	"Studied NYC bike-share system ridership and validated key findings through rigorous statistical testing",
	"Built a multi-factor regression model to predict demand in undeveloped areas with R-squared > 0.8"],
	type: "project",
	languages: "Python",
	skills: "Data Analysis, Factor Analysis, Regression, Statistical Testing"
}



var experienceList = [
  MS2, DataOpen, MS, MFE, MICS, Amazon, Commerzbank, Centrale
];



var app = angular.module('myApp', [])
app.controller('ExperienceListController', ExperienceListController);
app.config(['$interpolateProvider', function($interpolateProvider) {
		  $interpolateProvider.startSymbol('{a');
		  $interpolateProvider.endSymbol('a}');
		}]);


ExperienceListController.$inject = ['$scope'];
function ExperienceListController($scope) {
	$scope.experienceList = experienceList;
	$scope.keyword = "";
  	$scope.fulltime = true;
  	$scope.internship = true;
  	$scope.project = true;
  	$scope.education = false;

  $scope.experienceFilter = function (kw, fulltime, internship, project, education){
  	return function (item){
  		if ((!fulltime) && item.type == "fulltime"){
  			return false
  		}if ((!internship) && item.type == "internship"){
  			return false
  		}if ((!project) && item.type == "project"){
  			return false
  		}if ((!education) && item.type == "education"){
  			return false
  		}

  		if (item.firm.toLowerCase().includes(kw.toLowerCase())){
  			return true
  		}

  		if (item.hasOwnProperty('content')){
	  		for (var i = 0; i < item.content.length; i++) {
	  			if (item.content[i].toLowerCase().includes(kw.toLowerCase())){
	  				return true
	  			}
			}
  		}

  		if (item.hasOwnProperty('languages')){
	  		if (item.languages.toLowerCase().includes(kw.toLowerCase())){
	  			return true
	  		}
  		}
  		if (item.hasOwnProperty('skills')){
	  		if (item.skills.toLowerCase().includes(kw.toLowerCase())){
	  			return true
	  		}
  		}
  		
  		return false
  	}
  }
}

})();


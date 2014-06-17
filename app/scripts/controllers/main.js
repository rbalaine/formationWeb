'use strict';

angular.module('webDApp')
  
	.controller('MainCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	$scope.nbresults = 4;

	$scope.records = ["datasetid",
					 "recordid",
					 "fields"];

	$scope.fields = ["annee_de_monte", 
					"num_departement_stationnement", 
					"code_region_stationnement",
					"race_etalon",
					"type_equide_etalon"];

	$http({method: 'GET', url: 'http://public.opendatasoft.com/api/records/1.0/search?dataset=nombre-detalons-en-activite-en-france&rows=5000&facet=annee_de_monte&facet=num_departement_stationnement&facet=code_region_stationnement&facet=race_etalon&facet=type_equide_etalon'}).
	success(function(a){
		$scope.records = a.records;
	}).
	error(function(a){
		$scope.records = 'beug';
	});

	})


	.directive('infoG', function() {
    return {
    	template: '<p>Je suis un {{record.fields.type_equide_etalon}} </br>Je vis dans le {{record.fields.num_departement_stationnement}} </br>et suis en activité depuis {{record.fields.annee_de_monte}} </br></p>'
    }
 	})
 	.directive('infoDetail', function() {
    return {
    	template: '<p>race: {{record.fields.race_etalon}} </br>status: Open</p>'
    }
 	});
const app = angular.module("myApp", []);
app.controller("control", function ($scope) {
  $scope.salario = 0;
  $scope.horasT = 0;
  $scope.total = 0;

  $scope.Sueldo = function () {
    $scope.TrabajoHrs = $scope.salario * $scope.horasT;
    if ($scope.TrabajoHrs <= 500) {
      $scope.descuento = 0;
      $scope.total = $scope.TrabajoHrs;
      return $scope.total;
    }
    if ($scope.TrabajoHrs > 500 && $scope.TrabajoHrs <= 1000) {
      $scope.descuento = $scope.TrabajoHrs * 0.02;
      $scope.total = $scope.TrabajoHrs - $scope.descuento;
      return $scope.total;
    }
    if ($scope.TrabajoHrs > 1000 && $scope.TrabajoHrs <= 4000) {
      $scope.descuento = $scope.TrabajoHrs * 0.08;
      $scope.total = $scope.TrabajoHrs - $scope.descuento;
      return $scope.total;
    }
    if ($scope.TrabajoHrs > 4000 && $scope.TrabajoHrs <= 8000) {
      $scope.descuento = $scope.TrabajoHrs * 0.15;
      $scope.total = $scope.TrabajoHrs - $scope.descuento;
      return $scope.total;
    }
    if ($scope.TrabajoHrs > 8000 && $scope.TrabajoHrs <= 10000) {
      $scope.descuento = $scope.TrabajoHrs * 0.21;
      $scope.total = $scope.TrabajoHrs - $scope.descuento;
      return $scope.total;
    }
    if ($scope.TrabajoHrs > 10000) {
      $scope.descuento = $scope.TrabajoHrs * 0.3;
      $scope.total = $scope.TrabajoHrs - $scope.descuento;
      return $scope.total;
    }
  };
});

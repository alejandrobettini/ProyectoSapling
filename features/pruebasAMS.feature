
Feature: test View Selected Items
    Descripcion: Seleccion de 3 item y verificacion en Selected Items

Scenario: Ingreso e inicio de sesion
    Given Ingresar a Sapling
    When iniciar sesion en Sapling con usuario "raptoradmin" y contraseña "fasterthansixmill"
    
Scenario: Seleccion de items
    Given hacer click en 3 items
    Then click en View Selected items

Scenario: verificacion
    Given 
    Then 
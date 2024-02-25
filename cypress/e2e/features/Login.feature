Feature: Create TC 61
    The feature file contains a testcase of creating a demo 61 Transaction on TMS Application

  Scenario: Create a TC 61
    Given I am Logged in to Elements Application
    When I Select 'EAM' Application from Application Switch Over
    And I navigated to EAM Main New Transaction Menu
    And I Select TC Code as : '61'
    And I Select Type of Application as : 'Paper Enrollment'
    And I Enter MBI as : '7C7708MPM28'
    And I Select Plan ID as : 'H1001'
    And I Select PBP ID as : '001'
    And I Enter FirstName as : 'Agniva'
    And I Enter LastName as : 'Chowdhury'
    When I Enter Date of Birth : '01/01/1998'
    When I Select Gender as : 'M'

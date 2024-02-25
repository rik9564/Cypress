Feature: Create TC 61

    The feature file contains a testcase of creating a demo 61 Transaction on TMS Application

    Scenario: Create a TC 61
        Given I am Logged in to Elements Application
        When I Select 'EAM' Application from Application Switch Over
        And I navigated to EAM Main New Transaction Menu
        And I Select TC Code as : '61'
        And I Select Type of Application as : 'Paper Enrollment'
        And I Enter FirstName as : 'Agniva'
        And I Enter LastName as : 'Chowdhury'
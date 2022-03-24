Feature: Link Trigger

  Scenario: Create a link Trigger
    Given I am on the engagement page
    And I select a trigger
    And user is on link trigger page
    When I choose a Target Page
    And I create a new Target Page
    And I confirm and publish trigger
    And I verify that user is on checkout page
    And I enter engagement name and create engagement
    Then user is on my Dashboard and engagement is created

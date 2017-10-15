@important
Feature: Download page
  I want be able to click download and get info about app

  #@role(logged)
  Scenario: Validation details
    Given I am on Home page
    Then I click Main button
    Then Page title should be "BMW Club Belarus e.V. / Белорусский Клуб БМВ | Белорусский Клуб БМВ. Клубная жизнь, активный отдых, техническая информация, новости."
    Then I click Forum button
    Then Page title should be "BMW Club Belarus • Белорусский Клуб БМВ"
    Then I click sign in button

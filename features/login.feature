Feature: Login
  @web
  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters username "Admin" and password "admin123"
    Then the user should see the dashboard

  @mobile
  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters username "Admin" and password "admin123"
    Then the user should see the dashboard

  @web
  Scenario: Add new employee
  Given the user is on the add employee form
  When the user enters firstname "ajeet" and lastname "pal" 
  And save the details
  Then the user should get success message 
  #//span[text()='PIM'], //p[text()='Success']


Feature: Login
    @smoke
    Scenario: 1.1 Verify OrangeHRM application Login
        Given I launch the OrangeHRM application
        Then I enter "Admin" and "admin123" and sign in to the Orange HRM application
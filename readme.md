Test cases for https://www.redmine.org/
Node js v18.7.0 or higher should be preinstalled
Framework: Playwright version 1.0.0
Start tests use commandline:npx playwright test redmine.spec.ts --reporter=allure-playwright
Generate Allure report use commandline:npx allure generate ./allure-results --clean
Open Allure report use commandline:npx allure open ./allure-report

Test scenario ID: Functionality-1
Test case ID: Functionality-1A
Test case description: Checking basic functionality

ID:01
Title: Check help page for "User guide" availability
Steps:
1.goto https://www.redmine.org/
2. Click "Help" button
3. Check help page for "User guide" availability
Expected result: "User guide" are available.   

ID:02
Title: �heck "Download" function
Steps:
1.goto https://www.redmine.org/
2. Click "Download" button
3. Check URL to contain /Download/

Expected result: URL contain /Download/.   

ID:03
Title: �heck "Search" function
Steps:
1.goto https://www.redmine.org/				 
2. Click "Search" field
3. Input "Browser" in to search input field
4. Press "Enter" button
5. Check search results to contain "Browser"
Expected result: Search results to contain "Browser".   		

ID:04
Title: Should Registry with not valid credentials
Steps:
1.goto https://www.redmine.org/				 
2. Click registration button
3. Click "Submit" button
Expected result: An error message should appear.   					 

ID:05
Title: Should Registry in to Redmine
Steps:
1.goto https://www.redmine.org/
2. Click registration button
3. Input random user login in to "User Login" field
4. Input random password in to "Password" field
5. Input random user name in to "User Name" field
6. Input random user last name in to "User Last name" field
7. Input random email in to "Email" field
8. Click "Submit" button
9. Check url to include:"/login" 
Expected result: https://www.redmine.org/login page was displayed. 


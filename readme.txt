Test cases for https://www.redmine.org/
Framework: Playwright
Start tests use commandline:npx playwright test redmine.spec.ts --reporter=allure-playwright
Generate Allure report use commandline:npx allure generate ./allure-results --clean
Open Allure report use commandline:npx allure open ./allure-report


ID:01
Title: Check help page for "User guide" availability
              goto https://www.redmine.org/
1. Click "Help" button
2. Check help page for "User guide" availability
Expected result: "User guide" are available.   

ID:02
Title: Ñheck "Download" function
              goto https://www.redmine.org/
1. Click "Download" button
2. Check URL to contain /Download/

Expected result: URL contain /Download/.   

ID:03
Title: Ñheck "Search" function
              goto https://www.redmine.org/				 
1. Click "Search" field
2. Input "Browser" in to search input field
3. Press "Enter" button
4. Check search results to contain "Browser"
Expected result: Search results to contain "Browser".   		

ID:04
Title: Should Registry with not valid credentials
              goto https://www.redmine.org/				 
1. Click registration button
2. Click "Submit" button
Expected result: An error message should appear.   					 

ID:05
Title: Should Registry in to Redmine
              goto https://www.redmine.org/
1. Click registration button
2. Input random user login in to "User Login" field
3. Input random password in to "Password" field
4. Input random user name in to "User Name" field
5. Input random user last name in to "User Last name" field
6. Input random email in to "Email" field
7. Click "Submit" button
8. Check url to include:"/login" 
Expected result: https://www.redmine.org/login page was displayed. 


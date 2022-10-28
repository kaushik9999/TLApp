# TLApp

INSTRUCTIONS FOR RUNNING THE TESTS
1. Run npm install
2. Resolve if there is any dependency conflicts(there shouldn't be any)
3. Run 'appium-doctor' and install and set up all the necessary tools to run Appium
4. Keep the Apk inside /app/android/ folder
5. 'npm wido' to run the tests
6. Make sure to bring the appium server and the emulator up and running
7. If you are using a different emulator please update the android:devicename capability inside wdio.conf.js



 IN AN IDEAL SCENARIO
1. We can have flows to the created page objects.
2. We can have the test data independently with Json files and read them into tests.
3. We can have screenshots for each pass or fail
4. We can have better reports by adding listeners to the framework.

class LoginPage {

  get getSkipLink() {
       const skipLinkFinder = 'new UiSelector().text("Skip").className("android.widget.TextView")';
       return $(`android=${skipLinkFinder}`);
       }

  get loginTab() {
        const selector = 'new UiSelector().text("Log in").className("android.widget.TextView")';
        return $(`android=${selector}`);
        }

  get loginWithEmailTab() {
        const selector = 'new UiSelector().text("Log in with email").className("android.widget.TextView")';
        return $(`android=${selector}`);
        }
  get emailField() {
          const selector = 'new UiSelector().text("Email").className("android.widget.EditText")';
          return $(`android=${selector}`);
          }
  get passwordField() {
          //const selector = 'new UiSelector().text("Password").className("android.widget.EditText")';
          return $("//*[@resource-id='password']");
          }
   get loginButton() {
          // const selector = 'new UiSelector().text("Log in").className("android.widget.TextView")';
           return $("//*[@resource-id='login_btn']");
           }
}
module.exports = new LoginPage();
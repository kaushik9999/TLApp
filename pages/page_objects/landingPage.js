class LandingPage {

  get collapseButton() {
          return $("//*[@resource-id='com.timeless.investments.app:id/collapse_button']");
          }

  get landingPageTitle() {
           const selector = 'new UiSelector().text("Drops").className("android.widget.TextView")';
           return $(`android=${selector}`);
           }
  get searchByAsset() {
           const selector = 'new UiSelector().text("Search by asset or category").className("android.widget.TextView")';
           return $(`android=${selector}`);
           }
  get searchByAssetType() {
            const selector = 'new UiSelector().text("Search by asset or category").className("android.widget.EditText")';
            return $(`android=${selector}`);
            }
  get setPriceAlertButton() {
               const selector = 'new UiSelector().text("Set price alert").className("android.widget.TextView")';
               return $(`android=${selector}`);
               }
  get priceAlertLessTenPercent() {
               const selector = 'new UiSelector().text("-10%").className("android.widget.TextView")';
               return $(`android=${selector}`);
               }
  get priceAlertAddTenPercent() {
                const selector = 'new UiSelector().text("+10%").className("android.widget.TextView")';
                return $(`android=${selector}`);
                }

  get getTradingButton() {
                 const selector = 'new UiSelector().text("Trading").className("android.widget.TextView")';
                 return $(`android=${selector}`);
                  }
  get getPriceAlertsButton() {
                  //const selector = 'new UiSelector().text("PRICE ALERTS").className("android.widget.TextView")';
                  return $("//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.Button/android.widget.TextView[2]");

                  }

  get getDeleteButtonIcon() {
                                    //const selector = 'new UiSelector().text("PRICE ALERTS").className("android.widget.TextView")';
                  return $("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.Button");

                  }
  get getDeleteAlertButton() {
                                                      //const selector = 'new UiSelector().text("PRICE ALERTS").className("android.widget.TextView")';
                 return $("//*[@resource-id='android:id/button1']");
                  }
  get getDropsButton() {
             const selector = 'new UiSelector().text("Drops").className("android.widget.TextView")';
             return $(`android=${selector}`);
             }

  searchItem(item) {
            const selector = 'new UiSelector().text("'+item+'").className("android.widget.TextView")';
             return $(`android=${selector}`);
             }


}
module.exports = new LandingPage();
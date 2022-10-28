class ItemPurchasePage {

  get getBuyFractionsButton() {
       const selector = 'new UiSelector().text("Buy fraction").className("android.widget.TextView")';
       return $(`android=${selector}`);
       }
  setBuyFractionsValue(item) {
         const selector = 'new UiSelector().text("'+item+'").className("android.widget.TextView")';
         return $(`android=${selector}`);
         }

  get getTermsAndConditionsCheckbox(){
         return $(".android.widget.CheckBox");
         }
  get getEnterCardNumber() {

           return $("//android.widget.EditText[1]");
           }
  get getEnterCardDate() {

             return $("//android.widget.EditText[2]");
             }
  get getEnterCardCvv() {

             return $("//android.widget.EditText[3]");
             }
  get getEnterPostelCode() {

               return $("//android.view.View[4]/android.widget.EditText");
               }

  get getEnterCheckboxBelowPostelCode() {

                 return $(".android.widget.CheckBox");
                 }


  get getBuyFractionsButtonNext() {

            return $("//android.view.ViewGroup[2]/android.widget.Button/android.widget.TextView");
            }
  get getErrorMessage() {

             return $("//*[@resource-id='com.timeless.investments.app:id/message']");
              }


   get getPriceButton() {
         const selector = 'new UiSelector().text("Pay €105.00").className("android.view.View")';
         return $(`android=${selector}`);
         }


}


module.exports = new ItemPurchasePage();
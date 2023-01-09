# FirebaseCloudService

Firebase Cloud Messagging ile bildirim gönderme uygulaması.

Postman ile gönderim yapmak için;

1) POST'u seçiniz.
2) URL kısmına https://fcm.googleapis.com/fcm/send URL'ini giriniz.
3) Add Headers dedikten sonra Authorization: key=<server_key> ve Content-Type: application/json olarak giriniz.
4) Server_key öğrenmek için Firebase Console'dan project settings kısmına geldikten sonra Cloud Messagging sekmesini seçin.
5) Son olarak postman uygulamasında body kısmına gelin, raw olarak seçim yapın, JSON'u seçin ve aşağıdaki kodu ilgili bölüme yapıştırın.

{
 "to" : "YOUR_FCM_TOKEN_WILL_BE_HERE",
 "collapse_key" : "type_a",
 "notification" : {
     "body" : "Body of Your Notification",
     "title": "Title of Your Notification"
 },
 "data" : {
     "body" : "Body of Your Notification in Data",
     "title": "Title of Your Notification in Title",
     "key_1" : "Value for key_1",
     "key_2" : "Value for key_2"
 }
}

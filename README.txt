Бөх Таавар Pro v4.0 FIREBASE REALTIME

Энэ хувилбар Firebase Realtime Database-тэй холбогдсон.
GitHub дээр бүх файлыг үндсэн хавтас руу upload хийнэ:
- index.html
- app.js
- style.css
- manifest.json
- sw.js
- README.txt

Админ PIN: 1234

Шинэчлэлт:
- localStorage-only биш болсон.
- Firebase Realtime Database URL ашиглаж сервер дээр state хадгална.
- users, events, wrestlers, predictions, results бүгд Firebase дээр нэг state болж хадгалагдана.
- Нэг хүн админ дээр үр дүн оруулахад бусад хэрэглэгч refresh/polling-оор ижил мэдээлэл харна.
- localStorage зөвхөн тухайн төхөөрөмжийн currentUser болон backup cache-д ашиглагдана.

Firebase:
- Database URL: https://boh-taavar-pro-default-rtdb.firebaseio.com/state.json
- Realtime Database Rules нь одоогоор test mode дээр байх ёстой.

Анхаарах:
- Энэ нь бодит мөнгөний бооцоо биш. Оноотой тааврын PWA prototype.
- Test mode rules 30 хоногийн дараа хаагдана. V4.1 дээр аюулгүй rules + admin хамгаалалт нэмнэ.

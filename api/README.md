# Stripe Checkout Flow.

หากใช้ Stripe Element หรือใช้ component สำเร็จรูปของ Stripe ้ในหน้าเว็บไซต์ของตัวเอง

Stripe ต้องการข้อมูลหนึ่งอย่าง ก็คือ [client secret](https://docs.stripe.com/api/checkout/sessions/object#checkout_session_object-client_secret)
ซึ่งสามารถได้รับมาจากการสร้าง checkout session เพื่อนำไป render ใน component ของตัวเขาเอง

ซึ่ง การจะสร้าง Checkout session ได้ จะต้องสร้าง Product และ price ก่อน เพื่อเป็นการกำหนดให้แก่ Stripe ว่าลูกค้าอยากจะซื้อสินค้าอะไรบ้าง

ใน branch นี้ จะ เป็นการ สร้าง product และ price ก่อนที่จะ ทำการสร้าง checkout session ครับ

##### ERD

[หากต้องการดูรูปแบบการเก็บข้อมูลของ database คลิกเพื่อดู ER diagram หรือ schema ประกอบกับ code นะครับ](ERD.md)

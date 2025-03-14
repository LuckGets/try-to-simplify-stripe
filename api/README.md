# Stripe Checkout Flow.

หากใช้ Stripe Element หรือใช้ component สำเร็จรูปของ Stripe ในหน้าเว็บไซต์ของตัวเอง

Stripe ต้องการข้อมูลหนึ่งอย่าง ก็คือ [client secret](https://docs.stripe.com/api/checkout/sessions/object#checkout_session_object-client_secret)
ซึ่งสามารถได้รับมาจากการสร้าง payment intent หรือ ความต้องการซือของลูกค้า และนำ client secret ไป render ใน component ของตัว Stripe ใน Front end

ซึ่ง การจะสร้าง Payment intent ได้ จะต้องเตรียม validate Product และ price ก่อน เพื่อเป็นการกำหนดราคาที่ลูกค้าต้องการจะซื้อให้แก่ Stripe

branch นี้ จะ เป็นการเตรียม product และราคารวม ก่อนที่จะทำการสร้าง payment intent ครับ

##### ERD

[หากต้องการดูรูปแบบการเก็บข้อมูลของ database คลิกเพื่อดู ER diagram หรือ schema ประกอบกับ code นะครับ](ERD.md)

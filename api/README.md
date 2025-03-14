# Stripe Checkout Flow.

หากใช้ Stripe Element หรือใช้ component สำเร็จรูปของ Stripe ้ในหน้าเว็บไซต์ของตัวเอง

Stripe ต้องการข้อมูลหนึ่งอย่าง ก็คือ [client secret](https://docs.stripe.com/api/checkout/sessions/object#checkout_session_object-client_secret)
ซึ่งสามารถได้รับมาจากการสร้าง checkout session เพื่อนำไป render ใน component ของตัวเขาเอง

ซึ่ง การจะสร้าง Checkout session ได้ จะต้องสร้าง Product และ price ก่อน เพื่อเป็นการกำหนดให้แก่ Stripe ว่าลูกค้าอยากจะซื้อสินค้าอะไรบ้าง

หลังจากที่เราสร้าง product และ price ใน [backend-setting-stripe-create-product branch](https://github.com/LuckGets/try-to-simplify-stripe/tree/backend-setting-stripe-create-product/api) ซึ่งอาจจะจากการ retrieve มาจาก stripe หรือส่งผ่าน property ตรงๆใน line item

เราจะนำข้อมูลของสินค้าส่งเป็น request ไปหา stripe เพื่อสร้าง checkout session และจะนำ checkout session client secret ส่งกลับไปหา website หรือ front-end part ของเราเพื่อให้ Stripe element ของเราสามารถ run ได้นะครับ

##### ERD

[หากต้องการดูรูปแบบการเก็บข้อมูลของ database คลิกเพื่อดู ER diagram หรือ schema ประกอบกับ code นะครับ](ERD.md)


http://localhost:3001/dogs/

select * from "perros";

select idtemp,nombret,"updatedAt" from "temperamentos" order by idtemp desc limit 10;

select id,name, bred_for,breed_group, life_span, temperament, reference_image_id from cans order by id desc limit 5;

delete from cans;

--------------------
DROP TABLE IF EXISTS public.dogs, public.perros, public.temperamentos, public.temperaments;

-------

{
  "id": 5,
  "name": "Airedale Terrier",
  "bred_for": "Badger, otter hunting",
  "breed_group": "Terrier",
  "life_span": "10 - 13 years",
  "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
  "origin": "United Kingdom, England",
  "reference_image_id": "1-7cgoZSh",
  "updatedAt": "2023-05-25T06:17:12.375Z",
  "createdAt": "2023-05-25T06:17:12.375Z",
  "weight": {"imperial":"40 - 65","metric":"18 - 29"},
  "height": {"imperial":"21 - 23","metric":"53 - 58"}
}

Akita
Afghan Hound
Airedale Terrier
Wire Fox Terrier
Wirehaired Pointing Griffon
Wirehaired Vizsla
Xoloitzcuintli
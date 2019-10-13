---
Title: "Components"
Keywords: "components, modularize, app, fortjs, node"
Description: "Description about components of fortjs"
---

Components are most important part of fort application. It helps you to modularize your app.

There are three types of components - 

1. [Wall](/tutorial/wall)

2. [Shiled](/tutorial/shield)

3. [Guard](/tutorial/guard)

# Concept 

<br>
Imagine a real fort which has a big market and it allows people from outside to purchase and sell. They can go to any sections like KingHall, WeaponStorage, Market, SacredTemple for different types of services.

Now we might have situations, where - 

1. Some persons are not allowed to enter inside the fort.
2. Allowed inside the fort but not any particular section.Let's say Section WeaponStorage & SacredTemple. 
3. Allowed inside the fort and section but not to use partiular service inside the sections. Let's say SacredTemple section is very high privileged area and only priest & king/queen is allowed to worship there & people like KingHand are allowed to go to sacred temple but not allowed to worship.

<br>Components are in heirarchy order, where Wall is at top, Shield is in middle and Guard is at bottom. We can use this concept to solve above problems -   

1. In order to block person from entering into fort - we need to block them using **wall**.
2. Now person is allowed to enter inside the fort (passed from wall), but not allowed inside some particular section. To solve this problem we need to create a **shield** which will block them to entering inside the section. 
3. Now person is allowed to enter both wall, section but not to use particular services inside the section. We can place a **guard** to make sure, only authorized/authenticated people can access.

<br>We can also do some works inside the component and pass the result from one component to another.  



 
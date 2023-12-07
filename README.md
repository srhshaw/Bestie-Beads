# eCommerce-Site - Bestie Beads
<p align="center">
  <img src="./README_assets/Homepage.jpg" width="600" height="500" >
</p>
Every tween wants Bestie Beads!  And now with the launch of the Bestie Beads e-commerce website, making all of your beaded technicolor dreams come true is easier than ever! <br>
The Bestie Beads website is a full-stack e-commerce application that allows customers to view the Bestie Beads bracelet inventory, shop the products, and write product reviews through an engaging, user-friendly interface.

This repository has been created to support the proposal of a jewelry e-commerce website application.  The application backend will contain a database of inventory, customer reviews of pieces, and customer jewelry orders.  The frontend will provide an aesthetically pleasing user interface to learn about the business, browse jewelry offerings, place orders, and write merchandise reviews.    

## Entity-Relationship Diagram (ERD)

<a href = "https://app.diagrams.net/#G12sR5_SzVnqOBcclAwB9JxbeOC4ySpZbi">ERD</a><br><br>
![](README_assets/BestieBeadsERD.jpg)

## Wireframe
<a href = "https://app.diagrams.net/#G1THv-YbN8E5_gIDkXwBbu4hcFI-asPGP-">Wireframe</a><br><br>

<img src="./README_assets/JewelryWireframe1.jpg" width="300" height="375" > &ensp; <img src="./README_assets/JewelryWireframe2.jpg" width="300" height="375" > &ensp; <img src="./README_assets/JewelryWireframe3.jpg" width="300" height="375" > &ensp;

<img src="./README_assets/JewelryWireframe4.jpg" width="300" height="375" > &ensp; <img src="./README_assets/JewelryWireframe5.jpg" width="300" height="375" >

## Component Hierarchy Diagram
<a href = "https://app.diagrams.net/#G1YPYlsIeKmRvpO8ynm7FZgtV4EG-Rqylj">Component Hierarchy Diagram</a><br><br>
<img src="./README_assets/JewelryComponentHierarchy.jpg" width="600" height="600">

## Technologies
The Bestie Beads application is a full-stack application utilizing MongoDB, Express, React, and Node (MERN). Additional technologies used include Mongoose, Axios, and Bootstrap.  

## Getting Started
Project tasks were recorded and managed using the Trello project management tool.<br>
<a href = "https://trello.com/invite/b/BCP5JFM6/ATTI82ff533d2807444b5fbc662dae480da3C436F047/jewelry-e-commerce-app">Trello Project Management Board</a>

## Explore Bestie Beads
These are just some of the features of the Bestie Beads application.  <br>
The Bestie Beads app maintains a collection of product inventory records in MongoDB.  Bracelet information is retrieved from the backend via Axios API calls and rendered on cards with Bootstrap-based formatting. Click on a bracelet card to see more!

<img src="./README_assets/Piecelist.jpg" width="600" height="500" >

On the individual piece's page, the user can view details about the bracelet, add the style to their cart for purchase, or write a review for the product.  The user is assigned an ID kept in local storage.   The items added to the cart are saved in the user's local storage as well. Reviews are stored in the database.  Both reviews and cart products render dynamically by the awesome power of React hooks as changes are made.

<img src="./README_assets/Piecepage.jpg" width="600" height="500" >

On the user's My Activity page, they can view the orders they have created and the reviews they have written.  This data is fetched by the user's ID from the backend database and populated to the frontend components.  Here the user may edit their reviews by either updating or deleting them in the database.

<img src="./README_assets/MyActivity.jpg" width="600" height="500" >

Visit the site and explore more for yourself! 

## Future Updates
Look out for planned improvements to Bestie Beads including:
* Login/User profiles
* Star review ratings
* Payment system integration

## Contact Creator
**Shanda Shaw**<br>

<a href = "https://github.com/srhshaw">![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</a> &emsp;  <a href = "https://www.linkedin.com/in/shandashaw/">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a>

# veriti&trade; 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

Veriti™ is a MERN stack application that allows user to login securely with JWTAuth, explore charities from our curated MongoDB database and add/remove them from their own portfolio. Each portfolio has a user summary and option to download tax forms 1040sa and f8283 for easier filing as well as a Veriti Donation Summary downloadable file in xlsx format. This application was built with Apollo server and uses Express routing. 

## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)
6. [Technologies](#technologies)
7. [Future Development](#future-development)
8. [Contributing](#contributing)
9. [Tests](#tests)
10. [Questions](#questions)

## Usage
### User Story

```md
AS A person who values donating a portion of my finances
I WANT the ability to keep track of my donations
SO THAT I can explore and save new charities, donate to them and export donation data for tax filing
```

## Installation
To run this application locally: <br/>
_*this is for development purposes only_

1. Pull down and branch this repository
2. Run ```npm i``` to install all dependencies
3. Seed the database by running ```npm run seed```
4. Make sure to import your own Stripe and MongoDB keys
4. Run the front and back-end servers with ```npm run develop```

To use this app in production, visit: https://veriti-app.herokuapp.com/

<br/>

The following media shows the application's appearance and functionality: 



https://user-images.githubusercontent.com/107900180/208547170-24e93f2d-f24c-446e-8b6a-811f9942d36f.mp4


### How to Use

    1. Create an account
        A. When you first navigate to the home page, you will see a button that says "Start Donating Today" and one that says "Login". Both buttons will lead you to a login page, with a link to sign up if you do not already have an account.
        B. You will be asked to provide a username, your email address, and a password of your choosing.

    2. Login
        A. If you already have an account, simply click "Login" or "Start Donating Today" and enter your credentials.

    3. Explore
        A. Once logged in, you have access to an Explore page, where you will see dozens of 501c3 charities, along with tags to help identify which categories said charities belong to.
        B. You may filter the results based on category to more easily find the charity you're looking for.
        C. If you come across charities that interest you, you can Save them to your portfolio.
        D. You are also able to Donate to a charity directly from the Explore page.

    4. Portfolio
        A. Your Portfolio includes information specific to you. This will hold your saved charities, as well as your donation history.
        B. Your Portfolio will show you how much you have donated towards specific categories.
        C. You will also have access to a downloadable excel spreadsheet with your charities' important tax information, like donation amounts and ein numbers.
        D. You can download tax forms right from your giving Portfolio.
        E. You can also Unsave any saved charities so they will no longer appear on your Portfolio.

    5. Donation
        A. Once you select a charity and click Donate, you will be prompted to enter an amount.
        B. You will then be taken to a Stripe checkout page in which you will need to enter payment information.
        C. This donation informaion will be added to your Portfolio page as well as your downloadable spreadsheet!


## License 
This project is licensed under the MIT license.

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p />For more information visit [MIT Licensing](https://choosealicense.com/licenses/mit/).


## Technologies
* MongoDB
* ExpressJS
* React
* NodeJS
* Apollo
* GraphQL
* JWTAuth
* SheetJS
* Stripe
* Bcrypt
* Dotenv
* Flowbite
* Tailwind
* JavaScript


## Future Development
We would like to continue to add the following functionality to our application:
* Implement donate/save buttons in Recommendation
* Storing donation data in back-end
* Forgot password functionality
* Category questionnaire for user 


## Contributing
We'd love for you to contribute! In order to do so, visit [Veriti&trade;](https://github.com/veriti-app/veriti) and fork the repository. We currently require two (2) approvals by our QA team in order to merge to ```main```. <br/><br/> Take a look at our [Future Development](#future-development) section to see what we are looking to expand on (implemented features are denoted with a &check;).


## Tests
None

## Questions
Find us on Github via the individual links below:
* [Olivia Conley](https://github.com/oliviaconley)<br>
* [Indigo Fobes](https://github.com/IndigoFobes)<br>
* [Annie Nguyen](https://github.com/mnghinguyen)<br>
* [Vaishali Patel](https://github.com/VaishaliQA)<br>
* [Insha Sayani](https://github.com/isayani)

Or visit our app's repository on GitHub:
[Veriti&trade;](https://github.com/veriti-app/veriti)

---
© 2022 veriti&trade; (Olivia Conley, Indigo Fobes, Annie Nguyen, Vaishali Patel, Insha Sayani), Confidential and Proprietary. All Rights Reserved.

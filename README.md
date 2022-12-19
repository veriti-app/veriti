# veriti

## Description

Veriti™ is a MERN stack application that helps givers give responsibly. Donate to funds directly and create a Portfolio for your most liked charities, all while keeping track of your donation history. Next tax season, don't worry about donation calculations. Instead, use Veriti™ to file your charitable donations!

## User Story

```md
As a person who values donating a portion of my finances
I want the ability to keep track of my donations,
explore new charities, and
easily print out donation info for tax purposes.
```

#

## Table of Contents

- [Technology Used](#technology-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Images](#images)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [Licensing](#licensing)

#

<a name="technology-used"></a>

### Technology Used

This application was built using React for the front end, GraphQL for data queries, Node.js and Express for the server, and MongoDB and the Mongoose ODM for the database. For styling, we used Tailwindcss. For payment, we used Stripe. Other packages include flowbite, xlsx, and concurrently.

#

<a name="installation"></a>

### Installation

    1. Clone the respository onto your device via git.
    2. Make sure you have Node and npm installed and up to date.
    3. Run 'npm i' in the root directory to install all dependencies.
    4. TODO ******* How to deal with .env file ******

To run locally...

    5. Make sure you run 'npm run seed' to seed database.
    6. Run 'npm run build' to create a build directory of the app.
    7. Finally, run 'npm run develop', which will concurrently start the server and the react app.

#

<a name="how-to-use"></a>

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

#

<a name="images"></a>

### Images

#

<a name="future-development"></a>

### Future Development

    1. Home Page
        A.
    2. Login/Signup
        A.
    3. Explore
        A.
    4. Portfolio
        A.
    5. Donation
        A.
    6. Other
        A.

#

<a name="contributors"></a>

### Contributors

Insha Sayani

- [Github](https://github.com/isayani)

Annie Nguyễn

- [Github](https://github.com/mnghinguyen)

Olivia Conley

- [Github](https://github.com/oliviaconley)

Vaishali Patel

- [Github](https://github.com/VaishaliQA)

Indigo Fobes

- [Github](https://github.com/IndigoFobes)

#

<a name="licensing"></a>

### Licensing

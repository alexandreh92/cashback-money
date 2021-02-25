<h1 align="center">
    <img alt="lemoney" src="https://d1lct8wjakcxob.cloudfront.net/assets/logos/logo-lemoney-3325db2b10a510c8ef9d1d30aab4be08d985a74e59ddc5ad7e17d2b19a0bf08d.svg" width="224" height="48" />
    <br>
    <p><span style="color:#00f0a2">Cashback</span> Money</p>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/alexandreh92/cashback-money">

  <a href='https://coveralls.io/github/alexandreh92/cashback-money?branch=master'>
<img src='https://coveralls.io/repos/github/alexandreh92/cashback-money/badge.svg?branch=master' alt='Coverage Status' />
</a>

  <a href="https://codeclimate.com/github/alexandreh92/cashback-money">
    <img alt="Code Climate technical debt" src="https://img.shields.io/codeclimate/tech-debt/alexandreh92/cashback-money">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/alexandreh92/cashback-money">

  <img alt="GitHub" src="https://img.shields.io/github/license/alexandreh92/cashback-money">
</p>

<h3 align="center">
  Hi, this is the lemoney Ruby on Rails challenge app. This app should list some Offers to Users and redirects them to advertisor's site.
</h3>

<p align="center">This project is a monolith with a RoRs API in backend and ReactJS in frontend.</p>

<br/>

<p align="center">
  <a href="https://cashback-money-challenge.herokuapp.com" target="_blank">
    <img alt="Demo on Heroku" src="https://res.cloudinary.com/practicaldev/image/fetch/s--lPYRHjTu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yhsx4dce2f7l0iiufibi.jpg" width="150">
  </a>
</p>

---

## Prerequisites

Have the following features with their respective versions installed on the machine:

- Node `12.x+` - You can use [NVM](https://github.com/nvm-sh/nvm)
- Ruby `2.6.6` - You can use [RVM](http://rvm.io)
- PostgreSQL 12
  - OSX - `$ brew install postgresql` or install [Postgress.app](http://postgresapp.com/)
  - Linux - `$ sudo apt-get install postgresql`
  - Windows - [PostgreSQL for Windows](http://www.postgresql.org/download/windows/)
- Bundler `1.17.3`

## Setup the project

After you get all the [prerequisites](#prerequisites), simply execute the following commands in sequence:

```bash
1. Install the dependencies above
2. $ git clone  # Clone the project
3. $ cd cashback-money # Go into the project folder
4. $ gem install bundler # Bundler install
5. $ bundle install # Install ruby dependencies
7. $ yarn install # Install JS dependencies
8. $ rake db:create # Creates db
9. $ rake db:migrate # Migrates db
10. $ rake db:seed # Seed db
11. $ rake start # Bootstraps monolith
12. $ rspec spec # Run the specs to see if everything is working fine
```

## Feature improvements for next releases

- Add websockets/frontend loader state/blank states
- Add webhook to Advertisors can send an Order to cashback users

---

Thanks for the opportunity, this was made with ♥&nbsp;by alexandreh92 :wave:&nbsp; [Get in touch!](https://www.linkedin.com/in/alexandreh92/)

---
id: 69
title: Deploying to Heroku. Common Errors And How To Fix Them
date: 2016-01-16T21:51:17+00:00
author: Robert J. Richards
layout: post
guid: http://robertrichards.me/?p=69
permalink: /deploying-to-heroku-common-errors-and-how-to-fix-them/
categories:
  - Uncategorized
---
Mainly for Ubuntu linux but pretty similar to other oses

First off. If your app can&#8217;t be deployed, then maybe you are using the wrong database type. Remember Heroku uses Postgresql so you need to add it to the Gemfile like this<!--more-->

<pre class="lang:default decode:true " title="adds postgresql and adds it to production group at the same time">gem 'pg', '~&gt; 0.18.4', group: :production</pre>

Run

<pre class="lang:default decode:true">Bundle install</pre>

and commit changes with git and that should get it to build the app.

&nbsp;

Remember that you need to install Postgresql on your pc also you can do that by running the following

<pre class="lang:default decode:true ">sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main' &gt; /etc/apt/sources.list.d/pgdg.list"
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.3 libpq-dev</pre>

If you deploy to heroku and still can&#8217;t start your app or get an &#8220;application error&#8221; you can run

<pre class="lang:default decode:true">heroku run rails console</pre>

and that should give you the exact cause of the error (console won&#8217;t start but instead spits out an error)
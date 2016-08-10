---
id: 73
title: Custom font not working in heroku?
date: 2016-01-16T23:42:04+00:00
author: Robert J. Richards
layout: post
guid: http://robertrichards.me/?p=73
permalink: /custom-font-not-working-in-heroku/
categories:
  - Programming (Rails)
---
This could be down to several issues; most notably, I would recommend you&#8217;re not using dynamic asset paths:

Fingerprinting

<!--more-->

Rails uses asset fingerprinting when you precompile assets

The reason for this is to allow each asset to be individually allocated to the system, thus providing a more robust structure (or something). Basically, it adds an MD5 hash to the end of your asset filenames:

<pre class="lang:default decode:true">global-908e25f4bf641868d8683022a5b62f54.css</pre>

Paths

Because dynamic fingerprinting makes all precompiled assets have different names, you need to use Rails&#8217; dynamic path helpers:

<pre class="lang:default decode:true " title="#app/assets/stylesheets/application.css.scss">@font-face {
   font-family: 'caviar_dreamsregular';
   src: asset-url('caviardreams-webfont.eot');
   src: asset-url('caviardreams-webfont.eot?#iefix') format('embedded-opentype'),
        asset-url('caviardreams-webfont.woff') format('woff'),
        asset-url('caviardreams-webfont.ttf') format('truetype'),
        asset-url('caviardreams-webfont.svg#caviar_dreamsregular') format('svg');
   font-weight: normal;
   font-style: normal;
}</pre>

&nbsp;

You&#8217;ll need to use a dynamic stylesheet engine such as SASS to handle the dynamic paths
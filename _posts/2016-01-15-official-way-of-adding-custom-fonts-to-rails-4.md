---
id: 58
title: Official way of adding custom fonts to Rails 4
date: 2016-01-15T05:22:03+00:00
author: Robert J. Richards
layout: post
guid: http://robertrichards.me/?p=58
permalink: /official-way-of-adding-custom-fonts-to-rails-4/
categories:
  - Uncategorized
---
Firstly to use custom fonts in your app you need to download font files, you can try [Firstly to use custom fonts in your app you need to download font files, you can try](http://www.1001freefonts.com/) or <http://www.piccsy.com/everything-design/> and look for fonts. Few of the most popular font file formats are mainly .otf (Open Type Format) .ttf(True Type Format) .woff(Web Open Font Format)

You can move the downloaded fonts to your app folder under app/assets/fonts/

After downloading the file you need to need to &#8220;declare&#8221; the fonts you will be using in your css like this

<!--more-->

<pre class="lang:default decode:true ">@font-face {
font-family: "Kaushan Script Regular";
src: url(/assets/KaushanScript-Regular.otf) format("truetype");
}
</pre>

Finally you can use the font-family that you just declared where-ever you want like dis

<pre class="lang:default decode:true ">#e-registration {
font-family: "Kaushan Script Regular";
}
</pre>

&nbsp;
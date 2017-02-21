<template lang="pug">
  .container.content
    main.links-bold
      p
        a(href='/blog/tags/') List by Tags
      .posts
        h2#y2017 2017
        ul
          li
            small Feb 01 
            a(href='/2017/02/vuejs-syntax-highlighting-with-highlightjs/') Vue.js Syntax Highlighting with highlight.js
          li
            small Jan 12 
            a(href='/2017/01/how-to-install-nodejs-7-on-ubuntu-and-centos/') How to install NodeJS 7.x on Ubuntu/Debian and CentOS
          li
            small Jan 12 
            a(href='/2017/01/how-to-install-nodejs-6-lts-on-ubuntu-and-centos/') How to install NodeJS 6.x Long-Term Support (LTS) on Ubuntu/Debian and CentOS
          li
            small Jan 06 
            a(href='/2017/01/custom-errors-in-typescript-2.1/') Custom Errors in TypeScript 2.1
          li
            small Jan 03 
            a(href='/2017/01/great-talks-and-presentations-at-33c3/') Great Talks and Presentations at 33C3
        h2#y2016 2016
        ul
          li
            small Dec 27 
            a(href='/2016/12/peter-norvigs-python-utilities-advent-of-code/') Python Utilities by Peter Norvig
          li
            small Apr 11 
            a(href='/2016/04/python-threadpool/') Python Thread Pool
          li
            small Mar 24 
            a(href='/2016/03/how-to-install-qt56-pyqt5-virtualenv-python3/')
              | How to install Qt 5.6 and PyQt5 in a Python 3.4 virtual environment on Mac OS X and Linux
          li
            small Mar 19 
            a(href='/2016/03/find-broken-hyperlinks-in-a-pdf-document-with-pdfx/') Find broken hyperlinks in a PDF document with PDFx
          li
            small Mar 08 
            a(href='/2016/03/free-transactional-email-services-the-best-alternatives-to-mandrill/') Free Transactional Email Services - The Best Alternatives to Mandrill & Co.
          li
            small Feb 21 
            a(href='/2016/02/how-to-optimize-wordpress-performance-with-nginx-and-wp-super-cache/') How to Optimize Wordpress Performance with nginx and WP Super Cache
        h2#y2015 2015
        ul
          li
            small Dec 14 
            a(href='/2015/12/comparison-of-10-acme-lets-encrypt-clients/') Comparison of 10 ACME / Let's Encrypt Clients
          li
            small Nov 28 
            a(href='/2015/11/create-standalone-mac-os-x-applications-with-python-and-py2app/') Creating standalone Mac OS X applications with Python and py2app
          li
            small Nov 23 
            a(href='/2015/11/python-tools-for-string-unicode-encoding-decoding-printing/') Python Helpers for String/Unicode Encoding, Decoding and Printing
          li
            small Nov 22 
            a(href='/2015/11/machine-learning-on-amazon-aws-gpu-instances/') Machine Learning on Amazon AWS GPU Instances
          li
            small Nov 13 
            a(href='/2015/11/david-beazley-python-concurrency-from-the-ground-up-live-pycon-2015/') David Beazley - Python Concurrency From the Ground Up (LIVE @PyCon 2015)
          li
            small Oct 30 
            a(href='/2015/10/how-to-install-nodejs-5-on-centos-and-ubuntu/') How to install NodeJS 5.x on CentOS and Ubuntu/Debian
          li
            small Oct 26 
            a(href='/2015/10/pdfx-extract-metadata-and-download-references-from-pdfs/')
              | PDFx v1.0 - Extract metadata and URLs from PDFs, and download all referenced PDFs
          li
            small Oct 22 
            a(href='/2015/10/how-to-install-nodejs-4-on-centos/') How to install NodeJS 4.x (LTS) on CentOS
          li
            small Oct 12 
            a(href='/2015/10/retrofit-2-samples/') Retrofit 2.0 Samples
        h2#y2011 2011
        ul
          li
            small Dec 21 
            a(href='/2011/12/yet-another-dmca-takedown/') Yet Another DMCA Takedown
          li
            small Aug 12 
            a(href='/2011/08/app-engine-boilerplate-2-0-using-html5-boilerplate-v2-on-google-app-engine/') App Engine Boilerplate 2.0 – Using html5-boilerplate v2 on Google App Engine
          li
            small Apr 05 
            a(href='/2011/04/app-engine-boilerplate/') App Engine Boilerplate
          li
            small Mar 07 
            a(href='/2011/03/how-to-get-4-to-5-stars-in-the-android-market-appirater-for-android/') How to get 4 to 5 stars in the Android market (Appirater for Android)
          li
            small Jan 29 
            a(href='/2011/01/scaling-python-servers-with-worker-processes-and-socket-duplication/') Scaling Python Servers with Worker Processes and Socket Duplication
        h2#y2010 2010
        ul
          li
            small Dec 27 
            a(href='/2010/12/unicode-overview/') Unicode and UTF Overview
          li
            small Dec 20 
            a(href='/2010/12/advice-for-android-developers-prepare-for-app-acquisition/') Advice for Android Developers: Prepare for App Acquisition
          li
            small Dec 11 
            a(href='/2010/12/useful-linux-command-of-the-day-compgen/') Useful Linux Command of the Day - compgen
          li
            small Dec 06 
            a(href='/2010/12/how-to-setup-android-2-3-gingerbread-in-eclipse-including-the-galaxy-tab-sdk/') How to Setup Android 2.3 (Gingerbread) in Eclipse, including the Galaxy Tab SDK
          li
            small Oct 13 
            a(href='/2010/10/python-threads-and-the-global-interpreter-lock-gil/') Python, Threads and the Global Interpreter Lock (GIL)
          li
            small Oct 13 
            a(href='/2010/10/history-of-what-cds-bittorrent-tracker-software/') History of What.CD’s Bittorrent Tracker Software
    .swirl
      center
        img(src='/images/swirl1.png', alt='swirl', height='40px')
    footer.footer
      .footer-icons
        a(href='https://twitter.com/metachris', title='Twitter @metachris', target='_blank', rel='nofollow')
          i.fa.fa-twitter.fa-2x
        a(href='https://github.com/metachris', title='Github', target='_blank', rel='nofollow')
          i.fa.fa-github.fa-2x
        a(href='/atom.xml', title='RSS Feed', target='_blank', rel='nofollow')
          i.fa.fa-rss.fa-2x
      small
        | ©
        time(datetime='2017-02-01T21:51:32+01:00') 2017
        |  Chris Hager
        br
        small
          a(rel='nofollow', target='_blank', href='//creativecommons.org/licenses/by-nc-sa/3.0/') CC BY-NC-SA 3.0
</template>

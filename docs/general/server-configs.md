# Server Configurations

## Apache

This boilerplate includes a `.htaccess` file that does two things:

1. Redirect all traffic to HTTPS because ServiceWorker only works for encrypted traffic.

2. Rewrite all pages (e.g. `yourdomain.com/subpage`) to `yourdomain.com/index.html` to let `react-router` take care of presenting the correct page.

## Nginx

Also it includes a `.nginx.conf` file that does the same on Nginx server.

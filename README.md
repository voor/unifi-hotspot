# unifi-hotspot

[![Dependency Status](https://david-dm.org/voor/unifi-hotspot.svg)](https://david-dm.org/voor/unifi-hotspot)
[![Code Climate](https://codeclimate.com/github/voor/unifi-hotspot/badges/gpa.svg)](https://codeclimate.com/github/voor/unifi-hotspot)

The purpose of this repo is to provide a basic, barebones Node.js based external portal server for authorising Wi-Fi guests on Unifi products.
Currently tested with Unifi controller version 5.6.30

## Getting Started

### Docker

To get started with docker you can use the command below as reference. The application runs on port `3000` so which ever port you choose needs to be redirected to `3000`. You also need to provide a `username`, `password`, `uri` including protocol and port, and `sitename` of the Unifi server (this is most likely `default`).

```bash
docker run -d \
-p 8080:3000 \
-e USERNAME=ubnt \
-e PASSWORD=password \
-e URI=https://192.168.75.134:8443 \
-e SITENAME=default \
-e SECRET=secretString
woodjme/unifi-hotspot
```

Once started navigate to `http://localhost:8080/guest/s/default/` to test splash page.

You then need to configure the unifi portal to look at this container. To do this go to the `Unifi Control panel` -> `Guest Control` -> `Enable Guest Control` -> `External Portal Server` -> Add the `ip address` or `DNS name` of your container host.

# Description
This project began as a way to explore the availability of information of a user on a website.
I was hoping to find shocking amounts of personal data, but any easily available data like that
is quickly patched out of modern browsers. What I did find was the many many many various metadata
that represents a users browser and device configuration. This can be compiled and used as
a (maybe) unique identifier for a user on a given device. We can refer to this as a broswer fingerprint.

This can potentially be used to solve out own problem of generating multiple XIDs for a user.
When visiting multiple sites within our list of IPs you can see that mulitple XIDs are generated,
which is a problem since it is the same user, same device, and we should be able to do better.

This method is not without faults. If one person uses a computer to browse, then another comes and uses
the computer to browser, we can't distinguish between the users, but neither could conventional
user accounts. Additionally I'd wager the standard use case is 99% one user on one device, at least 
within a given timeframe. Additionally, if a user has the exact (exact) same browser and device
configuration, they would likely generate the same fingerprint. However, since this technique 
adds in IP address the chances of this would be heavily reduced. I am pretty sure that even if 2 people
leave the apple store with two identical macbooks and both open safari and begin browsing our sites, 
we should still be able to generate 2 unique IDs. Once those users update their Safari with their
own choices of plugins or extensions, we would lose the ID, but at least within a single
browsing session, across multiple sites, we can ensure we have the same ID for a user.

In the case we want to track a user for longer periods of time, we could use this technique
and generate an xid for the user that is mapped to the fingerprint (id-graph?). Inside the cookies
for our sites we can set the xid, so we would first opt for the xid set in the cookie, if none found,
then we use fingerprint to go get one. We would have a service that return xid for a fingerprint. This mapping
may be fine to set and forget, but because some browsers could potentially have the same fingerprint,
especially overtime, we should probably expire the finger-xid mapping after sometime
(a day? a week? a month?) in order to help eliminate new user mapping to old, unused xids.


## DEMO
Link to Demo: https://entimaniac.github.io/what-do-things-know-about-me/

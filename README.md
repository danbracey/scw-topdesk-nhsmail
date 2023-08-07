
![SCW Logo](https://i.imgur.com/02JO889.png)


# TOPDesk NHSMail Helper

This project aims to reduce the loading time by eliminating the need to search for known NHSmail User Accounts by navigating to the page directly on saved TOPDesk Cards.




## The Challenge

TOPDesk uses randomised IDs to handle it's page elements, prevent direct manipulation of elements in the DOM. Further to this, most elements are contained within iFrames. This project works by looping through each iframe, and checks which have input fields present. Within those, a RegEx string is used to find any valid NHSnet email address (@nhs.net). If this is found, an NHSMail logo is inserted next to the input box, with a direct link to the Admin page for that users' mailbox.


## Authors

- [Dan Bracey](https://www.github.com/danbracey)

